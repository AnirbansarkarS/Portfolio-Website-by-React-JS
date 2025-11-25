import { motion } from "framer-motion";
import { stats } from "../data/stats";

function Stats() {
  return (
    <section id="stats" className="py-24 relative">
      <div className="max-w-6xl mx-auto space-y-6 text-center">
        <motion.p
          className="section-kicker"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          signal boost
        </motion.p>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Impact Readings
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tracking consistency, contributions, and community footprint across
          code platforms.
        </motion.p>

        <div className="stat-grid">
          {stats.map((entry, idx) => (
            <motion.div
              key={entry.platform}
              className="telemetry-card"
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="telemetry-card__icon">{entry.icon}</div>
              <p className="text-sm uppercase tracking-[0.4em] text-gray-400 font-orbitron">
                {entry.platform}
              </p>
              <p className="text-xl text-white mt-3 font-orbitron">{entry.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
