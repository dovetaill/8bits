import { withContentlayer } from 'next-contentlayer'

// Auto-detect OS and conditionally enable contentlayer
// Contentlayer has known issues on Windows, so we disable it automatically
const isWindows = process.platform === 'win32'

const baseConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.infrastructureLogging = { level: 'error' }
    return config
  }
}

// Use contentlayer on Linux/Mac, skip on Windows
export default isWindows ? baseConfig : withContentlayer(baseConfig)
