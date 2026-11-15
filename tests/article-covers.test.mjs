import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { inflateSync } from 'node:zlib'
import test from 'node:test'

// Decode the 8-bit RGB/RGBA illustrations without adding an image dependency.
// The approved hand-drawn series uses continuous, opaque illustrated settings.
function readImage(png) {
  assert.equal(png.subarray(0, 8).toString('hex'), '89504e470d0a1a0a')
  const width = png.readUInt32BE(16)
  const height = png.readUInt32BE(20)
  assert.equal(png[24], 8, 'Expected 8-bit channels')
  assert.ok([2, 6].includes(png[25]), 'Expected RGB or RGBA PNG')
  const channels = png[25] === 6 ? 4 : 3
  assert.equal(png[28], 0, 'Expected non-interlaced PNG')
  const chunks = []
  for (let offset = 8; offset < png.length;) {
    const length = png.readUInt32BE(offset)
    if (png.toString('ascii', offset + 4, offset + 8) === 'IDAT') {
      chunks.push(png.subarray(offset + 8, offset + 8 + length))
    }
    offset += length + 12
  }
  const raw = inflateSync(Buffer.concat(chunks))
  const stride = width * channels
  assert.equal(raw.length, (stride + 1) * height)
  const pixels = Buffer.alloc(stride * height)
  for (let y = 0; y < height; y++) {
    const filter = raw[y * (stride + 1)]
    assert.ok(filter <= 4, 'Unknown PNG filter')
    for (let x = 0; x < stride; x++) {
      const index = y * stride + x
      const left = x >= channels ? pixels[index - channels] : 0
      const up = y ? pixels[index - stride] : 0
      const corner = y && x >= channels ? pixels[index - stride - channels] : 0
      const p = left + up - corner
      const pa = Math.abs(p - left)
      const pb = Math.abs(p - up)
      const pc = Math.abs(p - corner)
      const paeth = pa <= pb && pa <= pc ? left : pb <= pc ? up : corner
      const predictor = [0, left, up, Math.floor((left + up) / 2), paeth][filter]
      pixels[index] = (raw[y * (stride + 1) + 1 + x] + predictor) & 255
    }
  }
  const alpha = channels === 4 ? pixels.filter((_, index) => index % 4 === 3) : undefined
  return { width, height, alpha }
}

const index = readFileSync(new URL('../docs/articles/index.md', import.meta.url), 'utf8')
const covers = [...index.matchAll(/image:\s*'[^']*\/images\/blog\/banner\/([^']+\.png)'/g)]
const home = readFileSync(new URL('../docs/index.md', import.meta.url), 'utf8')
const homeCovers = [...home.matchAll(/image:\s*\/images\/home\/([^\s]+\.png)/g)]

test('article index declares eight distinct covers', () => {
  assert.equal(covers.length, 8)
  assert.equal(new Set(covers.map(match => match[1])).size, 8)
  assert.ok(covers.every(([, filename]) => filename.endsWith('-hand-drawn.png')))
})

test('homepage displays three distinct hand-drawn illustrations', () => {
  assert.equal(homeCovers.length, 3)
  assert.equal(new Set(homeCovers.map(match => match[1])).size, 3)
  assert.ok(homeCovers.every(([, filename]) => filename.endsWith('-hand-drawn.png')))
})

const images = [
  ...covers.map(([, filename]) => 'blog/banner/' + filename),
  ...homeCovers.map(([, filename]) => 'home/' + filename),
]

for (const filename of images) {
  test(`${filename} is a complete landscape editorial scene`, () => {
    const png = readFileSync(new URL('../docs/public/images/' + filename, import.meta.url))
    const { width, height, alpha } = readImage(png)
    assert.ok(width > height && width >= 1000, 'Expected a landscape source image')
    assert.ok(Math.abs(width / height - 16 / 9) < 0.03, 'Expected the complete 16:9 scene')
    if (alpha) {
      assert.ok(alpha.every(value => value === 255), 'Expected a continuous opaque scene')
    }
  })
}
