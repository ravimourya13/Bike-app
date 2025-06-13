"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Categories() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".category-card", {
      scrollTrigger: {
        trigger: ".category-grid",
        start: "top 80%",
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".brand-card", {
      scrollTrigger: {
        trigger: ".brand-grid",
        start: "top 80%",
      },
      duration: 0.8,
      scale: 0.8,
      opacity: 0,
      stagger: 0.2,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <section className="categories">
      <h2 className="section-heading">Explore Our Categories</h2>

      <div className="category-grid">
        {[
          {
            title: "New Bikes",
            img: "/images/bikes/new-bike.png",
            href: "#",
          },
          {
            title: "Used Bikes",
            img: "/images/bikes/used-bike.png",
            href: "#",
          },
          {
            title: "Electric Bikes",
            img: "/images/bikes/electric-bike.png",
            href: "#",
          },
          {
            title: "Compare Bikes",
            img: "/images/bikes/compare-bike.png",
            href: "#",
          },
        ].map((cat, i) => (
          <Link href={cat.href} key={i} className="categorie-link">
            <div className="category-card">
              <img src={cat.img} alt={cat.title} />
              <h3>{cat.title}</h3>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="section-title">Explore By Brands</h2>

      <div className="brand-grid">
        {[
          {
            title: "Hero",
            img: "/images/brands/hero.png",
            href: "#",
            borderColor: "#000000",
          },
          {
            title: "Honda",
            img: "/images/brands/honda.png",
            href: "#",
            borderColor: "#DA251D",
          },
          {
            title: "Bajaj",
            img: "/images/brands/bajaj.png",
            href: "#",
            borderColor: "#0057A6",
          },    
          {
            title: "TVS",
            img: "/images/brands/tvs.png",
            href: "#",
            borderColor: "#00008B",
          },
        ].map((brand, i) => (
          <Link href={brand.href} key={i}>
            <div className="brand-card">
              <div
                className="brand-logo-wrapper"
                style={{ borderColor: brand.borderColor }}
              >
                <img src={brand.img} alt={brand.title} />
              </div>
              <p>{brand.title}</p>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
  .categories {
    padding: 60px 40px;
    background: #fff;
  }

  .section-heading,
  .section-title {
    text-align: center;
    font-size: 2.4rem;
    font-weight: bold;
    margin-bottom: 40px;
  }

  .category-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    margin-bottom: 80px;
  }

  .category-card {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    text-align: center;
    padding: 20px;
    width: 240px;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    cursor: pointer;
  }

  .category-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
  }

  .category-card img {
    height: 140px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 10px;
  }

  .category-card h3 {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .brand-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
  }

  .brand-card {
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  .brand-logo-wrapper {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    overflow: hidden;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }

  /* Colored borders */
  .brand-card:nth-child(1) .brand-logo-wrapper {
    border: 3px solid black;
  }
  .brand-card:nth-child(2) .brand-logo-wrapper {
    border: 3px solid red;
  }
  .brand-card:nth-child(3) .brand-logo-wrapper {
    border: 3px solid #00bfff;
  }
  .brand-card:nth-child(4) .brand-logo-wrapper {
    border: 3px solid #003366;
  }

  .brand-logo-wrapper img {
    width: 85%;
    height: 85%;
    object-fit: contain;
  }

  .brand-card:hover .brand-logo-wrapper {
    transform: scale(1.08);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
  }

  .brand-card p {
    margin-top: 12px;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
  }

  @media (max-width: 1024px) {
    .category-grid {
      gap: 30px;
    }

    .brand-grid {
      gap: 30px;
    }
  }

  @media (max-width: 600px) {
    .category-grid,
    .brand-grid {
      flex-direction: column;
      align-items: center;
    }

    .brand-logo-wrapper {
      width: 130px;
      height: 130px;
    }

    .section-heading {
      font-size: 2rem;
    }
  }
`}</style>
    </section>
  );
}
