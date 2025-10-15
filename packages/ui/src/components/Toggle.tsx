import * as React from 'react'
export const Toggle: React.FC<{checked?:boolean; onChange?:(v:boolean)=>void; className?:string}> = ({checked,onChange,className=''}) => {
  const [inner, setInner] = React.useState(!!checked)
  React.useEffect(()=>{ if (checked!==undefined) setInner(!!checked) },[checked])
  const set=(v:boolean)=>{ setInner(v); onChange?.(v) }
  return (<div role="switch" aria-checked={inner} data-checked={inner} onClick={()=>set(!inner)} className={`brut-toggle ${className}`}><div className="brut-toggle__dot"/></div>)
}
