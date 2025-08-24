# Easy Life – hotové bloky (jen nahrát)

## Co je uvnitř
- `partials/cenik-section.html` – sekce Ceník pro homepage
- `partials/lokality.html` – sekce Lokality
- `partials/faq.html` – sekce FAQ
- `partials/nav-links.html` – odkazy do horní navigace
- `cenik.html` – samostatná stránka Ceník
- `404.html` – chybová stránka
- `assets/images/og-cover.webp` – OG obrázek pro sdílení

## Jak to nasadit (GitHub Pages)
1) Nahraj soubory do repozitáře (root i složky).
2) Otevři `index.html` a:
   - do `<nav class="top">` vlož obsah `partials/nav-links.html`
   - vlož obsah `partials/cenik-section.html` pod sekci `#sluzby`
   - vlož obsah `partials/lokality.html` před sekci `#kontakt`
   - vlož obsah `partials/faq.html` pod sekci `#proc`
3) Pokud chceš samostatný ceník:
   - soubor `cenik.html` je hotový → přístupný na `/cenik.html`
4) OG náhled pro sdílení (volitelné):
   - v `<head>` stránky (např. v `index.html`) nahraď hodnotu `og:image` na `/assets/images/og-cover.webp`
5) 404 stránka:
   - stačí ponechat `404.html` v kořeni repozitáře

Commitni změny → GitHub Pages je hned nasadí.