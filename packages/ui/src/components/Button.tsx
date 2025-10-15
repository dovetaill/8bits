import * as React from 'react'
export type ButtonVariant = 'primary'|'secondary'|'neutral'|'danger'
export type ButtonSize = 'sm'|'md'|'lg'
export const BrutButton: React.FC<{variant?:ButtonVariant; size?:ButtonSize; leftIcon?:React.ReactNode; rightIcon?:React.ReactNode} & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({variant='primary', size='md', className='', leftIcon, rightIcon, children, ...props}) => {
  const variantCls: Record<ButtonVariant,string> = { primary:'bg-[var(--accent)] text-ink', secondary:'bg-[var(--accent-2)] text-ink', neutral:'bg-surface text-ink', danger:'bg-danger text-white' }
  const sizeCls: Record<ButtonSize,string> = { sm:'px-5 py-2 text-[13px]', md:'px-7 py-3', lg:'px-8 py-4' }
  const base = 'border-3 border-ink rounded-brut font-semibold shadow-brut transition-transform focus:outline-none focus-visible:border-4 focus-visible:border-ink inline-flex items-center gap-2'
  return <button className={`${base} ${variantCls[variant]} ${sizeCls[size]} ${className}`} {...props}>{leftIcon}{children}{rightIcon}</button>
}
