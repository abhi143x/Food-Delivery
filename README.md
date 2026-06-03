# LunchBox — Food Delivery

A modern, premium food delivery web application built with **React 19** and **Vite 7**. Features a sleek dark/light theme with glassmorphism effects, smooth micro-animations, and a fully functional cart system with promo code support. Browse through 32+ food items across 8 categories, manage your cart, and place orders — all wrapped in a stunning, responsive interface.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.8.2-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
---

## 🔗 Project Links

| Resource         | Link                                                                 |
| ---------------- | -------------------------------------------------------------------- |
| Live Link        | [https://food-delivery-red-three.vercel.app/](https://food-delivery-red-three.vercel.app/)           |

---

##  Key Features

- **Food Catalog** — Browse 32+ food items across 8 categories (Salad, Rolls, Deserts, Sandwich, Cake, Pure Veg, Pasta, Noodles)
- **Category Filtering** — Explore menu by category with interactive horizontal scroll and an "All" option
- **Cart Management** — Add, remove, and update item quantities with real-time total calculation
- **Promo Code System** — Apply discount codes (e.g., `ABHI` for 30% off) with client-side validation
- **Order Placement** — Complete checkout form with delivery information fields
- **Login/Signup Modal** — Authentication UI with toggle between Sign In and Create Account forms
- **Dark / Light Theme** — Toggle between dark and light modes with a bouncy animated switch; dark mode by default with CSS custom properties

---

## Tech Stack

| Layer         | Technology                                                                 |
| ------------- | -------------------------------------------------------------------------- |
| **Framework** | [React 19.1.1](https://react.dev/) — UI library with hooks & functional components |
| **Build Tool** | [Vite 7.1.2](https://vite.dev/) — Next-gen frontend build tool with HMR   |
| **Routing**   | [React Router DOM 7.8.2](https://reactrouter.com/) — Client-side routing   |
| **Styling**   | Vanilla CSS — Custom properties, glassmorphism, gradients, animations      |
| **Typography**| [Google Fonts (Outfit)](https://fonts.google.com/specimen/Outfit) — Weights 300–700 |
| **State**     | React Context API — Global cart & discount state management                |
| **Linting**   | ESLint 9 — Code quality with React Hooks & React Refresh plugins           |
| **Language**  | JavaScript (ES Modules / JSX)                                              |

---

## 📁 Folder Structure

```
food-delivery/
├── public/
│   ├── bag_icon.png              # Favicon
│   ├── header_img.png            # Hero background
│   └── vite.svg                  # Vite logo
│
├── src/
│   ├── assets/
│   │   ├── assets.js             # Static data (food_list, menu_list, asset exports)
│   │   ├── food_1.png ... food_32.png   # 32 food item images
│   │   ├── menu_1.png ... menu_8.png    # 8 category icons
│   │   └── *.png                 # UI icons (cart, add, remove, social, etc.)
│   │
│   ├── components/
│   │   ├── AppDownload/          # Mobile app download CTA
│   │   │   ├── AppDownload.jsx
│   │   │   └── AppDownload.css
│   │   ├── ExploreMenu/          # Category filter carousel
│   │   │   ├── ExploreMenu.jsx
│   │   │   └── ExploreMenu.css
│   │   ├── FoodDisplay/          # Food items grid container
│   │   │   ├── FoodDisplay.jsx
│   │   │   └── FoodDisplay.css
│   │   ├── FoodItem/             # Individual food card
│   │   │   ├── FoodItem.jsx
│   │   │   └── FoodItem.css
│   │   ├── Footer/               # Site footer
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── Header/               # Hero banner
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── Loginpopup/           # Auth modal
│   │   │   ├── Loginpopup.jsx
│   │   │   └── Loginpopup.css
│   │   ├── Navbar/               # Navigation bar
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   └── PromoCode/            # Discount code input
│   │       ├── PromoCode.jsx
│   │       └── PromoCode.css
│   │
│   ├── context/
│   │   └── StoreContext.jsx      # Global state (cart, food data, discounts)
│   │
│   ├── Pages/
│   │   ├── Home/                 # Home page (/, landing)
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── Cart/                 # Cart page (/cart)
│   │   │   ├── Cart.jsx
│   │   │   └── Cart.css
│   │   └── placeorder/           # Order page (/order)
│   │       ├── placeorder.jsx
│   │       └── placeorder.css
│   │
│   ├── App.jsx                   # Root component with routing
│   ├── main.jsx                  # Entry point (React DOM + Router + Context)
│   └── index.css                 # Global styles, CSS variables, dark theme
│
├── index.html                    # HTML template
├── vite.config.js                # Vite configuration
├── eslint.config.js              # ESLint configuration
├── package.json                  # Dependencies & scripts
├── package-lock.json             # Dependency lock file
└── .gitignore                    # Git ignore rules
```

---

## ⚡ Installation & Setup

### Prerequisites

- **Node.js** ≥ 18.x ([Download](https://nodejs.org/))
- **npm** ≥ 9.x (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/abhi143x/Food-Delivery.git

# 2. Navigate to the project directory
cd Food-Delivery

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at **`http://localhost:5173`** (default Vite port).

### Available Scripts

| Script          | Command           | Description                              |
| --------------- | ----------------- | ---------------------------------------- |
| **Dev Server**  | `npm run dev`     | Start Vite dev server with HMR           |
| **Build**       | `npm run build`   | Create production build in `dist/`       |
| **Preview**     | `npm run preview` | Preview production build locally         |
| **Lint**        | `npm run lint`    | Run ESLint to check code quality         |

---


## 🚀 Build and Deployment

### Frontend Deployment

#### Build for Production

```bash
npm run build
```

This generates an optimized production bundle in the `dist/` directory.

#### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repository directly on [vercel.com](https://vercel.com):

1. Import the `abhi143x/Food-Delivery` repository
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Click **Deploy**

#### Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
2. Connect to `abhi143x/Food-Delivery`
3. Build Command: `npm run build`
4. Publish Directory: `dist`
5. Click **Deploy site**

#### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Build and deploy
npm run build
npm run deploy
```

> **Note:** For GitHub Pages, add `base: '/Food-Delivery/'` to `vite.config.js`.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/abhi143x">abhi143x</a>
</p>
