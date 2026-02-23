// WhyChooseUs.jsx

const WhyChooseUs = () => (
  // Section container with the characteristic light gray background
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      {/* --- Section Title and Subtext --- */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 uppercase tracking-wide">
          WHY CHOOSE US
        </h2>
        <p className="text-xl text-gray-600 mt-3 max-w-3xl mx-auto">
          Our commitment to quality, expertise, and customer satisfaction sets us apart in the
          industrial filtration market.
        </p>
      </div>

      {/* --- Main Content Layout (Grid or Flex for structure) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* --- Left Column: Text Features (Pillars 1 & 2) --- */}
        <div className="space-y-12 lg:space-y-16 lg:order-1">
          {/* Feature 1 */}
          <div className="text-right">
            <h4 className="text-2xl font-bold text-gray-800 mb-1">
              <span className="text-red-600 mr-2">/</span>
              Unrivaled Expertise
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Decades of experience in complex industrial environments ensure we provide the most
              effective and reliable filtration solutions tailored to your needs.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-right">
            <h4 className="text-2xl font-bold text-gray-800 mb-1">
              <span className="text-red-600 mr-2">/</span>
              Global Standards Compliance
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              All our products meet stringent international quality and environmental standards,
              giving you peace of mind and guaranteed performance.
            </p>
          </div>
        </div>

        {/* --- Center Column: Main Image/Video Placeholder --- */}
        <div className="lg:order-2">
          <div className="relative w-full h-80 bg-gray-300 shadow-2xl flex items-center justify-center overflow-hidden">
            {/* Placeholder for the main image/video */}
            <img
              src="https://via.placeholder.com/600x400/AAAAAA/FFFFFF?text=INDUSTRIAL+FILTRATION+VIDEO"
              alt="Why Choose Us"
              className="w-full h-full object-cover"
            />
            {/* Play Button Overlay (Optional - if it's a video) */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer hover:bg-black/50 transition">
              <svg
                className="w-16 h-16 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* --- Right Column: Text Features (Pillars 3 & 4) --- */}
        <div className="space-y-12 lg:space-y-16 lg:order-3">
          {/* Feature 3 */}
          <div className="text-left">
            <h4 className="text-2xl font-bold text-gray-800 mb-1">
              Customized Solutions
              <span className="text-red-600 ml-2">/</span>
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              We don't offer one-size-fits-all. Our engineers design bespoke filtration systems that
              integrate seamlessly with your existing infrastructure.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-left">
            <h4 className="text-2xl font-bold text-gray-800 mb-1">
              24/7 Service & Support
              <span className="text-red-600 ml-2">/</span>
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our dedicated technical support team is available around the clock to minimize
              downtime and keep your operations running smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
