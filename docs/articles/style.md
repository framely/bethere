# Article illustration style

## Purpose and scope

Give each article one clear visual idea that can be understood at thumbnail size. Covers introduce the subject; the article and its technical diagrams explain the details.

This guide applies to the eight editorial covers listed in [the article index](index.md). Reference documents under `reservation/` and instructional screenshots inside tutorials are outside the cover series. This is an internal production guide and is excluded from the built website.

## Shared visual language

- Simple matte paper-cut illustration with broad, softly rounded silhouettes.
- One visual metaphor and one to three principal objects or groups per cover.
- Nearly frontal compositions; a slight oblique angle is acceptable when layers are the subject.
- Subtle paper texture and small contact shadows. Avoid deep 3D scenes or dramatic lighting.
- Off-white background, navy structure, blue accents, and pale-blue surfaces.
- No embedded titles, words, letters, numbers, logos, robot faces, decorative sparkles, or intricate diagrams.
- Empty space is part of the composition. Keep all essential shapes away from the edges.
- Favor a large readable silhouette over small details. Related articles share a style but must have distinct silhouettes.

### Palette

| Role | Target color |
| --- | --- |
| Background | `#F7F8FA` |
| Structure / ink | `#20354F` |
| Accent | `#4679B9` |
| Light surfaces | `#DCE9F6` |

These are generation targets; rendered paper and shadows naturally vary. Do not introduce unrelated accent colors for individual articles.

## Format and integration

- Landscape composition, approximately 16:9. Current generated PNGs are 1672 x 941.
- Replace the existing PNG at `docs/public/images/blog/banner/<filename>.png` when refreshing a cover.
- Keep filenames stable so the article index and existing frontmatter references continue to work.
- The desktop article list displays a 256 x 160 center crop; mobile uses 16:9. Check both.
- Keep critical shapes inside the central 80% of the width and 85% of the height to allow cropping.
- Preserve opaque off-white backgrounds across the set, including when the site is in dark mode.
- The HTML supplies the article title and accessible alt text; keep text out of the image.
- Use lossless PNG optimization if available. Avoid increasing dimensions or adding decorative detail just to fill the canvas.
- Retain tutorial screenshots, code examples, and precise technical diagrams as factual documentation.

## Cover concepts

| Article | PNG filename | Single visual idea |
| --- | --- | --- |
| [Interaction Closure](interaction-closure.md) | `interaction-closure.png` | A soft speech bubble held inside a complete, stable frame: conversation within a business harness. |
| [AI specialists](why-ai-agents-should-be-specialists.md) | `ai-specialist-vs-omnipotent-agent.png` | Three separate compartments with one job each: bounded, independently maintainable specialists. |
| [Prompt determinism](prompt-engineer-not-deterministic.md) | `prompt.png` | One speech bubble with three diverging ribbons: varied interpretation of natural language. |
| [Reservation CUI design](reservation-cui-design.md) | `tutorial_reservation_cui.png` | A table for two and a speech bubble: the customer-facing reservation conversation. |
| [Reuse a reservation module](reuse-reservation-module.md) | `tutorial_reservation_chatbot.png` | A calendar component beside a socket in a speech bubble: adding an existing capability. |
| [Build a reservation module](build-reservation-module.md) | `tutorial_reservation_module.png` | A calendar assembled from interlocking panels: constructing the reusable component. |
| [Schema to snippets](from-schema-to-snippets.md) | `from-schema-to-snippets.png` | A structured card with two speech bubbles: service structure becomes conversational behavior. |
| [Chatbot development](chatbot-development-with-opencui.md) | `chatbot_development_with_opencui.png` | Three stacked layers topped by a speech bubble: composable chatbot architecture. |

For Interaction Closure, the frame represents completeness and governed interaction. Avoid finish flags or a lone success checkmark, which could imply that closure means ending the conversation.

## Generation recipe

The September 2026 set was generated with the built-in image generator. The Interaction Closure cover was generated first; the other seven used that cover as a **style reference only**. The concepts came from reading the articles, rather than copying their old cover compositions.

Use the following shared prompt verbatim, followed by `Subject: <article-specific brief>`. The exact briefs for this set are recorded below. The palette, materials, and simplicity constraints stay fixed; change the metaphor for each new article.

```text
Use case: stylized-concept.
Asset type: BeThere editorial article cover, landscape 16:9, intended to read clearly at 256 pixels wide.
Style/medium: extremely simple matte paper-cut editorial illustration, nearly flat frontal view, gently rounded shapes, restrained paper texture and tiny soft contact shadows only. Calm and precise, not a technical diagram.
Palette: warm off-white background #F7F8FA, dark ink navy #20354F, medium blue #4679B9, pale blue #DCE9F6. Only this palette, no rainbow colors.
Composition: one large readable visual metaphor centered, no more than three principal objects, generous 25 percent empty margins, uncluttered silhouette. No text, letters, numbers, logos, robots, faces, tiny details, decorative sparkles, sprawling arrows, UI screenshots, gradients or elaborate backgrounds. Full-bleed off-white canvas with no frame. The image communicates a single editorial idea, not the entire article.
```

