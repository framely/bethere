# BeThere blog illustration specification

Latest revision: the user requested a hand-drawn narrative direction after
reviewing these geometric covers. See the [new hand-drawn specification](hand-drawn-spec.md).
The document below records the earlier geometric direction and generated set.

Status: visual direction selected by the user on 2026-11-15. The full set of
eight candidates has been generated for review. Existing website images are not
replaced yet. Open [the review gallery](preview.html) or [the cover list](README.md).

## Scope

The eight editorial covers listed in `docs/articles/index.md`. Instructional
screenshots, article text, and technical figures inside articles remain outside
this cover redesign. The current homepage copy edit is separate work.

## What needs to improve

The current covers share blue, teal, and cream, but their soft 3D rendering,
rounded app tiles, and recurring chat/calendar symbols could belong to many
software brands. Similar visual weight makes different topics blend together.
Small props and fine details lose meaning in the 256 x 160 desktop cards.
Some covers also have diffuse halos that weaken their edges in dark mode.

The new series should be recognizable through its drawing language and its
concepts, with a distinct silhouette for each article.

## Selected direction: editorial engineering

Precise geometric constructions with the warmth of a screenprinted editorial
illustration. Clear structures and expressive paths reflect the product's
combination of business rules and flexible conversation.

### Form and drawing

- Use flat, opaque color planes, crisp contours, and restrained cut-paper layers.
- Use front-facing or top-down views. A small consistent offset can suggest
  depth; avoid modeled, inflated, or toy-like objects.
- Combine one structural form with a contrasting expressive form when the
  article calls for it: a boundary and a path, a partition and a shared rail,
  or a fixed schema and varied conversational fragments.
- Draw connectors deliberately. Solid paths communicate an active relationship;
  dashed paths may show an alternative. Do not add ornamental wiring.
- Use light print grain inside solid shapes only. Texture must not soften edges
  or create an atmospheric glow around the illustration.
- No embedded words, letters, numbers, labels, logos, or watermark. The page
  supplies the title and accessible description.

### Color

Retain the existing series palette so the redesign fits the site.

| Role | Color | Use |
| --- | --- | --- |
| Primary | Cornflower blue `#648FD0` | Dominant structural form |
| Secondary | Dusty teal `#69ACA9` | Paths, relationships, alternate states |
| Definition | Slate navy `#344B68` | Interior marks and limited contrast |
| Highlight | Warm cream `#E7DFCF` | Important inset planes or focal pieces |

Keep blue and teal dominant. Use cream selectively, rather than repeating large
cream cards in every cover. Important outer edges must include blue or teal;
navy-only boundaries will disappear on dark surfaces. Avoid near-white shading,
neon colors, and additional accent colors.

### Composition and scale

- Landscape 16:9 target, at least 1000 pixels wide; preserve generated proportions.
- One dominant visual relationship and approximately three to five major groups.
- Give every cover a different overall silhouette and composition.
- Keep the main artwork within the central 84% of the canvas, with clear space
  at every edge. Aim for substantial, readable shapes rather than scattered icons.
- Check the actual 256 x 160 desktop card, including its 8px padding. Essential
  lines should remain roughly 2px or thicker at this displayed size.
- A viewer should distinguish the cover from its neighbors without reading a
  label. The article title provides specificity; the illustration reinforces it.

### Background and themes

- Deliver PNG with real alpha transparency around and between the objects.
- Do not draw a white rectangle, dark rectangle, checkerboard, glow, or vignette.
- Inspect on `#F5F5F5` and `#171717`. Preserve contrast without CSS inversion.
- All four corner pixels must be fully transparent. Existing tests also require
  more than 10% and less than 95% fully transparent pixels.
- The website retains its existing themed card backgrounds, containment, and
  padding. The illustration must work within those constraints.

### Avoid

Soft clay renders, glossy 3D, bevels, pill-shaped app tiles as the default subject,
floating dashboards, stock robots, brains, sparkles, decorative plants, generic
gears, tiny calendar grids, tangled arrows, and repetitive sets of chat bubbles.
Use a recognizable object only when it carries the article's main idea.

## Article concepts

