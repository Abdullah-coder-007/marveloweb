# Kromaloom / Marveloweb

Responsive website redesign agency landing page, built with plain HTML, CSS, and JavaScript. No build step or external runtime dependencies are required.

## Run locally

Open `index.html` in a modern browser, or serve the repository with:

```sh
python -m http.server 8080
```

Then open http://localhost:8080.

## Files

- `index.html`: complete page markup, styles, and interactive behaviors.
- `assets/kromaloom-logo.png`: supplied brand logo.
- `assets/industry-grid.png`: generated photographic business-category backgrounds.
- `scripts/check.mjs`: JavaScript syntax, local asset, ID, and anchor checks.
- `.nojekyll`: publish the static files directly with GitHub Pages.

## Included

Animated brand introduction, a hero carousel advancing every two seconds, looping logo/theme/review/category showcases, services, process, comparison table, pricing, proposal form, FAQs, and footer. Responsive layouts and reduced-motion alternatives are included.

## Preview functionality

Login/signup, live website analysis, proposal delivery, call booking, social profiles, and additional resources are not connected to backend services. Website address and contact fields validate locally. No form data is sent or stored. Testimonials, brands, portfolio results, and business statistics are illustrative and should be replaced or confirmed before marketing use. Pricing and timelines should also be reviewed before launch.

## Validation

```sh
node scripts/check.mjs
```

## Deployment

GitHub Pages serves the repository root from the `main` branch. All assets use relative paths, so the site also works under a repository subpath. Changes pushed to `main` are published automatically once Pages is enabled.
