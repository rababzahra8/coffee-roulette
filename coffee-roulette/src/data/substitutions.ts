import type { Substitution } from '../types'

export const SUBSTITUTIONS: Substitution[] = [
  { missing: 'Vanilla', replacement: 'Honey', message: 'Try replacing vanilla with honey.' },
  { missing: 'Oat Milk', replacement: 'Milk', message: 'Use regular milk instead of oat milk.' },
  { missing: 'Almond Milk', replacement: 'Milk', message: 'Use regular milk instead of almond milk.' },
  { missing: 'Coconut Milk', replacement: 'Oat Milk', message: 'Oat milk works great as a coconut milk substitute.' },
  { missing: 'Heavy Cream', replacement: 'Milk', message: 'Use whole milk with a splash of butter for richness.' },
  { missing: 'Brown Sugar', replacement: 'Sugar', message: 'Regular sugar works — add a drop of molasses for depth.' },
  { missing: 'Honey', replacement: 'Brown Sugar', message: 'Brown sugar gives a similar warm sweetness.' },
  { missing: 'Maple Syrup', replacement: 'Honey', message: 'Honey is a perfect maple syrup stand-in.' },
  { missing: 'Espresso', replacement: 'Instant Coffee', message: 'Double the instant coffee for a bold espresso-like kick.' },
  { missing: 'Instant Coffee', replacement: 'Espresso', message: 'A shot of espresso will do the trick.' },
  { missing: 'Caramel', replacement: 'Brown Sugar', message: 'Melt brown sugar with a splash of cream for homemade caramel.' },
  { missing: 'Whipped Cream', replacement: 'Milk', message: 'Froth some milk for a lighter topping.' },
  { missing: 'Cinnamon', replacement: 'Nutmeg', message: 'A pinch of nutmeg brings similar warmth.' },
  { missing: 'Cocoa', replacement: 'Chocolate', message: 'Melted chocolate works beautifully here.' },
  { missing: 'Chocolate', replacement: 'Cocoa', message: 'Mix cocoa with a bit of sugar for a chocolatey fix.' },
  { missing: 'Cardamom', replacement: 'Cinnamon', message: 'Cinnamon adds a lovely spiced note instead.' },
  { missing: 'Condensed Milk', replacement: 'Milk', message: 'Use milk with extra sugar for a similar sweetness.' },
  { missing: 'Cold Brew', replacement: 'Espresso', message: 'Espresso over ice makes a great cold brew alternative.' },
  { missing: 'Matcha', replacement: 'Cocoa', message: 'Cocoa powder gives an earthy twist if matcha is unavailable.' },
  { missing: 'Irish Cream', replacement: 'Vanilla', message: 'Vanilla with a splash of cream mimics the flavor nicely.' },
]

export function findSubstitution(missingIngredient: string): Substitution | undefined {
  return SUBSTITUTIONS.find(
    (s) => s.missing.toLowerCase() === missingIngredient.toLowerCase()
  )
}

export function getMissingIngredients(
  recipeIngredients: string[],
  available: string[]
): string[] {
  const availableLower = available.map((a) => a.toLowerCase())
  return recipeIngredients.filter(
    (ing) => !availableLower.includes(ing.toLowerCase())
  )
}

export function getSubstitutionMessages(
  recipeIngredients: string[],
  available: string[]
): string[] {
  const missing = getMissingIngredients(recipeIngredients, available)
  return missing
    .map((m) => findSubstitution(m))
    .filter((s): s is Substitution => s !== undefined)
    .map((s) => s.message)
}
