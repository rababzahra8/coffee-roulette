# Coffee Roulette — App

See the [root README](../README.md) for MLH challenge details, features, and setup.

## MLH Challenges

| Challenge | Branch | What was built |
|-----------|--------|----------------|
| **Challenge 3** | `master` | Full app built with Cursor prompts |
| **Challenge 4** | `feature/brew-battle-LLM` | AI recipe engine + Brew Battle |

## Commands

```bash
npm install
cp .env.example .env    # add API keys locally
npm run dev             # http://localhost:5173
npm run build
```

## Challenge 4 — New files

```
src/
├── services/ai.ts          # OpenAI/Groq LLM integration
├── services/prompts.ts     # Structured barista prompts
├── pages/BrewBattlePage.tsx
├── components/ai/          # BrewingLoader, Confetti
├── components/battle/      # BattleCard
└── components/ui/          # BottomSheet, SpinModeSheet
```
