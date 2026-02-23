// Define the two main distributor blocks for readability
const distributorData = [
  {
    title: 'EXCLUSIVE DISTRIBUTOR',
    location: 'in Spain and Portugal',
    details: 'for leading international brands in their specialist areas...',
    logoSet: [
      { name: 'IFIL', src: 'https://via.placeholder.com/100x30?text=IFIL' },
      { name: 'PENTAIR', src: 'https://via.placeholder.com/100x30?text=PENTAIR' },
      { name: 'MECAIR', src: 'https://via.placeholder.com/100x30?text=MECAIR' },
      { name: 'L&B', src: 'https://via.placeholder.com/100x30?text=L&B' },
      { name: 'GOYEN', src: 'https://via.placeholder.com/100x30?text=GOYEN' },
    ],
    description:
      'We supplement our products and services with other products fittings and accessories industry need t result qmpltaissassss filtn ils gaps...',
    countryHighlight: 'Portugal', // For styling the red link
  },
  {
    title: 'EXCLUSIVE DISTRIBUTOR',
    location: 'PHAMALINE PRODUCTS IN TURKEY',
    details: '',
    logoSet: [{ name: 'Tema', src: 'https://via.placeholder.com/100x30?text=Tema' }],
    description:
      'TEMA sure exclusive distribdor of ICT Filtracion PhamUnre products re pharmaceutical in Turkey.',
    countryHighlight: null,
  },
];

// Reusable component for the Distributor Block
const DistributorBlock = ({ data }) => (
  <div>
    <h3 className="text-xl font-bold uppercase tracking-wider mb-2">{data.title}</h3>
    <p className="text-2xl font-light text-gray-800 mb-4">
      {data.location.split(new RegExp(`(${data.countryHighlight})`, 'i')).map((part, index) =>
        part === data.countryHighlight ? (
          <span key={index} className="text-red-600 font-semibold">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
      <span className="text-base text-gray-600 font-normal"> {data.details}</span>
    </p>
    <p className="text-sm text-gray-500 mb-6 max-w-lg">{data.description}</p>
    <div className="flex flex-wrap items-center gap-4 border-b pb-4 border-gray-200">
      {data.logoSet.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={`${logo.name} logo`}
          className="h-8 max-w-[100px] object-contain"
        />
      ))}
    </div>
  </div>
);

// Reusable component for the Product Image Card (Dark Background)
const ProductImageCard = ({ title, imageSrc, caption }) => (
  <div className="rounded-lg overflow-hidden bg-white shadow-xl">
    <div className="relative h-64 bg-gray-500">
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-3 bg-red-600 text-white text-center font-semibold text-sm">{caption}</div>
  </div>
);

const DistributorSection = () => (
  <section>
    {/* --- Top Distributor Section (White Background) --- */}
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <DistributorBlock data={distributorData[0]} />
          <DistributorBlock data={distributorData[1]} />
        </div>
      </div>
    </div>

    {/* --- Product Showcase and CTA (Dark Background) --- */}
    <div className="bg-[#2c3035] py-20">
      <div className="container mx-auto px-4">
        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ProductImageCard
            title="IFIL, AG (Batza)"
            imageSrc="https://via.placeholder.com/400x300/4a4e51/ffffff?text=FILTERS+AND+CASINGS"
            caption="IFIL, AG (Batza)"
          />
          <ProductImageCard
            title="MECAIR - GOYEN"
            imageSrc="https://via.placeholder.com/400x300/4a4e51/ffffff?text=PENTAIR+SYSTEMS"
            caption="MECAIR - GOYEN by Pentair Clean Air Systems (EE.UU) products"
          />
        </div>

        {/* Call to Action Bar */}
        <div className="bg-[#464c53] p-6 flex justify-between items-center rounded-lg shadow-inner">
          <p className="text-white text-lg font-light">
            IF YOU CAN'T FIND YOUR PRODUCT, PLEASE CONTACT US.
          </p>
          <button className="bg-white text-gray-800 font-semibold py-2 px-6 text-sm hover:bg-red-600 hover:text-white transition duration-300 border border-gray-300">
            Can we help you?
          </button>
        </div>
      </div>
    </div>

    {/* --- Industries Section (Grayscale Pattern Background) --- */}
    <div
      className="py-16 text-gray-800"
      // Applying the subtle background texture with a placeholder or simple radial gradient
      style={{
        backgroundImage: 'radial-gradient(circle, #EBEBEB 1px, transparent 1px)',
        backgroundSize: '25px 25px',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h4 className="text-2xl font-extrabold uppercase tracking-wider mb-3">INDUSTRIES</h4>
        <h5 className="text-lg font-semibold mb-4 max-w-3xl">
          Our products are used in used he demanding sectors lihe **pharmaceutical**, **food**
          **automotive** industries.
        </h5>
        <p className="text-sm text-gray-600 leading-relaxed">
          Industry specific solutions with exclusive fabrics an Ates and FDA materials. ICT
          FILTRATION products are manufactured in te Good Gsocnufacturing ractices, GMP)
          Ifrmsallised Working Procedures (SWP).
        </p>
      </div>
    </div>
  </section>
);

export default DistributorSection;
