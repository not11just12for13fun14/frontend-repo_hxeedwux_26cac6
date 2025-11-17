import { Star, Gift, Repeat } from 'lucide-react'

const features = [
  {
    icon: Repeat,
    title: 'Product subscriptions',
    desc: 'Let customers subscribe to products on weekly, monthly, or custom intervals with automatic billing.'
  },
  {
    icon: Star,
    title: 'Memberships',
    desc: 'Sell site-wide memberships that unlock exclusive content, discounts, and perks.'
  },
  {
    icon: Gift,
    title: 'Loyalty & rewards',
    desc: 'Award points for purchases and actions, and let shoppers redeem rewards seamlessly at checkout.'
  }
]

export default function Features() {
  return (
    <section id="features" className="bg-[#0c1b13]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-emerald-900/40 bg-[#0d1f17]/60 p-6">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/20 text-emerald-300 grid place-items-center mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-emerald-100/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
