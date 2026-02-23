import Link from 'next/link';

import { useTranslate } from 'src/locales';

import { Iconify } from 'src/components/iconify';

export default function PrimaryButton({
  link,
  text = 'Read More',
  initialButtonBG = 'var(--thm-base-light)',
  arrowBG = 'var(--thm-base)',
  color = 'black',
  className = '',
}) {
  const { i18n } = useTranslate();
  const dir = i18n.dir();

  return (
    <Link
      href={link}
      aria-label={text}
      className={`relative w-fit flex items-center gap-2 px-2 py-1 rounded-full overflow-hidden shadow-xl z-50
        font-bold transition-all duration-300 group/button ${className}`}
      style={{ backgroundColor: initialButtonBG }}
    >
      {/* Hover BG */}
      <span
        className={`absolute top-1/2 -translate-y-1/2
          ${dir === 'rtl' ? 'left-[20px]' : 'right-[20px]'}
          translate-x-1/2 w-8 h-8 rounded-full scale-0
          group-hover/button:scale-[10] transition-transform duration-500 ease-out`}
        style={{ backgroundColor: arrowBG }}
        aria-hidden
      />

      {/* TEXT */}
      <span className="relative block overflow-hidden leading-none capitalize" style={{ color }}>
        <span
          className="block text-sm pl-3 transition-transform duration-300
          group-hover/button:text-white group-hover/button:-translate-y-full"
        >
          {text}
        </span>
        <span
          className="absolute left-0 top-0 translate-y-full text-sm pl-3
          transition-transform duration-300
          group-hover/button:text-white group-hover/button:translate-y-0"
        >
          {text}
        </span>
      </span>

      {/* ICON */}
      <span
        className="relative p-1 rounded-full flex items-center justify-center overflow-hidden
          bg-[var(--thm-base)] group-hover/button:bg-white text-[#fff]
           group-hover/button:text-[var(--thm-base)]"
      >
        <Iconify
          icon={dir === 'rtl' ? 'si:arrow-left-line' : 'si:arrow-right-line'}
          width={20}
          className=":#fff"
        />
      </span>
    </Link>
  );
}