For subsequent covers, attach `docs/public/images/blog/banner/interaction-closure.png` as the style reference and add this instruction before the subject:

```text
Input image: style reference ONLY. Match its paper-cut material, palette, bold shapes, and quiet background. Create a new composition for the following different subject. Do not copy its enclosing frame unless requested.
```

### Subject briefs used for this set

#### interaction-closure.png

Interaction Closure. A single large pale-blue speech bubble held securely inside a thick dark navy rounded-square frame, with just three simple smooth blue conversational strokes inside the bubble. The speech bubble retains its soft organic outline; the outer frame is stable, complete, and visibly protective. Metaphor: free conversation inside a complete business-defined interaction harness. Do not depict a finish flag, checkmark, funnel, or conversation ending. No additional objects.

#### ai-specialist-vs-omnipotent-agent.png

Three separate compact paper-cut compartments arranged as one neat horizontal toolkit. Each compartment holds exactly one large simple symbol: a calendar, an envelope, a small wrench. Matching navy boundaries isolate the three responsibilities, blue symbols on pale-blue inserts. Metaphor: each specialist owns one bounded job; no central omnipotent brain, robot, network or connecting arrows.

#### prompt.png

One pale-blue speech bubble above three short blue diverging paper ribbons with rounded tips. The three ribbons leave a common point below the speech bubble and gently fan apart, clearly visible and sparse. Metaphor: one natural-language prompt can lead to different interpretations. Just the bubble and the three ribbons as a single visual grouping. No question marks, exclamation marks, checkmarks, code, tangled wires or tiny dots.

#### tutorial_reservation_cui.png

One simple navy round dining table seen directly from above, with two small blue chair shapes opposite each other. A single pale-blue speech bubble floats just above the table, visibly separate. Metaphor: designing a conversation to reserve a table. Just the table, two chairs as one dining group, and one speech bubble. No plates, cutlery, room scenery, people, calendar, clock or extra symbols.

#### tutorial_reservation_chatbot.png

One large pale-blue speech bubble with a clean square socket in its lower-right side, and one separate compact navy calendar module lined up to fit into that socket. Calendar module has two binding tabs and one simple blue square date marker, no grid of numbers. Metaphor: plug an existing reservation module into a chatbot. Two main objects with a small clean gap between them. No tools, arrows, additional blocks, branding or robots.

#### tutorial_reservation_module.png

A simple upright navy calendar-shaped module being assembled from three broad interlocking paper panels: two pale-blue lower panels already joined, one medium-blue top strip hovering a short distance above them ready to attach. Top strip has two simple binding tabs so the assembly reads as a calendar. Metaphor: build a reservation component from reusable parts and rules. No tool icons, extra calendar grids, arrows, lettering, chat bubbles or unrelated props.

#### from-schema-to-snippets.png

A single upright pale-blue schema card with three large navy horizontal slots along its left half. From the right edge of the card emerge two simple blue speech bubbles, stacked with plenty of breathing room, as if the structured card unfolds into conversation. Metaphor: structured service schema becomes contextual dialog snippets. Three principal shapes total: one card and two speech bubbles. No writing, code characters, tiny fields, arrows, branching network, pencils or decorative objects.

#### chatbot_development_with_opencui.png

Three broad rounded paper slabs arranged as one simple separated vertical stack, shown with only a very slight oblique angle so each layer is visible. Top pale-blue slab carries one bold navy speech-bubble silhouette; middle layer medium blue, bottom layer navy. Metaphor: a conversational app built from three distinct composable layers. Keep the stack low and broad, paper-thin, nearly flat, no tall 3D tower, no extra icons, no connectors or UI screens.

## Review before replacement

1. Read the article and write its central idea in one sentence.
2. Choose one metaphor that expresses that idea without recreating the entire article.
3. Generate with the shared prompt and a current cover as the style reference.
4. Inspect the full image and the 256 x 160 crop. Check the silhouette, margins, meaning, and absence of accidental text.
5. Compare all covers together. Match palette, texture, shadows, and visual complexity; preserve distinct concepts.
6. Replace the corresponding tracked PNG. Add a new subject brief here when adding or substantially redesigning a cover.
7. Check the article index at desktop and mobile sizes and run the docs build. Do not regenerate factual screenshots to match the cover style.
