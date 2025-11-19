function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$999',
      desc: 'Perfect for new businesses and personal brands',
      features: ['1-3 pages', 'Responsive design', 'Basic SEO', 'Contact form', '1 revision round'],
    },
    {
      name: 'Growth',
      price: '$2,499',
      desc: 'Best for growing companies that need more',
      features: ['Up to 8 pages', 'CMS or blog', 'On-page SEO', 'Analytics setup', '2 revision rounds'],
      popular: true,
    },
    {
      name: 'Pro',
      price: 'Custom',
      desc: 'For advanced stores or web apps',
      features: ['Unlimited pages', 'eCommerce or web app', 'Technical SEO', 'Performance budget', 'Priority support'],
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950">Simple pricing</h2>
          <p className="mt-3 text-emerald-900/80">Transparent packages with everything you need to launch.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border ${t.popular ? 'border-emerald-300 shadow-lg' : 'border-emerald-100 shadow'} bg-gradient-to-br from-white to-emerald-50 p-6`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-emerald-950">{t.name}</h3>
                <div className="text-2xl font-extrabold text-emerald-900">{t.price}</div>
              </div>
              <p className="mt-2 text-sm text-emerald-900/80">{t.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-emerald-900/90">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-emerald-600">•</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-semibold ${t.popular ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-white text-emerald-900 border border-emerald-200 hover:bg-emerald-50'}`}>
                {t.price === 'Custom' ? 'Request a Quote' : 'Get Started'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
