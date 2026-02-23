import { SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';

import { useTranslate } from 'src/locales';
import { useGetTeamsListQuery } from 'src/redux/api/front/api-team';

import { TeamItem } from './team-item';
import SwiperTeam from './swiper-team';

export default function Teams({ title14, title15 }) {
  const { t, currentLang, i18n } = useTranslate();
  const dir = i18n.dir();
  const [activeIndex, setActiveIndex] = useState(0);
  const [fetchData, setFetchData] = useState([]);
  const { data } = useGetTeamsListQuery();
  useEffect(() => {
    const check = () => {
      if (data) {
        setFetchData(data.teams.teams);
      }
    };
    check();
  }, [data]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black flex items-center justify-start ">
          <span className="inline-block h-[2px] w-4 bg-[var(--thm-base)] mx-2" />

          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[var(--thm-base)]">
            {title14?.translations[currentLang.value].name}
          </span>
          <span className="text-[#ff6900] mx-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            {title15?.translations[currentLang.value].name}
          </span>
          {/* {dir === 'rtl' ? <ArrowRtlBlack /> : <ArrowLtrBlack />} */}
        </div>

        <div className="slider-teams ">
          <SwiperTeam
            phoneSlides={1}
            Slides={3}
            space=" px-5 md:px-0 container mx-auto"
            setActiveIndex={setActiveIndex}
            delay={5000}
          >
            {fetchData.map((member, index) => {
              const { translations } = member;
              return (
                <SwiperSlide key={`team-${member.id}`}>
                  <TeamItem item={translations} isActive={activeIndex === index} />
                </SwiperSlide>
              );
            })}
          </SwiperTeam>
        </div>
      </div>
    </section>
  );
}
