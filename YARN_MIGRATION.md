# Yarn Migration Summary

## Migration Completed: npm + NuGet ? Yarn Modern 4.10.3

### Date: October 3, 2025

---

## What Was Migrated

### JavaScript Dependencies (from NuGet ? Yarn)
- ? **Bootstrap** 4.5.3
- ? **jQuery** 3.5.1
- ? **Popper.js** 1.16.1

### JavaScript Dependencies (from npm ? Yarn)
- ? **confetti-js** ^0.0.18

### New Dependencies Added
- ? **sweetalert** ^2.1.2 (was missing from package managers)

---

## File Changes

### Created/Modified
- ? `.yarnrc.yml` - Configured to use `node_modules` instead of PnP
- ? `package.json` - Added all JavaScript dependencies with `packageManager: "yarn@4.10.3"`
- ? `yarn.lock` - Yarn's dependency lock file
- ? `packages.config` - Removed JS libraries, kept only .NET packages

### Removed
- ? `package-lock.json` - Replaced by yarn.lock

### Updated
- ? `.gitignore` - Proper Yarn ignores already in place

---

## Package Locations (node_modules/)

All packages are now available in `node_modules/`:

### Bootstrap
- JS: `node_modules/bootstrap/dist/js/bootstrap.min.js`
- JS (bundle): `node_modules/bootstrap/dist/js/bootstrap.bundle.min.js`
- CSS: `node_modules/bootstrap/dist/css/bootstrap.min.css`

### jQuery
- JS: `node_modules/jquery/dist/jquery.min.js`
- JS (slim): `node_modules/jquery/dist/jquery.slim.min.js`

### Popper.js
- JS: `node_modules/popper.js/dist/umd/popper.min.js`

### sweetalert
- JS: `node_modules/sweetalert/dist/sweetalert.min.js`

### confetti-js
- JS: `node_modules/confetti-js/dist/index.min.js`

---

## Next Steps

### 1. Update HTML References (TODO)
You'll need to update your HTML files to reference the new locations:

**Current (Scripts folder):**
```html
<script src="Scripts/jquery-3.5.1.min.js"></script>
<script src="Scripts/bootstrap.min.js"></script>
<script src="Scripts/sweetalert.min.js"></script>
<script src="Scripts/confetti.min.js"></script>
```

**New (node_modules):**
```html
<script src="node_modules/jquery/dist/jquery.min.js"></script>
<script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
<script src="node_modules/sweetalert/dist/sweetalert.min.js"></script>
<script src="node_modules/confetti-js/dist/index.min.js"></script>
```

Or better yet, use a build process (webpack/parcel) to bundle these.

### 2. Future Bootstrap Upgrade
When ready to upgrade Bootstrap:
```bash
yarn add bootstrap@latest
```
Note: Bootstrap 5+ doesn't require jQuery or Popper.js

### 3. Remove Old Scripts Folder (Optional)
Once HTML is updated, you can remove the old vendor files from `Scripts/`:
- bootstrap.js files
- jquery files
- popper.js files
- sweetalert.min.js
- confetti.js/confetti.min.js

Keep only your custom files:
- Palindrome.js
- Palindrome.min.js

---

## Remaining in packages.config (NuGet)
- `Microsoft.CodeDom.Providers.DotNetCompilerPlatform` 3.6.0 (required for .NET)

---

## Yarn Commands

- Install dependencies: `yarn install`
- Add new package: `yarn add <package>`
- Update package: `yarn up <package>`
- Update all packages: `yarn up`
- Remove package: `yarn remove <package>`
- Check outdated: `yarn outdated`

---

## Git Status
```
M  .gitignore          (updated)
D  package-lock.json   (removed)
M  package.json        (migrated dependencies)
M  packages.config     (removed JS libraries)
?? .yarnrc.yml         (new - Yarn config)
?? yarn.lock           (new - Yarn lock file)
```
