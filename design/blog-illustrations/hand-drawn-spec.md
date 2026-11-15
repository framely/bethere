# BeThere hand-drawn editorial illustration specification

Status: the user approved the specialists pilot and requested the full article
and homepage series. Eight article covers and three homepage illustrations now
use this direction and are referenced by the actual site pages. The previous
geometric candidates remain available for historical comparison.

## Reference and intent

The user supplied the lead illustration in this [VentureBeat article](https://venturebeat.com/orchestration/paypal-says-its-ai-assistant-went-from-43-to-95-accuracy-without-changing-the-model).
Use its general drawing language as a reference: irregular ink outlines, muted
watercolor-like color, paper texture, expressive characters, and an engaging
working scene. Create original characters, settings, compositions, and stories
for BeThere's articles. The external reference is not a production asset.

## Core direction

Draw a small story about useful work. People, tools, and specialist agents have
clear roles and interact within a believable business setting. Each cover should
have a visible action or tension that expresses its article's argument.

### Line and texture

- Confident hand-drawn contours with slight irregularity and variable weight.
- Restrained hatching, imperfect washes, and fine printed-paper grain.
- Flat, diffuse lighting and small drawn shadows. Use ink for definition rather
  than sculpted bevels or glossy highlights.
- Keep edge detail purposeful. Faces, gestures, and major props must remain
  intelligible when reduced; avoid dense scratches and decorative microdetail.

### Palette

Use dusty blue and teal as recurring colors, warm ivory and pale sage for the
setting, charcoal/navy ink, and restrained rust or coral accents. Colors should
feel softened by ink and paper. Exact pixels may vary naturally with the washes.
Maintain a family resemblance while varying the dominant color by subject.

### Characters and storytelling

- Give every character a job, goal, and functional pose.
- Human expressions and gestures anchor the business context.
- Specialist robots may appear when they clarify the concept. Use different
  silhouettes, modest expressions, and practical tools; avoid a repeated robot
  mascot or a row of generic identical characters across the series.
- A working object can be a protagonist for more technical articles. Do not
  force people and robots into every image.
- Convey each article's main relationship through action, rather than labels.
- Limit a scene to approximately three to five major groups and one focal action.

### Setting and background

This direction uses a continuous illustrated setting on an opaque paper-colored
background. It supersedes the earlier requirement for transparent cutouts for
these new candidates. Backgrounds are part of the authored image and remain
the same in light and dark mode; do not invert or recolor the artwork with CSS.

Give the setting useful context: a reception desk, reservation book, workbench,
or practical wall fittings. Keep backgrounds quieter than the subjects. Avoid
copying the external reference's laboratory, scientist, conveyor, or robot designs.

The site checks now validate the complete opaque scenes used by the actual
article and homepage references. Blog cards display the full landscape artwork
without the former cutout padding. This replaces the old transparent-cover
expectations in response to the explicitly approved visual direction.

### Format and composition

- PNG, landscape 16:9 target, at least 1000 pixels wide.
- One coherent scene, with a clear foreground and a quieter supporting setting.
- Important faces, hands, and actions stay inset from the canvas edges.
- Compose for the 256 x 160 desktop card as well as larger viewing.
- No embedded titles, words, letters, numerals, logos, or watermark. Represent
  documents with broad abstract marks or blank fields, not illegible fake text.
- Keep article titles and accessible descriptions in HTML.

## Article story briefs

| Article | Story and visual action |
| --- | --- |
| Interaction Closure | At a service desk, a customer changes an earlier request while the specialist updates the same shared job record and checks its requirements. Varied conversational order stays governed by consistent business rules. |
| AI specialists | A business owner coordinates three distinct specialists at adjacent bounded workstations: scheduling, customer communication, and repair work. Each owns the tools and authority for its job. This is the first style pilot. |
| Prompt determinism | On one side of a workbench, a loosely drawn request produces several different interpretations; nearby, a precise jig or template creates matching results. Depict the difference through useful work and physical outcomes. |
| Reservation CUI design | A restaurant host and guest clarify a booking over a reservation book; a changed time is visibly reconsidered while the guest count remains the same. Warm hospitality and a clear shared agreement. |
| Reuse a reservation module | A builder fits an intact, ready-made reservation capability into a working service counter, connecting it to the business's reservation ledger. Existing capability is integrated rather than constructed from scratch. |
| Build a reservation module | At a workbench, a builder carefully assembles time, capacity, and confirmation components into a reservation mechanism. Components have explicit matching roles and are not interchangeable decoration. |
| Schema to snippets | A service designer uses one structured service blueprint to stage two distinct conversational situations. The cases visibly share the same underlying service requirements. |
| Chatbot development | A cutaway of one small service business shows conversation at reception, interaction handling in the middle, and connected backend services beneath. All three layers visibly contribute to one customer task. |

## Pilot and review

Pilot file: `samples/ai-specialists-hand-drawn-v1.png`.
Generation: built-in image generator, with the user-supplied image as a style
reference. [Exact prompt](hand-drawn-pilot-prompt.txt).

Check the scene for four readable main characters, a clear coordinating gesture,
different specialist jobs, believable hands, strong silhouettes, warm muted
colors, expressive ink drawing, and a quieter background. Assess the authored
character of the result before using it as the next full-series reference.

The approved pilot is reused as the production specialists-article cover. All
other covers were generated individually using that pilot as a style reference.

## Initial pilot assessment

The result depicts the four intended main characters and three separate jobs.
The business owner's ticket handoff provides the focal action. Irregular ink,
muted washes, scuffed surfaces, and distinct character postures establish the
requested narrative direction. Shelves and plants make the backdrop busier than
necessary; simplify those details if the image loses clarity at card size.

The image has a continuous pale-sage scene background, intentionally following
this new specification rather than the former transparent-cutout specification.
The prior alpha-only test expectations were replaced for this intentional style
change. [Pilot file validation](hand-drawn-validation.json).

## Homepage story briefs

| Section | Story |
| --- | --- |
| Customize AI Specialists | The owner answers guided questions while a specialist turns business details into an explicit checklist and rules. |
| Configure Coordinator | A central dispatcher routes telephone and message requests to booking and service specialists, each with its own job. |
| Deploy and Operate | The owner oversees practice alongside live customer service and accepts a handoff when a person needs to take over. |

## Production series

- [Gallery of all eleven illustrations](hand-drawn-gallery.html)
- [Exact prompts and production output paths](hand-drawn-series-prompts.json)
- [Production file validation](hand-drawn-series-validation.json)

Original PNGs remain at their documented public paths. Older site assets are
retained but no longer referenced by the homepage or article index. The revised
test expectations specifically require eight distinct article covers, three
distinct homepage illustrations, decodable RGB/RGBA PNGs, a landscape ratio near
16:9, and an opaque illustrated scene where an alpha channel is present.
