export default function TechnologyPage() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Page Header */}
      <section className="bg-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-xl font-semibold border-b border-red-500 inline-block pb-2">
            Technology
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-xl font-semibold mb-4">
          The challenge is to provide really efficient solutions
        </h2>
        <p className="text-sm text-gray-600 max-w-5xl">
          We meet the challenge of efficiency by offering solutions that combine professional
          experience, research into fabrics and raw materials, analysis of real needs, observation
          of how products are used in practice, testing and diagnosis of operating results,
          observation of total quality and improvement of production processes and times.
        </p>
      </section>

      {/* Manufacturing */}
      <section className="relative">
        <img
          src="/images/tech-hero.webp"
          alt="Manufacturing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-white">
          <h3 className="text-lg font-semibold mb-2">Manufacturing and finishing</h3>
          <p className="text-sm text-white/80 max-w-4xl mb-10">
            Exclusive machinery and craft skills enable us to supply high-quality products, both
            standard and to order, at highly competitive prices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Ultrasound and heat sealing', img: '/images/manu-1.webp' },
              { title: 'Precision cutting systems', img: '/images/manu-2.webp' },
              { title: 'Bags with intermediate rings', img: '/images/manu-3.webp' },
            ].map((item, i) => (
              <div key={i} className="bg-white text-gray-800">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                <div className="bg-red-600 text-white text-sm text-center py-3 font-medium">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-lg font-semibold mb-2">
            Research, development, innovation and quality
          </h3>
          <p className="text-sm text-gray-600 max-w-4xl mb-10">
            Technical Office to design and develop solutions tailored to customers’ needs.
            Laboratory devoted to Innovation + Research + Development and testing of raw materials
            and new products. Quality Assurance Department (ISO 9001).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Technical Office', img: '/images/rd-1.webp' },
              { title: 'R&D Laboratory', img: '/images/rd-2.webp' },
              { title: 'Certified quality', img: '/images/rd-3.webp' },
            ].map((item, i) => (
              <div key={i} className="bg-white">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                <div className="bg-red-600 text-white text-sm text-center py-3 font-medium">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-slate-700 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <img
              key={i}
              src={`/images/gallery-${i + 1}.webp`}
              alt="Gallery"
              className="w-full h-40 object-cover"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
