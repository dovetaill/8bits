import * as React from 'react'
export const Modal: React.FC<{open:boolean; onClose:()=>void; children:React.ReactNode}> = ({open,onClose,children}) => {
  if (!open) return null
  return (<div className="fixed inset-0 bg-[rgba(0,0,0,.25)] grid place-items-center z-50" onClick={onClose}>
    <div className="bg-surface border-3 border-ink rounded-[var(--radius)] shadow-brut p-5 w-[min(640px,92vw)]" onClick={(e)=>e.stopPropagation()}>{children}</div>
  </div>)
}
