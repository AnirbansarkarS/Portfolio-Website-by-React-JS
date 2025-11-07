import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_0_20px_#00fff7]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-cyan-400 text-2xl font-bold tracking-wider hover:drop-shadow-[0_0_8px_#00fff7] transition-all"
        >
          Anirban
        </motion.h1>

        {/* Hamburger Icon */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-cyan-400"></span>
          <span className="w-6 h-0.5 bg-cyan-400"></span>
          <span className="w-6 h-0.5 bg-cyan-400"></span>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex gap-10 absolute md:static top-full right-0 bg-black/95 md:bg-transparent p-6 md:p-0 transition-all duration-500 ease-in-out ${
            open
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 md:opacity-100 md:translate-x-0"
          }`}
        >
          {["Skills", "Projects", "Stats", "Contact"].map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative text-white text-lg hover:text-cyan-400 transition-all duration-300
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-cyan-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

