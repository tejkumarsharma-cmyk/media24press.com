export const siteTaskDefinitions = [
  {
    key: 'mediaDistribution',
    label: 'Latest News',
    route: '/updates',
    description: 'Recent press releases and newsroom announcements.',
    contentType: 'mediaDistribution',
    enabled: true,
  },
] as const

export const siteTaskViews = {
  mediaDistribution: '/updates',
} as const
