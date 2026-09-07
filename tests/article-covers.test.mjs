import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { inflateSync } from 'node:zlib'
import test from 'node:test'

// Decode the current 8-bit RGBA assets without adding an image dependency.
// Checking the alpha channel's presence alone would accept an opaque PNG.
function readAlpha(png) {
  assert.equal(png.subarray(0, 8).toString('hex'), '89504e470d0a1a0a')
  const width = png.readUInt32BE(16)
  const height = png.readUInt32BE(20)
  assert.equal(png[24], 8, 'Expected 8-bit channels')
  assert.equal(png[25], 6, 'Expected RGBA PNG')
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
  const stride = width * 4
  assert.equal(raw.length, (stride + 1) * height)
  const pixels = Buffer.alloc(stride * height)
  for (let y = 0; y < height; y++) {
    const filter = raw[y * (stride + 1)]
    assert.ok(filter <= 4, 'Unknown PNG filter')
    for (let x = 0; x < stride; x++) {
      const index = y * stride + x
      const left = x >= 4 ? pixels[index - 4] : 0
      const up = y ? pixels[index - stride] : 0
      const corner = y && x >= 4 ? pixels[index - stride - 4] : 0
      const p = left + up - corner
      const pa = Math.abs(p - left)
      const pb = Math.abs(p - up)
      const pc = Math.abs(p - corner)
      const paeth = pa <= pb && pa <= pc ? left : pb <= pc ? up : corner
      const predictor = [0, left, up, Math.floor((left + up) / 2), paeth][filter]
      pixels[index] = (raw[y * (stride + 1) + 1 + x] + predictor) & 255
    }
  }
  const alpha = pixels.filter((_, index) => index % 4 === 3)
  return { width, height, alpha }
}

const index = readFileSync(new URL('../docs/articles/index.md', import.meta.url), 'utf8')
const covers = [...index.matchAll(/image:\s*'[^']*\/images\/blog\/banner\/([^']+\.png)'/g)]

test('article index declares eight distinct covers', () => {
  assert.equal(covers.length, 8)
  assert.equal(new Set(covers.map(match => match[1])).size, 8)
})

for (const [, filename] of covers) {
  test(`${filename} remains a theme-neutral transparent cover`, () => {
    const png = readFileSync(new URL('../docs/public/images/blog/banner/' + filename, import.meta.url))
    const { width, height, alpha } = readAlpha(png)
    assert.ok(width > height && width >= 1000, 'Expected a landscape source image')
    const transparent = alpha.filter(value => value === 0).length / alpha.length
    assert.ok(transparent > 0.1 && transparent < 0.95, 'Expected both artwork and empty space')
    for (const corner of [0, width - 1, (height - 1) * width, width * height - 1]) {
      assert.equal(alpha[corner], 0, 'Corner must be transparent, not a painted backdrop')
    }
  })
}
