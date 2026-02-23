import Link from 'next/link';
import { useTranslate } from 'src/locales';

const posts = [
  {
    date: '04 Jul',
    title: 'We donate life. We donate blood',
    desc: 'Fifth blood donation campaign organised at our facilities in Montgat (Barcelona). Once again this year, our staff has shown its...',
    image: 'https://placehold.co/600x400',
  },
  {
    date: '19 Jun',
    title: 'Chemical company increases its production capacity',
    desc: 'A major company specialising in chemical coatings and substrates has significantly increased its production capacity...',
    image: 'https://placehold.co/600x400',
  },
  {
    date: '13 May',
    title: 'New ICT PharmaLine website',
    desc: 'We are very pleased to share the launch of the new website of ICT PharmaLine...',
    image: 'https://placehold.co/600x400',
  },
  {
    date: '08 Jul',
    title: 'Fabric permeability',
    desc: 'Permeability is the ability of a material, in our case a fabric, to allow a flow to cross it...',
    image: 'https://placehold.co/600x400',
  },
];

export default function CometBlog({ blogs }) {
  const { t } = useTranslate();
  return (
    <section className="bg-[#f4f4f4] p-0">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}

        {/* Posts grid */}
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
          {blogs?.map((post, i) => (
            <article key={i} className="bg-white shadow-sm relative pb-2">
              <span className=" absolute top-2 left-2 z-10 items-center  bg-red-500 py-1 px-3 text-xs font-semibold text-white ">
                {post.created_at}
              </span>
              <img src={post.image} alt={post.title} className="w-full object-cover line-clamp-2" />

              <div className="px-4 py-2  flex gap-1 ">
                <Link href={`/blogs/${post.id}`}>
                  <h3 className="text-sm font-bold text-red-600  flex items-center justify-center h-5">
                    {post.title}
                  </h3>
                </Link>
              </div>
              <div className="px-4 ">
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{post.content}</p>

                <Link
                  href={`/blogs/${post.id}`}
                  className="mt-4 inline-block text-sm font-semibold text-gray-800
                  hover:text-red-500"
                >
                  {t('btn.more')} ›
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
