# TacoCat Radar - Project Documentation

## Overview
This document consolidates all project documentation including setup, migration notes, and development guidelines.

## Quick Start

### Installation
```bash
yarn install
yarn dev
```

### Build for Production
```bash
yarn build
```

## Features Implemented

### Core Functionality
- ? Palindrome detection (case-insensitive)
- ? Input validation with visual feedback
- ? Confetti celebration animation
- ? Real-time string reversal display

### UI/UX Enhancements
- ? Bootstrap 5.3.3 responsive design
- ? Custom gradient theme (purple/pink)
- ? Google Fonts (Bangers, Righteous)
- ? Material Design navbar
- ? Loading states on button
- ? Smooth animations

### Dark Mode
- ? Neon/cyberpunk themed dark mode
- ? Hybrid Bootstrap + CSS variables
- ? localStorage persistence
- ? System preference detection
- ? No FOUC (Flash of Unstyled Content)
- ? Font Awesome icons for toggle

### Accessibility
- ? WCAG 2.1 compliant
- ? ARIA labels and roles
- ? Keyboard navigation
- ? Skip links
- ? Screen reader support
- ? Focus indicators
- ? High contrast mode support
- ? Reduced motion support

## Tech Stack

### Frontend
- HTML5 (semantic markup)
- CSS3 (custom properties, gradients)
- JavaScript ES6+ (modules, async/await)
- Bootstrap 5.3.3
- Google Fonts (Bangers, Righteous)

### Libraries
- @fortawesome/fontawesome-free: 6.7.2
- @popperjs/core: 2.11.8
- bootstrap: 5.3.3
- canvas-confetti: 1.9.3
- prismjs: 1.29.0
- sweetalert2: 11.14.5

### Development Tools
- Parcel 2.16.0 (bundler)
- Yarn Modern 4.10.3 (package manager)
- ESLint 9.17.0 (linter)
- rimraf 6.0.1 (cross-platform rm)

### Backend
- .NET Framework 4.8

## Migration History

### From npm to Yarn Modern (4.10.3)
- Migrated all packages from npm/NuGet to Yarn
- Removed node_modules in favor of Yarn PnP
- Updated .gitignore for Yarn artifacts

### From jQuery to Vanilla JS
- Removed jQuery dependency
- Refactored to modern ES6+ JavaScript
- Improved performance

### Build Process Modernization
- Added Parcel bundler for zero-config builds
- Implemented ES6 module imports
- Optimized for production with minification
- Added hot module reloading for dev

## Project Structure

```
TacoCatRadar/
??? index.html                 # Main palindrome checker
??? solve.html                 # Exercise explanation
??? code.html                  # Source code display
??? Scripts/
?   ??? Palindrome.js         # Main logic + validation
?   ??? DarkModeToggle.js     # Theme switching
?   ??? CodeDisplay.js        # Syntax highlighting
??? styles/
?   ??? custom.css            # Custom styles + theme
??? images/                   # Favicons
??? Content/                  # Old Bootstrap (ignore)
??? package.json              # Dependencies
??? .yarnrc.yml              # Yarn config
??? .eslintrc.json           # Linter config
??? .gitignore               # Git exclusions
```

## Available Scripts

### Development
```bash
yarn dev        # Start dev server (localhost:1234)
yarn build      # Production build
yarn clean      # Remove build artifacts
yarn lint       # Run ESLint
```

## Configuration

### Parcel Entry Points
- index.html
- solve.html
- code.html

### Output Directory
- `dist/` - Production builds
- `.parcel-cache/` - Build cache

## Best Practices Implemented

### Code Quality
1. ESLint for code standards
2. ES6 modules for organization
3. Async/await for async operations
4. DRY principle (CSS variables)
5. Semantic HTML

### Performance
1. Parcel optimization (minification, tree-shaking)
2. CSS custom properties for theme switching
3. Lazy loading where possible
4. Efficient event listeners

### Accessibility
1. ARIA labels on all interactive elements
2. Skip links for keyboard users
3. Proper heading hierarchy
4. Color contrast ratios
5. Keyboard navigation
6. Screen reader announcements

### User Experience
1. Loading states for async operations
2. Visual validation feedback
3. Smooth transitions
4. No FOUC on theme switch
5. Responsive design
6. Error prevention

## Known Issues
None! ??

## Future Enhancements
- [ ] PWA support (service worker, manifest)
- [ ] Palindrome history (localStorage)
- [ ] Share functionality
- [ ] Advanced mode (ignore spaces/punctuation)
- [ ] Random palindrome generator
- [ ] Multi-language support

## Author
Fred Smith III
- GitHub: @ValhallaTech
- Repository: https://github.com/ValhallaTech/TacoCatRadar

## License
MIT License

---
Last Updated: 2025-01-03
