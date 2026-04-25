import { defineSiteTheme } from '@/config/site.theme.defaults'

export const SITE_THEME = defineSiteTheme({
  shell: 'editorial',
  hero: {
    variant: 'immersive',
    eyebrow: 'Media Press Release',
  },
  home: {
    layout: 'news-grid',
    primaryTask: 'mediaDistribution',
    featuredTaskKeys: ['mediaDistribution', 'article', 'profile'],
  },
  navigation: {
    variant: 'editorial',
  },
  footer: {
    variant: 'feature-rich',
  },
  cards: {
    listing: 'editorial-feature',
    article: 'editorial-feature',
    image: 'studio-panel',
    profile: 'editorial-feature',
    classified: 'editorial-feature',
    pdf: 'catalog-grid',
    sbm: 'editorial-feature',
    social: 'studio-panel',
    org: 'catalog-grid',
    comment: 'editorial-feature',
  },
})
