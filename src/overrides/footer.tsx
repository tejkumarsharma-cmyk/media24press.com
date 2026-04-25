import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

export function FooterOverride() {
  return (
    <footer className="bg-[#0f0730] text-white">
      <div className="border-b border-white/15">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <h3 className="text-2xl font-semibold">{SITE_CONFIG.name}</h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">
              Built for modern press releases and high-visibility announcements. Publish once, distribute confidently, and keep your brand message consistent.
            </p>
            <Link href="/pricing" className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#3b14a7] hover:bg-white/90">
              Explore Plans
            </Link>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">Platform</p>
            <div className="mt-4 grid gap-2 text-sm text-white/80">
              <Link href="/updates" className="hover:text-white">Latest News</Link>
              <Link href="/pricing" className="hover:text-white">Pricing</Link>
              <Link href="/search" className="hover:text-white">Search</Link>
              <Link href="/create/mediaDistribution" className="hover:text-white">Submit Release</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">Company</p>
            <div className="mt-4 grid gap-2 text-sm text-white/80">
              <Link href="/about" className="hover:text-white">About Us</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
              <Link href="/press" className="hover:text-white">Press</Link>
              <Link href="/blog" className="hover:text-white">Blog</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">Legal</p>
            <div className="mt-4 grid gap-2 text-sm text-white/80">
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <Link href="/cookies" className="hover:text-white">Cookies</Link>
              <Link href="/licenses" className="hover:text-white">Licenses</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
        <p>Media-ready publishing infrastructure for growth teams.</p>
      </div>
    </footer>
  )
}
