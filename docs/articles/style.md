# Article illustration style

## Purpose and scope

Give each article a distinct conceptual illustration that expresses its central relationship. Aim for a small, purposeful scene: richer than an isolated icon, simpler than a technical diagram.

This guide covers the eight editorial images in [the article index](index.md). Reference documents under `reservation/` and instructional screenshots inside tutorials are outside this series. This production guide is excluded from the built website.

## Shared visual language

- Tangible, softly rounded objects with a matte finish, restrained grain, and shallow dimensional layering.
- One central relationship, usually expressed through four to six purposeful elements or groups. Add detail that clarifies the subject, not decoration to fill space.
- A consistent blue, teal, navy, and warm cream palette. Vary the composition and silhouette to distinguish articles.
- Clear foreground/background hierarchy and clean separation between objects.
- No embedded titles, readable text, logos, stock robot characters, or sprawling networks.
- Keep the main idea readable at 256 x 160; use larger views for secondary detail.

### Palette and theme support

| Role | Target color |
| --- | --- |
| Main objects | Cornflower blue `#648FD0` |
| Secondary objects and boundaries | Dusty teal `#69ACA9` |
| Internal definition | Slate navy `#344B68` |
| Small contrasting surfaces | Warm cream `#E7DFCF` |
| Light card background (CSS, not PNG) | `#F5F5F5` |
| Dark card background (CSS, not PNG) | `#171717` |

These are art-direction targets, not exact pixel requirements. Materials and lighting produce natural variation.

The PNG background must have **real alpha transparency**. Never bake a white rectangle, dark rectangle, checkerboard, or preview backdrop into the image. Use midtone blue/teal on important outer edges so forms remain visible against both themes. Avoid dark-only outlines or large pale backgrounds.

The article card supplies its background through `var(--bethere-raised-surface)`, which follows the selected theme. Do not use CSS inversion, blend modes, or separate light/dark recolorings.

## Format and integration

- Generate on a landscape canvas, targeting 16:9. The current outputs range from 3:2 to 16:9; preserve generated proportions.
- Replace `docs/public/images/blog/banner/<filename>.png`; keep filenames stable.
- Desktop cards are 256 x 160; mobile cards use a 16:9 box.
- Use `object-fit: contain`, 8px padding, and `box-sizing: border-box` so neither layout clips the artwork.
- Compose with breathing room around every edge. Keep the main scene substantial within the canvas.
- Preserve the alpha channel when copying or losslessly optimizing PNGs.
- HTML supplies titles and accessible alt text; do not put article titles inside the artwork.
- Keep existing tutorial screenshots, code examples, and precise diagrams unchanged.

## Cover concepts

| Article | PNG filename | Central relationship |
| --- | --- | --- |
| [Interaction Closure](interaction-closure.md) | `interaction-closure.png` | Varied voice paths enter one complete governed interaction space, including a return loop for corrections. |
| [AI specialists](why-ai-agents-should-be-specialists.md) | `ai-specialist-vs-omnipotent-agent.png` | Three bounded workstations share a service base while keeping distinct responsibilities. |
| [Prompt determinism](prompt-engineer-not-deterministic.md) | `prompt.png` | One loosely specified input produces varied outputs, contrasted with a precisely constrained track. |
| [Reservation CUI design](reservation-cui-design.md) | `tutorial_reservation_cui.png` | A table for two with conversational guest and calendar details. |
| [Reuse a reservation module](reuse-reservation-module.md) | `tutorial_reservation_chatbot.png` | A ready-made reservation module plugs into a chat application and connects to backend storage. |
| [Build a reservation module](build-reservation-module.md) | `tutorial_reservation_module.png` | Date, capacity, and confirmation parts fit into a reusable module. |
| [Schema to snippets](from-schema-to-snippets.md) | `from-schema-to-snippets.png` | A structured service blueprint leads to contextual conversation examples. |
| [Chatbot development](chatbot-development-with-opencui.md) | `chatbot_development_with_opencui.png` | Conversation, interaction components, and backend services form connected layers. |

