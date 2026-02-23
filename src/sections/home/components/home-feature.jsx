import { Iconify } from 'src/components/iconify';

export default function HomeFeature({ features }) {
  const data = [
    {
      id: 0,
      icon: 'fluent-mdl2:repair',
      title: 'European manufacturer:',
      text: 'Experience since 1985',
    },
    {
      id: 1,
      icon: 'mynaui:globe',
      title: 'Global operator:',
      text: '1000+ Custom Products',
    },
    {
      id: 2,
      icon: 'icon-park-twotone:bachelor-cap',
      title: 'Experience:',
      text: 'Specialized Technical Service',
    },
  ];
  return (
    <section className="bg-[var(--thm-light)] py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 text-center text-white gap-8 px-6">
        {features?.map((el, index) => (
          <div key={index}>
            {/* <Iconify icon={el.icon} width={80} color="#fff" className="mb-3" /> */}
            <i className={el.icon} style={{ fontSize: '60px' }} />
            <h4 className=" text-2xl font-bold ">{el.title}</h4>
            <p className=" text-lg font-semibold">{el.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
