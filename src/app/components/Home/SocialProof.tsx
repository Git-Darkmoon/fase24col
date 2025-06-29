// components/SocialProof.tsx
export const SocialProof = () => (
  <section className="py-12 bg-slate-50">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-2xl font-bold mb-6 text-slate-900 text-center">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-slate-700 mb-2">
            &ldquo;The quality is insane. My new hoodie is my go-to!&rdquo;
          </p>
          <span className="text-slate-900 font-semibold">— Alex R.</span>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-slate-700 mb-2">
            &ldquo;Fast shipping and the fit is perfect. Will buy again.&rdquo;
          </p>
          <span className="text-slate-900 font-semibold">— Jamie L.</span>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-slate-700 mb-2">
            &ldquo;Love the designs. Fase24Col is my new favorite brand.&rdquo;
          </p>
          <span className="text-slate-900 font-semibold">— Sam K.</span>
        </div>
      </div>
    </div>
  </section>
)
