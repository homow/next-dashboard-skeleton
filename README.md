### 🌐 README Versions

- 🇺🇸 [English Version](README.md)
- 🇮🇷 [نسخه فارسی](README.FA.md)

---

### 🌐 Project Versions

- 🇺🇸 [LTR Version](https://github.com/homow/next-dashboard-skeleton)
- 🇮🇷 [RTL / نسخه فارسی راست‌چین](https://github.com/homow/next-dashboard-skeleton/tree/rtl)

---

# 🧩 Dashboard Template

A clean, minimal, Type-Safely fast **Next Dashboard Template** built with the latest modern stack.  
Responsive sidebar for both mobile and desktop, plus built-in **Dark/Light mode** support.

---

## ⚙️ Tech Stack

| Technology      | Version | Short Description |
|-----------------|---------|-------------------|
| ⚛️ React        | 19      | UI library        |
| ⚡ Next.js       | 16      | React framework   |
| 🧹 ESLint       | 9       | Code linting      |
| 🎨 Tailwind CSS | 4       | Utility-first CSS |
| 🐻 Zustand      | 5       | State management  |
| 🛡️ TypeScript  | 5       | Typed JavaScript  |

---

## 🚀 Features

- 📱 Responsive sidebar (mobile & desktop)
- 🌗 Dark / Light theme toggle
- 🧠 Clean structure for scalable dashboards
- 🧩 Ready to extend with routes and components
- 🛡️ Fully Type-safe (TypeScript)

---

### 🔗 Preview

> 🚀 **Live Demo:** [**Dashboard Skeleton (GitHub Pages)**](https://homow.github.io/next-dashboard-skeleton)  
> Explore the live preview of the dashboard structure, including responsive menu and dark/light themes.

---

## 🧭 Get Started

```bash
# Clone this repository
git clone https://github.com/homow/next-dashboard-skeleton.git

# Navigate
cd next-dashboard-skeleton

# Install dependencies
npm install

# Run development server
npm run dev
```

📁 Project Structure & Usage

```markdown
next-dashboard-skeleton/
├── public/                     # Static files (fonts, images, etc.)
├── src/
│   ├── actions/                # Server Actions (Next.js App Router)
│   ├── app/                    # App Router root
│   │   ├── (auth)/             # Auth routes group (login, register, etc.)
│   │   ├── (main)/             # Main app routes group and layout
│   │   ├── globals.css         # Global styles (Tailwind)
│   │   ├── layout.tsx          # Root layout
│   │   └── not-found.tsx       # 404 page
│   │
│   ├── assets/                 # Fonts and static assets
│   │
│   ├── components/             # Reusable components
│   │   ├── button/             # Button components
│   │   ├── forms/              # Form-related components
│   │   ├── icon/               # Icon component
│   │   ├── layout/             # Layout components (Sidebar, Header, etc.)
│   │   ├── modals/             # Modal components
│   │   └── ui/                 # Base UI components (inputs, cards, etc.)
│   │
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utilities and helpers
│   ├── store/                  # Zustand stores
│   └── types/                  # Global TypeScript types
│
├── .gitignore
├── eslint.config.mjs            # ESLint configuration
├── next.config.ts               # Next.js configuration
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json                # Path aliases & TS config
```

## ⚙️ Project Overview

This project is built with **Next.js 16 App Router** and follows a **scalable, feature-based architecture**.

Everything is already set up —
you only need to add your routes and start building.

---

## 🚀 Getting Started

### 1️⃣ Create your pages

Add routes inside the App Router:

```
src/app/(main)/
src/app/(auth)/
```

Each folder represents a route segment.

**Add Routes to the Sidebar**

To display your pages in the sidebar navigation, update the menu configuration in:

```
src/components/layout/SideBar/components/SideBarMenu.tsx
```

Add or modify links to match the routes you created.

---

### 2️⃣ Layout system

Layouts are handled via:

```
src/app/layout.tsx
src/components/layout/
```

Use route groups `(auth)` and `(main)` to separate layouts cleanly.

---

### 3️⃣ State management

Global state lives in:

```
src/store/
```

Powered by **Zustand**.

---

### 4️⃣ Reusable components

All shared components are located in:

```
src/components/
```

Structured by responsibility (ui, forms, modals, layout, etc.)

---

## 🔗 Icon System

Icons are rendered using **SVG `<use>`** with `<symbol>` definitions.

All SVG symbols are defined once and reused across the app.

---

### 📍 Icon Definitions

All icons are defined in:

```
src/components/ui/SvgDefs.tsx
```

---

### 🧩 Icon Component

Instead of manually using `<svg>` everywhere, use the `Icon` component.

You only pass the **icon name (id)** —
❗ **without** the `-icon` suffix.

#### Example usage:

```tsx
<Icon icon="home" />
```

This automatically resolves to:

```html
#home-icon
```

---

## ✨ Built-in Features

* Dark / Light mode 🌗
* Responsive layout 📱
* Sidebar + layout structure 🧱
* SVG icon system ⚡
* Ready for Server Actions & App Router 🚀

---

### 💡 Author

> 👨‍💻 Made by [**homow**](https://github.com/homow)  
> Crafted with ❤️ for developers who love clean & minimal UI.

### 🌐 README Versions

- 🇺🇸 [English Version](README.md)
- 🇮🇷 [نسخه فارسی](README.FA.md)

---

### 🌐 Project Versions

- 🇺🇸 [LTR Version](https://github.com/homow/next-dashboard-skeleton)
- 🇮🇷 [RTL / نسخه فارسی راست‌چین](https://github.com/homow/next-dashboard-skeleton/tree/rtl)