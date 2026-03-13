# Deploying to GoDaddy

This guide explains how to deploy your **Face Motion Maze** game to GoDaddy.

## Option 1: Connect your GoDaddy Domain (Recommended)
The easiest and most performant way is to keep your app hosted on a modern platform (like the one you are currently using) and simply point your GoDaddy domain to it.

1.  **Get your App URL:** Use the URL provided in the AI Studio preview.
2.  **Go to GoDaddy:** Log in to your GoDaddy account.
3.  **DNS Management:** Go to **My Products** > **DNS** (next to your domain).
4.  **Add a CNAME Record:**
    *   **Type:** `CNAME`
    *   **Name:** `www` (or your preferred subdomain)
    *   **Value:** `[Your App Hostname]` (e.g., `ais-pre-vnd7hyakcaikcg4cuhiedx-26503444745.asia-southeast1.run.app`)
    *   **TTL:** `1 Hour`
5.  **Forwarding (Optional):** If you want `yourdomain.com` to redirect to `www.yourdomain.com`, set up **Forwarding** in the DNS settings.

---

## Option 2: Static Hosting (GoDaddy cPanel / Shared Hosting)
If you have a standard GoDaddy Shared Hosting plan, you can upload the app as a static site.

### 1. Prepare the App for Static Export
I have updated your `next.config.ts` to support static exports.

### 2. Build the App
In your local environment (after exporting the code from AI Studio):
```bash
npm run build
```
This will create an `out` folder containing all your static files.

### 3. Upload to GoDaddy
1.  Log in to your GoDaddy **cPanel**.
2.  Open **File Manager**.
3.  Navigate to `public_html`.
4.  Upload all files and folders from your local `out` directory into `public_html`.

---

## Option 3: VPS Deployment (Advanced)
If you have a GoDaddy VPS (Linux), you can run the full Node.js server.

1.  **Install Node.js:** Use `nvm` to install Node.js 18+.
2.  **Clone/Upload Code:** Upload your project files.
3.  **Install Dependencies:** `npm install`
4.  **Build:** `npm run build`
5.  **Run with PM2:**
    ```bash
    npm install -g pm2
    pm2 start npm --name "maze-game" -- start
    ```
6.  **Reverse Proxy:** Set up Nginx to point your domain to port 3000.