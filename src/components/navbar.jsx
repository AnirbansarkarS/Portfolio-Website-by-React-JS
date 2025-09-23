import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 relative">
      <h1 className="text-cyan-400 text-2xl font-bold">Anirban</h1>
      <div
        className="md:hidden flex flex-col gap-1 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </div>
      <ul
        className={`md:flex gap-6 absolute md:static top-full right-0 bg-gray-800 md:bg-transparent p-6 md:p-0 transition-transform ${
          open ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
        <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
        <li><a href="#stats" className="hover:text-cyan-400">Stats</a></li>
        <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
