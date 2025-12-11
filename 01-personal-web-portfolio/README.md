# Personal Web Portfolio

This repository contains the source code for a lightweight, content-focused website used as a profile and project hub.
It’s a static site built with a modern JavaScript tooling stack, designed to be developed locally and deployed as static files to any web hosting service (e.g. cPanel on a Linux-based host).

---

## 1. Project Description

The goal of this project was to provide a clean, responsive personal homepage that:

- Introduces the author and his key focus areas.
- Aggregates showcases experience, projects, and other activities.
- Can be easily maintained and redeployed as a fully static site.

All assets (HTML, CSS, JS, images) are part of this repository. The site is deployed by building static files into the `dist/` directory and uploading them to the hosting provider.

---

## 2. Dependencies

To work with this project locally, we need:

- **Node.js** (LTS version recommended, e.g. Node 18+)
- **npm** (installed together with Node.js)
- **Git** (optional, but recommended for cloning and version control)

You can verify your setup with:

```bash
node -v
npm -v
```

If both commands print version numbers, you’re ready to go.

---

## 3. Getting Started (Local Development)

1. **Clone this repository** (or download it as a ZIP and extract):

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

   Then open the URL shown in the terminal (commonly `http://localhost:8080, depending on the tooling).

4. **Edit and test**:

   - Modify source files (e.g. components, pages, styles) in your editor (Visual Studio for Mac was used here).
   - The dev server usually supports hot reload, so changes will appear automatically in the browser.

> 💡 If `npm run dev` doesn’t work, check the `package.json` file to confirm the correct script name for starting the dev server.

---

## 4. Building a Static Export

To create a production-ready static build of the site:

```bash
npm run build
```

This command generates all compiled static assets in the **`dist/`** directory:

- Optimized `index.html`
- Bundled CSS and JavaScript
- Image and font assets

You can preview the production build locally (if a preview script is available) with:

```bash
npm run preview
```

(If `preview` isn’t defined, check `package.json` for the correct command or use any static file server you prefer.)

---

## 5. Deployment (cPanel or Any Static Host)

The site is fully static and can be deployed to **any web hosting service that can serve static files** (HTML/CSS/JS). For cPanel-based shared hosting, a typical deployment looks like this:

1. **Build the site**:

   ```bash
   npm run build
   ```

2. **Locate the build output**:

   - All production files will be in the `dist/` directory.

3. **Upload to your host**:

   - Log in to your hosting service's dashboard (e.g. **cPanel**) and open the **File Manager**.
   - If your hosting service doesn't offer a dashboard just fall back to FTP and move to the next point.
   - Navigate to the root web directory (commonly `public_html/`).
   - **Back up or remove** any old files (for example, rename the old `index.html`).
   - Upload the contents of the `dist/` folder into `public_html/`:
     - You can zip the `dist/` folder locally, upload the ZIP file, and then extract it in `public_html/`.
     - Ensure that `public_html/index.html` exists and that all subfolders (assets, JS, etc.) are preserved.

4. **For any future changes or updates**
Just repeat this process:

1. `npm run build`
2. Upload / replace contents of `dist/` on the server

---

## 6. Credits

This project was developed by **F. Leitão**, with the initial version of the site scaffolded using **Lovable**, and then further customized and refined in a local development workflow.
