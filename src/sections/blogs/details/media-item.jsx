import Link from 'next/link';

export default function MediaItem({ article, articles = [] }) {
  if (!article?.id) {
    return null;
  }
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main */}
        <main className="lg:col-span-9 bg-white p-6 rounded shadow">
          <div className="flex items-center justify-center gap-8 mb-6">
            <img src={article.image} alt={article.title} className="rounded" />
          </div>
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-red-600 text-white text-center px-2 py-1 rounded">
              <div className="text-xs uppercase">{article.created_at}</div>
            </div>
            <h2 className="text-xl font-semibold text-red-600">{article.title}</h2>
          </div>
          <div className="text-gray-700 mb-4">{article.content}</div>
        </main>
        {/* Sidebar */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-4">Latest Works</h4>
            <ul className="space-y-4 text-sm">
              {articles.map((el) => (
                <li key={el.id} className="flex gap-3">
                  <img src={el.image} alt={el.title} className="rounded w-8" />
                  <div>
                    <Link
                      href={`/blogs/${el.id}`}
                      className="text-red-600 hover:underline line-clamp-2"
                    >
                      {el.title}
                    </Link>
                    <span className="block text-xs text-gray-500">{el.created_at}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
