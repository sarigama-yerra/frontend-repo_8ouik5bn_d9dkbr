function Work() {
  const sites = [
    {
      title: 'EcoMarket — Sustainable Shop',
      img: 'https://images.unsplash.com/photo-1612198188060-c7fce2edb9db?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'LeafLabs — SaaS Landing',
      img: 'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'NatureFit — Fitness Studio',
      img: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  return (
    <section id="work" className="py-20 bg-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950">Selected work</h2>
          <p className="mt-3 text-emerald-900/80">A few examples of websites we’ve crafted recently.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sites.map((s) => (
            <div key={s.title} className="group rounded-2xl overflow-hidden border border-emerald-100 bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-emerald-950">{s.title}</h3>
                <p className="text-sm text-emerald-900/70">Responsive • SEO-friendly • Fast</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
