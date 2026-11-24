# FitLifeChef — Netlify site

Plain HTML/CSS/JS, no build step. Publish directory is the site root (`.`).

## Deploy — Netlify Drop (quickest)
1. Zip the contents of this folder (not the folder itself) so `index.html` is at the top level, or drag the folder.
2. Go to https://app.netlify.com/drop and drag the folder / zip in.
3. Netlify gives you a `*.netlify.app` link. Test every recipe page from that link.

## Deploy — GitHub (recommended for updates)
1. Create a new GitHub repo, e.g. `fitlifechef-site`, and upload these files (or `git push` them).
2. In Netlify: Add new site → Import an existing project → GitHub → pick the repo.
3. Build settings: Build command — leave blank. Publish directory — `.`
4. Deploy. Every future `git push` redeploys automatically.

## Custom domain — fitlifechef.com
1. In Netlify: Site settings → Domain management → Add a domain → `fitlifechef.com` (and `www.fitlifechef.com`).
2. Netlify will show DNS records. At your domain registrar, add them:
   - For the apex domain: the A record(s) Netlify shows, or an ALIAS/ANAME record pointing to your Netlify site if your registrar supports it.
   - For `www`: a CNAME pointing to your Netlify site address (`<your-site>.netlify.app`).
3. Wait for DNS to propagate (usually minutes, up to 24 hours), then check https://fitlifechef.com/ loads. Netlify provisions HTTPS automatically.
4. Note: fitlifechef.com did not resolve when checked on 2026-11-23, so confirm the domain is registered and its DNS is under your control before pointing it here.

## Structure
- `/index.html` home, `/recipes/` all recipes, `/categories/<slug>/` 8 categories,
  `/recipes/<slug>/` 21 recipe pages, `/this-week/` launch-week schedule, `/about/`
- `/styles.css`, `/main.js`, `/images/` (SVG placeholders — replace with real food photos using the same filenames)
- `/sitemap.xml`, `/robots.txt`, `/netlify.toml`

## Nutrition
Calculated per serving from the ingredients listed, using USDA FoodData Central
reference values (https://fdc.nal.usda.gov/). Calculations, not lab analysis.
