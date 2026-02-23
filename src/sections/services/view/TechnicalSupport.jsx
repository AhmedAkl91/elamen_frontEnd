import { useState } from 'react';

import { useTranslate } from 'src/locales';

import { Iconify } from 'src/components/iconify';

// import techImg from '../assets/services-hero.png';

const services = [
  {
    title: 'General filter study (FREE, only Spain)',
    content:
      'Answering a technical questionnaire lets us find out about your installation, operational needs and opportunities for improvement.',
  },
  {
    title: 'Visit to the filter by a specialist (FREE, only Spain)',
    content:
      'Answering a technical questionnaire lets us find out about your installation, operational needs and opportunities for improvement.',
  },
  {
    title: 'Support and/or assembly of bags and cartridges',
    content:
      'Answering a technical questionnaire lets us find out about your installation, operational needs and opportunities for improvement.',
  },
  {
    title: 'Preventive and corrective maintenance',
    content:
      'Answering a technical questionnaire lets us find out about your installation, operational needs and opportunities for improvement.',
  },
  { title: 'General inspection of filter system' },
];

export default function TechnicalSupport({ serviceImage, faqs }) {
  const [open, setOpen] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useTranslate();

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-lg font-semibold mb-2">{t('technical.support')}</h3>
        <div className="mt-2 h-[2px] w-5 bg-red-500" />

        <div className="grid md:grid-cols-3 gap-10 mt-5">
          <img src={serviceImage} alt="" className="rounded shadow-sm" />

          <div className="lg:col-span-2 space-y-1">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-md border transition-all duration-500 ease-out ${
                    isOpen
                      ? 'border-gray-700 bg-gray-800 text-white shadow-lg'
                      : 'border-gray-200 bg-white hover:shadow-md'
                  }`}
                >
                  {/* Header */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between px-6 py-2 text-left font-semibold transition-colors duration-300 border-l-2"
                  >
                    <span>{item.question}</span>

                    {/* Animated icon */}
                    <span
                      className={`text-xl transition-transform duration-500 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      <Iconify
                        icon="iconamoon:arrow-up-2-light"
                        width={30}
                        // className="w-4 sm:w-5 h-4 sm:h-5 text-black group-hover:text-gray-200 transition-colors"
                      />
                    </span>
                  </button>

                  {/* Animated content */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 text-sm text-gray-300">
                        <p className="mb-4 leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
