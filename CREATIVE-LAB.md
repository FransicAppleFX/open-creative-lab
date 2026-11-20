# Open Creative Lab

Public showcase route: `/creative` on the existing Template Lab Site.

## Included experiences

- **Motion**: an original Anime.js grid and an original Lottie orbital animation. Runtimes are bundled locally.
- **Modeling**: editable Three.js torus-knot, crystal and modular-tower geometries, material color, detail, wireframe, GLB and PNG export.
- **Characters**: RobotExpressive, CC0 1.0, by Tomás Laulhé with modifications by Don McCurdy. Fourteen animation clips; optional local self-contained GLB import (20 MB limit, no external-resource URIs).
- **Live2D**: a sandboxed bring-your-own-files workspace using PixiJS and pixi-live2d-display. Users supply a licensed Cubism Core JS file and one model3.json folder. Up to 256 files / 64 MB. Core and third-party Live2D models are not bundled, mirrored or claimed to be MIT licensed. Rendering with licensed user assets remains to be verified; no sample model is silently redistributed.

`model-viewer` and `three-vrm` are updatable source references, clearly labeled in the public catalog; they are not active renderers in this release.

## Upstream source modules

All six entries in `.gitmodules` are real mode-160000 Git submodules. `upstreams.json` records verified source commits, licenses, the discovery timestamp and public GitHub stars at that time. Stars are not a growth ranking.

Source references use sparse checkouts containing README, package and license files to avoid downloading unrelated upstream binary assets. Runtime files come from exact npm package versions in package-lock.json; the Three.js, Anime.js, Lottie and Live2D source refs correspond to their selected releases. model-viewer and three-vrm are fixed branch snapshots.

```powershell
git clone --recurse-submodules https://github.com/FransicAppleFX/open-creative-lab.git

git submodule status
npm ci --ignore-scripts
npm run check
npm run build
npm run preview
```

To update one registered source:

```powershell
node scripts/update-upstream.mjs animejs v4.5.0
```

Replace the final argument with a reviewed upstream tag or branch. The script rejects dirty submodules, fetches the chosen ref and updates the source pin. It does **not** silently update the npm runtime. Review the upstream license, update the matching exact package version and package-lock.json, rebuild and test, then commit both the source gitlink and runtime dependency change. Upstream content is never executed by the source-update script.

GitHub Actions uses `npm ci --ignore-scripts`, checks and a static build. It does not automatically deploy to Sites or request a persistent Sites token. The old gh-pages dependency from pixi-live2d-display is overridden to 6.3.0; the installed dependency audit reports zero vulnerabilities at this build.

## GitHub maintenance and Sites publishing

The public source repository is https://github.com/FransicAppleFX/open-creative-lab. Its main branch contains the original Site history and six real Git submodules. The verified bundle was imported through the signed-in GitHub browser and GitHub Actions; no browser session or credential was copied into source.

The workflow .github/workflows/source-check.yml validates pull requests and main-branch pushes with npm ci --ignore-scripts, npm run check and npm run build, then retains the static build artifact for 14 days. The initial import passed on 2026-11-20. The bundle import step is inert after the bundle is removed.

Site: https://fx2026-template-lab.dapperrowan3.chatgpt.site/creative

GitHub validation does not automatically publish to ChatGPT Sites. To update production, use the Sites plugin with the existing project_id in .openai/hosting.json, pull the reviewed GitHub main commit, rebuild, push the exact source to the existing Sites source repository, save that version and deploy it. Keep the current public audience. No persistent Sites token is stored in GitHub.

For local development, use a Git credential authorized for FransicAppleFX. Browser sign-in and host Git sign-in are independent. The checkout's github remote points to this repository; normal pushes should use git push github main after authenticating the intended account. Never force-push to bypass a divergence.

## Verification

- JavaScript syntax, source references, four-language catalog integrity and translation coverage checks passed.
- The bundled RobotExpressive GLB has 14 animation clips and uses embedded resources.
- Browser tests loaded WebGL modeling and character rendering with no error logs; a real GLB and PNG were exported. The exported GLB was parsed again and contained one mesh.
- Live2D's optional Core/model import path cannot be fully exercised without separately licensed user assets; this is a stated boundary rather than a bundled demo model.
