"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`${styles.nav} ${isVisible ? styles.visible : styles.hidden}`} 
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          Ray Lanfranco
        </Link>

        {/* Hamburger Menu Button (Accessible) */}
        <button 
          className={styles.hamburger} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setMenuOpen(!menuOpen);
          }}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul 
          className={`${styles.navLinks} ${menuOpen ? styles.mobileOpen : ""}`} 
          role="menu"
        >
          <li role="menuitem">
            <Link href="#projects" className={styles.navItem}>Projects</Link>
          </li>
          <li role="menuitem">
            <Link href="#about" className={styles.navItem}>About</Link>
          </li>
          <li role="menuitem">
            <Link href="#contact" className={styles.navItem}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
