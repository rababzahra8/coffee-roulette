import { Navigate } from 'react-router-dom'
import type { ReactNode } from 'react'

interface RequireStateProps {
  when: boolean
  to?: string
  children: ReactNode
}

/** Redirects to a safe route when required app state is missing. */
export function RequireState({ when, to = '/home', children }: RequireStateProps) {
  if (!when) return <Navigate to={to} replace />
  return children
}
