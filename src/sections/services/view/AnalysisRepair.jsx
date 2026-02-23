import { useState } from 'react';

export default function FilterServicesAccordion() {
  const [open, setOpen] = useState(true);

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto rounded-lg  backdrop-blur-md shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-3 gap-10">
            {/* ACTIVE ACCORDION */}
            <img
              src="https://placehold.co/400x600"
              alt="Filter bag analysis"
              className="rounded-md object-cover"
            />
            <div className="relative col-span-2">
              {/* Left red border */}
              <span className="absolute left-0 top-0 h-full w-1 bg-red-500" />

              {/* Header */}
              <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between bg-red-500 px-6 py-4 text-white font-semibold transition-colors"
              >
                <span>Analysis and testing of used or new bags</span>
                <span className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
                  ⌄
                </span>
              </button>

              {/* Content */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                  open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 text-sm text-gray-700">
                    {/* Image */}

                    {/* Text */}
                    <div className="md:col-span-2 space-y-4">
                      <p>
                        Please download and read the following Health and Safety Rules for sending
                        and receiving filter elements. Following these Rules avoids returns, delays
                        and inconvenience and ensures more efficient management of our services, as
                        well as protecting the health of the people who make up our workforce.
                      </p>

                      <p>Thank you for your cooperation.</p>

                      <a href="#" className="block font-semibold text-red-500 hover:underline">
                        Download PDF document
                      </a>

                      <a href="#" className="block font-semibold text-red-500 hover:underline">
                        Request for service
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
