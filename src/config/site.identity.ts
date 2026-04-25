export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || '0poxzufj79',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'media24press.com',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Instant press release distribution for growing brands',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Media24Press helps teams publish and distribute press releases with broad media visibility, fast turnaround, and measurable reach.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'media24press.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://media24press.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
