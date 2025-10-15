'use client'
import React, { useState } from 'react'
import { TriangleIcon, BrutButton, Card, Badge, Toggle, Tabs, KpiCard } from '@dove/ui'
export default function App(){
  const [tab, setTab] = useState('all')
  const [on, setOn] = useState(false)
  return (
    <div className="max-w-[1100px] mx-auto p-6 space-y-6">
      <div className="flex items-center gap-2 justify-end">
        <button onClick={()=>document.documentElement.setAttribute('data-theme','famicom')} className="border-3 border-ink rounded-brut shadow-brut bg-[var(--accent)] text-ink px-3 py-1 text-sm font-semibold">Famicom</button>
        <button onClick={()=>document.documentElement.setAttribute('data-theme','lego')} className="border-3 border-ink rounded-brut shadow-brut bg-[var(--accent-3)] text-white px-3 py-1 text-sm font-semibold">LEGO</button>
        <button onClick={()=>{const el=document.documentElement; el.setAttribute('data-radius', el.getAttribute('data-radius')==='soft'?'sharp':'soft')}} className="border-3 border-ink rounded-brut shadow-brut bg-surface px-3 py-1 text-sm font-semibold">切圆角</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <KpiCard label="样例数据" value="42" /><KpiCard label="并发" value="30" /><KpiCard label="耗时" value="244s" /><KpiCard label="成本" value="$0.54" />
      </div>
      <Tabs items={[{key:'all',label:'全部',direction:'up'},{key:'design',label:'设计'},{key:'fe',label:'前端'},{key:'ux',label:'交互'}]} value={tab} onChange={setTab} />
      <div className="grid md:grid-cols-3 gap-5">
        {[1,2,3].map(i=> (<Card key={i}><div className="h-[140px] bg-surface border-3 border-ink rounded-[var(--radius)] mb-3 grid place-items-center">封面</div><h3 className="text-[18px] font-semibold mb-1">示例卡片 {i}</h3><p className="text-[14px] text-[#444]">硬阴影 + 粗边 + 小圆角。</p><div className="mt-3 flex gap-2 items-center"><Badge variant="success">完成</Badge><BrutButton size="sm" variant="neutral" rightIcon={<TriangleIcon direction='right'/>}>详情</BrutButton></div></Card>))}
      </div>
      <div className="flex items-center gap-3"><Toggle checked={on} onChange={setOn}/><span>开关：{String(on)}</span><BrutButton leftIcon={<TriangleIcon direction='left'/>} variant="neutral">返回</BrutButton><BrutButton rightIcon={<TriangleIcon direction='right'/>} variant="primary">继续</BrutButton></div>
    </div>
  )
}
