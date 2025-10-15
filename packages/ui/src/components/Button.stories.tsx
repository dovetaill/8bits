import type { Meta, StoryObj } from '@storybook/react'
import { BrutButton } from './Button'
import { TriangleIcon } from './TriangleIcon'
const meta: Meta<typeof BrutButton> = { title: 'Brutalism/Button', component: BrutButton }
export default meta
type S = StoryObj<typeof BrutButton>
export const Primary: S = { args: { children:'主要按钮' } }
export const WithIcon: S = { args: { children:'下一步', rightIcon: <TriangleIcon direction="right" /> } }
