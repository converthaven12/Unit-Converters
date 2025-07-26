// next.config.ts
import path from 'path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config) {
    // Wire up "@/…" imports to point at your /src folder
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      '@': path.resolve(__dirname, 'src'),
    }
    return config
  },
}

export default nextConfig
