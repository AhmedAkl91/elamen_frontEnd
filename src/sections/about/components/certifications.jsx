export default function Certifications() {
  return (
    <section className="max-w-7xl mx-auto  px-6">
      <p className=" mt-3 bg-linear-to-r from-[var(--thm-base)] to-transparent  h-[1px] " />

      <div className="  py-10 grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center justify-center">
            <img
              src="https://placehold.co/600x400"
              alt="Certification"
              className="h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
