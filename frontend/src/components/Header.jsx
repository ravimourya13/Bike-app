"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.mainHeader} ${isSticky ? styles.sticky : ""}`}>
      <nav className={`${styles.navbar} container`}>
        <Link href="/" className={styles.logo}>
          <div style={{ position: "fixed", width: "100px", height: "40px" }}>
            <Image src="/images/logo.png" alt="Logo" width={200} height={80} margin-right={8} />
          </div>
        </Link>

        <div className={styles.navbarToggler} onClick={toggleMenu}>
          ☰
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
          <li>
            <Link href="#">
              <Image
                src="https://img.icons8.com/ios-filled/24/000000/motorcycle.png"
                alt="New Bike"
                width={20}
                height={20}
              />
              <span>New Bikes</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image
                src="https://img.icons8.com/ios-filled/24/000000/dirt-bike.png"
                alt="Used Bike"
                width={20}
                height={20}
              />
              <span>Used Bikes</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image
                src="https://img.icons8.com/ios-filled/24/000000/flash-on.png"
                alt="Electric Bike"
                width={20}
                height={20}
              />
              <span>Electric Bikes</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image
                src="https://img.icons8.com/ios-filled/24/000000/news.png"
                alt="News"
                width={20}
                height={20}
              />
              <span>News & Reviews</span>
            </Link>
          </li>

          <div className={styles.headerActions}>
            <Link href="/login">
              <button className={`${styles.btn} ${styles.btnPrimary}`}>
                Log in
              </button>
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
}
