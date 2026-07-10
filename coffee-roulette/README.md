# Coffee Roulette — App

This folder contains the full source code for the Coffee Roulette web app.

See the [root README](../README.md) for overview, features, and MLH challenge details.

## Commands

```bash
npm install    # install dependencies
npm run dev    # start dev server → http://localhost:5173
npm run build  # production build
npm run preview # preview production build
```

## Source layout

```
src/
├── components/coffee/   # SVG animations (cup, steam, beans)
├── components/ui/     # Reusable UI primitives
├── data/recipes.ts      # 55+ hardcoded coffee recipes
├── data/substitutions.ts # Smart ingredient swap logic
└── pages/               # Splash, Home, Roulette, Result, Favorites
```
