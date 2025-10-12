import { useEffect, useState } from "react";
import Spline from '@splinetool/react-spline';


const roles = ["Frontend Developer", "DSA Learner", "Research Lover","The ML Guy"];

function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (charIndex < roles[roleIndex].length) {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [charIndex, roleIndex]);

  return (
    <section className="flex flex-col items-center justify-center h-screen text-center 
      bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0ea5e9] 
      animate-gradient-x">
     

      {/* <Spline scene="https://prod.spline.design/WUbRWdvT2DGf2eF1/scene.splinecode"/> */}

      
      {/* Profile Image */}
      <img
        src="https://www.shutterstock.com/image-vector/portrait-cat-glasses-vector-art-600nw-2284410025.jpg"
        alt="profile"
        className="w-70 h-70 rounded-full border-4 border-cyan-400 shadow-lg
        hover:scale-110 hover:shadow-cyan-500/50 transition-all duration-500"
      />

      {/* Name */}
      <h1 className="text-5xl mt-6 font-bold text-white drop-shadow-[0_0_10px_#06b6d4] animate-fade-in">
        Hi, I am <span className="text-cyan-400">Anirban</span>
      </h1>

      {/* Typing Effect + Blinking Cursor */}
      <p className="text-2xl mt-4 text-cyan-200 font-mono animate-fade-in">
        {text}
        <span className="animate-blink text-cyan-400">|</span>
      </p>
    </section>
  );
}

export default Hero;
