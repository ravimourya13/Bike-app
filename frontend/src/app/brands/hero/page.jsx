import Image from "next/image";
import React from "react";

// Simulated data
async function getHeroBikes() {
  return [
    {
      name: "Hero Splendor Plus",
      img: "/img/hero-bike-img/splender.png",
      price: "₹75,000",
      mileage: "60 kmpl",
      engine: "97.2cc",
    },
    {
      name: "Hero HF Deluxe",
      img: "/img/hero-bike-img/hfdeluxe.png",
      price: "₹68,000",
      mileage: "65 kmpl",
      engine: "97.2cc",
    },
    {
      name: "Hero Xpulse 200",
      img: "/img/hero-bike-img/xpulse.png",
      price: "₹1,40,000",
      mileage: "40 kmpl",
      engine: "199.6cc",
    },
    {
      name: "Hero Glamour",
      img: "/img/hero-bike-img/glamour.png",
      price: "₹84,000",
      mileage: "55 kmpl",
      engine: "124.7cc",
    },
      {
      name: "Hero Splendor Plus",
      img: "/img/hero-bike-img/splender.png",
      price: "₹75,000",
      mileage: "60 kmpl",
      engine: "97.2cc",
    },
    {
      name: "Hero HF Deluxe",
      img: "/img/hero-bike-img/hfdeluxe.png",
      price: "₹68,000",
      mileage: "65 kmpl",
      engine: "97.2cc",
    },
    {
      name: "Hero Xpulse 200",
      img: "/img/hero-bike-img/xpulse.png",
      price: "₹1,40,000",
      mileage: "40 kmpl",
      engine: "199.6cc",
    },
    {
      name: "Hero Glamour",
      img: "/img/hero-bike-img/glamour.png",
      price: "₹84,000",
      mileage: "55 kmpl",
      engine: "124.7cc",
    },
  ];
}

export default async function HeroPage() {
  const bikes = await getHeroBikes();

  return (
    <main className="bg-[#f9f9f9] pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Hero Bikes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {bikes.map((bike, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl p-6 text-center"
            >
              <div className="relative w-full h-44 mb-4">
                <Image
                  src={bike.img}
                  alt={bike.name}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {bike.name}
              </h3>
              <p className="text-[#e65c00] font-bold mb-2">{bike.price}</p>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Mileage: {bike.mileage}</p>
                <p>Engine: {bike.engine}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
