import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx,js}'],
  theme: { extend: {} },
  plugins: [ require('@dove/tokens/plugins/brutalism.tailwind.js') ]
}
export default config
