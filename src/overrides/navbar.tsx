'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const NAVBAR_OVERRIDE_ENABLED = true

const utilityLinks = [
  { label: 'Latest News', href: '/updates' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const primaryLinks = [
  { label: 'Home', href: '/' },
  { label: 'News Releases', href: '/updates' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function NavbarOverride() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-[#12073a]/95 text-white backdrop-blur-xl">
      <div className="border-b border-white/15 bg-[#0d042e]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-white/75 sm:px-6">
          <p>Media Distribution Network</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/register" className="hover:text-white">Join now</Link>
            <Link href="/login" className="hover:text-white">Sign in</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="media24-gradient flex h-11 w-11 items-center justify-center rounded-xl text-sm font-black shadow-lg shadow-purple-950/35">
            M24
          </div>
          <div>
            <p className="text-lg font-semibold leading-none">{SITE_CONFIG.name}</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/65">Press Release Platform</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {primaryLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/12 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link href="/search" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/15">
            <Search className="h-4 w-4" />
          </Link>
          <Link href="/register" className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20">
            Get Started
          </Link>
          <Link href="/create/mediaDistribution" className="rounded-full bg-[#ff7f32] px-4 py-2 text-sm font-semibold text-white hover:bg-[#ff934f]">
            Submit Release
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div className="hidden border-t border-white/15 bg-[#12073a] lg:block">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-x-5 gap-y-1 px-4 py-2 text-xs text-white/75 sm:px-6">
          {utilityLinks.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-white">{item.label}</Link>
          ))}
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/15 bg-[#12073a] px-4 py-4 lg:hidden">
          <div className="grid gap-2">
            {primaryLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl border border-white/20 bg-white/8 px-4 py-3 text-sm font-medium text-white/85"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/search" onClick={() => setMobileOpen(false)} className="rounded-xl border border-white/20 px-4 py-3 text-sm">
              Search
            </Link>
            <Link href="/create/mediaDistribution" onClick={() => setMobileOpen(false)} className="rounded-xl bg-[#ff7f32] px-4 py-3 text-sm font-semibold text-white">
              Submit Release
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
