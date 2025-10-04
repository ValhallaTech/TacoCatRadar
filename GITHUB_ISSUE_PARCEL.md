# Modernize build process: Add Parcel bundler with Yarn PnP

**Labels:** `enhancement`, `build-process`

---

## Summary
Modernize the TacoCatRadar build process by adding Parcel 2 bundler and switching to Yarn Plug'n'Play (PnP) mode.

## Context
Following the migration from npm + NuGet to Yarn Modern 4.10.3, we need to set up a proper build process to:
- Enable Yarn PnP for faster installs and zero-install capability
- Prepare for Bootstrap 5+ upgrade (issue #5)
- Modernize the development workflow
- Optimize production builds

## Current State
- ? Migrated all JavaScript dependencies to Yarn Modern 4.10.3
- ? Dependencies: Bootstrap 4.5.3, jQuery 3.5.1, Popper.js 1.16.1, confetti-js, sweetalert
- ?? Currently using node_modules mode for static file serving
- ?? No build process - serving raw vendor files from node_modules

## Proposed Changes

### 1. Switch to Yarn PnP
- Remove `nodeLinker: node-modules` from .yarnrc.yml
- Enable Plug'n'Play for faster installs and zero-install capability
- Remove node_modules folder (will be in .gitignore)

### 2. Install Parcel 2 Bundler
```bash
yarn add --dev parcel
```

**Why Parcel?**
- ? Zero configuration required
- ? Native Yarn PnP support
- ? Uses HTML as entry point (works with our existing structure)
- ? Built-in dev server with HMR
- ? Automatic dependency resolution
- ? Production optimization out of the box

### 3. Update Project Structure

**Add build scripts to package.json:**
```json
{
  "scripts": {
    "dev": "parcel serve index.html Solve.html Code.html",
    "build": "parcel build index.html Solve.html Code.html --dist-dir dist",
    "clean": "rm -rf dist .parcel-cache"
  }
}
```

**Update HTML files:**
Convert script tags to use ES modules and let Parcel handle bundling:

```html
<!-- Before -->
<script src="node_modules/jquery/dist/jquery.min.js"></script>
<script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

<!-- After -->
<script type="module" src="./Scripts/Palindrome.js"></script>
```

**Update Scripts/Palindrome.js:**
```javascript
// Import dependencies
import 'bootstrap';
import $ from 'jquery';
import confetti from 'confetti-js';
import swal from 'sweetalert';

// Existing palindrome logic...
```

### 4. Update .gitignore
```gitignore
# Parcel
.parcel-cache/
dist/

# Yarn PnP (update existing section)
.pnp.*
.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
```

### 5. Integrate with .NET Framework 4.8
- Configure Parcel output directory to match .NET static file serving
- Update Web.config if needed for new file paths
- Ensure .csproj includes built files

## Benefits
- ?? **Faster installs** - PnP resolves dependencies without extraction
- ?? **Zero config** - Parcel works out of the box
- ?? **Hot reload** - Instant development feedback
- ?? **Optimized builds** - Minification, tree-shaking, code-splitting
- ?? **Cleaner repo** - No node_modules folder
- ? **Bootstrap 5+ ready** - Makes issue #5 easier to implement
- ?? **Zero-installs** - Optional: commit .yarn/cache for instant CI/CD

## Files to Modify
- [ ] .yarnrc.yml (remove nodeLinker setting)
- [ ] package.json (add Parcel + scripts)
- [ ] index.html (update script references)
- [ ] Solve.html (update script references)
- [ ] Code.html (update script references)
- [ ] Scripts/Palindrome.js (add ES module imports)
- [ ] .gitignore (add Parcel cache and dist folders)
- [ ] TacoCatRadar.csproj (include built files if needed)
- [ ] YARN_MIGRATION.md (update with Parcel setup)

## Implementation Steps
1. Switch to Yarn PnP mode
2. Install Parcel as dev dependency
3. Update HTML files for module imports
4. Refactor Palindrome.js to use ES6 imports
5. Test dev server with `yarn dev`
6. Test production build with `yarn build`
7. Update documentation

## Testing Checklist
- [ ] `yarn install` works with PnP
- [ ] `yarn dev` starts development server
- [ ] Palindrome detection works in dev mode
- [ ] All pages load correctly
- [ ] Bootstrap styles apply
- [ ] JavaScript interactions work
- [ ] Production build completes successfully
- [ ] Built files work when served by .NET app

## Related Issues
- Prerequisite for #5 (Bootstrap upgrade)
- Enables modern JavaScript workflows
- Part of ongoing modernization effort

## Documentation
Update YARN_MIGRATION.md with:
- Parcel setup instructions
- Build script usage
- Development workflow
- Production deployment

---

**Priority:** High  
**Type:** Enhancement / Infrastructure  
**Related:** #5
