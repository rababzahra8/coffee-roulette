import type { BrewBattle } from '../types'

export function encodeBattleShare(battle: BrewBattle): string {
  const payload = {
    id: battle.id,
    ingredients: battle.ingredients,
    recipeA: battle.recipeA,
    recipeB: battle.recipeB,
    winnerId: battle.winnerId,
  }
  return btoa(encodeURIComponent(JSON.stringify(payload)))
}

export function decodeBattleShare(encoded: string): BrewBattle | null {
  try {
    const data = JSON.parse(decodeURIComponent(atob(encoded)))
    return {
      id: data.id,
      ingredients: data.ingredients,
      recipeA: data.recipeA,
      recipeB: data.recipeB,
      winnerId: data.winnerId,
      createdAt: Date.now(),
    }
  } catch {
    return null
  }
}

export async function generateBattleShareImage(battle: BrewBattle): Promise<Blob> {
  const canvas = document.createElement('canvas')
  canvas.width = 800
  canvas.height = 1000
  const ctx = canvas.getContext('2d')!

  const gradient = ctx.createLinearGradient(0, 0, 800, 1000)
  gradient.addColorStop(0, '#FDF8F3')
  gradient.addColorStop(1, '#E8D5C4')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 800, 1000)

  ctx.fillStyle = '#4A2C2A'
  ctx.font = 'bold 36px Georgia, serif'
  ctx.textAlign = 'center'
  ctx.fillText('☕ Brew Battle', 400, 80)

  ctx.font = '16px sans-serif'
  ctx.fillStyle = '#6B3E3A'
  ctx.fillText(`Ingredients: ${battle.ingredients.join(', ')}`, 400, 120)

  const drawCard = (recipe: typeof battle.recipeA, x: number, y: number, isWinner: boolean) => {
    ctx.fillStyle = isWinner ? '#4A2C2A' : '#FFFFFF'
    ctx.beginPath()
    ctx.roundRect(x, y, 320, 280, 24)
    ctx.fill()

    if (isWinner) {
      ctx.fillStyle = '#C4956A'
      ctx.font = 'bold 14px sans-serif'
      ctx.fillText('🏆 WINNER', x + 160, y + 30)
    }

    ctx.fillStyle = isWinner ? '#F5E6D3' : '#4A2C2A'
    ctx.font = 'bold 22px Georgia, serif'
    const name = recipe.name.length > 22 ? recipe.name.slice(0, 20) + '…' : recipe.name
    ctx.fillText(name, x + 160, y + (isWinner ? 70 : 50))

    ctx.font = '14px sans-serif'
    ctx.fillStyle = isWinner ? '#E8D5C4' : '#6B3E3A'
    ctx.fillText(`${recipe.temperature} · ${recipe.prepTime} min · ${recipe.calories} cal`, x + 160, y + (isWinner ? 100 : 80))
  }

  const aWins = battle.winnerId === battle.recipeA.id
  const bWins = battle.winnerId === battle.recipeB.id

  drawCard(battle.recipeA, 40, 180, aWins)
  drawCard(battle.recipeB, 440, 180, bWins)

  ctx.fillStyle = '#C4956A'
  ctx.font = 'bold 48px Georgia, serif'
  ctx.fillText('VS', 400, 340)

  ctx.fillStyle = '#4A2C2A'
  ctx.font = '14px sans-serif'
  ctx.fillText('Coffee Roulette · MLH Challenge', 400, 950)

  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob!), 'image/png')
  })
}

export async function shareBattle(battle: BrewBattle) {
  const shareUrl = `${window.location.origin}/brew-battle?share=${encodeBattleShare(battle)}`
  const text = `☕ Brew Battle!\n\n${battle.recipeA.name}\nVS\n${battle.recipeB.name}${
    battle.winnerId
      ? `\n\n🏆 Winner: ${battle.winnerId === battle.recipeA.id ? battle.recipeA.name : battle.recipeB.name}`
      : ''
  }\n\nRecreate it: ${shareUrl}`

  try {
    const blob = await generateBattleShareImage(battle)
    const file = new File([blob], 'brew-battle.png', { type: 'image/png' })
    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      await navigator.share({
        title: 'Brew Battle',
        text,
        files: [file],
        url: shareUrl,
      })
      return
    }
  } catch {
    // fall through to text share
  }

  if (navigator.share) {
    await navigator.share({ title: 'Brew Battle', text, url: shareUrl })
  } else {
    await navigator.clipboard.writeText(text)
  }
}
