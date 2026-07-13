# Contributing to PostDoc Potential

Thanks for your interest in contributing! This project is built by and for early-career researchers, so contributions from the community — content fixes, new resources, team profiles, bug fixes, or performance improvements — are welcome.

_This guide covers everything from setting up the project locally to opening a pull request._

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Ways to Contribute](#ways-to-contribute)
  - [Reporting Bugs or Issues](#reporting-bugs-or-issues)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Content Contributions](#content-contributions)
  - [Code Contributions](#code-contributions)
- [Contribution Process](#contribution-process)
  - [Prerequisites](#prerequisites)
  - [Local Setup](#local-setup)
  - [Running the Site Locally](#running-the-site-locally)
  - [Making Changes](#making-changes)
    - [Adding or Editing Content](#adding-or-editing-content)
    - [Updating Team Page](#updating-team-page)
    - [Adding Images](#adding-images)
    - [Editing Styles](#editing-styles)
  - [Style Rules](#style-rules)
  - [Submission Process](#submission-process)
    - [Branching Workflow](#branching-workflow)
    - [Testing Before You Push](#testing-before-you-push)
    - [Commit Message Guidelines](#commit-message-guidelines)
    - [Opening a Pull Request](#opening-a-pull-request)
- [Community Guidelines](#community-guidelines)
- [Questions or Need Help?](#questions-or-need-help)
- [Recognition](#recognition)
- [Security Issues](#security-issues)

---

## Code of Conduct

This project follows a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold it. Please report unacceptable behavior as described there.

## Ways to Contribute

You don't need to write code to contribute. Useful contributions include:

### Reporting Bugs or Issues

1. Check existing [issues](https://github.com/postDoc-potential/postdoc-potential.github.io/issues) to avoid duplicates.
2. Create a new issue with a clear title and description.
3. Include steps to reproduce the problem and any relevant screenshots.
4. Specify your environment (browser, OS, etc.).

### Suggesting Enhancements

1. Use the [Discussions](https://github.com/postDoc-potential/postdoc-potential.github.io/discussions) section to propose new ideas.
2. Clearly describe the enhancement and its benefits to the community.
3. Provide examples or mockups if applicable.
4. Engage with feedback from the community.

### Content Contributions

We welcome blog posts, resources, and guides related to postdoctoral research in Earth Science:

1. Create content that aligns with our mission.
2. Ensure accuracy and cite sources where applicable.
3. Follow our writing style guide (clear, accessible, and supportive in tone).
4. Submit via a pull request with a clear description.

### Code Contributions

Bug fixes, performance improvements, and new features are all welcome. See [Contribution Process](#contribution-process) below to get set up, then make and submit your changes.

## Contribution Process

### Prerequisites

Make sure you have the following installed:

- **Ruby + [Bundler](https://bundler.io/)** (for Jekyll)
- **Node.js 18+** (for PurgeCSS / Lighthouse / npm-based tooling)
- **[ImageMagick](https://imagemagick.org/)** and
  **[`cwebp`](https://developers.google.com/speed/webp/docs/cwebp)** (only
  needed if you're adding/processing images)
- **Git**

### Local Setup

1. **Fork** the repository on GitHub.
2. **Clone your fork:**
   ```bash
   git clone https://github.com/<your-username>/postdoc-potential.github.io.git
   cd postdoc-potential.github.io
   ```
3. **Add the upstream remote** so you can keep your fork in sync:
   ```bash
   git remote add upstream https://github.com/postDoc-potential/postdoc-potential.github.io.git
   git remote -v   # confirm both origin (your fork) and upstream are set
   ```
4. **Install dependencies:**
   ```bash
   bundle install
   ```

### Running the Site Locally

Serve the site with live reload, matching GitHub's actual build:

```bash
bundle exec jekyll serve --livereload
# visit http://127.0.0.1:4000
```

For faster rebuilds on save (only rebuilds changed files):

```bash
bundle exec jekyll serve --livereload --incremental
```

**Note:** the local server must stay running in its terminal window the entire time you're previewing — closing that terminal stops the server.

### Making Changes

#### Adding or Editing Content

- **Homepage:** edit `index.md`.
- **Team page:** edit `team.md`.
- **New pages:** add a `.md` file with front matter (`title`, `description`, `permalink`, `layout`), following the pattern used in existing pages.
- Front matter `title:` on a page **overrides** `site.title` from `_config.yml` — leave page-level `title:` out if you want the SEO-optimized site title to display instead.

#### Updating Team Page

If you are part of our active contributing team, you can add yourself to `team.md`:

1. Add your entry to `team.md`, following the format of existing entries.
2. If including a photo, follow the [image pipeline](#adding-images) below — including writing your own copyright/authorship metadata.
3. Open a pull request (see [below](#opening-a-pull-request)).

#### Adding Images

Images should go through this pipeline before being committed:

1. **Resize** with ImageMagick to the actual display size (2x for retina), preserving transparency where needed.
2. **Write copyright/authorship metadata** with `exiftool` — required for stock/licensed images, and good practice for original assets and team photos too. Do this **before** converting to WebP (`exiftool` can't write WebP).
3. **Convert to WebP** with `cwebp -metadata all` (not the VS Code WebP Converter extension by default — it strips metadata unless configured otherwise).
4. **Use a `<picture>` tag** with a WebP source and a fallback `<img>`, explicit `width`/`height` (no units), and correct loading priority:
   - Only the true above-the-fold hero image gets `fetchpriority="high"`.
   - Every other image gets `loading="lazy"`.
5. **Update `credits.md`** with the new asset's source/license info.

#### Editing Styles

Edit SCSS partials under `_sass/`, **not** compiled CSS directly — Jekyll compiles SCSS on build, and hand-edited compiled CSS will be overwritten.

### Style Rules

- Use `width`/`height` attributes **without units** on `<img>` tags (e.g. `width="150"`, not `width="150px"`).
- Namespace any custom CSS classes (e.g. `.custom-modal`) so they don't collide with framework classes like Bootstrap's `.modal`.
- Keep the `{% seo %}` tag in layouts rather than hand-writing `<title>`, Open Graph, or Twitter card tags.
- If you add a new top-level folder for tooling/scripts (not site content), add it to the `exclude:` list in `_config.yml` so it isn't published to `_site`.

### Submission Process

#### Branching Workflow

Never commit directly to `main`. Always work from a feature branch:

```bash
# Sync your fork with upstream first
git checkout main
git fetch upstream
git merge upstream/main

# Create a feature branch
git checkout -b your-feature-branch
```

Use a descriptive branch name, e.g. `fix-broken-survey-link`, `add-team-member-jane-doe`, or `improve-lcp-hero-image`.

Make your changes, then:

```bash
git add .
git commit -m "Describe your change"
git push origin your-feature-branch
```

Nothing goes live from your branch — only changes merged into whichever branch is configured under **Settings → Pages** on the upstream repo (currently `main`) get deployed.

#### Testing Before You Push

1. Build and serve locally:
   ```bash
   bundle exec jekyll build
   bundle exec jekyll serve --livereload
   ```
2. Check the pages you touched render correctly, including on mobile (Chrome DevTools device toolbar).
3. Run Lighthouse to confirm Core Web Vitals haven't regressed:
   ```bash
   npm install -g lighthouse
   lighthouse http://127.0.0.1:4000 --view
   ```
   Targets: FCP < 1.8s · LCP < 2.5s · TBT 0–200ms · CLS < 0.1 · Speed Index < 3.4s.

#### Commit Message Guidelines

- Use a short, descriptive summary in the imperative mood (e.g. "Fix broken survey link", not "Fixed" or "Fixes").
- Keep the first line under ~72 characters; add more detail in the body if needed.

#### Opening a Pull Request

1. Push your branch to your fork.
2. Open a pull request against `postDoc-potential/postdoc-potential.github.io:main`.
3. Fill in the PR template (if present) or briefly describe:
   - What the change does and why
   - How you tested it locally
   - Any screenshots (for visual changes)
4. Link any related issue (e.g. `Closes #12`).
5. A maintainer will review your PR, may request changes, and will merge it once approved. It will go live automatically once merged into the branch configured under **Settings → Pages**.

## Community Guidelines

- Be respectful and inclusive
- Assume good intentions
- Provide constructive feedback
- Help others learn and grow
- Follow our [Code of Conduct](CODE_OF_CONDUCT.md)

## Questions or Need Help?

- Check our [GitHub Discussions](https://github.com/postDoc-potential/postdoc-potential.github.io/discussions)
- Review existing [documentation](https://postdoc-potential.github.io/)
- Open an issue with your question

## Recognition

Contributors will be recognized in:
- Our [README](README.md) contributors section
- Acknowledgments in related documentation
- Community announcements

## Security Issues

**Do not** open a public issue for security vulnerabilities. See [SECURITY.md](SECURITY.md) for how to report these privately.
