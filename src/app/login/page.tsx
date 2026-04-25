import Link from 'next/link'
import Image from 'next/image'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { LOGIN_PAGE_OVERRIDE_ENABLED, LoginPageOverride } from '@/overrides/login-page'

export default function LoginPage() {
  if (LOGIN_PAGE_OVERRIDE_ENABLED) {
    return <LoginPageOverride />
  }

  return (
    <div className="min-h-screen media24-soft-gradient text-[#1d1340]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="media24-card p-8">
            <h1 className="text-4xl font-semibold tracking-[-0.05em]">Sign In</h1>
            <p className="mt-4 text-sm leading-7 text-[#5f518c]">
              Access your Media24Press workspace to manage releases, analytics, and distribution plans.
            </p>
            <form className="mt-6 grid gap-4">
              <input className="h-12 rounded-xl border border-[#ddceff] bg-white px-4 text-sm" placeholder="Username" />
              <input className="h-12 rounded-xl border border-[#ddceff] bg-white px-4 text-sm" placeholder="Password" type="password" />
              <button type="submit" className="inline-flex h-12 items-center justify-center rounded-xl bg-[#3b14a7] px-6 text-sm font-semibold text-white hover:bg-[#5321d0]">
                Sign In
              </button>
            </form>
            <div className="mt-5 flex items-center justify-between text-sm text-[#6f58b5]">
              <Link href="/forgot-password" className="hover:underline">Forgot username or password?</Link>
              <Link href="/register" className="font-semibold hover:underline">Create Account</Link>
            </div>
          </div>
          <div className="media24-card p-4">
            <div className="relative h-[360px] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Business collaboration"
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
