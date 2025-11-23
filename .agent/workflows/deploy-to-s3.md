---
description: Deploy Next.js Static Export to AWS S3 and CloudFront
---

# Deploying to AWS S3 & CloudFront

Since we've configured `next.config.ts` with `output: 'export'`, your Next.js app will build into a static HTML/CSS/JS site in the `out` folder.

## 1. Build the Project

Run the build command to generate the static files:

```bash
npm run build
```

This will create an `out` directory in your project root.

## 2. AWS S3 Setup (Storage)

1.  **Create a Bucket**:
    *   Go to AWS Console > S3.
    *   Create a new bucket (e.g., `my-portfolio-site`).
    *   Uncheck "Block all public access" (we need it public for now, or use CloudFront OAI/OAC for better security).
2.  **Upload Files**:
    *   Upload the **contents** of the `out` folder to the root of your S3 bucket.
3.  **Enable Static Hosting**:
    *   Go to Properties > Static website hosting.
    *   Enable it.
    *   Index document: `index.html`.
    *   Error document: `404.html` (Next.js generates this).

## 3. AWS CloudFront Setup (CDN & HTTPS)

1.  **Create Distribution**:
    *   Go to AWS Console > CloudFront.
    *   Create a new distribution.
    *   **Origin Domain**: Select your S3 bucket.
    *   **Viewer Protocol Policy**: Redirect HTTP to HTTPS.
2.  **Origin Access (Recommended)**:
    *   Instead of making S3 public, use **Origin Access Control (OAC)** settings in CloudFront to restrict access so only CloudFront can read from your bucket.
3.  **Default Root Object**: Set to `index.html`.

## 4. Updates

Whenever you make changes:
1.  Run `npm run build`.
2.  Sync the `out` folder to your S3 bucket:
    ```bash
    aws s3 sync out/ s3://your-bucket-name --delete
    ```
3.  Invalidate CloudFront cache to see changes immediately:
    ```bash
    aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
    ```
