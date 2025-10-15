import * as React from 'react'
import { TriangleIcon } from './TriangleIcon'
export const Tabs: React.FC<{items:{key:string; label:string; direction?:'up'|'right'|'down'|'left'}[]; value:string; onChange:(k:string)=>void; className?:string}> = ({items,value,onChange,className=''}) => (
  <div className={`flex flex-wrap gap-3 ${className}`}>
    {items.map(it=>{
      const active = it.key===value
      const base = 'border-3 border-ink rounded-brut shadow-brut px-5 py-2 text-[14px] font-semibold inline-flex items-center gap-2 transition-transform'
      const cls = active ? 'bg-[var(--accent)] text-ink' : 'bg-surface'
      return <button key={it.key} onClick={()=>onChange(it.key)} className={`${base} ${cls}`}><TriangleIcon direction={it.direction ?? 'right'} />{it.label}</button>
    })}
  </div>
)
