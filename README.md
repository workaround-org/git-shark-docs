# git-shark-docs 🦈

Documentation site for [git-shark](https://github.com/workaround-org/git-shark), built with
[Docusaurus](https://docusaurus.io/) and served at
[docs.gitshark.ha1nz.de](https://docs.gitshark.ha1nz.de).

The content under `docs/` mirrors the audience-structured guides from the git-shark
repository (`docs/users`, `docs/admins`, `docs/maintainers`). The theme mirrors the
git-shark web UI: warm canvas, deep-teal accent, Space Grotesk + JetBrains Mono
(self-hosted, no CDN requests).

## Development

```bash
npm install
npm start          # dev server with live reload
npm run build      # production build into build/
npm run serve      # serve the production build locally
npm run typecheck  # tsc
```

## Container image

A multi-stage `Dockerfile` builds the site and serves it with unprivileged nginx on
port 8080:

```bash
docker build -t git-shark-docs .
docker run --rm -p 8080:8080 git-shark-docs
```

CI (`.github/workflows/ci.yml`) builds the site on every push/PR; on `main` it also
pushes the image to GHCR as `ghcr.io/workaround-org/git-shark-docs` (multi-arch,
linux/amd64 + linux/arm64, tags: `latest` + `sha-<commit>`).

## Deployment

Deployed on the homelab cluster via Flux
(`simple-cluster-flux/clusters/simple-cluster/apps/git-shark-docs.yaml`):
Deployment + Service + Ingress (Traefik, cert-manager TLS) at
`docs.gitshark.ha1nz.de`.

## Updating content

The source of truth for the guides is the `docs/` tree in the git-shark repository —
edit there first (same commit as the feature change, per its `AGENTS.md`), then port
the change here. Sidebar order lives in `sidebars.ts`; theme variables in
`src/css/custom.css`; the landing page in `src/pages/index.tsx`.
