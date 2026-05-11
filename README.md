<div align="center">

# ✦ Yousef Alian — Portfolio

### Angular 17 · TypeScript · SCSS · Vercel

*A stunning, animated portfolio with dark luxury aesthetics*

<br/>

<img width="1440" alt="Portfolio Preview" src="https://github.com/user-attachments/assets/67d9d3c4-6d27-49cf-9fbe-175770cee272" />

<br/>

[![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-Latest-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Hosting-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

## ✨ Features

- **Custom Cursor** — Smooth dual-ring cursor with hover morphing effects
- **Typing Animation** — Cycling role titles in the hero section
- **Scroll Reveal** — Elements animate in as you scroll down the page
- **Floating Code Card** — Animated syntax-highlighted card with live feel
- **Skill Tabs** — Filter skills by category with animated progress bars
- **Featured Projects** — Large showcases with screenshots and live links
- **Contact Form** — Working form with loading and success states
- **Mobile Menu** — Full-screen immersive mobile navigation
- **Noise Texture + Gradient Blobs** — Atmospheric dark background
- **Auto-hide Navbar** — Hides on scroll down, smoothly reveals on scroll up

---

## 🚀 Getting Started

### Prerequisites

| Tool | Version |
|------|---------|
| Node.js | 18+ |
| npm | 9+ |
| Angular CLI | 17+ |

### Installation

```bash
# Install Angular CLI globally
npm install -g @angular/cli@17

# Navigate to the project
cd portfolio

# Install dependencies
npm install

# Start dev server
ng serve
```

Then open **http://localhost:4200** in your browser.

### Build for Production

```bash
ng build --configuration production
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── app.component.ts         # Root with cursor + layout
│   └── components/
│       ├── navbar/              # Sticky auto-hide navbar
│       ├── hero/                # Typing animation hero
│       ├── about/               # About section with spinning rings
│       ├── skills/              # Tabbed skill cards + progress bars
│       ├── projects/            # Featured + grid project cards
│       └── contact/             # Contact form + social links
├── styles/
│   └── global.scss              # Design tokens & utility classes
└── index.html                   # Google Fonts loaded here
```

---

## 🎨 Customization

All personal info lives inside the component files:

| File | What to Edit |
|------|-------------|
| `hero.component.ts` | Name, roles, stats |
| `about.component.ts` | Bio, personal details, avatar |
| `skills.component.ts` | Skills & percentage values |
| `projects.component.ts` | Projects, links & screenshots |
| `contact.component.ts` | Contact info & social handles |

### Color Palette

Edit CSS variables in `src/styles/global.scss`:

```scss
:root {
  --accent:   #6c63ff;  // Main purple
  --accent-2: #ff6b6b;  // Red accent
  --accent-3: #43e97b;  // Green accent
}
```

---

## 🚢 Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Build the project
ng build --configuration production

# Deploy 🚀
vercel --prod
```

> Or connect your GitHub repo directly on [vercel.com](https://vercel.com) for auto-deploy on every push.

---

## 📬 Contact

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yousefalian)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yousefalian)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/yournumber)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/yousefalian)

<br/>

*Built with ❤️ by **Yousef Alian** — Open to work & freelance projects*

</div>
