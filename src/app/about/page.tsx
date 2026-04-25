import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/shared/footer'
import { NavbarShell } from '@/components/shared/navbar-shell'

const values = [
  {
    title: 'Media-First Experience',
    description: 'Every page is built around press release readability and distribution outcomes.',
  },
  {
    title: 'Fast Publishing Workflow',
    description: 'From draft to release, teams can move quickly without compromising quality.',
  },
  {
    title: 'Trust and Visibility',
    description: 'Our product design focuses on credibility, clarity, and broad audience reach.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen media24-soft-gradient text-[#1d1340]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <section className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7f60cf]">About Us</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              Building better press release experiences for modern brands
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-8 text-[#5f518c]">
              Media24Press helps teams publish and distribute announcements with confidence. We combine clean editorial design, practical workflow, and scalable distribution support.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/pricing" className="rounded-full bg-[#3b14a7] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#5321d0]">
                View Pricing
              </Link>
              <Link href="/contact" className="rounded-full border border-[#d5c2ff] px-5 py-2.5 text-sm font-semibold text-[#3b14a7] hover:bg-[#f3ecff]">
                Contact Team
              </Link>
            </div>
          </div>
          <div className="media24-card relative h-[360px] overflow-hidden p-3">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
              alt="Editorial and media team collaborating"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <article key={item.title} className="media24-card p-6">
              <h2 className="text-xl font-semibold text-[#28185f]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#5f518c]">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="media24-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7f60cf]">Our Mission</p>
            <p className="mt-4 text-sm leading-8 text-[#4f437d]">
              We believe every announcement deserves a strong platform. Our mission is to make press release publishing easier, faster, and more credible for teams of every size.
            </p>
          </div>
          <div className="media24-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7f60cf]">What We Build</p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-[#4f437d]">
              <li>- Distribution-ready publishing pages</li>
              <li>- Searchable latest news archive</li>
              <li>- Structured pricing and onboarding surfaces</li>
              <li>- Share-friendly single press release layouts</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
