import { Code2, Palette, ShoppingCart, ShieldCheck, Search, Rocket } from 'lucide-react'

function Services() {
  const items = [
    {
      icon: Palette,
      title: 'Brand & UI Design',
      desc: 'Elegant brand identities and UI kits that scale with your business.',
    },
    {
      icon: Code2,
      title: 'Websites & Web Apps',
      desc: 'Modern, responsive sites built with best practices and clean code.',
    },
    {
      icon: ShoppingCart,
      title: 'eCommerce Stores',
      desc: 'Conversion-focused storefronts with blazing performance.',
    },
    {
      icon: Search,
      title: 'SEO & Analytics',
      desc: 'Technical SEO, on-page optimization, and actionable reporting.',
    },
    {
      icon: ShieldCheck,
      title: 'Care & Support',
      desc: 'Hosting, maintenance, security hardening, and content updates.',
    },
    {
      icon: Rocket,
      title: 'Growth Experiments',
      desc: 'A/B tests, landing pages, and funnels to improve conversion.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950">What we do</h2>
          <p className="mt-3 text-emerald-900/80">Everything you need to launch and grow your online presence.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-6 hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-emerald-950 text-lg">{title}</h3>
              <p className="mt-2 text-sm text-emerald-900/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
