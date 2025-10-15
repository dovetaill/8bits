import * as React from 'react'
export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className='', ...props}) => (
  <div className={`bg-panel border-3 border-ink rounded-[var(--radius)] shadow-brut p-5 ${className}`} {...props} />
)
export const KpiCard: React.FC<{label:string; value:React.ReactNode; className?:string}> = ({label,value,className=''}) => (
  <div className={`bg-panel border-3 border-ink rounded-[var(--radius)] shadow-brut p-5 text-center min-w-[120px] ${className}`}>
    <div className="text-[#666] text-[12px]">{label}</div><div className="text-[28px] font-bold font-mono">{value}</div>
  </div>
)
