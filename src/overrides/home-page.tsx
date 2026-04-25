import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BadgeCheck, CheckCircle2, Star } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'

export const HOME_PAGE_OVERRIDE_ENABLED = true

const heroLogos = ['FOX', 'NBC', 'Forbes', 'AP', 'YAHOO', 'WSJ']

const testimonialCards = [
  {
    name: 'Amelia Davis',
    quote: 'Media24Press helped us secure meaningful pickup in just one day. The workflow is clean and the turnaround is excellent.',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Ravi Mehta',
    quote: 'We replaced scattered outreach with one distribution flow. Reporting and visibility have both improved significantly.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Sophia Chen',
    quote: 'The platform feels built for brand teams. Our launches now go live faster and look much more professional.',
    image:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=700&q=80',
  },
]

const audiencePoints = [
  'Startups launching product or funding announcements',
  'PR teams handling recurring media distribution',
  'Agencies running multiple client campaigns',
  'Founders building brand authority with consistent news',
]

const howItWorks = [
  'Pick Writers & Where',
  'See Prices As You Go',
  'Publish in Minutes',
]

const trustBadges = ['Trustpilot 4.9/5', '5-Star Delivery', 'Editorial Review', 'Secure Publishing']

const faqItems = [
  {
    q: 'How quickly can my press release be published?',
    a: 'Most releases are prepared and distributed quickly after submission, depending on review requirements and selected distribution package.',
  },
  {
    q: 'Can I include images and media assets?',
    a: 'Yes. You can add featured visuals and supporting assets for richer stories and improved engagement.',
  },
  {
    q: 'Do you support recurring campaigns?',
    a: 'Yes. Teams can run ongoing releases while maintaining a consistent publishing workflow and brand tone.',
  },
  {
    q: 'Is there support for first-time publishers?',
    a: 'Absolutely. Our team and platform guidance are designed for both experienced PR teams and first-time founders.',
  },
]

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Read the full release for complete details.'
  return value.length > 120 ? value.slice(0, 117).trimEnd() + '...' : value
}

function getPostImage(post?: { media?: Array<{ url?: string }>; content?: unknown } | null) {
  const media = Array.isArray(post?.media) ? post?.media : []
  const fromMedia = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  if (fromMedia) return fromMedia
  const content = post?.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  if (typeof content.logo === 'string' && content.logo) return content.logo
  if (Array.isArray(content.images) && typeof content.images[0] === 'string') return content.images[0]
  return 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80'
}

function getPostHref(task: TaskKey, slug: string) {
  const route = SITE_CONFIG.tasks.find((item) => item.key === task)?.route || '/updates'
  return `${route}/${slug}`
}

