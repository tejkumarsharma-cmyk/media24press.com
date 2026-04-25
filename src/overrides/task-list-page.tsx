import Link from 'next/link'
import Image from 'next/image'
import { CalendarDays, Filter, Search } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Read the full release for complete details.'
  return value.length > 145 ? value.slice(0, 142).trimEnd() + '...' : value
}

function getPostImage(post?: { media?: Array<{ url?: string }>; content?: unknown } | null) {
  const media = Array.isArray(post?.media) ? post.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  if (mediaUrl) return mediaUrl
  const content = post?.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  if (Array.isArray(content.images) && typeof content.images[0] === 'string') return content.images[0]
  if (typeof content.logo === 'string') return content.logo
  return 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80'
}

export async function TaskListPageOverride({
  category,
  query,
  date,
}: {
  task: TaskKey
  category?: string
  query?: string
  date?: string
}) {
  const posts = await fetchTaskPosts('mediaDistribution', 24, { fresh: true })
  const normalizedCategory = category ? normalizeCategory(category) : 'all'
  const search = (query || '').trim().toLowerCase()
  const dateFilter = (date || 'all').toLowerCase()
  const now = Date.now()

  const filtered = posts.filter((post) => {
    const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
    const postCategory = typeof content.category === 'string' ? normalizeCategory(content.category) : 'all'
    const categoryMatches = normalizedCategory === 'all' || postCategory === normalizedCategory
    if (!categoryMatches) return false
    if (dateFilter !== 'all') {
      const published = new Date(post.publishedAt || now).getTime()
      const days = dateFilter === '7d' ? 7 : dateFilter === '30d' ? 30 : null
      if (days && now - published > days * 24 * 60 * 60 * 1000) return false
    }
    if (!search) return true
    const blob = `${post.title || ''} ${post.summary || ''} ${typeof content.body === 'string' ? content.body : ''}`.toLowerCase()
    return blob.includes(search)
  })

  const latest = filtered[0]
  const list = filtered.slice(1)

  return (
    <div className="min-h-screen media24-soft-gradient text-[#1d1340]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <section className="media24-card p-6">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7f60cf]">News Releases</p>
              <h1 className="mt-2 text-4xl font-semibold">Browse News Releases</h1>
              <p className="mt-3 text-sm text-[#5f518c]">Use category and search filters to quickly find the most relevant updates.</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#f4ebff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#3b14a7]">
              <Filter className="h-4 w-4" />
              {filtered.length} results
            </div>
          </div>
          <form action="/updates" className="mt-6 grid gap-3 sm:grid-cols-5">
            <div className="relative sm:col-span-2">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7f60cf]" />
              <input
                name="q"
                defaultValue={query || ''}
                placeholder="Search by headline or keyword"
                className="h-11 w-full rounded-xl border border-[#ddceff] bg-white px-10 text-sm text-[#2a1c63]"
              />
            </div>
            <select
              name="category"
              defaultValue={normalizedCategory}
              className="h-11 rounded-xl border border-[#ddceff] bg-white px-3 text-sm text-[#2a1c63]"
            >
              <option value="all">All categories</option>
              {CATEGORY_OPTIONS.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </select>
            <select name="date" defaultValue={dateFilter} className="h-11 rounded-xl border border-[#ddceff] bg-white px-3 text-sm text-[#2a1c63]">
              <option value="all">Any date</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
            </select>
            <button type="submit" className="h-11 rounded-xl bg-[#3b14a7] text-sm font-semibold text-white hover:bg-[#5321d0]">
              Apply
            </button>
          </form>
        </section>

        {latest ? (
          <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Link href={`/updates/${latest.slug}`} className="media24-card overflow-hidden p-3 transition hover:-translate-y-1">
              <div className="relative h-72 overflow-hidden rounded-2xl">
                <Image src={getPostImage(latest)} alt={latest.title} fill className="object-cover" />
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7f60cf]">
                  {String((latest.content as any)?.category || 'Featured')}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-[#28185f]">{latest.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#5f518c]">{excerpt(latest.summary)}</p>
              </div>
            </Link>
            <div className="media24-card p-6">
              <h3 className="text-lg font-semibold text-[#28185f]">Latest Headlines</h3>
              <div className="mt-4 space-y-4">
                {filtered.slice(0, 4).map((post) => (
                  <Link key={post.id} href={`/updates/${post.slug}`} className="block rounded-xl border border-[#eadfff] bg-white p-3 transition hover:bg-[#faf7ff]">
                    <p className="text-sm font-medium text-[#28185f]">{post.title}</p>
                    <p className="mt-1 inline-flex items-center gap-2 text-xs text-[#7f60cf]">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="mt-8">
          {list.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((post) => (
                <article key={post.id} className="media24-card overflow-hidden p-3">
                  <div className="relative h-44 overflow-hidden rounded-2xl">
                    <Image src={getPostImage(post)} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7f60cf]">
                      {String((post.content as any)?.category || 'Update')}
                    </p>
                    <h2 className="mt-2 text-lg font-semibold text-[#28185f]">{post.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-[#5f518c]">{excerpt(post.summary)}</p>
                    <Link href={`/updates/${post.slug}`} className="mt-4 inline-flex rounded-full border border-[#d9c6ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#3b14a7] hover:bg-[#f3ecff]">
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="media24-card p-8 text-center text-sm text-[#5f518c]">No releases match the selected filters.</div>
          )}
        </section>

        <section className="mt-10">
          <div className="media24-card p-6">
            <h3 className="text-lg font-semibold text-[#28185f]">Need broader search?</h3>
            <p className="mt-2 text-sm text-[#5f518c]">Use the site-wide search tool to scan all task pages while keeping this news feed filter focused.</p>
            <Link href="/search" className="mt-4 inline-flex rounded-full bg-[#3b14a7] px-4 py-2 text-sm font-semibold text-white hover:bg-[#5321d0]">
              Open Global Search
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
