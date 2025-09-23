import { useEffect, useState } from "react";

const roles = ["Frontend Developer", "DSA Learner", "Research Lover"];

function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (charIndex < roles[roleIndex].length) {
        setText(text + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 1500);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [text, charIndex, roleIndex]);

  return (
    <section className="flex flex-col items-center justify-center h-screen text-center">
      <img
        src="https://via.placeholder.com/200"
        alt="profile"
        className="w-40 h-40 rounded-full border-4 border-cyan-400 shadow-lg"
      />
      <h1 className="text-4xl mt-4">Hi, I am <span className="text-cyan-400">Anirban</span></h1>
      <p className="text-lg mt-2 text-gray-300">{text}|</p>
    </section>
  );
}

export default Hero;
