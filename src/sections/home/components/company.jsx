export default function Company({ detail }) {
  return (
    <section className="bg-[#363A40] py-3">
      <div className="max-w-7xl mx-auto px-6">
        {/* Video + 2 cards */}

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {/* Video */}
          <div className="">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe className="w-full h-40" src={detail?.video_url} allowFullScreen />
            </div>
          </div>

          {/* Two small columns */}
          <div className="flex flex-col gap-6 mx-auto   items-center justify-center   ">
            <p className="text-white font-light t space-y-2">{detail?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
