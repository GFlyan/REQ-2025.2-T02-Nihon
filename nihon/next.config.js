module.exports = {
  // ...existing config ...
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'swtzchnoafhqigpskjoh.supabase.co',
        pathname: '/storage/v1/object/public/**'
      }
    ]
  },
  // ...existing config ...
}