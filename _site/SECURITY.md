# Security Policy

## Supported Versions

This repository powers a static [GitHub Pages site](https://postdoc-potential.github.io) and does not use formal versioned releases.
Security fixes are applied to the `main` branch only, which is the version currently deployed at https://postdoc-potential.github.io.

| Branch  | Supported          |
| ------- | ------------------ |
| main    | :white_check_mark: |
| other   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in this repository (e.g., exposed credentials, a vulnerable dependency, or a misconfiguration that could compromise the site or its build process), please report it responsibly:

- **Preferred:** Open a [GitHub Security Advisory](../../security/advisories/new) for this repository. This is a private report visible only to the repository maintainers — it will not appear publicly, and no one else will be notified until you and the maintainers agree it's safe to disclose. To use it:
  1. Go to the repository's **Security** tab.
  2. Click **"Report a vulnerability"** (this button only appears once the maintainers have enabled private vulnerability reporting).
  3. Fill in a description of the issue, steps to reproduce, and its potential impact.
  4. Submit — the maintainers will be notified privately and can respond, ask questions, and coordinate a fix with you directly within that same private advisory thread.

  If the "Report a vulnerability" button is not visible, it means private reporting has not yet been enabled for this repository; in that case, use the alternative method below.
- **Alternative:** Open an issue without sensitive details and request a private contact channel.

Please do **not** publicly disclose sensitive details (e.g., leaked credentials) in a public GitHub issue.

We aim to acknowledge reports within 7 days and to release a fix or mitigation within 30 days, depending on severity.

## Scope

This policy covers:
- The source code and configuration in this repository
- The GitHub Actions workflows used to build/deploy the site
- Third-party dependencies (e.g., Jekyll themes, npm/Ruby packages) declared in this repo

It does **not** cover third-party services linked from the site content itself.
