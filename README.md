# AURA | Premium Construction & Engineering Studio Portfolio

A premium, production-ready corporate portfolio website built for **AURA Construction & Engineering**—a high-end design-build firm specializing in luxury residential estates, commercial towers, and industrial hubs. 

The website is engineered with a luxury aesthetic, whitespace-heavy design language, and an immersive Apple-style scroll-driven canvas sequence tracking structural transformation.

---

## 🛠️ Technology Stack

- **Core**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4, custom glassmorphism overlays
- **Smooth Scroll**: Lenis Scroll integration
- **Animations**: Framer Motion & GSAP
- **Iconography**: Lucide React Icons
- **Image Optimization**: Sharp (compiling WebP project visualizations)

---

## ✨ Immersive Architectural Features

### 1. Cinematic Scroll Transformation Section
A full-screen sticky viewport playing a preloaded sequence of 240 JPG construction images directly to a responsive HTML canvas at a target rate of 60fps.
* **Apple-Style Momentum Easing**: Smooth scroll momentum calculations using linear interpolation (`ease = 0.12`) to eliminate scroll jumping.
* **Framer Motion HUD Overlays**: Custom coordinate labels, stage text cross-faders, and status indicators that refresh *only* on phase transitions to optimize React rendering performance.

### 2. High-End Real Estate Showcase
Interactive filterable grid displaying architectural visualization cards for residential, commercial, industrial, and infrastructure divisions.
* **Photorealistic Renders**: Visual cards for *The Ananta Residence*, *Meridian Business Centre*, *Southern Industrial Park*, and *Coimbatore Smart Corridor* rendered in high-fidelity twilight golden hour photography style.
* **Spec HUD Tables**: High-contrast tables showing project location, structural size (sq ft), construction span (months), and client details.

### 3. Interactive Technical Assets
- **Linear Timeline**: Horizontal animated progression tracing the 6 project phases from Consultation to Handover.
- **Stats Counters**: Automatic count-up metric trackers triggered when scrolled into view.
- **Investment Portal**: Financial Prospectus downloads and growth rate IRRs structured for institutional funds and family offices.

---

## 📂 Scaleable Folder Structure

The project conforms to an enterprise-grade App Router layout:

```text
constrution_site/
├── app/                        # Next.js 15 App Router Pages
│   ├── layout.tsx              # SEO metadata, Next Google Fonts, Nav/Footer layout
│   ├── page.tsx                # Aggregated Home Page layout
│   ├── projects/               # Portfolio Grid & Dynamic [slug] details case studies
│   ├── services/               # Competency lists & IBC compliance details
│   ├── about/                  # Company profile, history, values, and leadership
│   ├── contact/                # Direct lines, maps embed, and consultation form
│   └── investment/             # Cap partnership prospectuses & financial disclaimers
├── components/                 # Reusable UI Elements
│   ├── Navbar.tsx              # Sticky blur glass header
│   ├── Footer.tsx              # High-contrast corporate map links & SVGs
│   ├── Hero.tsx                # Twilight header image & blueprint coordinates HUD
│   ├── ScrollTransformation.tsx # 240-frame sticky canvas timeline & text HUD fader
│   ├── ServicesGrid.tsx        # Dynamic icons grids
│   ├── ProjectCard.tsx         # Realistic zoom card overlays
│   └── ContactForm.tsx         # Animated border inputs & submission checkmark fader
├── hooks/                      # Custom hooks
│   ├── useLenis.ts             # Instantiates momentum scroll listener
│   └── useScrollFrames.ts      # Preloads, caches, and indexes 240 JPG frames
├── lib/                        # Structured mock data seeds & constants
├── public/                     # Public static assets
│   ├── frames/                 # Local 240 JPG frames (ezgif-frame-001.jpg - 240.jpg)
│   └── projects/               # Photorealistic WebP card visual overlays
├── styles/                     # CSS stylesheets
│   ├── globals.css             # Tailwind v4 color variables & scrollbar overrides
│   ├── typography.css          # Google Fonts loader declarations
│   └── animations.css          # Blueprint layouts & custom glassmorphism styles
└── eslint.config.mjs           # ESLint coordinate overrides & strict type guidelines
```

---

## 🚀 Installation & Build Commands

### 1. Install Dependencies
Initialize package.json lock profiles using:
```bash
npm install --legacy-peer-deps
```

### 2. Local Development Server
Launch the Turbopack compilation dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your web browser.

### 3. Production Compilation Build
Perform dynamic route optimizations, type checks, and static asset builds:
```bash
npm run build
```

### 4. Run Production Server
Serve the optimized static build:
```bash
npm run start
```

---

## ☁️ Vercel Deployment

This project compiles clean static traces and is ready for Vercel Edge Server deployments:
1. Connect your repository to Vercel.
2. Vercel auto-detects the Next.js framework. Use defaults:
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
3. Click **Deploy**. Vercel will bundle the code, optimize the 240 JPG assets, and serve the site globally.