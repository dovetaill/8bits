import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './Tabs'
import React from 'react'
const meta: Meta<typeof Tabs> = { title: 'Brutalism/Tabs', component: Tabs }
export default meta
type S = StoryObj<typeof Tabs>
export const Basic: S = {
  render: () => {
    const [v, setV] = React.useState('a')
    return <Tabs items={[{key:'a',label:'全部',direction:'up'},{key:'b',label:'设计'},{key:'c',label:'前端'}]} value={v} onChange={setV}/>
  }
}
