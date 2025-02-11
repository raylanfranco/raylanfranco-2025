"use client";

import { animate, inView } from "motion";
import { useEffect, useRef } from "react";

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (aboutRef.current) {
      inView(aboutRef.current, () => {
        animate(aboutRef.current, { opacity: [0, 1], y: [20, 0] }, { duration: 1 });
      });
    }
  }, []);

  return (
    <section ref={aboutRef} className="py-12 px-6 text-center opacity-0">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        I'm a seasoned Front-End Developer with 10+ years of experience, specializing in 
        modern frameworks like Next.js, React, and Angular. Passionate about 
        performance optimization and crafting visually compelling UIs.
      </p>
    </section>
  );
}
