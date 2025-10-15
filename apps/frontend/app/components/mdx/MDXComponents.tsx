import * as React from 'react'
import { BrutButton, Badge } from '@dove/ui'

export const Callout: React.FC<{ type?: 'info'|'warn'|'danger'|'success'; children?: React.ReactNode }> = ({ type='info', children }) => {
  const bg = { info:'bg-info text-white', warn:'bg-warn text-ink', danger:'bg-danger text-white', success:'bg-success text-ink' }[type]
  return <div className={`border-3 border-ink rounded-[var(--radius)] shadow-brut p-3 ${bg}`}>{children}</div>
}

export const MDXComponents = {
  Badge,
  Callout,
  Button: BrutButton
} as Record<string, React.ComponentType<any>>
