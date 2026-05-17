Deploying to GitHub Pages

1. Ensure repository `origin` is set to your GitHub repo (e.g. `https://github.com/<user>/BloodBridge`).

2. Install dependencies and (optionally) `gh-pages`:

```bash
npm install
npm install --save-dev gh-pages
```

3. Build the production bundle (this also generates `dist/404.html` for SPA fallback):

```bash
npm run build
```

4. Deploy with `gh-pages` (this will create and push the `gh-pages` branch):

```bash
npm run deploy
```

Alternative: Enable GitHub Pages in the repository Settings and point it to the `gh-pages` branch or to the `dist` folder in `main`/`docs` branch. Ensure the repo name is `BloodBridge` so the app is served at `https://<user>.github.io/BloodBridge/`.

Notes:
- The project is configured with Vite `base` set to `/BloodBridge/` for production builds, and `BrowserRouter` uses the build `BASE_URL` as `basename`.
- We also added a `dist/404.html` fallback so client-side routing works on GitHub Pages.
