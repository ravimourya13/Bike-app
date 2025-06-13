"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({ bikesData, setFilteredBikes }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    gsap.from(".hero-title", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      delay: 0.2,
    });
    gsap.from(".hero-subtitle", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      delay: 0.4,
    });
    gsap.from(".search-bar", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      delay: 0.6,
    });
  }, []);

  const handleSearch = () => {
    const filtered = bikesData?.filter((bike) =>
      bike.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBikes?.(filtered);
  };

  return (
    <section className="hero">
      {/* Background Image */}
      <div className="hero-bg">
        <Image
          src="/images/bg-img.png"
          alt="Hero Background"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">Find Your Perfect Ride</h1>
        <p className="hero-subtitle">
          Discover top bikes, compare models, and make the best choice for your journey.
        </p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search bikes, brands..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button className="btn-primary" onClick={handleSearch}>Search</button>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 600px;
          background: rgba(0, 0, 0, 0.6);
          padding: 2rem;
          border-radius: 16px;
          color: #fff;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          margin-bottom: 30px;
        }

        .search-bar {
          display: flex;
          gap: 8px;
          background: #fff;
          border-radius: 10px;
          padding: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .search-bar input {
          flex: 1;
          border: none;
          outline: none;
          padding: 10px;
          font-size: 1rem;
          color: #000;
        }

        .btn-primary {
          background: #e65c00;
          border: none;
          color: #fff;
          padding: 10px 16px;
          border-radius: 10px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }

          .search-bar {
            flex-direction: column;
            gap: 10px;
          }

          .btn-primary {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
