# 🌮🐱 TacoCatRadar

> A browser-based palindrome checker that celebrates when "tacocat" — a palindrome — reads the same forwards and backwards.

[![Netlify Status](https://api.netlify.com/api/v1/badges/f5135f29-2a4b-401f-893c-5f11d7c5441e/deploy-status)](https://app.netlify.com/projects/fs3tacocatradar/deploys)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-24.15.0-brightgreen.svg)](.nvmrc)
[![Yarn](https://img.shields.io/badge/yarn-4.14.1-2c8ebb.svg)](.yarnrc.yml)

## Table of Contents

- [Background](#background)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Install](#install)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Background

TacoCatRadar was built as an interactive, polished demonstration of fundamental string-manipulation logic wrapped in a production-quality frontend. The name comes from one of the internet's favourite palindromes: **tacocat**. Enter any word or phrase and the app instantly checks whether it reads identically forwards and backwards — complete with a confetti shower when you find one.

The project showcases:
- Clean, accessible HTML5/CSS3/JavaScript with no framework overhead
- A Parcel-powered build pipeline with ES modules
- Dark mode with system-preference detection and zero flash of unstyled content
- Multi-page static hosting optimised for Netlify

## Features

### Core Functionality
- ✅ Palindrome detection (case-insensitive)
- ✅ Input validation with visual feedback
- ✅ Confetti celebration animation on success
- ✅ Real-time reversed-string display

### UI / UX
- ✅ Bootstrap 5.3.8 responsive design
- ✅ Custom gradient theme (purple/pink)
- ✅ Google Fonts (Bangers, Righteous)
- ✅ Material Design navbar
- ✅ Loading states on button
- ✅ Smooth animations

### Dark Mode
- ✅ Neon/cyberpunk-themed dark mode
- ✅ Hybrid Bootstrap + CSS custom-property approach
- ✅ `localStorage` persistence across sessions
- ✅ System preference detection (`prefers-color-scheme`)
- ✅ No FOUC (Flash of Unstyled Content)
- ✅ Font Awesome icons for the toggle

### Accessibility
- ✅ WCAG 2.1 compliant
- ✅ ARIA labels and roles
- ✅ Keyboard navigation
- ✅ Skip links
- ✅ Screen reader support
- ✅ Focus indicators
- ✅ High-contrast mode support
- ✅ Reduced-motion support

## Tech Stack

### Frontend
- HTML5 (semantic markup)
- CSS3 (custom properties, gradients)
- JavaScript ES6+ (modules, async/await)
- [Bootstrap](https://getbootstrap.com) 5.3.8
- Google Fonts (Bangers, Righteous)

### Libraries

| Package | Version |
|---|---|
| `@fortawesome/fontawesome-free` | 7.2.0 |
| `@popperjs/core` | 2.11.8 |
| `bootstrap` | 5.3.8 |
| `canvas-confetti` | 1.9.4 |
| `prismjs` | 1.30.0 |
| `sweetalert2` | 11.26.24 |

### Development Tools

| Tool | Version |
|---|---|
| [Parcel](https://parceljs.org) (bundler) | 2.16.4 |
| [Yarn](https://yarnpkg.com) (package manager) | 4.14.1 |
| [ESLint](https://eslint.org) (linter) | 10.2.1 |
| `rimraf` (cross-platform `rm`) | 6.1.3 |
| `@eslint/js` | 10.0.1 |
| `globals` | 17.5.0 |
| `@parcel/packager-raw-url` | 2.16.4 |
| `@parcel/transformer-webmanifest` | 2.16.4 |

## Install

### Prerequisites

- [Node.js](https://nodejs.org) 24.15.0 (see [`.nvmrc`](.nvmrc))
- [Yarn](https://yarnpkg.com) 4.14.1 (see [`package.json`](package.json) `packageManager` field)

```bash
# Install the correct Node.js version (if using nvm)
nvm install
nvm use

# Enable Corepack so Yarn is available
corepack enable
```

### Installation

```bash
# Clone the repository
git clone https://github.com/ValhallaTech/TacoCatRadar.git
cd TacoCatRadar

# Install dependencies
yarn install
```

## Usage

### Start the development server

```bash
yarn dev
```

Opens three pages at `http://localhost:1234`:
- `/index.html` — palindrome checker
- `/solve.html` — exercise explanation
- `/code.html` — source-code viewer with syntax highlighting

### Available Scripts

```bash
yarn dev     # Start Parcel dev server with hot reload
yarn build   # Production build → dist/
yarn clean   # Remove dist/ and .parcel-cache/
yarn lint    # Run ESLint on JS source files
```

### Using the App

1. Type a word or phrase into the input field on the home page.
2. Click **Check** (or press Enter).
3. The app displays the reversed string and tells you whether it's a palindrome.
4. If it is a palindrome, enjoy the confetti! 🎉
5. Toggle the 🌙 / ☀️ icon in the navbar to switch between dark and light mode.

## Project Structure

```
TacoCatRadar/
├── src/
│   ├── index.html            # Main palindrome checker page
│   ├── solve.html            # Exercise explanation page
│   ├── code.html             # Source code display page
│   ├── js/
│   │   ├── Palindrome.js     # Palindrome logic, validation, confetti
│   │   ├── DarkModeToggle.js # Theme switching with localStorage
│   │   └── CodeDisplay.js    # Syntax highlighting via Prism.js
│   ├── css/
│   │   └── custom.css        # Custom styles and gradient theme
│   ├── images/               # Favicons and image assets
│   ├── site.webmanifest      # Web app manifest
│   └── robots.txt            # Crawler instructions
├── netlify.toml              # Netlify build and redirect config
├── package.json              # Dependencies and scripts
├── eslint.config.js          # ESLint flat config
├── .nvmrc                    # Node.js version pin
├── .yarnrc.yml               # Yarn config
├── renovate.json             # Renovate Bot config
└── NETLIFY_DEPLOYMENT.md     # Detailed deployment guide
```

## Configuration

### Environment Variables

Copy [`.env.example`](.env.example) and adjust as needed:

```bash
cp .env.example .env
```

### ESLint

Linting is configured in [`eslint.config.js`](eslint.config.js) (ESLint flat config format). The `lint` script covers the three JS source modules:

```
src/js/Palindrome.js
src/js/DarkModeToggle.js
src/js/CodeDisplay.js
```

### Parcel

Parcel requires no extra configuration file. Entry points and output directory are passed directly via the scripts in `package.json`:

- **Entry points:** `src/index.html`, `src/solve.html`, `src/code.html`
- **Output directory:** `dist/`
- **Cache directory:** `.parcel-cache/`

### Renovate

Dependency updates are automated by [Renovate Bot](https://docs.renovatebot.com) via [`renovate.json`](renovate.json).

## Deployment

This app is optimised for static hosting. The recommended platform is **Netlify**.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ValhallaTech/TacoCatRadar)

See [NETLIFY_DEPLOYMENT.md](NETLIFY_DEPLOYMENT.md) for full step-by-step instructions covering:
- One-click deploy via the button above
- Manual deploy via Netlify CLI
- Build settings, environment variables, and redirect rules

## Contributing

PRs are welcome! Please open an [issue](https://github.com/ValhallaTech/TacoCatRadar/issues) first to discuss what you would like to change.

See [CONTRIBUTING.md](https://github.com/ValhallaTech/.github/blob/main/CONTRIBUTING.md) for our branch naming conventions, commit message standard (Conventional Commits), and PR process.

## License

[MIT](LICENSE) © Fred Smith III ([@ValhallaTech](https://github.com/ValhallaTech))

