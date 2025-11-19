import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const form = Object.fromEntries(new FormData(e.currentTarget))
      const res = await fetch(`${baseUrl}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Failed to send')
      setStatus('Thanks! We will reach out shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950">Tell us about your project</h2>
            <p className="mt-3 text-emerald-900/80">Share a few details and we’ll send a tailored proposal within 24 hours.</p>
            <div className="mt-8 rounded-2xl border border-emerald-100 bg-white p-6">
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-emerald-900/80">
                <div>
                  <div className="font-semibold text-emerald-950">Email</div>
                  hello@greenweb.agency
                </div>
                <div>
                  <div className="font-semibold text-emerald-950">Response time</div>
                  Under 24 hours
                </div>
                <div>
                  <div className="font-semibold text-emerald-950">Location</div>
                  Remote • Worldwide
                </div>
                <div>
                  <div className="font-semibold text-emerald-950">Working hours</div>
                  Mon - Fri, 9am - 6pm
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-emerald-900">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border border-emerald-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-900">Email</label>
                <input name="email" type="email" required className="mt-1 w-full rounded-md border border-emerald-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-emerald-900">Budget</label>
                <select name="budget" className="mt-1 w-full rounded-md border border-emerald-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500">
                  <option value="<$1k">Less than $1k</option>
                  <option value="$1k-$3k">$1k - $3k</option>
                  <option value="$3k-$10k">$3k - $10k</option>
                  <option value=">$10k">Above $10k</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-emerald-900">Project details</label>
                <textarea name="details" rows={4} className="mt-1 w-full rounded-md border border-emerald-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Tell us about your goals, timeline, and current website if any..." />
              </div>
            </div>

            <button disabled={loading} className="mt-4 inline-flex items-center justify-center rounded-lg bg-emerald-600 text-white px-5 py-3 font-semibold shadow hover:bg-emerald-700 disabled:opacity-60">
              {loading ? 'Sending...' : 'Send Request'}
            </button>

            {status && <p className="mt-3 text-sm text-emerald-900/80">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
