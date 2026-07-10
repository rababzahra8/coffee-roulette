# Coffee Roulette ☕

> **Every coffee starts with a surprise.**

A premium web app built for the **MLH challenge** that turns your available ingredients into a fun roulette experience — spin the cup and discover your next drink.

Instead of scrolling endless recipes, pick what you have in your kitchen, hit **Spin the Cup**, and get a random coffee matched to your ingredients — complete with instructions, nutrition info, and smart swap suggestions.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Splash Screen** | Animated coffee cup with rising steam |
| **Ingredient Picker** | 15+ default chips + searchable extras |
| **Roulette Animation** | Spinning cup, flying ingredients, rotating beans, splash landing |
| **55+ Recipes** | Curated coffees with dynamic descriptions |
| **Smart Substitutions** | "Try replacing vanilla with honey" when you're missing something |
| **Favorites** | Save recipes with search & filters (Hot, Cold, Sweet, Strong) |
| **Dark Mode** | Warm coffee aesthetic in light & dark themes |
| **Micro-interactions** | Chip bounce, steam, floating beans, haptic feedback |
| **Share** | Share recipes via Web Share API |

---

## 🎯 User Flow

```
Splash → Home (pick ingredients) → Spin the Cup → Result → Save / Share / Spin Again
                                              ↓
                                         Favorites
```

1. **Splash** — Animated intro with tagline
2. **Home** — Greeting, ingredient chips, search, sticky spin button
3. **Roulette** — Full-screen spin animation with haptic feedback
4. **Result** — Recipe name, ingredients, steps, calories, strength & sweetness bars
5. **Favorites** — Grid of saved coffees with filters

---

## 🛠 Tech Stack

- **React 19** + **TypeScript**
- **Vite** — fast dev & build
- **Tailwind CSS v4** — warm coffee-shop design system
- **Framer Motion** — smooth animations & transitions
- **React Router** — client-side navigation
- **Lucide Icons** — clean iconography

---

## 🚀 Getting Started

```bash
cd coffee-roulette
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
coffee-roulette/
├── src/
│   ├── components/
│   │   ├── coffee/     # CoffeeCup, Steam, FloatingBeans
│   │   ├── layout/     # Navbar
│   │   └── ui/         # Button, Chip, Card, StrengthBar
│   ├── context/        # App state (ingredients, recipe)
│   ├── data/           # 55+ recipes, ingredients, substitutions
│   ├── hooks/          # useDarkMode, useFavorites
│   ├── pages/          # Splash, Home, Roulette, Result, Favorites
│   ├── types/          # TypeScript interfaces
│   └── utils/          # Greeting, haptics, share helpers
├── public/
└── index.html
```

---

## 🎨 Design

Warm coffee-shop aesthetic with creamy beige, espresso brown, caramel, and soft whites. Apple HIG–inspired with 24px rounded cards, glassmorphism, soft shadows, and generous whitespace.

---

## 🏆 MLH Challenge

Built as a polished, animation-rich web experience prioritizing delightful UX over complexity — demonstrating modern React patterns, reusable components, and production-quality code.

---

## 📄 License

MIT
