import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const heroAnimation = (heroRef) => {
  gsap.fromTo(
    heroRef.current,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
      },
    }
  );
};

export const skillsAnimation = (skillsRef) => {
  gsap.fromTo(
    skillsRef.current,
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 85%",
      },
    }
  );
};