For Interaction Closure, completeness does not mean ending the conversation. Avoid finish flags, closed doors, or a lone success checkmark as the central metaphor.

## Generation recipe

The September 2026 revised set was generated from scratch with the built-in image generator, **one cover at a time**. Each result was visually inspected on light and dark surfaces at both larger and card sizes before replacement. Do not reuse the earlier opaque, icon-only direction.

Use the following shared prompt followed by `Subject: <article-specific brief>`. These are the exact base prompts for this revision. The specialist cover received the targeted edits recorded below; the other covers were generated without input image references.

```text
Use case: stylized-concept.
Asset type: editorial illustration for a BeThere technical article, landscape 16:9.
Art direction: polished conceptual editorial illustration, restrained but substantial, not an app icon and not an instructional flowchart. Carefully composed tangible objects, softly rounded geometry, precise ink edges, subtle matte screenprint grain and shallow dimensional layering. Four to six purposeful elements, strong visual hierarchy, meaningful relationships. No decorative filler.
Palette: medium cornflower blue #648FD0, dusty teal #69ACA9, slate navy #344B68 for internal definition, small warm cream #E7DFCF accents. Midtone blue/teal outer silhouettes must remain legible on both light #F5F5F5 and dark #171717 surfaces. Avoid heavy black outlines, excessive pale surfaces, glossy 3D or neon.
Composition: one coherent wide centered vignette filling approximately 78% of the canvas width and 76% height. Breathing room on all edges. Readable as a 256 x 160 thumbnail but rewarding at larger size.
Background: actual transparent PNG alpha channel. Empty surrounding pixels and gaps between objects must be transparent, with no background rectangle, no checkerboard painted into the image, no white matte or vignette. Do not draw the light/dark preview surfaces.
Constraints: no text, letters, numerals, logos, watermark, generic robots, sparkles, plants, extraneous props, dense networks or tangled arrows.
```

### Subject briefs

#### interaction-closure.png

Interaction Closure: a rounded blue interaction arena seen in shallow perspective contains three distinct business-state tiles: a calendar, two alternate choices, and a conversational reply. Its continuous teal rim represents a complete governed interaction space, not a closed door. Outside the arena, three differently shaped speech bubbles carry distinct simple voice-wave marks. Three flowing blue/teal ribbons from those bubbles enter the same arena from different directions; one ribbon makes a small clean return loop to suggest correction and continued conversation. The relationship is free conversational order with a consistent business core. Make the arena and varied paths dominant, with the tiles secondary. No endpoint checkmark, finish flag, funnel, lock, maze or extra stationery.

#### ai-specialist-vs-omnipotent-agent.png

A small coordinated service desk with three separate upright open workstations, each visibly its own bounded compartment. One handles an appointment calendar, one handles customer messages with an envelope and a reply slip, and one handles repairs with a wrench and small gear. A single common blue reception rail subtly links their bases. Warm cream cards and teal separators. Editorial story: a team of focused AI specialists serves one business, with distinct tools and permissions. Include enough functional details to look like an illustration of a working system, not three flat app buttons. No robot characters, people, labels, tiny text, plants or unrelated props.

#### prompt.png

Two ways of shaping software behavior on one quiet tabletop vignette. A warm cream prompt card bearing just two loose blue wavy marks feeds three short blue/teal ribbons that land at three slightly different small response cards. Alongside it, a compact structured navy slot guide aligns three identical blue tokens in a single orderly track. The single visual comparison is flexible ambiguous interpretation versus a precisely defined interface. Not a literal flowchart: show tactile cards, tracks, and meaningful relationships. No question marks, labels, code text, plant, people, or busy network.

#### tutorial_reservation_cui.png

A tiny restaurant reservation vignette: one round blue dining table with two teal chairs and two simple cream place settings. Above it a short conversational exchange of two floating cream-and-blue speech bubbles, one containing a tiny pair-of-guests symbol and the other a small calendar tile. A modest reservation slip rests at the table edge. Editorial story: gathering the customer's dining requirements through conversation. Slight perspective, inviting service scene, no room backdrop, no people, no plant, no written text or elaborate UI.

