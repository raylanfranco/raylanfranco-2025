"use client";

import { animate } from "motion"; // ✅ Correct import for Motion One
import styles from "./Hero.module.css";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Animate the heading
    animate(headingRef.current, { opacity: 1, y: 0 }, { duration: 1 });

    // Animate the subtitle with a slight delay
    animate(subtitleRef.current, { opacity: 1, y: 0 }, { duration: 1, delay: 0.2 });

    // Animate the buttons
    animate(buttonsRef.current, { opacity: 1, y: 0 }, { duration: 1, delay: 0.4 });
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Animated Heading */}
        <h1 ref={headingRef} className={styles.heading}>
          Hi, I'm <span className={styles.highlight}>Ray Lanfranco</span>.
        </h1>

        {/* Subtitle */}
        <p ref={subtitleRef} className={styles.subtitle}>
          Front-End Engineer & UI/UX Specialist crafting smooth and engaging web experiences.
        </p>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className={styles.buttons}>
          <Link href="#projects" className={styles.primaryBtn}>View My Work</Link>
          <Link href="#contact" className={styles.secondaryBtn}>Get In Touch</Link>
        </div>
      </div>
    </section>
  );
}
