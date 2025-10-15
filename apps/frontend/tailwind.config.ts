import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx,js}'],
  theme: { extend: {} },
  plugins: [ require('@dove/tokens/plugins/brutalism.tailwind.js') ]
}
export default config
