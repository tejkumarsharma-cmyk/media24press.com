import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { CalendarDays, Facebook, Linkedin, Mail, Twitter } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPostBySlug, fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { formatRichHtml, RichContent } from '@/components/shared/rich-content'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

function getPostImage(post?: { media?: Array<{ url?: string }>; content?: unknown } | null) {
  const media = Array.isArray(post?.media) ? post.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  if (mediaUrl) return mediaUrl
  const content = post?.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  if (Array.isArray(content.images) && typeof content.images[0] === 'string') return content.images[0]
  if (typeof content.logo === 'string') return content.logo
  return 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80'
}

export async function TaskDetailPageOverride({ slug }: { task: TaskKey; slug: string }) {
  const post = await fetchTaskPostBySlug('mediaDistribution', slug)
  if (!post) notFound()

  const recent = (await fetchTaskPosts('mediaDistribution', 8, { fresh: true }))
    .filter((item) => item.slug !== slug)
    .slice(0, 5)
  const content = (post.content || {}) as Record<string, unknown>
  const html = formatRichHtml((content.body as string) || post.summary || '', 'Post body will appear here.')
  const shareUrl = encodeURIComponent(`https://media24press.com/updates/${post.slug}`)
  const shareText = encodeURIComponent(post.title)

  return (
    <div className="min-h-screen media24-soft-gradient text-[#1d1340]">
      <NavbarShell />
      <section className="bg-[#12073a] py-14 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
            {String((post.content as any)?.category || 'Press Release')}
          </p>
          <h1 className="mt-3 max-w-5xl text-4xl font-semibold leading-tight sm:text-5xl">{post.title}</h1>
          <p className="mt-4 max-w-3xl text-base text-white/80">
            {(post.summary || 'Official media announcement from the newsroom.').slice(0, 210)}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/75">
            <span>By {post.authorName || 'Media24Press Editorial Desk'}</span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>
      </section>

      <main className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="media24-card overflow-hidden p-3">
          <div className="relative h-[360px] overflow-hidden rounded-2xl">
            <Image src={getPostImage(post)} alt={post.title} fill className="object-cover" />
          </div>
          <div className="p-4">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6f58b5]">
              <span className="rounded-full bg-[#f1e9ff] px-3 py-1">{String((content.category as string) || 'News')}</span>
              <span className="rounded-full bg-[#f1e9ff] px-3 py-1">Media24Press</span>
            </div>
            <div className="prose prose-lg max-w-none prose-headings:text-[#28185f] prose-p:text-[#433875] prose-li:text-[#433875] prose-a:text-[#3b14a7]">
              <RichContent html={html} />
            </div>
          </div>
        </article>

        <aside className="space-y-6">
          <div className="media24-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7f60cf]">Share Release</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#d7c7ff] bg-white px-3 py-2 text-xs font-semibold text-[#3b14a7] hover:bg-[#f3ecff]"
              >
                <Twitter className="h-4 w-4" />
                Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#d7c7ff] bg-white px-3 py-2 text-xs font-semibold text-[#3b14a7] hover:bg-[#f3ecff]"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#d7c7ff] bg-white px-3 py-2 text-xs font-semibold text-[#3b14a7] hover:bg-[#f3ecff]"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={`mailto:?subject=${shareText}&body=${shareUrl}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#d7c7ff] bg-white px-3 py-2 text-xs font-semibold text-[#3b14a7] hover:bg-[#f3ecff]"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>

          <div className="media24-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7f60cf]">Related Articles</p>
            <div className="mt-4 space-y-3">
              {recent.map((item) => (
                <Link key={item.id} href={`/updates/${item.slug}`} className="block rounded-xl border border-[#eadfff] bg-white p-3 hover:bg-[#faf7ff]">
                  <p className="text-sm font-semibold text-[#28185f]">{item.title}</p>
                  <p className="mt-1 text-xs text-[#6f58b5]">
                    {new Date(item.publishedAt || Date.now()).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </main>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="media24-card p-6">
          <h2 className="text-2xl font-semibold text-[#28185f]">More News From Media24Press</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recent.slice(0, 3).map((item) => (
              <Link key={`bottom-${item.id}`} href={`/updates/${item.slug}`} className="rounded-2xl border border-[#eadfff] bg-white p-4 hover:bg-[#faf7ff]">
                <p className="text-sm font-semibold text-[#28185f]">{item.title}</p>
                <p className="mt-2 text-xs text-[#6f58b5]">{(item.summary || '').slice(0, 100)}...</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
