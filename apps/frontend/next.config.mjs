import { withContentlayer } from 'next-contentlayer'

// Note: Contentlayer has known issues on Windows
// If you encounter errors on Windows, comment out the withContentlayer wrapper
// and use the plain config below
export default withContentlayer({
  reactStrictMode: true,
  webpack: (config) => {
    config.infrastructureLogging = { level: 'error' }
    return config
  }
})

// Fallback config for Windows (if contentlayer fails):
// export default {
//   reactStrictMode: true,
//   webpack: (config) => {
//     config.infrastructureLogging = { level: 'error' }
//     return config
//   }
// }
