import * as React from 'react'
export type Direction = 'up'|'right'|'down'|'left'
export const TriangleIcon: React.FC<{direction?:Direction; size?:number; strokeWidth?:number} & React.SVGProps<SVGSVGElement>> = ({direction='up', size=16, strokeWidth=3, className='', style, ...rest}) => {
  const deg = ({up:0,right:90,down:180,left:270} as any)[direction] ?? 0
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} style={{ transform:`rotate(${deg}deg)`, ...style }} className={className} aria-hidden="true" {...rest}>
      <polygon points="8,2 14,14 2,14" fill="currentColor" stroke="#000" strokeWidth={strokeWidth} vectorEffect="non-scaling-stroke" />
    </svg>
  )
}
