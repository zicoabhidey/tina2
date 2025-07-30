/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true
  },
  basePath: isProd ? '/tina2' : '',
  assetPrefix: isProd ? '/tina2/' : '',
  // Add this to fix routing issues
  async rewrites() {
    return []
  },
  // Ensure proper static export
  distDir: 'out'
}

module.exports = nextConfig