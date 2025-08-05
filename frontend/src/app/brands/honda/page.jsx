import Image from "next/image";
import React from "react";

// Simulated data
async function getHondaBikes() {
  return [
    {
      name: "Honda Shine",
      img: "/img/honda-bike-img/honda-shine.png",
      price: "₹79,800",
      mileage: "55 kmpl",
      engine: "124cc",
    },
    {
      name: "Honda SP 125",
      img: "/img/honda-bike-img/honda-sp125.png",
      price: "₹86,000",
      mileage: "60 kmpl",
      engine: "124cc",
    },
    {
      name: "Honda Unicorn",
      img: "/img/honda-bike-img/honda-unicorn.png",
      price: "₹1,09,800",
      mileage: "50 kmpl",
      engine: "162.7cc",
    },
    {
      name: "Honda Hornet 2.0",
      img: "/img/honda-bike-img/honda-hornet.png",
      price: "₹1,39,000",
      mileage: "45 kmpl",
      engine: "184.4cc",
    },
    {
      name: "Honda Livo",
      img: "/img/honda-bike-img/honda-livo.png",
      price: "₹78,500",
      mileage: "60 kmpl",
      engine: "109.5cc",
    },
    {
      name: "Honda CB200X",
      img: "/img/honda-bike-img/honda-cb200x.png",
      price: "₹1,46,000",
      mileage: "40 kmpl",
      engine: "184.4cc",
    },
    {
      name: "Honda CD 110 Dream",
      img: "/img/honda-bike-img/honda-cd110.png",
      price: "₹71,000",
      mileage: "65 kmpl",
      engine: "109.5cc",
    },
    {
      name: "Honda XBlade",
      img: "/img/honda-bike-img/honda-xblade.png",
      price: "₹1,15,000",
      mileage: "50 kmpl",
      engine: "162.7cc",
    },
  ];
}

export default async function HondaPage() {
  const bikes = await getHondaBikes();

  return (
    <main className="bg-[#f9f9f9] pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Honda Bikes
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
