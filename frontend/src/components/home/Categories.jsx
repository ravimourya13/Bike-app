import Image from "next/image";
import Link from "next/link";
import CategoriesClient from "./CategoriesClient"; // client-only GSAP

export default function Categories() {
  const categories = [
    { title: "New Bikes", img: "/img/hero-bike-img/xpulse.png", href: "#" },
    { title: "Scooters ", img: "/images/bike/scooty.png", href: "/types/scooters" },
    { title: "Electric Bikes", img: "/images/bike/electric-bike.png", href: "/types/ev-bikes" },
    { title: "Sports Bikes", img: "/images/bike/super-bike.png", href: "/types/superbikes" },
  ];

  const brands = [
    { title: "Hero", img: "/images/brands/hero.png", href: "/brands/hero", borderColor: "#000000" },
    { title: "Honda", img: "/images/brands/honda.png", href: "/brands/honda", borderColor: "#DA251D" },
    { title: "Bajaj", img: "/images/brands/bajaj.png", href: "/brands/bajaj", borderColor: "#0057A6" },
    { title: "TVS", img: "/images/brands/tvs.png", href: "/brands/tvs", borderColor: "#00008B" },
  ];

  return (
    <section className="categories">
      <h2 className="section-heading">Explore Our Categories</h2>

      <div className="category-grid">
        {categories.map((cat, i) => (
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
        {brands.map((brand, i) => (
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

      <CategoriesClient />

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
          border: 3px solid;
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
