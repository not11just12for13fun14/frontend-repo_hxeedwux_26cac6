export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a1711]">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.25)_0%,rgba(6,95,70,0.0)_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Subscriptions and loyalty for Shopify, simplified.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-emerald-100/80">
            Subscribfy+ helps you sell memberships, manage product subscriptions, and reward loyal customers — all in one clean dashboard.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#cta" className="inline-flex h-11 items-center justify-center rounded-md bg-emerald-500 px-5 text-sm font-semibold text-emerald-950 shadow hover:bg-emerald-400 transition">
              Add to Shopify
            </a>
            <a href="#features" className="inline-flex h-11 items-center justify-center rounded-md border border-emerald-800/60 px-5 text-sm font-semibold text-white/90 hover:bg-emerald-900/40 transition">
              Learn more
            </a>
          </div>
          <p className="mt-3 text-xs text-emerald-200/60">No code required. Free to install. 2-minute setup.</p>
        </div>
      </div>
    </section>
  )
}
