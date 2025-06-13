"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const bikesData = [
  {
    id: "1",
    name: "Royal Enfield Classic 350",
    engine: "349cc",
    mileage: "41 kmpl",
    price: "₹1,93,000",
    rating: "⭐⭐⭐⭐½",
    image:
      "https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/new-classic-350/studio-shots/new/gun-grey.png",
  },
  {
    id: "2",
    name: "TVS Apache RTR 160",
    engine: "160cc",
    mileage: "47 kmpl",
    price: "₹1,24,000",
    rating: "⭐⭐⭐⭐",
    image:
      "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/tvs-select-model-glossy-black-be-1718781206746.png?q=80",
  },
  {
    id: "3",
    name: "Bajaj Pulsar N160",
    engine: "164cc",
    mileage: "59 kmpl",
    price: "₹1,32,000",
    rating: "⭐⭐⭐⭐½",
    image:
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/124645/pulsar-n160-right-front-three-quarter-8.jpeg?isig=0",
  },
  {
    id: "4",
    name: "Yamaha MT 15 V2",
    engine: "155cc",
    mileage: "48 kmpl",
    price: "₹1,68,000",
    rating: "⭐⭐⭐½",
    image:
      "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/yamaha-select-model-metallic-black-2023-1680847548270.png?q=80",
  },
  {
    id: "5",
    name: "Hero Splendor Plus",
    engine: "97cc",
    mileage: "80 kmpl",
    price: "₹75,441",
    rating: "⭐⭐⭐⭐",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/hero-splendor-plus-xtec-bs6-petrol-tornado-grey-271805940-yzrff.png",
  },
  {
    id: "6",
    name: "KTM 200 Duke",
    engine: "199cc",
    mileage: "33 kmpl",
    price: "₹1,97,000",
    rating: "⭐⭐⭐⭐",
    image:
      "https://www.motoproworks.com/cdn/shop/files/ktm-390Duke-pulse-orange_d588e37c-f863-4468-b06c-4adf0c47c508.jpg?v=1720008782",
  },
];

export default function FeaturedBikes() {
  const router = useRouter();
  const [compareList, setCompareList] = useState([]);

  const toggleCompare = (bike) => {
    const exists = compareList.find((b) => b.id === bike.id);
    if (exists) {
      setCompareList(compareList.filter((b) => b.id !== bike.id));
    } else if (compareList.length < 2) {
      setCompareList([...compareList, bike]);
    } else {
      alert("You can only compare 2 bikes at a time.");
    }
  };

  const goToCompare = () => {
    if (compareList.length !== 2) {
      alert("Select 2 bikes to compare.");
      return;
    }
    const ids = compareList.map((bike) => bike.id).join(",");
    router.push(`/compare?ids=${ids}`);
  };

  return (
    <section className="featured-bikes">
      <h2 className="section-title">Featured Bikes</h2>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        loop
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10},
          768: { slidesPerView: 2, spaceBetween: 10},
          1024: { slidesPerView: 3, spaceBetween: 10},
        }}
        className="bike-swiper"
      >
        {bikesData.map((bike) => (
          <SwiperSlide key={bike.id}>
            <div className="bike-card">
              <img src={bike.image} alt={bike.name} />
              <h3>{bike.name}</h3>
              <div className="rating">{bike.rating}</div>
              <p>Engine: {bike.engine}</p>
              <p>Mileage: {bike.mileage}</p>
              <p className="price">{bike.price}</p>
              <button
                onClick={() => router.push(`/bikes/${bike.id}`)}
                className="details-btn"
              >
                Details
              </button>
              <button
                onClick={() => toggleCompare(bike)}
                className={`compare-btn ${
                  compareList.some((b) => b.id === bike.id) ? "selected" : ""
                }`}
              >
                {compareList.some((b) => b.id === bike.id)
                  ? "Remove"
                  : "Compare"}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {compareList.length > 0 && (
        <div className="compare-bar">
          <button onClick={goToCompare}>Compare Selected Bikes</button>
        </div>
      )}

      <style jsx>{`
        .featured-bikes {
          padding: 60px 0 40px;
          background: #f9f9f9;
          position: relative;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 40px;
        }

        .bike-card {
          background: #fff;
          padding: 30px 0px; /* top-bottom only */
          border-radius: 20px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08); /* fixed invalid value */
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          margin: 0 10px; /* ⬅ reduce visual width from left and right */
        }
        .bike-swiper {
          padding: 0 20px;
        }

        .bike-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
        }

        .bike-card img {
          width: auto;
          height: 160px;
          max-width: 100%;
          display: block;
          margin: 0 auto;
          object-fit: contain;
          object-position: center;
          background-color: transparent;
          padding: 0; /* Remove internal padding */
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
        }

        .bike-card img:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(255, 102, 0, 0.4);
        }

        .bike-card h3 {
          font-size: 1.1rem;
          margin-bottom: 6px;
        }

        .rating {
          font-size: 0.9rem;
          color: #fbbf24;
          margin-bottom: 4px;
        }

        .bike-card p {
          margin: 2px 0;
          font-size: 0.85rem;
        }

        .bike-card .price {
          font-weight: bold;
          color: rgb(7, 7, 7);
          margin: 8px 0;
        }

        .details-btn,
        .compare-btn {
          display: inline-block;
          padding: 6px 16px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.82rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 6px 4px 0;
          border: none;
          background-color: #fff;
          color: #e65c00;
          border: 2px solid #e65c00;
          min-width: fit-content;
        }

        .details-btn:hover,
        .compare-btn:hover {
          background-color: #e65c00;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(255, 102, 0, 0.4);
        }

        .compare-btn.selected {
          background-color: #16a34a;
          color: white;
          border-color: #16a34a;
          box-shadow: 0 4px 15px rgba(22, 163, 74, 0.4);
        }

        .compare-bar {
          margin-top: 30px;
          text-align: center;
        }

        .compare-bar button {
          background: #e65c00;
          color: white;
          padding: 10px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: background 0.3s;
        }

        .compare-bar button:hover {
          background: #cc5200;
        }

        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          color: #e65c00;
          background-color: white;
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(230, 92, 0, 0.3);
          width: 35px;
          height: 35px;
        }

        :global(.swiper-button-next::after),
        :global(.swiper-button-prev::after) {
          font-size: 16px;
        }

        :global(.swiper-button-next:hover),
        :global(.swiper-button-prev:hover) {
          background-color: #e65c00;
          color: white;
        }

        :global(.swiper-pagination) {
          margin-top: 20px !important;
          position: relative;
          bottom: auto;
        }
      `}</style>
    </section>
  );
}
