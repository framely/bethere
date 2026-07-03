# BeThere Website Handoff

Date: 2026-07-03

## Current State

- Repository: `framely/bethere`
- Source branch: `vitepress`
- Deployment branch: `gh-pages`
- Live site: `https://bethere.ai/`
- Latest deployed `gh-pages` commit: `c3e2705b`
- Latest merged source commit observed: `25d3aee1`

The live homepage is deployed and currently serves the VitePress default `features:` section for:

- `01 Specialist`
- `02 Coordinator`
- `03 Deploy`

The old custom homepage card markup, `container-c` / `feature-card`, is no longer served on the live site.

## What Changed

- Homepage frontmatter in `docs/index.md` was changed back from custom `contentCards:` to VitePress default `features:`.
- The feature images still use the existing assets:
  - `/images/home/deterministic-interaction-logic.svg`
  - `/images/home/agentic-dialog-understanding.svg`
  - `/images/home/idea-to-working-agent.svg`
- The navbar waitlist CTA points to `https://buildmate.bethere.ai`.
- The Pages deploy workflow was hardened to handle missing `gh-pages` and to push explicitly to `origin gh-pages`.

## Deployment Flow

Do not merge `gh-pages`.

Normal flow:

1. Merge source changes into `vitepress`.
2. GitHub Actions runs the CICD workflow.
3. CICD builds VitePress with `npm run build`.
4. CICD pushes generated static output to `gh-pages`.
5. GitHub Pages publishes `bethere.ai` from `gh-pages`.

## Pages Failure From This Session

After PR #111 was merged, the source workflow succeeded and generated a correct `gh-pages` build:

- Source merge commit: `25d3aee1`
- Generated deploy commit: `a102a017`
- Failed Pages run: `https://github.com/framely/bethere/actions/runs/28660981127`

In the failed run:

- `build` job succeeded.
- `Build with Jekyll` succeeded.
- `Upload artifact` succeeded.
- `deploy` job failed at `Deploy to GitHub Pages`.

An empty commit was pushed to `gh-pages` to retrigger GitHub Pages:

- Empty retrigger commit: `c3e2705b`
- Successful Pages run: `https://github.com/framely/bethere/actions/runs/28661501346`

The failed commit `a102a017` and successful commit `c3e2705b` had the same tree SHA:

`ecb75535773c0fbc00129e738f2e0b997fc35055`

That means the deployed files were identical. The failure was most likely transient GitHub Pages infrastructure, not a bad VitePress build or a content error.

## If Deployment Fails Again

1. Check the source workflow for the merge into `vitepress`.
2. Confirm the CICD build succeeded and pushed a new `gh-pages` commit.
3. Check the GitHub-managed Pages run for `gh-pages`.
4. If build/artifact upload succeeded but `Deploy to GitHub Pages` failed, retrigger Pages with an empty commit on `gh-pages`.

Example recovery:

```bash
git fetch origin gh-pages
git worktree add --detach /tmp/bethere-gh-pages-restore origin/gh-pages
git -C /tmp/bethere-gh-pages-restore config user.name "github action"
git -C /tmp/bethere-gh-pages-restore config user.email "hui.cheng@naturali.io"
git -C /tmp/bethere-gh-pages-restore commit --allow-empty -m "Retrigger GitHub Pages deployment"
git -C /tmp/bethere-gh-pages-restore push origin HEAD:refs/heads/gh-pages
git worktree remove /tmp/bethere-gh-pages-restore
```

Then verify:

```bash
curl -I https://bethere.ai/
curl -L -o /tmp/bethere-live.html https://bethere.ai/
rg -n "VPFeature|container-c|feature-card|01 Specialist|02 Coordinator|03 Deploy" /tmp/bethere-live.html
```

Expected result:

- HTTP 200 from `https://bethere.ai/`
- `VPFeature` present
- `container-c` and `feature-card` absent
