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


## GitHub-to-Sites update test — 2026-11-21 (Asia/Shanghai)

**Result: GitHub commits trigger validation and a build, but do not automatically publish this Site.** Installing the GitHub connector and adding a repository link do not create a deployment pipeline.

| Stage | Evidence | Result |
| --- | --- | --- |
| GitHub change | [a32c870](https://github.com/FransicAppleFX/open-creative-lab/commit/a32c870e062ce647beecee2bcfcdeedafacfdec9), committed 01:20:00 +08:00 | Appended a reversible CSS override in src/creative.css: hero emphasis changed from lime to teal #79dfcb, with marker sync-probe-20261121. |
| GitHub build | [Actions run 44782273461](https://github.com/FransicAppleFX/open-creative-lab/actions/runs/44782273461) | Check and build completed successfully. |
| Before manual publication | No-cache requests at 01:21:12 and 01:23:59; Site remained version 4 | Marker absent. Production CSS SHA-256 stayed 1aa3bb1eaf8eca3d2965e4fe770dbfee4cab68f98cb588f0b1cbb0f1dde6436d. |
| Controlled manual publication | Sites version 5; source f9f69cb128058103ab52fc70e7e5eacc37ce773a; deployment appgdep_6b00826f7bd48191b58251e9f9aea65b succeeded | Existing Site and public audience preserved. |
| After publication | No-cache production request at 01:25:27 | Marker and teal CSS rule present. CSS SHA-256 became e6c942b7e99bf112a73e6d1b841d3e09cbc81956b04120a60599d43a1cdc9475. |

The observation window was approximately four minutes after the GitHub commit. The workflow and Sites configuration also confirm that no automatic deploy step or Site update schedule exists. This test changed our own stylesheet; it did not modify an upstream project's repository or claim that submodule updates are automatically deployed.

### Routine source and template updates

1. Fetch the current GitHub main branch into a clean checkout. Use a codex/ branch for changes and open a PR when using the normal review flow. Browser authentication and local Git credentials are independent; authenticate the account that has write access.
2. Edit src/ HTML, CSS, JavaScript or src/data/ for interface and catalog changes. Keep English as the default and update the Chinese, Japanese and Korean translation entries where applicable. Do not treat dist/ as the authoring source: it is generated output.
3. For third-party source updates, review the upstream release and license first. Run node scripts/update-upstream.mjs MODULE REVIEWED_REF, inspect the diff, and commit both the mode-160000 gitlink and upstreams.json. Do not use an unreviewed bulk submodule update. Existing upstream commits are pinned; a new upstream release cannot silently change the Site.
4. Source pins and browser runtimes are separate. When upgrading an active runtime, update the exact npm package version and package-lock.json as well. model-viewer and three-vrm are source references in this release. Recheck model, texture and Live2D asset rights separately from adapter code licenses.
5. Run npm ci --ignore-scripts, npm run check and npm run build. Preview the changed workspace, language switching and mobile layout as appropriate. Commit source and lock changes, push the branch, wait for GitHub Actions, then review and merge the PR. A green build is not a production deployment.
6. Publish using the separate Sites procedure below. Record the reviewed GitHub SHA, resulting Sites source SHA, saved version, deployment status and production URL. The two SHAs can differ when the Sites preparation creates a build-output commit; verify that the reviewed application source is the same. Reconcile histories with a normal merge when necessary, without a force push.

### Publish to the existing Site

Use the Sites plugin under an authorized Site owner/editor account. Reuse project_id appgprj_6b00590eee448191ba175d2bf9d812db from .openai/hosting.json. Do not create a replacement Site.

1. Read the Site and preserve its existing public audience. Obtain a short-lived source credential and open its source with the Sites source helper.
2. Bring in the reviewed GitHub change, resolve any divergence without overwriting history, and run the checks and build against the final source.
3. Use the Sites source helper to commit/push that exact source and package its build output. Keep credentials only in session memory/stdin; never put them in Git, workflow files, shell arguments, screenshots or documentation.
4. Save the helper's exact pushed commit and archive, then deploy that exact saved version. Wait for succeeded; investigate a failed deployment rather than reporting the build as live.
5. Fetch the production asset with a cache-busting query and verify the expected marker/hash, then check the visible page. A reload alone is weaker evidence because of caching. Keep a release record linking the source and saved version.

A persistent GitHub-to-Sites deployment credential or public webhook has not been added. Do not reuse an expiring source token as a permanent CI secret. Any future automation needs a supported deployment integration, explicit credentials and restricted release conditions; it must not deploy code from arbitrary forks or unreviewed PRs.

### Roll back

For the small test style, revert commit a32c870 or remove its appended sync-probe-20261121 block, run checks/build and publish the resulting source through Sites. Reverting GitHub alone does not roll back production. For a production incident, deploy a verified earlier saved Sites version using the supported deployment tool, then reconcile GitHub source to avoid reintroducing the change. Never rewrite repository history just to remove this test.

### Public repository versus edit and deploy permissions

- Public means anyone can read, clone or fork the source. It does not grant direct push or merge rights to the original repository. A stranger's fork, suggested edit or PR does not alter main merely by being created.
- The repository owner and explicitly authorized collaborators/apps can write according to their grants. Therefore, "only the owner can ever write" is not an accurate blanket statement. Review Settings > Collaborators and installed GitHub Apps when auditing access. On this test date, opening the collaborator screen required GitHub email re-verification, so the actual collaborator list was not verified. No new collaborator, token, sharing rule or branch rule was added during the test.
- GitHub write permission and Sites deployment permission are distinct. In the current configuration, even a successful main-branch build does not publish the Site. An authorized Sites owner/editor must perform the release. Being a public Site visitor grants viewing access, not editor access.
- Local task boards, favorites and file previews use the visitor's own browser storage/files; editing these does not edit the shared website source. Displaying live GitHub statistics can refresh data, but does not change the deployed template or stylesheet.
- Review PRs and licenses before merging. Consider protected main, required checks and required review for future collaboration; these are recommendations, not settings silently enabled by this test. Do not place secrets in public source or client-side code.

References: [GitHub personal repository permissions](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/permission-levels-for-a-personal-account-repository), [protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).
