"use client";

import { animate } from "motion";
import { useEffect, useRef } from "react";

export default function ContactCTA() {
  const contactRef = useRef(null);

  useEffect(() => {
    if (contactRef.current) {
      animate(contactRef.current, { opacity: [0, 1], scale: [0.95, 1] }, { duration: 1 });
    }
  }, []);

  return (
    <section ref={contactRef} className="py-12 px-6 text-center opacity-0">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Let's Work Together</h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Open to freelance opportunities and full-time roles. Let’s build something amazing.
      </p>
      <a 
        href="mailto:your@email.com" 
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
      >
        Contact Me
      </a>
    </section>
  );
}
