# Image Workflow

A repeatable checklist for preparing images before adding them to the site.

## Contents

- [1. Resize (stay in PNG for now)](#1-resize)
- [2. Write copyright / authorship metadata](#2-metadata)
  - [Stock/licensed images](#stock-images)
  - [Shortcut — reuse tags via an argument file](#arg-file)
  - [Where to keep the credit files in the repo](#file-location)
  - [Original assets you own (e.g. logo)](#owned-assets)
  - [Team/profile photos](#profile-photos)
- [3. Convert to WebP (preserving metadata)](#3-convert)
  - [Alternative: convert via VS Code (no separate terminal command)](#gui-convert)
- [4. Add to the `<picture>` tag with correct priority](#4-picture-tag)
- [5. Update the credits page](#5-credits-page)
- [6. Test before pushing](#6-test)

---

## 1. Resize (stay in PNG for now)
{: #1-resize}

```bash
sudo apt install imagemagick -y

# Resize to 2x display size (retina-ready)
# -background none preserves transparency
convert original.png -resize 300x300^ -gravity center -background none \
  -extent 300x300 resized.png
```

Check transparency was preserved:
```bash
identify -format "%[channels]\n" resized.png   # should include 'a' (alpha)
```

⚠️ **Order matters:** write metadata to the PNG *before* converting to
WebP. `exiftool` can read WebP files but cannot write to them — if you
convert first, any metadata command afterward will fail with
`Writing of WEBP files is not yet supported`.

## 2. Write copyright / authorship metadata
{: #2-metadata}

```bash
sudo apt install libimage-exiftool-perl -y   # if not already installed
exiftool -ver                                # confirm install
```

### Stock/licensed images (e.g. Adobe Stock via Adobe Express)
{: #stock-images}

```bash
exiftool -overwrite_original \
  -Copyright="Licensed via <platform-name> - Photo by <source-name>" \
  -Credit="<source-name> / <platform-domain>" \
  -Artist="<source-name>" \
  -ImageDescription="Original photo by <source-name>, modified by <your-name> for <site-name>" \
  resized.png
```

### Shortcut — reuse tags via an argument file (`-@`)
{: #arg-file}

Instead of retyping the same flags for every image from the same source,
save them once in a plain text file and pass it with `-@`:

`credit-<source-name>.txt`:
```
-overwrite_original
-Copyright=Licensed via <platform-name> - Photo by <source-name>
-Credit=<source-name> / <platform-domain>
-Artist=<source-name>
-ImageDescription=Original photo by <source-name>, modified by <your-name> for <site-name>
```

Then just run:
```bash
exiftool -@ scripts/exif-credits/credit-<source-name>.txt resized.png
```

Make one arg file per source/owner since each has different credit info.
Note: each line in the arg file is treated as a single argument as-is —
don't wrap values in quotes the way you would on the command line, or the
literal quote characters will end up in the metadata.

### Where to keep the credit files in the repo
{: #file-location}

These `.txt` files are a build/tooling helper, not site content, so keep
them out of anything Jekyll publishes:
```
your-repo/
├── scripts/
│   └── exif-credits/
│       ├── credit-<source-name>.txt
│       ├── credit-<owner-name>.txt
│       └── credit-<person-name>.txt   # one per team member
```
Exclude the folder from the Jekyll build in `_config.yml` so it's
versioned in the repo but never copied into `_site`:
```yaml
exclude:
  - scripts/
```

### Original assets you own (e.g. logo)
{: #owned-assets}

```bash
exiftool -overwrite_original \
  -Copyright="© <owner-name> - All rights reserved" \
  -Artist="<owner-name>" \
  resized.png
```

### Team/profile photos
{: #profile-photos}

```bash
exiftool -overwrite_original \
  -Copyright="© <person-name> - used with permission" \
  -Artist="<person-name>" \
  resized.png
```

If a professional photographer (not the person themself) took the photo,
credit them instead:
```bash
exiftool -overwrite_original \
  -Copyright="© <person-name> - used with permission" \
  -Artist="<photographer-name>" \
  -Credit="Photo by <photographer-name>" \
  resized.png
```

Repeat with each person's own name/details — one arg file per person
(`credit-<person-name>.txt`) works well here too.

## 3. Convert to WebP (preserving metadata)
{: #3-convert}

`exiftool` can't write WebP, so convert with `cwebp` instead of
ImageMagick's `convert` at this stage — `cwebp` can carry metadata over
from the source file:

```bash
sudo apt install webp -y

cwebp -q 80 -metadata all resized.png -o assets/img/<filename>.webp
```

Verify it made it into the WebP (exiftool CAN read WebP, just not write it):
```bash
exiftool assets/img/<filename>.webp | grep -i "copyright\|credit\|artist"
```

Check the final file size:
```bash
ls -lh assets/img/*.webp
```

### Alternative: convert via VS Code (no separate terminal command)
{: #gui-convert}

If you'd rather not run `cwebp` manually, the **WebP Converter** extension
for VS Code adds a right-click "Convert to WebP" option directly in the
file explorer panel.

- Install from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=axelrindle.webp-converter)
  (`axelrindle.webp-converter`)
- Right-click a PNG, JPG, or TIFF file in VS Code's Explorer sidebar →
  **Convert to WebP**
- The output file appears in the same folder

⚠️ **This extension does not preserve metadata by default.** Under the
hood it runs `cwebp -preset photo <input> -o <output>.webp` — without
the `-metadata all` flag our CLI command above uses — so any EXIF data
you wrote in step 2 will likely be stripped during conversion. After
using this extension, always verify with:
```bash
exiftool assets/img/<filename>.webp | grep -i "copyright\|credit\|artist"
```
If the fields are missing, use the `cwebp -metadata all` command from
above instead, which reliably carries metadata through.

## 4. Add to the `<picture>` tag with correct priority
{: #4-picture-tag}

```html
<picture>
  <source srcset="{{ '/assets/img/<filename>.webp' | relative_url }}" type="image/webp">
  <img src="{{ '/assets/img/<filename>.png' | relative_url }}"
       alt="Descriptive alt text"
       width="1200" height="600"
       fetchpriority="high"
       class="responsive">
</picture>
```

Only the actual LCP (hero) image gets `fetchpriority="high"`. Every other
image gets `loading="lazy"` instead.

## 5. Update the credits page
{: #5-credits-page}

Add or confirm an entry for the new asset in `credits.md` under
**Design & stock assets**, **Photographs and logo**, or **Icons** as
appropriate — see that file for the exact format used on this site.

## 6. Test before pushing
{: #6-test}

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