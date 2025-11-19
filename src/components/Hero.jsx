import { ArrowRight, CheckCircle2 } from 'lucide-react'

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute top-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-emerald-300/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-sm font-medium">
              <CheckCircle2 className="h-4 w-4" /> Web Design & Development Agency
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-emerald-950">
              Grow your business with a website that converts
            </h1>
            <p className="mt-5 text-lg text-emerald-900/80 leading-relaxed">
              We craft blazing-fast, SEO-friendly websites and stores. From landing pages to complex web apps — all delivered with a green, modern aesthetic.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 text-white px-5 py-3 font-semibold shadow hover:bg-emerald-700">
                Get a Free Proposal
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-lg bg-white text-emerald-900 px-5 py-3 font-semibold border border-emerald-200 hover:bg-emerald-50">
                See Our Work
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                ['200+','Projects'],
                ['50+','eCommerce'],
                ['100%','Responsive'],
                ['<1s','LCP']
              ].map(([k,v]) => (
                <div key={k} className="rounded-xl bg-white border border-emerald-100 p-4">
                  <div className="text-2xl font-extrabold text-emerald-900">{k}</div>
                  <div className="text-xs uppercase tracking-wide text-emerald-900/70">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-emerald-50 border border-emerald-100 shadow-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop" alt="Agency team working" className="h-full w-full object-cover mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-emerald-100 rounded-xl p-4 shadow-md">
              <p className="text-sm text-emerald-900"><span className="font-semibold">Fast delivery</span> in as little as 10 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
