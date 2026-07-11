# PostDoc Potential Website

[![Live Website](https://img.shields.io/badge/Website-Live-blue?style=flat-square)](https://postdoc-potential.github.io/)
[![License](https://img.shields.io/github/license/postDoc-potential/postdoc-potential.github.io?style=flat-square)](LICENSE)

This is the source repository of [postdoc-potential.github.io](https://postdoc-potential.github.io/), a platform created for and by early-career researchers navigating postdoctoral research positions in Earth Sciences.

![Site preview](docs/screenshots/site-preview.png)

## Table of Contents

- [Features](#features)
- [Built With](#built-with)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
- [Local Development](#local-development)
- [Website Performance](#website-performance)
- [Site Creator](#site-creator)
- [Contributing](#to-become-a-contributor)
- [Credits, License and Privacy](#credits-license-and-privacy)
- [Reporting an Issue](#reporting-an-issue)

## Features

The main features of our [website](https://postdoc-potential.github.io/) are:

- Open-sourced survey with a Google API plugin for the data storage backend
- Direct messaging option using [Web3Forms](https://web3forms.com/)
- Direct links to team members' and collaborators' profiles
- Easily customisable layout for future additions

## Built With

- **[Jekyll](https://jekyllrb.com/)** — static site generator (via the [`jekyll-theme-minimal`](https://github.com/pages-themes/minimal) base theme)
- **Ruby / Bundler** — Jekyll's runtime, managed via `Gemfile` / `Gemfile.lock` (see `.ruby-version` for the required Ruby version)
- **GitHub Pages** — hosting and deployment, with GitHub Actions CI (`.github/workflows/ci.yml`) and Dependabot for dependency updates
- **HTML / SCSS / CSS** — page markup and styling (`_layouts/`, `_includes/`, `_sass/`, `assets/css/`)
- **JavaScript** — front-end interactivity, e.g. popups and form handling (`assets/js/`)
- **[SurveyJS](https://surveyjs.io/)** — used to make the survey form in `/survey/` (`survey.json`, `theme.js`)
- **Google Sheets/Forms API** — survey data storage backend
- **[Web3Forms](https://web3forms.com/)** — contact / direct messaging form handling

## Repository Structure

This is a Jekyll site. Key folders and files (build output in `_site/` and the `_archive/` folder of deprecated files are omitted for brevity):

```
postdoc-potential.github.io/
├── _layouts/
│   └── default.html          # Base page layout
├── _includes/                # Reusable partials
│   ├── header.html
│   ├── footer.html
│   ├── navigation.html
│   ├── hero.html
│   ├── hero-CTA.html
│   └── popup.html
├── _sass/
│   └── jekyll-theme-minimal.scss   # Theme styling
├── assets/
│   ├── css/style.scss        # Main stylesheet — edit here for site-wide style changes
│   ├── img/                  # All images used in the site
│   └── js/                   # Reusable JavaScripts
├── survey/                   # Survey page (HTML/JS/CSS + survey.json)
├── docs/
│   └── image_workflow.md
├── scripts/exif-credits/     # Image credit/attribution files
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── workflows/ci.yml      # CI
├── _config.yml               # Jekyll site config
├── Gemfile / Gemfile.lock    # Ruby dependencies
├── .ruby-version
├── index.md
├── team.md
├── contact.html
├── credits.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
└── README.md
```


## Getting Started

1. **Meet the Team**: Check out our [Team Page](https://postdoc-potential.github.io/team) to see who's contributed and shared their experiences.
2. **Take our survey**: Participate in our [survey](https://postdoc-potential.github.io/survey/) by sharing your experience.
3. **Share Your Story**: Want to collaborate or volunteer? Visit [contact](https://postdoc-potential.github.io/contact) by sending an email or dropping a direct message.

## Local Development

This site runs on Jekyll. To preview it locally:

```bash
git clone https://github.com/postDoc-potential/postdoc-potential.github.io.git
cd postdoc-potential.github.io

# Install the Ruby version specified in .ruby-version, then:
bundle install
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`. Jekyll will rebuild automatically as you edit files (run with `--livereload` for auto-refresh in the browser).

> If you don't have Ruby/Bundler set up yet, see the [GitHub Pages local Jekyll setup guide](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll) for OS-specific installation steps.

## Website Performance

[![Carbon Rating](https://img.shields.io/badge/Website%20Carbon-View%20Report-2E8B57?style=flat-square)](https://www.websitecarbon.com/website/postdoc-potential-github-io/)

[![Performance](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/SRituparna/7f89587c48badb08ea3dff70b82d5e4c/raw/performance.json&logo=lighthouse&label=Performance&labelColor=333333)](https://htmlpreview.github.io/?https://gist.githubusercontent.com/SRituparna/7f89587c48badb08ea3dff70b82d5e4c/raw/report.html)
[![Accessibility](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/SRituparna/7f89587c48badb08ea3dff70b82d5e4c/raw/accessibility.json&logo=lighthouse&label=Accessibility&labelColor=333333)](https://htmlpreview.github.io/?https://gist.githubusercontent.com/SRituparna/7f89587c48badb08ea3dff70b82d5e4c/raw/report.html)
[![Best Practices](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/SRituparna/7f89587c48badb08ea3dff70b82d5e4c/raw/best_practices.json&logo=lighthouse&label=Best-practices&labelColor=333333)](https://htmlpreview.github.io/?https://gist.githubusercontent.com/SRituparna/7f89587c48badb08ea3dff70b82d5e4c/raw/report.html)
[![SEO](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/SRituparna/7f89587c48badb08ea3dff70b82d5e4c/raw/seo.json&logo=lighthouse&label=SEO&labelColor=333333)](https://htmlpreview.github.io/?https://gist.githubusercontent.com/SRituparna/7f89587c48badb08ea3dff70b82d5e4c/raw/report.html)

## Site Creator

**Rituparna Sarkar**
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SRituparna)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rituparnasindia)

## To become a contributor

Please see [CONTRIBUTING.md](https://github.com/postDoc-potential/postdoc-potential.github.io/blob/main/CONTRIBUTING.md) for getting started with contributions.
Make sure that you follow the [CODE_OF_CONDUCT.md](https://github.com/postDoc-potential/postdoc-potential.github.io/blob/main/CODE_OF_CONDUCT.md) while contributing and engaging in discussions.

When contributing, please first discuss the change you wish to make via an issue on this repository before making the actual change.

## Credits, License and Privacy

For full credits and our privacy policy, read our [Credits, License and Privacy Statement](https://github.com/postDoc-potential/postdoc-potential.github.io/blob/main/credits.md).

## Reporting an Issue

If you experienced a bug while visiting our website, or want to recommend a feature, feel free to [open an issue](https://github.com/postDoc-potential/postdoc-potential.github.io/issues/new). Check our [Security Policy](https://github.com/postDoc-potential/postdoc-potential.github.io/blob/main/SECURITY.md) for reporting a security vulnerability.