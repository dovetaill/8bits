import * as React from 'react'
type Variant = 'info'|'success'|'danger'|'queued'
const map: Record<Variant,string> = { info:'bg-info text-white', success:'bg-success text-ink', danger:'bg-danger text-white', queued:'bg-surface border border-ink text-ink' }
export const Badge: React.FC<{variant?:Variant; className?:string; children?:React.ReactNode}> = ({variant='info', className='', children}) => (
  <span className={`inline-block px-3 py-1 text-[13px] font-semibold rounded-[8px] ${map[variant]} ${className}`}>{children}</span>
)
