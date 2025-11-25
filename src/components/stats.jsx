import { stats } from "../data/stats";

function Stats() {
  return (
    <section id="stats" className="py-24 relative">
      <div className="max-w-6xl mx-auto space-y-6 text-center">
        <p className="section-kicker">signal boost</p>
        <h2 className="section-heading">Impact Readings</h2>
        <p className="section-subtitle">
          Tracking consistency, contributions, and community footprint across
          code platforms.
        </p>

        <div className="stat-grid">
          {stats.map((entry) => (
            <div key={entry.platform} className="telemetry-card">
              <div className="telemetry-card__icon">{entry.icon}</div>
              <p className="text-sm uppercase tracking-[0.4em] text-gray-400">
                {entry.platform}
              </p>
              <p className="text-xl text-white mt-3">{entry.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
