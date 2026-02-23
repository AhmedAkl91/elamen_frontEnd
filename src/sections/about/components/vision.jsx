export default function Vision({ data }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {data?.map((el, index) => (
          <div key={index}>
            <h3 className=" text-2xl mb-3 pb-1  font-semibold border-b border-red-500 inline-block">
              {el.title}
            </h3>
            <p className="text-sm text-gray-600">{el.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
