# Coffee Roulette ☕

> **Every coffee starts with a surprise.**

A premium web app built for the **MLH Cursor challenges** that turns your available ingredients into a fun roulette experience — spin the cup and discover your next drink.

---

## 🏆 MLH Challenges

### Challenge 3 — Build with Cursor (`master` branch)

Create a full web app using **Cursor AI prompts**. Coffee Roulette was built from scratch with Cursor, featuring:

- Premium coffee-shop UI with animations
- Ingredient picker + roulette spin flow
- 55+ curated recipes with smart substitutions
- Favorites, dark mode, and share support

**Branch:** `master`

### Challenge 4 — Add a New Feature (`feature/brew-battle-LLM` branch)

Extend the project with **AI-powered features** using **Groq (Llama 3.3)**:

- **Ask AI** — Generates 2 unique recipes; pick your favorite on a VS screen
- **Quick Recipe** — Instant offline fallback from curated database
- **Brew Battle** — Two rival AI recipes; vote, confetti, and share
- Bottom sheet to choose Quick vs AI on spin
- Brewing loader with streaming status text
- Local cache for AI-generated recipes
- Graceful API failure → Quick Recipe fallback

**Branch:** `feature/brew-battle-LLM`

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Splash Screen** | Animated coffee cup with rising steam |
| **Ingredient Picker** | 15+ default chips + searchable extras |
| **Spin Modes** | Quick Recipe ⚡ or Ask AI ✨ (2 recipes) |
| **Pick Your Brew** | AI shows 2 recipes side-by-side — choose one |
| **Roulette Animation** | Spinning cup, flying ingredients, rotating beans |
| **Brew Battle** | Head-to-head AI recipes with voting & share |
| **55+ Recipes** | Curated coffees + unlimited AI-generated ones |
| **Smart Substitutions** | AI + rule-based ingredient swap suggestions |
| **Favorites** | Save recipes with search & filters |
| **Dark Mode** | Warm coffee aesthetic in light & dark themes |

---

## 🎯 User Flow

```
Splash → Home → Spin (Quick / AI) → Pick Your Brew (2 recipes) → Result
                    ↓
              Brew Battle → Vote → Winner 🏆 → Share
```

---

## 🛠 Tech Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion · React Router · Groq (Llama 3.3)

---

## 🚀 Getting Started

```bash
cd coffee-roulette
npm install
cp .env.example .env   # add your Groq API key
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### API Key (local only — never commit `.env`)

```
VITE_GROQ_API_KEY=your_key_here
```

Get a free key at [console.groq.com](https://console.groq.com). Uses **Llama 3.3 70B**.

### Build

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
coffee-roulette/
├── src/
│   ├── components/ai/       # BrewingLoader, Confetti
│   ├── components/battle/   # BattleCard
│   ├── components/coffee/   # CoffeeCup, Steam, FloatingBeans
│   ├── components/ui/       # Button, Chip, BottomSheet, SpinModeSheet
│   ├── services/ai.ts       # Groq (Llama) LLM integration
│   ├── data/recipes.ts      # 55+ curated recipes
│   └── pages/               # Splash, Home, Roulette, AIChoice, Result, BrewBattle, Favorites
├── .env.example
└── package.json
```

---

## 📁 Branches

| Branch | Description |
|--------|-------------|
| `master` | Challenge 3 — original Coffee Roulette app |
| `feature/brew-battle-LLM` | Challenge 4 — AI recipes + Brew Battle |

---

## 📄 License

MIT
