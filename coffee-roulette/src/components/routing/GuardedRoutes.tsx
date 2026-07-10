import { useApp } from '../../context/AppContext'
import { RequireState } from './RequireState'
import { ResultPage } from '../../pages/ResultPage'
import { AIChoicePage } from '../../pages/AIChoicePage'
import { RoulettePage } from '../../pages/RoulettePage'

export function GuardedResultPage() {
  const { currentRecipe } = useApp()
  return (
    <RequireState when={currentRecipe !== null}>
      <ResultPage />
    </RequireState>
  )
}

export function GuardedAIChoicePage() {
  const { aiRecipeChoice } = useApp()
  return (
    <RequireState when={aiRecipeChoice !== null}>
      <AIChoicePage />
    </RequireState>
  )
}

export function GuardedRoulettePage() {
  const { isSpinning } = useApp()
  return (
    <RequireState when={isSpinning}>
      <RoulettePage />
    </RequireState>
  )
}
