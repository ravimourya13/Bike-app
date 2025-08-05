import Image from "next/image";
import React from "react";

// Simulated data
async function getScooters() {
  return [
    {
      name: "Honda Activa 6G",
      img: "/img/scooters/honda-activa.png",
      price: "₹76,000",
      mileage: "50 kmpl",
      engine: "109.5cc",
    },
    {
      name: "TVS Jupiter",
      img: "/img/tvs-bike-img/tvs-jupiter.png",
      price: "₹78,000",
      mileage: "50 kmpl",
      engine: "109.7cc",
    },
    {
      name: "Suzuki Access 125",
      img: "/img/scooters/suzuki-access.png",
      price: "₹82,000",
      mileage: "52 kmpl",
      engine: "124cc",
    },
    {
      name: "Hero Pleasure Plus",
      img: "/img/scooters/hero-pleasure.png",
      price: "₹71,000",
      mileage: "55 kmpl",
      engine: "110.9cc",
    },
    {
      name: "TVS Ntorq 125",
      img: "/img/tvs-bike-img/tvs-ntorq.png",
      price: "₹89,000",
      mileage: "45 kmpl",
      engine: "124.8cc",
    },
    {
      name: "Honda Dio",
      img: "/img/scooters/honda-dio.png",
      price: "₹74,000",
      mileage: "48 kmpl",
      engine: "109.5cc",
    },
    {
      name: "Yamaha Ray ZR 125",
      img: "/img/scooters/yamaha-rayzr.png",
      price: "₹84,000",
      mileage: "49 kmpl",
      engine: "125cc",
    },
    {
      name: "Ola S1 (Electric)",
      img: "/img/scooters/ola-s1.png",
      price: "₹1,30,000",
      mileage: "110 km/charge",
      engine: "Electric",
    },
  ];
}

export default async function ScootersPage() {
  const scooters = await getScooters();

  return (
    <main className="bg-[#f9f9f9] pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Popular Scooters
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {scooters.map((scooty, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl p-6 text-center"
            >
              <div className="relative w-full h-44 mb-4">
                <Image
                  src={scooty.img}
                  alt={scooty.name}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {scooty.name}
              </h3>
              <p className="text-[#e65c00] font-bold mb-2">{scooty.price}</p>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Mileage: {scooty.mileage}</p>
                <p>Engine: {scooty.engine}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
