export default function JoinTeam() {
  return (
    <section className="bg-slate-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className=" font-semibold mb-3 text-4xl">Want to join the team?</h3>
          <p className="text-lg text-white/80 max-w-xl">
            If you’re looking for personal and professional growth, we propose you join our team.
          </p>
        </div>
        <button className="bg-red-600 px-8 py-3 text-sm font-semibold">Contact</button>
      </div>
    </section>
  );
}
