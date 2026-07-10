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

Extend the project with **AI-powered features** using LLM integration:

- **Ask AI** — Generate unique recipes via OpenAI/Groq-compatible APIs
- **Quick Recipe** — Instant offline fallback from curated database
- **Brew Battle** — AI generates two rival recipes; vote, confetti, share
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
| **Spin Modes** | Quick Recipe ⚡ or Ask AI ✨ |
| **Roulette Animation** | Spinning cup, flying ingredients, rotating beans |
| **Brew Battle** | Two AI recipes head-to-head with voting & share |
| **55+ Recipes** | Curated coffees + unlimited AI-generated ones |
| **Smart Substitutions** | AI + rule-based ingredient swap suggestions |
| **Favorites** | Save recipes with search & filters |
| **Dark Mode** | Warm coffee aesthetic in light & dark themes |

---

## 🎯 User Flow

```
Splash → Home → Spin (Quick / AI) → Result → Save / Share
                    ↓
              Brew Battle → Vote → Winner 🏆 → Share
```

---

## 🛠 Tech Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion · React Router · OpenAI/Groq API

---

## 🚀 Getting Started

```bash
cd coffee-roulette
npm install
cp .env.example .env   # add your API keys
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### API Keys (local only — never commit `.env`)

Copy `.env.example` to `.env` and add:

| Variable | Provider |
|----------|----------|
| `VITE_OPENAI_API_KEY` | OpenAI |
| `VITE_GROQ_API_KEY` | Groq (optional fallback) |
| `VITE_GEMINI_API_KEY` | Gemini (future use) |

---

## 📁 Branches

| Branch | Description |
|--------|-------------|
| `master` | Challenge 3 — original Coffee Roulette app |
| `feature/brew-battle-LLM` | Challenge 4 — AI recipes + Brew Battle |

---

## 📄 License

MIT
