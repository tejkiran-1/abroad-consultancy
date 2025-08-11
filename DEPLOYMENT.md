# Abroad Consultancy - Deployment Guide

## 🌐 Deployment Options

### 1. GitHub Pages (Free)

```bash
# Install Angular CLI GitHub Pages tool
npm install -g angular-cli-ghpages

# Build for production
npm run build:prod

# Deploy to GitHub Pages
npx angular-cli-ghpages --dir=dist/abroad-consultancy
```

### 2. Netlify (Free)

1. Build the project:
   ```bash
   npm run build:prod
   ```

2. Drag and drop the `dist/abroad-consultancy` folder to [Netlify Drop](https://app.netlify.com/drop)

Or connect your GitHub repository to Netlify with these settings:
- **Build command**: `npm run build:prod`
- **Publish directory**: `dist/abroad-consultancy`

### 3. Vercel (Free)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repository to [Vercel](https://vercel.com).

### 4. Firebase Hosting (Free)

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Initialize Firebase
firebase init hosting

# Build and deploy
npm run build:prod
firebase deploy
```

### 5. AWS S3 + CloudFront

```bash
# Build for production
npm run build:prod

# Upload dist/abroad-consultancy contents to S3 bucket
# Configure CloudFront distribution for SPA routing
```

## 📋 Pre-deployment Checklist

- [ ] Update base href in `index.html` if deploying to subdirectory
- [ ] Ensure all external image URLs are HTTPS
- [ ] Test build locally with `npm run preview`
- [ ] Update social media meta tags
- [ ] Configure proper 404 fallback for SPA routing
- [ ] Enable gzip compression
- [ ] Set up analytics (Google Analytics, etc.)

## 🔧 Environment Configuration

For different environments, create:
- `src/environments/environment.ts` (development)
- `src/environments/environment.prod.ts` (production)

## 🚀 Quick Deploy Commands

```bash
# GitHub Pages
npm run build:prod && npx angular-cli-ghpages --dir=dist/abroad-consultancy

# Netlify CLI
npm run build:prod && netlify deploy --prod --dir=dist/abroad-consultancy

# Vercel
vercel --prod

# Firebase
npm run build:prod && firebase deploy
```
