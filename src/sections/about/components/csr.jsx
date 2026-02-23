import image from 'src/assets/medio_ambiente.jpg';

export default function CSR() {
  return (
    <section className="relative">
      <img
        src={image.src}
        alt="Environment"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-7xl mx-auto px-6 py-20 text-white">
        <h2 className="text-3xl font-semibold mb-4 text-black">
          Corporate Social Responsibility and Environment
        </h2>
        <p className="text-lg text-gray-800 max-w-3xl">
          One of the main parameters for measuring the level of progress in society is its
          environmental awareness.
        </p>
        <p className="text-lg text-white max-w-3xl mt-2">
          One of the main parameters for measuring the level of progress in society is its
          environmental awareness. One of the main parameters for measuring the level of progress in
          society is its environmental awareness. One of the main parameters for measuring the level
          of progress in society is its environmental awareness. One of the main parameters for
          measuring the level of progress in society is its environmental awareness. One of the main
          parameters for measuring the level of progress in society is its environmental awareness.
          One of the main parameters for measuring the level of progress in society is its
          environmental awareness.
        </p>
      </div>
    </section>
  );
}
