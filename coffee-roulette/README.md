# Coffee Roulette ☕

A modern, premium web experience that surprises you with random coffee recipes based on the ingredients you have.

**Every coffee starts with a surprise.**

## Features

- **Splash screen** with animated coffee cup and rising steam
- **Ingredient selection** with searchable chips
- **Roulette animation** — spinning cup, flying ingredients, rotating beans
- **50+ coffee recipes** with dynamic descriptions
- **Smart substitutions** when you're missing an ingredient
- **Favorites** with search and filters (Hot, Cold, Sweet, Strong)
- **Dark mode** support
- **Micro-interactions** — chip bounce, steam, parallax beans, haptic feedback
- **Share recipes** via Web Share API

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- React Router
- Lucide Icons

## Getting Started

```bash
cd coffee-roulette
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── coffee/     # CoffeeCup, Steam, FloatingBeans
│   ├── layout/     # Navbar
│   └── ui/         # Button, Chip, Card, StrengthBar
├── context/        # App state
├── data/           # Recipes, ingredients, substitutions
├── hooks/          # useDarkMode, useFavorites
├── pages/          # Splash, Home, Roulette, Result, Favorites
├── types/          # TypeScript interfaces
└── utils/          # Helpers
```