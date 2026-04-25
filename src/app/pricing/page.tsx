import Link from 'next/link'
import { Check, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const plans = [
  {
    name: 'Basic',
    price: '$99',
    description: 'For early-stage announcements and lightweight distribution.',
    features: ['Regional distribution', 'Standard analytics', 'Up to 3 media assets'],
  },
  {
    name: 'Pro',
    price: '$249',
    description: 'For growing teams running regular campaigns.',
    features: ['National distribution', 'Advanced analytics', 'Priority editorial review', 'Up to 8 media assets'],
    popular: true,
  },
  {
    name: 'Premium',
    price: '$499',
    description: 'For enterprise visibility and broad media reach.',
    features: ['Global distribution', 'Premium analytics dashboard', 'Dedicated support', 'Unlimited media assets'],
  },
]

const addOns = [
  'Editorial optimization support',
  'Homepage feature placement',
  'Distribution acceleration',
  'Campaign performance export',
]

const faqItems = [
  {
    q: 'Can I switch plans later?',
    a: 'Yes, you can move between plans as your distribution needs grow.',
  },
  {
    q: 'Do all plans include analytics?',
    a: 'Yes, each plan includes analytics with deeper reporting on higher tiers.',
  },
  {
    q: 'Are there discounts for annual billing?',
    a: 'Annual billing options are available for teams with recurring campaigns.',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen media24-soft-gradient text-[#1d1340]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <section className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7f60cf]">Pricing</p>
          <h1 className="mt-2 text-4xl font-semibold sm:text-5xl">Choose the plan that fits your media goals</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-[#5f518c]">
            Clear pricing with distribution level, analytics depth, and media reach aligned to your campaign scale.
          </p>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`media24-card p-6 ${plan.popular ? 'ring-2 ring-[#3b14a7]' : ''}`}
            >
              {plan.popular ? (
                <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#3b14a7] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                  <Sparkles className="h-3.5 w-3.5" />
                  Most Popular
                </p>
              ) : null}
              <h2 className="text-2xl font-semibold text-[#28185f]">{plan.name}</h2>
              <p className="mt-1 text-4xl font-black text-[#3b14a7]">{plan.price}</p>
              <p className="mt-3 text-sm text-[#5f518c]">{plan.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-[#4f437d]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-[#ff7f32]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold ${
                  plan.popular
                    ? 'bg-[#3b14a7] text-white hover:bg-[#5321d0]'
                    : 'border border-[#d7c7ff] text-[#3b14a7] hover:bg-[#f3ecff]'
                }`}
              >
                Choose {plan.name}
              </Link>
            </article>
          ))}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="media24-card p-6">
            <h3 className="text-2xl font-semibold text-[#28185f]">Add-ons</h3>
            <ul className="mt-4 grid gap-2 text-sm text-[#4f437d]">
              {addOns.map((item) => (
                <li key={item} className="rounded-xl border border-[#eadfff] bg-white px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="media24-card p-6">
            <h3 className="text-2xl font-semibold text-[#28185f]">FAQ</h3>
            <div className="mt-4 divide-y divide-[#eadfff]">
              {faqItems.map((item) => (
                <details key={item.q} className="py-3">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-[#28185f]">{item.q}</summary>
                  <p className="mt-2 text-sm text-[#5f518c]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
