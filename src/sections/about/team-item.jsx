import { URL_IMAGE } from 'src/config';
import { useTranslate } from 'src/locales';

export function TeamItem({ item, isActive }) {
  const { i18n, currentLang } = useTranslate();
  const dir = i18n.dir();

  return (
    <div className="flex flex-col items-center transition-all duration-300 ">
      <img
        src={`${URL_IMAGE}/${item[currentLang.value].image}`}
        alt={item[currentLang.value].name}
        className={`w-auto object-cover rounded-4xl transition-all duration-300 h-96 ${
          isActive ? 'scale-110' : 'scale-100'
        }`}
      />
      {/* Show text only if active */}
      <div
        dir={dir}
        className={`transition-all duration-300 mt-6 text-center ${
          isActive ? 'opacity-100 scale-105' : 'opacity-0 scale-90'
        }`}
      >
        <h3 className="text-xl font-bold text-[var(--thm-base)] pt-5">
          {item[currentLang.value].name}
        </h3>
        <p className="text-lg text-gray-700">{item[currentLang.value].job_title}</p>
      </div>
    </div>
  );
}
