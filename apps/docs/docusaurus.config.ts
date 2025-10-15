import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'

const config: Config = {
  title: 'Dove UI Docs',
  url: 'https://your-org.github.io',
  baseUrl: '/docs/',
  favicon: 'img/favicon.ico',
  i18n: { defaultLocale: 'zh-CN', locales: ['zh-CN'] },
  presets: [
    ['classic', ({
      docs: { sidebarPath: require.resolve('./sidebars.ts') },
      blog: false,
      theme: { customCss: require.resolve('./src/css/custom.css') }
    })]
  ]
}
export default config
