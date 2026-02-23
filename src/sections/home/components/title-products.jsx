import BG from 'src/assets/bg_2.jpg';

export default function TitleProducts({ title, subtitle, text }) {
  return (
    <section className="bg-white py-10" style={{ background: `url(${BG.src})` }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 ">{title}</h2>

        <p
          className=" mt-3 bg-linear-to-r from-[var(--thm-base)] to-transparent "
          style={{ height: '1px' }}
        />

        <p className="text-gray-600 mt-2 max-w-3xl leading-relaxed">{text}</p>
      </div>
    </section>
  );
}
