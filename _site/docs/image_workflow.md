# Image Optimization Workflow (with copyright metadata)

A repeatable checklist for preparing images before adding them to the site.

## 1. Resize + convert to WebP

```bash
sudo apt install imagemagick -y

# Resize to 2x display size (retina-ready) + convert to WebP
# -background none preserves transparency
convert original.png -resize 300x300^ -gravity center -background none \
  -extent 300x300 -quality 80 output.webp
```

Check file size and transparency:
```bash
ls -lh assets/img/*.webp
identify -format "%[channels]\n" output.webp   # should include 'a' (alpha)
```

## 2. Write copyright / authorship metadata

```bash
sudo apt install libimage-exiftool-perl -y   # if not already installed
exiftool -ver                                # confirm install
```

**Stock/licensed images (e.g. Adobe Stock via Adobe Express):**
```bash
exiftool -overwrite_original \
  -Copyright="Licensed via Adobe Stock/Adobe Express - Photo by OneLineStock" \
  -Credit="OneLineStock / stock.adobe.com" \
  -Artist="OneLineStock" \
  assets/img/hero-image.webp
```

**Original assets you own (e.g. logo):**
```bash
exiftool -overwrite_original \
  -Copyright="© CDWF - All rights reserved" \
  -Artist="CDWF" \
  assets/img/CDWF-dpv2.webp
```

Verify it was written:
```bash
exiftool assets/img/hero-image.webp | grep -i "copyright\|credit\|artist"
```

⚠️ **WebP caveat:** metadata support depends on the WebP container format
(VP8 vs VP8L vs VP8X) — if tags don't show up after writing, check
exiftool's WebP-specific notes; converting from a format with more
reliable EXIF support before the WebP conversion is a common workaround.

`-overwrite_original` skips creating a `filename.webp_original` backup
copy. Omit it if you'd rather keep backups and delete them manually later.

## 3. Add to the `<picture>` tag with correct priority

```html
<picture>
  <source srcset="{{ '/assets/img/hero-image.webp' | relative_url }}" type="image/webp">
  <img src="{{ '/assets/img/hero-image.png' | relative_url }}"
       alt="Descriptive alt text"
       width="1200" height="600"
       fetchpriority="high"
       class="responsive">
</picture>
```

Only the actual LCP (hero) image gets `fetchpriority="high"`. Every other
image gets `loading="lazy"` instead.

## 4. Update the credits page

Add or confirm an entry for the new asset in `credits.md` under
**Design & stock assets**, **Photographs and logo**, or **Icons** as
appropriate — see that file for the exact format used on this site.

## 5. Test before pushing

```bash
bundle exec jekyll build
bundle exec jekyll serve --livereload
# visit http://127.0.0.1:4000 and check the image loads, alt text is correct
```

Then run Lighthouse locally to confirm LCP/CLS aren't regressed:
```bash
npm install -g lighthouse
lighthouse http://127.0.0.1:4000 --view
```