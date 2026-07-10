export function getGreeting(): { text: string; emoji: string } {
  const hour = new Date().getHours()
  if (hour < 12) return { text: 'Good Morning', emoji: '☀️' }
  if (hour < 17) return { text: 'Good Afternoon', emoji: '🌤️' }
  if (hour < 21) return { text: 'Good Evening', emoji: '🌅' }
  return { text: 'Good Night', emoji: '🌙' }
}

export function vibrate(pattern: number | number[] = 50) {
  if ('vibrate' in navigator) {
    navigator.vibrate(pattern)
  }
}

export async function shareRecipe(name: string, description: string) {
  const text = `☕ ${name}\n\n${description}\n\nDiscovered on Coffee Roulette`
  if (navigator.share) {
    await navigator.share({ title: name, text })
  } else {
    await navigator.clipboard.writeText(text)
  }
}
