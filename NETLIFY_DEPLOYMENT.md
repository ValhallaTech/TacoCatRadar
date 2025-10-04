# ?? Netlify Deployment Guide - TacoCat Radar

## Prerequisites

- [x] GitHub account
- [x] Netlify account (free): https://app.netlify.com/signup
- [x] Code pushed to GitHub repository

## Deployment Steps

### Option 1: Automated Git Deployment (Recommended)

#### Step 1: Connect to Netlify

1. Go to [Netlify](https://app.netlify.com/)
2. Click **"Add new site"** ? **"Import an existing project"**
3. Choose **GitHub** as your Git provider
4. Authorize Netlify to access your repositories
5. Select **ValhallaTech/TacoCatRadar**

#### Step 2: Configure Build Settings

Netlify should auto-detect settings from `netlify.toml`, but verify:

```
Build command: yarn install && yarn build
Publish directory: dist
Branch: main
```

#### Step 3: Deploy!

1. Click **"Deploy site"**
2. Wait 1-2 minutes for build to complete
3. Get your URL: `https://[random-name].netlify.app`

#### Step 4: Custom Domain (Optional)

1. Go to **Site settings** ? **Domain management**
2. Click **"Add custom domain"**
3. Follow DNS configuration steps
4. Example: `tacocat-radar.netlify.app` or your own domain

---

### Option 2: Manual Deployment via Netlify CLI

#### Install Netlify CLI

```bash
npm install -g netlify-cli
# or
yarn global add netlify-cli
```

#### Build Locally

```bash
yarn build
```

#### Deploy

```bash
# Login
netlify login

# Initialize (first time)
netlify init

# Deploy to production
netlify deploy --prod
```

---

### Option 3: Drag & Drop Deployment

1. Build locally: `yarn build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag `dist/` folder to the upload area
4. Get instant deployment!

**Note:** This method doesn't auto-update on Git pushes.

---

## Post-Deployment Checklist

### Verify Deployment

- [ ] Visit your Netlify URL
- [ ] Test palindrome functionality
- [ ] Toggle dark mode
- [ ] Check all 3 pages (Home, Solve, Code)
- [ ] Test on mobile device
- [ ] Verify HTTPS is working
- [ ] Check Font Awesome icons load
- [ ] Test confetti animation

### Performance Check

- [ ] Run Lighthouse audit (built into Netlify)
- [ ] Check load time (should be < 2 seconds)
- [ ] Verify all assets load from CDN

### SEO & Sharing

- [ ] Add Open Graph meta tags (optional)
- [ ] Create a favicon (already done!)
- [ ] Submit to Google Search Console (optional)

---

## Netlify Configuration Explained

### Build Settings (`netlify.toml`)

```toml
[build]
  command = "yarn install && yarn build"  # Runs on every deploy
  publish = "dist"                        # Folder to serve
  base = "."                              # Project root

[build.environment]
  NODE_VERSION = "18"                     # Node.js version
```

### Redirects

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```
This enables client-side routing (all routes serve index.html).

### Security Headers

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"              # Prevent clickjacking
    X-XSS-Protection = "1; mode=block"    # XSS protection
    X-Content-Type-Options = "nosniff"    # MIME sniffing protection
```

### Caching

```toml
[[headers]]
  for = "/dist/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```
Assets cached for 1 year (31536000 seconds).

---

## Environment Variables (Optional)

If you add environment variables in the future:

1. Go to **Site settings** ? **Build & deploy** ? **Environment**
2. Click **"Edit variables"**
3. Add your variables:
   - `GITHUB_REPO_URL`
   - `API_BASE_URL`
   - etc.

---

## Custom Domain Setup

### Using Netlify Subdomain

Free: `your-site-name.netlify.app`

1. Site settings ? Domain management
2. Change site name
3. Example: `tacocat-radar.netlify.app`

### Using Your Own Domain

1. Buy domain from provider (Namecheap, Google Domains, etc.)
2. In Netlify: Add custom domain
3. Update DNS records:
   - **A Record:** `75.2.60.5` (Netlify's IP)
   - **CNAME:** `www` ? `your-site.netlify.app`
4. Wait for DNS propagation (5-30 minutes)

---

## Continuous Deployment

Once connected to GitHub:

? Push to `main` ? Auto-deploy
? Open PR ? Deploy preview
? Merge PR ? Update production

### Workflow:

```bash
# Make changes
git add .
git commit -m "Add new feature"
git push origin main

# Netlify automatically:
# 1. Detects push
# 2. Runs: yarn install && yarn build
# 3. Deploys dist/ folder
# 4. Updates live site (1-2 min)
```

---

## Monitoring & Analytics

### Netlify Analytics (Paid)

- Server-side analytics (no cookies/GDPR-friendly)
- $9/month per site

### Free Alternatives

- **Google Analytics** - Add tracking code
- **Plausible** - Privacy-friendly
- **Umami** - Self-hosted

---

## Rollback & Versioning

### Rollback to Previous Deploy

1. Go to **Deploys** tab
2. Find previous successful deploy
3. Click **"Publish deploy"**
4. Instant rollback!

### Deploy Previews

Every PR gets a unique preview URL:
- `https://deploy-preview-[pr-number]--your-site.netlify.app`

---

## Troubleshooting

### Build Fails

**Error:** `Command failed with exit code 1`

**Solution:**
1. Check build logs in Netlify dashboard
2. Test locally: `yarn clean && yarn build`
3. Verify `netlify.toml` syntax

### Assets Not Loading

**Error:** 404 on `/dist/file.js`

**Solution:**
- Verify `publish = "dist"` in `netlify.toml`
- Check file paths are relative (not absolute)

### Dark Mode Not Persisting

**Solution:**
- localStorage works on Netlify
- Check browser privacy settings

---

## Cost Estimate

### Free Tier Includes:

- ? Unlimited personal/commercial sites
- ? 100 GB bandwidth/month
- ? 300 build minutes/month
- ? Automatic HTTPS
- ? Deploy previews
- ? Form handling (100 submissions/month)

**Your app will easily fit in free tier!**

---

## Next Steps

1. **Push to GitHub** (if not already):
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

2. **Sign up for Netlify**: https://app.netlify.com/signup

3. **Import repository**: Follow "Option 1" above

4. **Celebrate!** ?? Your app is live!

---

## Useful Links

- [Netlify Dashboard](https://app.netlify.com/)
- [Netlify Docs](https://docs.netlify.com/)
- [Build & Deploy Settings](https://docs.netlify.com/configure-builds/overview/)
- [Custom Domains](https://docs.netlify.com/domains-https/custom-domains/)

---

**Estimated Deploy Time:** 2-3 minutes
**Effort Level:** ? Easy
**Result:** Production-ready URL with HTTPS ?
