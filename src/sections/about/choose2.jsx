import { m } from 'framer-motion';
import { useState, useEffect } from 'react';

import { URL_IMAGE } from 'src/config';
import { useTranslate } from 'src/locales';
import { useGetTeamsListQuery } from 'src/redux/api/front/api-team';

export default function AboutVision({ title13, title14 }) {
  const [dataTeams, setDataTeams] = useState([]);
  const { data: teams } = useGetTeamsListQuery();
  useEffect(() => {
    const check = () => {
      if (teams) {
        setDataTeams(teams.teams.teams);
      }
    };
    check();
  }, [teams]);

  const idx = dataTeams[0];
  const [activeId, setActiveId] = useState('');
  const [height, setHeight] = useState(1);

  useEffect(() => {
    const check = () => {
      if (idx) {
        setActiveId(idx?.id);
      }
    };
    check();
  }, [idx]);

  const { currentLang, t, i18n } = useTranslate();
  const dir = i18n.dir();

  function handleToggleAccordion({ id, number }) {
    setActiveId((current) => (current === id ? null : id));
    setHeight(number);
  }

  return (
    <section className="relative py-20 bg-[#919eab1f] text-black max-sm:py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        <LeftTextSide title13={title13} title14={title14} />

        <div className={` relative ${dir === 'ltr' ? 'pl-6' : 'pr-6'}  `}>
          {dataTeams.map((service, index) => (
            <AccordionContent
              key={service.id}
              id={service.id}
              number={index + 1}
              service={service.translations[currentLang.value]}
              activeId={activeId}
              onToggleAccordion={handleToggleAccordion}
            />
          ))}{' '}
          <VerticalLineAndGlowingdot index={height} />
        </div>
      </div>
    </section>
  );
}

function LeftTextSide({ title13, title14 }) {
  return (
    <div>
      <div className="text-black font-semibold uppercase tracking-wide mb-3 flex gap-4" />
      <h3 className="text-3xl md:text-4xl font-bold leading-snug mb-6 relative">{title13}</h3>
      <p className="text-black mb-10">{title14}</p>{' '}
    </div>
  );
}

function AccordionContent({
  service: { name, content2, image },
  id,
  activeId,
  onToggleAccordion,
  number,
}) {
  const isOpen = activeId === id;
  const { i18n } = useTranslate();
  const dir = i18n.dir();
  return (
    <m.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <button
        className={`relative group w-full text-start text-2xl font-semibold cursor-pointer py-2
              border-b border-gray-700  duration-500
              transition-colors ${isOpen ? 'text-black' : 'text-black'} hover:text-[var(--thm-base)]`}
        onClick={() => onToggleAccordion({ id, number })}
      >
        {number}- {name}
        <span
          className={`absolute bottom-0 ${dir === 'ltr' ? 'left-0' : 'right-0'} h-[2px] bg-[var(--thm-base)] transition-all duration-500 
                ${isOpen ? 'w-full' : 'w-0'} group-hover:w-full `}
        />
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="relative">
            <img
              src={`${URL_IMAGE}/${image}`}
              alt={name}
              className="rounded-md mb-4 w-full h-[160px] object-cover object-center grayscale brightness-75"
            />
          </div>

          <div className="text-black text-l leading-relaxed mb-4">
            <div
              className="text-justify"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: content2 }}
            />
          </div>
        </div>
      </div>
    </m.div>
  );
}

function VerticalLineAndGlowingdot({ index }) {
  const { i18n } = useTranslate();
  const dir = i18n.dir();
  return (
    <>
      <span
        className={`absolute -translate-x-1/2 top-[0] h-[100%] w-[4px] bg-[#97c8f1] ${dir === 'ltr' ? 'left-0' : 'right-0'} `}
      />
      <span
        className={`absolute -translate-x-1/2 top-0 w-[4px] bg-[var(--thm-base)] transition-all duration-500 ease-in-out ${dir === 'ltr' ? 'left-0' : 'right-0'}`}
        style={{ height: `${25 * (index + 1)}%` }}
      />
      <span
        className={`absolute   w-1.5 h-1.5 bg-[var(--thm-base)] rounded-full shadow-[0_0_20px_#00bcd4] transition-all duration-500 ease-in-out ${dir === 'ltr' ? 'left-[-6px]' : 'right-[-3px]'}`}
        style={{ top: `${25 * (index + 1)}%` }}
      />
    </>
  );
}
