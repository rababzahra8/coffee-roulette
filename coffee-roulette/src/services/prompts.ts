export function buildSingleRecipePrompt(
  ingredients: string[],
  recentNames: string[] = []
): string {
  const ingredientList =
    ingredients.length > 0
      ? ingredients.join(', ')
      : 'Espresso, Milk, Sugar (use sensible defaults)'

  const avoidRepeat =
    recentNames.length > 0
      ? `\n- Do NOT create recipes with these exact names: ${recentNames.slice(0, 10).join(', ')}`
      : ''

  return `You are an award-winning barista.

Using ONLY these ingredients:
${ingredientList}

Generate ONE unique café-quality coffee recipe.

Rules:
- Do not invent unavailable ingredients — only use items from the list above.
- If a classic recipe needs something missing, suggest substitutions in the substitutions array.
- Create a creative, unique café-style recipe name.
- Explain why the flavors work together in whyThisWorks.
- Keep preparation under 10 minutes.
- Return valid JSON only, no markdown.${avoidRepeat}

Return this exact JSON shape:
{
  "name": "string",
  "description": "string",
  "prepTime": number,
  "difficulty": "Easy" | "Medium" | "Hard",
  "ingredients": ["string"],
  "steps": ["string"],
  "calories": number,
  "coffeeStrength": number,
  "sweetness": number,
  "temperature": "Hot" | "Cold",
  "optionalAdditions": ["string"],
  "substitutions": ["string"],
  "whyThisWorks": "string"
}`
}

export function buildBattlePrompt(
  ingredients: string[],
  recentNames: string[] = []
): string {
  const ingredientList =
    ingredients.length > 0
      ? ingredients.join(', ')
      : 'Espresso, Milk, Sugar (use sensible defaults)'

  const avoidRepeat =
    recentNames.length > 0
      ? `\n- Do NOT repeat these recipe names: ${recentNames.slice(0, 10).join(', ')}`
      : ''

  return `You are an award-winning barista.

Using ONLY these ingredients:
${ingredientList}

Generate TWO completely different café-quality coffee recipes for a Brew Battle.

Rules:
- Recipes must be distinctly different in flavor profile, temperature, or style.
- Do not invent unavailable ingredients.
- Suggest substitutions if needed.
- Creative unique names for each.
- Explain why flavors work in whyThisWorks for each.
- Keep preparation under 10 minutes each.
- Return valid JSON only, no markdown.${avoidRepeat}

Return this exact JSON shape:
{
  "recipeA": {
    "name": "string",
    "description": "string",
    "prepTime": number,
    "difficulty": "Easy" | "Medium" | "Hard",
    "ingredients": ["string"],
    "steps": ["string"],
    "calories": number,
    "coffeeStrength": number,
    "sweetness": number,
    "temperature": "Hot" | "Cold",
    "optionalAdditions": ["string"],
    "substitutions": ["string"],
    "whyThisWorks": "string"
  },
  "recipeB": { /* same shape */ }
}`
}