#### tutorial_reservation_chatbot.png

A reusable reservation component being fitted into an existing conversational application. A blue upright chat workspace with two cream reply strips stands next to a separate teal module holding a small calendar and a simple table symbol. Matching connector tabs visibly align the module with a socket on the workspace; one short cable leads to a small shared calendar ledger behind it. Editorial story: connect a ready-made reservation capability and calendar backend to a chatbot. A composed workshop vignette, roughly four major objects, not a single puzzle icon. No text, people, plant, tools or sprawling connectors.

#### tutorial_reservation_module.png

A small component-building workbench with an open blue reservation module in the center. Three purposeful parts are being assembled into it: a cream calendar tile, a teal table-capacity tile showing two simple seats, and a blue confirmation toggle tile. A small dark-blue wrench rests beside the base. Parts hover just slightly above their matching compartments, with clear shape fit and visible separation. Editorial story: constructing reservation behavior from service types, fields, and business rules. No completed chatbot screen, no letters, numbers, people, plant or additional tools.

#### from-schema-to-snippets.png

An editorial design desk vignette where a structured service blueprint becomes contextual conversation examples. A large blue blueprint card with three cream field slots and small connector dots lies partly beneath two staggered warm cream snippet cards; each snippet card holds just two blue/teal speech shapes with simple wavy marks. One short linking ribbon and a modest blue pencil show the relationship of structured service design to authored dialog examples. Three cards and a pencil, generous spacing, slight perspective. No written text, code, tiny diagrams, plant or busy technical network.

#### chatbot_development_with_opencui.png

A conversational application illustrated as three separated but connected working layers in a gentle exploded view. Top layer is a small blue conversation panel with two cream/teal bubbles. Middle layer is an open teal module tray holding two simple interlocking interaction pieces. Bottom layer is a blue service base with a small cream data cylinder and two plug sockets. Two short clean supports connect the levels. Editorial story: dialog understanding, reusable interaction components, and backend services form a composable chatbot. Show functional details rather than three blank slabs. No text, letters, people, robots, plant or sprawling wiring.

### Targeted specialist refinement

The initial specialist draft added characters and excessive props. This edit restored the focus on bounded responsibilities:

```text
Edit this illustration: remove all three robot characters completely, all monitors, all loose desktop clutter, all file folders and all spare tools. Preserve the three bounded teal workstation compartments, their shared blue base, the blue/teal/cream palette, matte texture and perspective. Keep exactly one large calendar plus a small clock in the first compartment, one large envelope plus two reply bubbles in the second, and one large wrench plus a gear in the third. Arrange these as purposeful upright contents of each compartment, large enough to read at thumbnail size. No characters, faces, text, plants or new decorative props. Preserve the genuinely transparent PNG alpha background, no painted checkerboard or white matte.
```

The edit returned a painted checkerboard, so a second pass requested actual alpha:

```text
Use case: background-extraction. Remove the entire painted checkerboard background. Return the existing illustration unchanged as an isolated cutout with a genuinely transparent PNG alpha channel. Every surrounding background pixel must have alpha=0, not a white, black or checkerboard fill. Preserve the objects, colors, dimensions, composition, texture and edges. No other changes.
```

Do not assume a checkerboard-looking preview means the asset is transparent. Inspect decoded pixel alpha and composite the image on actual page colors.

## Review before replacement

1. Read the article; describe its core relationship in one sentence.
2. Choose a distinct scene within the shared palette, materials, and level of detail.
3. Generate one cover, inspect it, and make targeted corrections before starting the next.
4. Decode the PNG and verify real transparent pixels and fully transparent corners. The cover-asset tests check these properties.
5. Composite on both `#F5F5F5` and `#171717`. Inspect silhouettes, edges, halos, contrast, and unintended background remnants.
6. Check at 256 x 160 and mobile card size with containment and padding, not a center crop.
7. Compare the set for palette, density, and recognizable differences. Preserve useful detail without adding clutter.
8. Replace the corresponding PNG and record its prompt or refinements here.
9. Check the actual article index in both themes on desktop and mobile. Run `npm test` and `npm run build`.
