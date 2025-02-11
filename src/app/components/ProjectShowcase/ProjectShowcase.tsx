"use client";

import { animate } from "motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A modern dashboard for tracking orders and sales.",
    image: "/images/ecommerce-dashboard.png",
    link: "/projects/ecommerce",
  },
  {
    title: "AI-Powered Chatbot",
    description: "An AI assistant that helps automate customer interactions.",
    image: "/images/ecommerce-dashboard.png",
    link: "/projects/chatbot",
  },
];

export default function ProjectShowcase() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      animate(
        containerRef.current,
        { opacity: [0, 1], scale: [0.9, 1] },
        { duration: 0.8, easing: "ease-out" }
      );
    }
  }, []);

  return (
    <section ref={containerRef} className="py-12 px-6 text-center opacity-0">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        Featured Projects
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <a key={index} href={project.link} className="group">
            <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-md transition-transform">
            <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
