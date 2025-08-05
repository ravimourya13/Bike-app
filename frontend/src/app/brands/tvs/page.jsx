import Image from "next/image";
import React from "react";

// Simulated data
async function getTVSBikes() {
  return [
    {
      name: "TVS Apache RTR 160",
      img: "/img/tvs-bike-img/tvs-apache160.png",
      price: "₹1,20,000",
      mileage: "45 kmpl",
      engine: "159.7cc",
    },
    {
      name: "TVS Sport",
      img: "/img/tvs-bike-img/tvs-sport.png",
      price: "₹63,000",
      mileage: "75 kmpl",
      engine: "109.7cc",
    },
    {
      name: "TVS Radeon",
      img: "/img/tvs-bike-img/tvs-radeon.png",
      price: "₹72,000",
      mileage: "65 kmpl",
      engine: "109.7cc",
    },
    {
      name: "TVS Ronin",
      img: "/img/tvs-bike-img/tvs-ronin.png",
      price: "₹1,49,000",
      mileage: "40 kmpl",
      engine: "225.9cc",
    },
    {
      name: "TVS Apache RR 310",
      img: "/img/tvs-bike-img/tvs-rr310.png",
      price: "₹2,65,000",
      mileage: "33 kmpl",
      engine: "312.2cc",
    },
    {
      name: "TVS Jupiter",
      img: "/img/tvs-bike-img/tvs-jupiter.png",
      price: "₹78,000",
      mileage: "50 kmpl",
      engine: "109.7cc",
    },
    {
      name: "TVS Ntorq 125",
      img: "/img/tvs-bike-img/tvs-ntorq.png",
      price: "₹89,000",
      mileage: "45 kmpl",
      engine: "124.8cc",
    },
    {
      name: "TVS iQube (Electric)",
      img: "/img/tvs-bike-img/tvs-iqube.png",
      price: "₹1,25,000",
      mileage: "100 km/charge",
      engine: "Electric",
    },
  ];
}

export default async function TVSPage() {
  const bikes = await getTVSBikes();

  return (
    <main className="bg-[#f9f9f9] pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          TVS Bikes
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
