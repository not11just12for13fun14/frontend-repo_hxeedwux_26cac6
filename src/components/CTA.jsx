export default function CTA() {
  return (
    <section id="cta" className="bg-[#0a1711]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-emerald-900/40 bg-gradient-to-br from-emerald-600/20 to-emerald-400/10 p-8 md:p-10">
          <div className="md:flex items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to grow with subscriptions and loyalty?</h2>
              <p className="mt-2 text-emerald-100/80">Install Subscribfy+ and launch in minutes. No code, no hassle.</p>
            </div>
            <a href="#" className="mt-6 md:mt-0 inline-flex h-11 items-center justify-center rounded-md bg-emerald-500 px-5 text-sm font-semibold text-emerald-950 shadow hover:bg-emerald-400 transition">
              Install on Shopify
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
