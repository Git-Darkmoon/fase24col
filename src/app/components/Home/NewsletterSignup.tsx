// components/NewsletterSignup.tsx
export const NewsletterSignup = () => (
  <section className="py-12">
    <div className="container mx-auto px-4 max-w-xl text-center">
      <h2 className="text-2xl font-bold mb-2 text-slate-900">
        Stay in the Loop
      </h2>
      <p className="text-slate-700 mb-4">
        Sign up for exclusive drops and get 10% off your first order.
      </p>
      <form className="flex flex-col sm:flex-row gap-2 justify-center">
        <input
          type="email"
          required
          placeholder="Your email"
          className="px-4 py-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-slate-900 text-white rounded font-medium hover:bg-slate-700 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  </section>
)