| Cover file | Meaning to communicate | Composition and distinguishing form |
| --- | --- | --- |
| `interaction-closure.png` | Flexible conversational paths remain governed by one complete business interaction space, including correction. | One large geometric enclosure with a visible interior structure; three expressive paths meet its governed states, with one clean return loop. A wide enclosure silhouette. It is not a funnel or a conversation-ending gate. |
| `ai-specialist-vs-omnipotent-agent.png` | Separate responsibilities and permissions make specialists maintainable while allowing coordination. | Three clearly bounded vertical structures joined only by a common lower rail. Each contains a different large geometric tool or operation; no single all-powerful center. A segmented, three-column silhouette. |
| `prompt.png` | Loosely specified interpretation can vary; explicit structure constrains behavior. | A deliberate side-by-side contrast: one irregular input creates three visibly different paths; a precise guide constrains repeated tokens into one track. An asymmetric split composition. |
| `tutorial_reservation_cui.png` | Conversation gathers and revises the information needed for a valid reservation. | A top-down table and two chairs anchored by a single reservation strip with three large information marks. One conversational path reaches the strip and loops back to a changed mark. A circular table silhouette. |
| `tutorial_reservation_chatbot.png` | A ready-made reservation capability is connected to an application and a calendar provider. | One intact blue module slots into the open side of a larger application frame; a short teal connection reaches a small provider ledger. A lateral insertion composition, visibly different from assembling the module. |
| `tutorial_reservation_module.png` | A reusable reservation module is built from explicit types, fields, and rules. | Three different geometric components fit into corresponding spaces in one open frame. Show construction through alignment and shape fit. A compact assembly silhouette, without a toolbox or wrench. |
| `from-schema-to-snippets.png` | One structured service schema supports multiple contextual conversation examples. | A rigid branching schema plane leads to two contrasting folded conversational strips. Preserve a visible relationship between structured fields and varying responses. A diagonal fan composition. |
| `chatbot_development_with_opencui.png` | Language understanding, interaction components, and backend services compose a working application. | Three flat offset layers with deliberate connections: expressive language marks, structured interaction pieces, and a service foundation. A stepped architectural silhouette, without a monitor or server rack. |

## Shared generation prompt

Use the built-in image generator, one cover per call. Append the individual
subject brief from the concept table. Keep this prompt unchanged across the set
after the style has been selected.

```text
Use case: stylized-concept.
Asset type: landscape editorial cover illustration for a BeThere technical blog.
Art direction: editorial engineering; precise geometric construction with the
warmth of a restrained screenprint. Flat opaque color planes, crisp contours,
subtle cut-paper layering, a very small consistent depth offset, and sparse fine
print grain confined to colored shapes. Front-facing or top-down composition.
The artwork should have a deliberate editorial point of view, a bold distinctive
silhouette, and one unmistakable conceptual relationship.
Palette: cornflower blue #648FD0, dusty teal #69ACA9, slate navy #344B68,
warm cream #E7DFCF. Blue and teal dominate; cream is a selective highlight and
navy is mainly internal definition. Important outer edges remain midtone so they
read on both #F5F5F5 and #171717.
Composition: landscape 16:9 target, three to five major groups, generous separation,
clear hierarchy, artwork within the central 84% of the canvas. Strong at 256x160.
Background: genuine transparent PNG alpha, including gaps between objects and
all corners. No background rectangle, haze, vignette, glow, or painted checkerboard.
Constraints: no text, numerals, logos, robots, faces, brains, sparkles, decorative
props, glossy surfaces, clay rendering, heavy rounded bevels, or dense dashboards.
Subject: <individual subject brief>.
```

## Pilot and rollout

1. Produce an Interaction Closure style sample, then inspect its silhouette,
   concept, colors, and thumbnail clarity. Adjust the style before production.
2. Confirm the direction with the user, incorporating requested changes into this
   specification. A successful sample establishes the reference for the series.
3. Generate a second, contrasting subject (reservation CUI design) to check that
   the language also handles a concrete service example.
4. Regenerate the remaining covers one at a time. Inspect each and use targeted
   corrections when needed. Use the selected pilot as a style reference.
5. Save final candidates under versioned filenames during review. Record the
   exact prompts, references, and refinements in a generation log.
6. Before integration, check alpha, actual card size, light/dark surfaces, and the
   set together. Reject composition drift, indistinguishable silhouettes, and
   repeated generic symbols.
7. Replace the eight production covers after they meet the specification. Keep
   existing public asset paths stable and update the excluded production guide
   at `docs/articles/style.md` to describe the final system.
8. Run `npm test` and `npm run build`; inspect the blog index in both themes and
   on desktop/mobile. Report any verification that could not be completed.

## Sample generation log

Initial pilot: [Interaction Closure v2](samples/interaction-closure-v2.png).
Built-in image generator, new illustration, no input image. The exact prompt is
stored in [the pilot prompt](interaction-closure-pilot-prompt.txt).
This is an exploratory style candidate rather than an integrated production cover.

Initial visual assessment: the image has the proposed flat geometric vocabulary,
three distinct paths, and a prominent correction loop. The frame is still fairly
heavy, and the abstract state shapes may need more article-specific meaning.
Review the direction before treating this as the production reference.

## Full review set

All eight new candidates use the selected pilot as their style reference. The
Interaction Closure candidate has an open interior and lighter framing; the
other covers use different compositions specified above. Generation used the
built-in image generator, one cover at a time, with true transparency requested.

- [Exact prompts and output mapping](prompts.json)
- [Interactive gallery with large and thumbnail views on both themes](preview.html)
- [PNG dimensions, alpha checks, and checksums](validation.json)

These are review candidates, not replacement assets. Review the metaphors as
well as the shared drawing language before integrating them. The generated set
occasionally uses thicker offset shadows and narrower canvas margins than the
targets above; these are candidates for refinement during review. Generation
prompts are retained so any chosen cover can receive a targeted correction.
