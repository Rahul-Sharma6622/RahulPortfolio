# Rahul Sharma — Portfolio

A stunning terminal-meets-glassmorphism portfolio built with **React + Vite + Tailwind CSS**.

## ✨ Concept: "CRT Terminal × Glassmorphism"
- Dark hacker-chic aesthetic with neon green (#00FF9C) as the primary accent
- Glassmorphism cards with holographic shimmer on hover
- Animated grid background + scanlines + noise grain overlay
- Custom magnetic cursor with trailing ring
- Typewriter hero with role-cycling animation
- Framer Motion powered scroll reveals and micro-interactions

## 🎨 Design Palette
| Token | Value | Use |
|---|---|---|
| Background | `#060B18` | Primary bg |
| Secondary | `#0D1525` | Cards, nav |
| Neon Green | `#00FF9C` | Primary accent, glow |
| Neon Pink | `#FF2D78` | Secondary accent |
| Neon Blue | `#2D9CDB` | Tertiary accent |
| Purple | `#9B59FF` | Highlights |

## 🔤 Typography
- **Display/Code**: JetBrains Mono (terminal aesthetic)
- **Body**: Outfit (clean, modern, premium feel)

## 📁 Folder Structure
```
rahul-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       — Sticky nav with active section tracking
│   │   ├── Hero.jsx         — Typewriter + terminal prompt hero
│   │   ├── About.jsx        — Bento-grid about section
│   │   ├── Skills.jsx       — Animated skill bars + tag cloud
│   │   ├── Projects.jsx     — Glassmorphism project cards
│   │   ├── Experience.jsx   — Glowing timeline layout
│   │   ├── Contact.jsx      — Contact form + social links
│   │   └── Footer.jsx       — Minimal footer
│   ├── App.jsx              — Root: cursor, ambient orbs, grid bg
│   ├── main.jsx             — Entry point
│   └── index.css            — Tailwind + custom CSS
├── index.html               — Google Fonts loaded here
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.x
- npm >= 9.x

### Installation & Running

```bash
# 1. Navigate to the project
cd rahul-portfolio

# 2. Install all dependencies
npm install

# 3. Start development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Build for Production

```bash
npm run build
npm run preview   # Preview the production build
```

### Deploy (Vercel — recommended)

```bash
npm install -g vercel
vercel
```

Or drag the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop).

## 🛠 Customization

1. **Personal info** — Edit data in each component file (name, links, projects, etc.)
2. **Colors** — Change CSS variables in `tailwind.config.js` and `src/index.css`
3. **Add projects** — Extend the `projects` array in `src/components/Projects.jsx`
4. **Add experience** — Extend the `experiences` array in `src/components/Experience.jsx`

## 📦 Dependencies
- `react` + `react-dom` — UI framework
- `framer-motion` — Animations & transitions
- `lucide-react` — Icon library
- `react-intersection-observer` — Scroll reveal trigger
- `tailwindcss` — Utility-first CSS framework
- `vite` — Build tool
