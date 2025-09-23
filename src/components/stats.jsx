import { stats } from "../data/stats";

function Stats() {
  return (
    <section id="stats" className="py-16 bg-black text-center">
      <h2 className="text-3xl text-cyan-400 mb-8">My Coding Stats</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {stats.map((s, i) => (
          <div key={i} className="w-40 h-40 bg-gray-800 rounded-lg p-4 flex flex-col justify-center items-center hover:scale-110 hover:shadow-[0_0_20px_#00fff7] transition">
            <div className="text-3xl">{s.icon}</div>
            <h3 className="text-lg mt-2">{s.platform}</h3>
            <p className="text-gray-300 text-sm mt-1">{s.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
