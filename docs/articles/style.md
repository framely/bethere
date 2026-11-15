# Article and homepage illustration style

The production direction is **hand-drawn editorial storytelling**. It was
selected after the user reviewed the specialists pilot and supplied a narrative
ink-and-watercolor reference.

Use confident irregular ink outlines, muted blue/teal/ivory/sage washes, fine
paper grain, warm business settings, expressive characters, and one purposeful
action per scene. Each illustration should communicate its article or homepage
step through a distinct story. Keep readable silhouettes and inset important
faces, hands, and gestures.

The artwork is a complete opaque landscape scene, not a transparent cutout.
This intentionally supersedes the earlier geometric/3D and alpha-only cover
specification. Preserve the image's paper-colored setting in both site themes;
do not invert or recolor it with CSS. Avoid embedded text, labels, numerals,
logos, watermarks, glossy 3D, and busy decorative backgrounds.

The eight covers are wired through `docs/articles/index.md`; the three homepage
illustrations are wired through `docs/index.md`. Production assets have versioned
`-hand-drawn.png` names. Blog cards show the whole landscape image without the
former 8px cutout padding. Images use intrinsic dimensions and lazy loading.

Detailed specification, story briefs, exact prompts, reference roles, generated
asset paths, and the review gallery live under `design/blog-illustrations/`:

- `hand-drawn-spec.md`: current art direction and story briefs.
- `hand-drawn-series-prompts.json`: exact prompts and production paths.
- `hand-drawn-gallery.html`: all eight article and three homepage images.
- `hand-drawn-series-validation.json`: file metadata and integrity checks.

Generate one asset per built-in image-generator call, using the approved
specialists illustration as the style reference. Save new variants separately
and update references deliberately. Preserve instructional screenshots, precise
technical diagrams, and article text.

Validate decoded PNG dimensions and the complete opaque scene. Check actual
card presentation in light/dark mode and desktop/mobile when browser inspection
is available. Run `npm test` and `npm run build` after integration. This guide is
excluded from the public website.
