# WORDS FROM WITHIN — Netlify + CMS

Prepared for GitHub + Netlify + Eleventy + Decap CMS.

### Daily publishing
Open `/admin/` → New Post → upload image → write → Publish. The CMS commits the post to GitHub and Netlify rebuilds the website automatically.

### One-time setup
1. Create a GitHub repository named `words-from-within`.
2. Upload this folder's contents to the repository root.
3. In Netlify, import the GitHub repository. Build command: `npm run build`; publish directory: `_site`.
4. Edit `public/admin/config.yml` and replace the repository placeholder and Netlify site URL.
5. Configure the GitHub OAuth authentication required by Decap CMS.
6. Open `https://YOUR-SITE.netlify.app/admin/` and sign in.

Do not use the CMS publicly until OAuth/authentication is configured.