export async function HomePageOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 12, { fresh: true })
  const blogCards = posts.slice(1, 7)
  const relatedCards = posts.slice(7, 11)
  const activeCards = blogCards.length ? blogCards : posts.slice(0, 6)
  const activeRelated = relatedCards.length ? relatedCards : posts.slice(0, 4)

  return (
    <div className="min-h-screen media24-soft-gradient text-[#1d1340]">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden bg-[#130739] pb-16 pt-14 text-white">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1800&q=80"
              alt="Press conference stage"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,6,43,0.94)_20%,rgba(15,6,43,0.7)_65%,rgba(15,6,43,0.95)_100%)]" />
          </div>
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="media24-animate-up">
              <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
                Press Reach Engine
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
                Get your story in front of millions — instantly
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/85">
                Publish high-impact press releases with polished formatting, trusted distribution, and measurable visibility across media channels.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/create/mediaDistribution" className="inline-flex items-center gap-2 rounded-full bg-[#ff7f32] px-5 py-3 text-sm font-semibold text-white hover:bg-[#ff9250]">
                  Submit Press Release
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/pricing" className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/20">
                  View Plans
                </Link>
              </div>
            </div>

            <div className="relative mx-auto h-[330px] w-[330px] md:h-[420px] md:w-[420px]">
              <div className="absolute inset-[17%] flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-center backdrop-blur">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/80">Featured On</p>
                  <p className="mt-2 text-4xl font-black">FOX</p>
                  <p className="mt-2 text-sm text-white/80">280M+ Views</p>
                </div>
              </div>
              {heroLogos.map((logo, index) => {
                const angle = (index / heroLogos.length) * Math.PI * 2
                const x = 50 + 40 * Math.cos(angle)
                const y = 50 + 40 * Math.sin(angle)
                return (
                  <div
                    key={logo}
                    className="media24-animate-float absolute flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/15 text-[11px] font-semibold backdrop-blur"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    {logo}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="media24-card mx-auto max-w-4xl p-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7f60cf]">Social Proof</p>
            <h2 className="mt-3 text-3xl font-semibold">Your brand in the right place</h2>
            <div className="mx-auto mt-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#f4ebff] text-3xl font-black text-[#3b14a7]">
              FOX
            </div>
            <p className="mt-3 text-sm text-[#5f518c]">280M+ Views across distribution channels</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7f60cf]">Customer Stories</p>
            <h2 className="mt-2 text-3xl font-semibold">Trusted by brands and agencies</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonialCards.map((item) => (
              <article key={item.name} className="media24-card h-full p-5">
                <div className="relative h-44 overflow-hidden rounded-2xl">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <p className="mt-4 text-3xl leading-none text-[#ff7f32]">"</p>
                <p className="-mt-3 text-sm leading-7 text-[#4f437d]">{item.quote}</p>
                <p className="mt-4 font-semibold text-[#28185f]">{item.name}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7f60cf]">Who is this for?</p>
            <h2 className="mt-3 text-3xl font-semibold">Made for teams that need reach and speed</h2>
            <ul className="mt-6 space-y-3">
              {audiencePoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-[#4f437d]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#ff7f32]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="media24-card relative overflow-hidden p-4">
            <div className="relative h-80 overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1200&q=80"
                alt="Team planning media campaign"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute right-7 top-7 rounded-xl bg-[#ff7f32] px-4 py-2 text-sm font-semibold text-white shadow-lg">
              Save 20% on Annual
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="media24-card relative h-[320px] overflow-hidden p-3">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              alt="Press release workflow dashboard"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7f60cf]">How It Works</p>
            <h2 className="mt-3 text-3xl font-semibold">Simple flow, fast publishing</h2>
            <div className="mt-6 space-y-3">
              {howItWorks.map((step, index) => (
                <div key={step} className="media24-card flex items-center gap-4 p-4">
                  <div className="media24-gradient flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium text-[#28185f]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 bg-[#241056] py-6 text-white">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 text-sm font-semibold sm:px-6">
            {trustBadges.map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2">
                <BadgeCheck className="h-4 w-4 text-[#ffd166]" />
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7f60cf]">Blog & Academy</p>
              <h2 className="mt-2 text-3xl font-semibold">Learn what drives distribution performance</h2>
            </div>
            <Link href="/updates" className="hidden rounded-full border border-[#d6c4ff] px-4 py-2 text-sm font-semibold text-[#3b14a7] hover:bg-[#f3ecff] sm:inline-flex">
              Explore
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activeCards.map((post) => (
              <Link key={post.id} href={getPostHref('mediaDistribution', post.slug)} className="media24-card overflow-hidden transition hover:-translate-y-1">
                <div className="relative h-44">
                  <Image src={getPostImage(post)} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#28185f]">{post.title}</h3>
                  <p className="mt-2 text-sm text-[#5f518c]">{excerpt(post.summary)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7f60cf]">Customer Reviews</p>
            <h2 className="mt-2 text-3xl font-semibold">Rated highly by founders and teams</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {activeRelated.map((item, idx) => (
              <article key={item.id} className="media24-card p-5">
                <div className="mb-3 flex items-center gap-1 text-[#ffae43]">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={`${item.id}-${star}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-7 text-[#4f437d]">{excerpt(item.summary || 'Great publishing experience with reliable delivery.')}</p>
                <p className="mt-4 text-sm font-semibold text-[#28185f]">Customer {idx + 1}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <div className="media24-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7f60cf]">FAQ</p>
            <h2 className="mt-2 text-3xl font-semibold">Common questions</h2>
            <div className="mt-6 divide-y divide-[#e7dcff]">
              {faqItems.map((item) => (
                <details key={item.q} className="group py-4">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-[#28185f]">{item.q}</summary>
                  <p className="mt-3 text-sm leading-7 text-[#5f518c]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
          <div className="grid gap-6 overflow-hidden rounded-[2rem] bg-[#ffd12f] p-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6a4200]">Newsletter</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#3b2600]">Get distribution tips and release templates</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#5b3a00]">
                Join our newsletter for practical insights on writing better announcements and improving media pickup.
              </p>
              <form className="mt-6 grid gap-3 sm:grid-cols-3">
                <input placeholder="Your name" className="h-11 rounded-xl border border-[#e3b611] bg-white/90 px-4 text-sm text-[#3b2600]" />
                <input placeholder="Your email" className="h-11 rounded-xl border border-[#e3b611] bg-white/90 px-4 text-sm text-[#3b2600]" />
                <button type="submit" className="h-11 rounded-xl bg-[#3b14a7] text-sm font-semibold text-white hover:bg-[#5321d0]">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="relative h-64 overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
                alt="Marketing team reviewing results"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
