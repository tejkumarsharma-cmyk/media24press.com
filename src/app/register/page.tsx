import Link from 'next/link'
import Image from 'next/image'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { REGISTER_PAGE_OVERRIDE_ENABLED, RegisterPageOverride } from '@/overrides/register-page'

export default function RegisterPage() {
  if (REGISTER_PAGE_OVERRIDE_ENABLED) {
    return <RegisterPageOverride />
  }

  return (
    <div className="min-h-screen media24-soft-gradient text-[#1d1340]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="media24-card p-8">
            <h1 className="text-4xl font-semibold tracking-[-0.05em]">Create a New Media24Press Account</h1>
            <p className="mt-4 text-sm leading-7 text-[#5f518c]">
              Create your account to submit and manage press releases through Media24Press.
            </p>
            <form className="mt-6 grid gap-3">
              <input className="h-11 rounded-xl border border-[#ddceff] bg-white px-4 text-sm" placeholder="Company" />
              <input className="h-11 rounded-xl border border-[#ddceff] bg-white px-4 text-sm" placeholder="Email" />
              <input className="h-11 rounded-xl border border-[#ddceff] bg-white px-4 text-sm" placeholder="Phone" />
              <input className="h-11 rounded-xl border border-[#ddceff] bg-white px-4 text-sm" placeholder="Website" />
              <div className="grid grid-cols-2 gap-3">
                <input className="h-11 rounded-xl border border-[#ddceff] bg-white px-4 text-sm" placeholder="Password" type="password" />
                <input className="h-11 rounded-xl border border-[#ddceff] bg-white px-4 text-sm" placeholder="Confirm" type="password" />
              </div>
              <button type="submit" className="h-11 rounded-xl bg-[#3b14a7] text-sm font-semibold text-white hover:bg-[#5321d0]">
                Sign Up
              </button>
            </form>
            <div className="mt-5 text-sm text-[#6f58b5]">
              Already have an account? <Link href="/login" className="font-semibold hover:underline">Sign In</Link>
            </div>
          </div>
          <div className="media24-card p-4">
            <div className="relative h-[360px] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                alt="Growth dashboard illustration"
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
