'use client';

import { useTranslation } from 'react-i18next';
import { useRef, useState, useEffect } from 'react';

import { useTranslate } from 'src/locales';
// import HeroImage1 from 'src/assets/bg-faq.webp';
// import aboutFour from 'src/assets/aboutFour.webp';
// import aboutFourLtr from 'src/assets/aboutFourLtra.webp';

// ----------------------------------------------------------------------
export default function MassageContent({ slidesData }) {
  const { t } = useTranslate();
  const { i18n } = useTranslation();
  const dir = i18n.dir();

  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------

  const [activeSlideData, setActiveSlideData] = useState(slidesData?.[0] || {});
  const swiperRef = useRef(null); // Reference to Swiper instance
  const prevIndexRef = useRef(null); // Track previous slide index
  const intervalRef = useRef(null); // Store interval ID
  // Set initial slide data when Swiper mounts
  const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;
    setActiveSlideData({ ...slidesData[swiper.realIndex] } || slidesData?.[0] || {});
    prevIndexRef.current = swiper.realIndex; // Set initial previous index
  };
  // Update activeSlideData when slidesData changes (e.g., language switch)
  useEffect(() => {
    if (!swiperRef.current || !slidesData?.length) return;
    const currentIndex = swiperRef.current.realIndex;
    setActiveSlideData({ ...slidesData[currentIndex] } || slidesData?.[0] || {});
  }, [slidesData]);
  // Start interval to sync slide data
  useEffect(() => {
    if (!swiperRef.current || !slidesData?.length) return;
    const updateSlideData = () => {
      const currentIndex = swiperRef.current.realIndex;
      if (currentIndex !== prevIndexRef.current) {
        setActiveSlideData({ ...slidesData[currentIndex] } || slidesData?.[0] || {});
        prevIndexRef.current = currentIndex; // Update previous index
      }
    };
    // Start interval
    intervalRef.current = setInterval(updateSlideData, 1000); // Check every 1 second
    // Cleanup interval on unmount
    // eslint-disable-next-line consistent-return
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slidesData]); // Dependency on slidesData only
  // ----------------------------------------------------------------------
  return (
    <section
      className="relative min-h-screen py-6 md:py-10 bg-cover bg-center bg-no-repeat flex items-center justify-center"
      // style={{ backgroundImage: `url(${HeroImage1.src})` }}
      // dir={dir}
    >
      test
    </section>
  );
}
