import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-glass fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.a
          href="#hero"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-cyan-300 text-2xl font-semibold tracking-[0.3em] uppercase hover:text-white transition-colors"
        >
          ANIRBAN
        </motion.a>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          <span className="w-7 h-0.5 bg-cyan-300" />
          <span className="w-7 h-0.5 bg-cyan-300" />
          <span className="w-7 h-0.5 bg-cyan-300" />
        </button>

        {/* Navigation Links */}
        <div
          className={`md:flex items-center gap-10 absolute md:static top-full right-0 bg-[#05060f]/95 md:bg-transparent px-8 py-6 md:p-0 transition-all duration-500 ease-in-out ${
            open
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 md:opacity-100 md:translate-x-0"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-6 md:gap-10">
            {["Skills", "Projects", "Stats", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="nav-link"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://drive.google.com"
            target="_blank"
            rel="noreferrer"
            className="primary-chip mt-6 md:mt-0"
          >
            Download Résumé
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;