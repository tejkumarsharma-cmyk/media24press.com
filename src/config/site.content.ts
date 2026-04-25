import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Media Press Release Platform',
  },
  footer: {
    tagline: 'Distribute stories. Build authority. Track results.',
  },
  hero: {
    badge: 'Trusted by growth teams',
    title: ['Get your story in front of millions — instantly'],
    description:
      'Launch media-ready press releases, expand your reach across trusted outlets, and build momentum with a polished distribution workflow.',
    primaryCta: {
      label: 'View Latest News',
      href: '/updates',
    },
    secondaryCta: {
      label: 'See Pricing',
      href: '/pricing',
    },
    searchPlaceholder: 'Search press releases',
    focusLabel: 'Featured',
    featureCardBadge: 'Media Reach',
    featureCardTitle: 'Get featured where your audience already reads.',
    featureCardDescription:
      'From launch announcements to funding updates, publish once and distribute through a press-release-first experience.',
  },
  home: {
    metadata: {
      title: 'Press release distribution for modern brands',
      description:
        'Media24Press is a media distribution platform for high-impact announcements, company news, and brand storytelling.',
      openGraphTitle: 'Media24Press | Press Release Distribution',
      openGraphDescription:
        'Publish and distribute press releases with modern workflow, rich media support, and measurable audience reach.',
      keywords: ['press release distribution', 'media outreach', 'newsroom publishing', 'brand announcements'],
    },
    introBadge: 'Platform Overview',
    introTitle: 'A media-first publishing system designed for visibility.',
    introParagraphs: [
      'Media24Press helps teams publish professional press releases without losing speed.',
      'Our flow keeps messaging clear, assets organized, and audience reach front and center.',
      'The experience is built for both editorial clarity and conversion-focused distribution.',
    ],
    sideBadge: 'Why teams choose us',
    sidePoints: [
      'Distribution-ready format for announcements.',
      'Clean newsroom pages that are easy to scan.',
      'Conversion-driven CTAs and trust blocks.',
      'Mobile-first layouts with lightweight performance.',
    ],
    primaryLink: {
      label: 'Explore Latest News',
      href: '/updates',
    },
    secondaryLink: {
      label: 'View Pricing',
      href: '/pricing',
    },
  },
  cta: {
    badge: 'Start Publishing',
    title: 'Turn your next announcement into measurable media visibility.',
    description:
      'Create your account, pick a distribution plan, and publish a release in minutes.',
    primaryCta: {
      label: 'Create Account',
      href: '/register',
    },
    secondaryCta: {
      label: 'Contact Team',
      href: '/contact',
    },
  },
  taskSectionHeading: 'Latest News',
  taskSectionDescriptionSuffix: 'Read the newest press releases and announcements.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles',
    description: 'Read the latest posts and long-form updates.',
  },
  listing: {
    title: 'Listings',
    description: 'Explore listings and directory-style entries.',
  },
  classified: {
    title: 'Classifieds',
    description: 'Browse classifieds and short-form notices.',
  },
  image: {
    title: 'Images',
    description: 'Browse image-led updates and visual posts.',
  },
  profile: {
    title: 'Profiles',
    description: 'View profile pages and public identities.',
  },
  sbm: {
    title: 'Bookmarks',
    description: 'Browse curated resources and saved links.',
  },
  pdf: {
    title: 'Resources',
    description: 'Open PDFs and downloadable files.',
  },
  mediaDistribution: {
    title: 'Latest News',
    description: 'Browse recent press releases, announcements, and media updates.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: { title: 'Listings', paragraphs: ['Directory entries and service pages.'], links: [{ label: 'Home', href: '/' }] },
  article: { title: 'Articles', paragraphs: ['General long-form article feed.'], links: [{ label: 'Home', href: '/' }] },
  classified: { title: 'Classifieds', paragraphs: ['Short-form posts and notices.'], links: [{ label: 'Home', href: '/' }] },
  image: { title: 'Images', paragraphs: ['Image-first posts and galleries.'], links: [{ label: 'Home', href: '/' }] },
  profile: { title: 'Profiles', paragraphs: ['Profile pages and identity surfaces.'], links: [{ label: 'Home', href: '/' }] },
  sbm: { title: 'Bookmarks', paragraphs: ['Curated saved links and references.'], links: [{ label: 'Home', href: '/' }] },
  pdf: { title: 'Resources', paragraphs: ['Downloadable files and documents.'], links: [{ label: 'Home', href: '/' }] },
  social: { title: 'Social', paragraphs: ['Short updates and activity.'], links: [{ label: 'Home', href: '/' }] },
  comment: { title: 'Comments', paragraphs: ['Commentary and response posts.'], links: [{ label: 'Home', href: '/' }] },
  org: { title: 'Organizations', paragraphs: ['Organization pages and entities.'], links: [{ label: 'Home', href: '/' }] },
  mediaDistribution: {
    title: 'Latest News',
    paragraphs: [
      'This archive is designed for modern press release publishing, with clear headlines, strong metadata, and high readability.',
      'Visitors can quickly discover announcements, open full stories, and share releases across channels.',
    ],
    links: [
      { label: 'Home', href: '/' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}
