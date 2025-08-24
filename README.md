
# Easy Life – easylive.pro (GitHub Pages)

## Nasazení
- Nahraj obsah této složky do veřejného repozitáře na GitHubu (root: `index.html`).
- V repu: Settings → Pages → Deploy from a branch (main / root).
- Custom domain: `www.easylive.pro` (soubor `CNAME` je přibalen).
- Zapni **Enforce HTTPS**.

## DNS (u registrátora)
- `www` → CNAME → `TVŮJ_USERNAME.github.io`
- `easylive.pro` → A → 185.199.108.153 / 109.153 / 110.153 / 111.153 (nebo přesměrování 301 → https://www.easylive.pro)

## Kontaktní formulář (Formspree)
1) Na https://formspree.io vytvoř formulář a zkopíruj ID ve tvaru `f/XXXXYYYY`.
2) V `index.html` nahraď `YOUR_FORM_ID` za své ID.

## GA4
1) Vytvoř v Google Analytics 4 "Web" stream.
2) V `index.html` nahraď `G-XXXXXXXXXX` za svůj Measurement ID.

## SEO
- `robots.txt` a `sitemap.xml` jsou součástí. Sitemap je na `/sitemap.xml`.
