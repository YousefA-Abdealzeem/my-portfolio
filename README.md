# Yousef Alian — Professional Angular Portfolio

A stunning, animated Angular 17 portfolio with custom cursor, typing effects, scroll reveals, and a dark luxury theme.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+
- Angular CLI 17+

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

Then open `http://localhost:4200`

### Build for production

```bash
ng build --configuration production
```

## ✨ Features

- **Custom Cursor** — Smooth dual-ring cursor with hover effects
- **Typing Animation** — Cycling role titles in the hero section
- **Scroll Reveal** — Elements animate in as you scroll
- **Floating Code Card** — Animated syntax-highlighted card
- **Skill Tabs** — Filter skills by category with progress bars
- **Featured Projects** — Large project showcases with screenshots
- **Contact Form** — Working form with submission state
- **Mobile Menu** — Full-screen mobile navigation
- **Noise Texture + Gradient Blobs** — Atmospheric background
- **Auto-hide Navbar** — Hides on scroll down, reveals on scroll up

## 🎨 Customization

All personal info can be found in the component files:

| File | What to edit |
|------|-------------|
| `hero.component.ts` | Name, roles, stats |
| `about.component.ts` | Bio, details, avatar |
| `skills.component.ts` | Skills & percentages |
| `projects.component.ts` | Projects & links |
| `contact.component.ts` | Contact info, socials |

### Colors
Edit CSS variables in `src/styles/global.scss`:
```scss
:root {
  --accent: #6c63ff;    // Main purple
  --accent-2: #ff6b6b;  // Red accent  
  --accent-3: #43e97b;  // Green accent
}
```

## 📁 Project Structure

```
src/
├── app/
│   ├── app.component.ts         # Root with cursor + layout
│   └── components/
│       ├── navbar/              # Sticky auto-hide navbar
│       ├── hero/                # Typing animation hero
│       ├── about/               # About with spinning rings
│       ├── skills/              # Tabbed skill cards
│       ├── projects/            # Featured + grid projects
│       └── contact/             # Contact form + info
├── styles/
│   └── global.scss              # Design tokens & utilities
└── index.html                   # Google Fonts loaded here
```

## 🚢 Deploy to Firebase

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
ng build
firebase deploy
```
