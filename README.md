# Crust & Co. — Pizza Shop Internship Project

A responsive React + Vite pizza storefront with an optional Express API included in the same repository. The frontend is intentionally self-contained: menu data, favourites and cart work in the browser, so **you do not need to start the backend to preview or use the storefront**.

## Features
- Responsive home, menu, story and favourites views
- Animated hero, continuously moving promo strip, food image cards and social gallery
- Search, category filters, favourites/likes, quantity controls and cart persisted in localStorage
- Delivery fee and free-delivery threshold calculation
- Checkout form, order confirmation and FAQ accordion
- Optional Express API health check and demo order endpoint
- Frontend gracefully works when the API is not running

## Run on Windows (frontend only)
1. Install Node.js LTS from https://nodejs.org/ if it is not installed.
2. Extract the ZIP and open the `crust-pizza-shop` folder in VS Code.
3. Open Terminal in that folder and run:
   ```powershell
   npm install
   npm run dev
   ```
4. Open the local URL Vite prints (usually `http://localhost:5173`).

## Optional API (same project/repository)
In a second terminal in the same folder:
```powershell
npm run server
```
The API is available at `http://localhost:5000/api/health`. The frontend still works without it. Demo orders are held in memory and are not permanent.

## Build check
```powershell
npm run build
```

## GitHub upload
Upload the complete folder contents (including `src`, `server`, `package.json`, `index.html`, and `README.md`) to one repository. Do not upload `node_modules`.

**Important limitations:** This is a demo storefront, not a production payment system. The card option is only a simulation; no payment is charged. Real online payments require a payment provider, server-side secret keys, webhook verification, secure order persistence, and deployment configuration. Menu text and indicative prices are inspired by publicly listed The Crust Pizza menu information; this is an independent student project and is not affiliated with that restaurant. Images are loaded from Unsplash URLs and require an internet connection.
