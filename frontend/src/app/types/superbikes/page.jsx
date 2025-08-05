import Image from "next/image";
import React from "react";

// Simulated data
async function getSuperbikes() {
  return [
    {
      name: "Ducati Panigale V4",
      img: "/img/superbikes/ducati-v4.png",
      price: "₹28,00,000",
      mileage: "14 kmpl",
      engine: "1103cc",
    },
    {
      name: "BMW S1000RR",
      img: "/img/superbikes/bmw-s1000rr.jpg",
      price: "₹24,45,000",
      mileage: "15 kmpl",
      engine: "999cc",
    },
    {
      name: "Kawasaki Ninja ZX-10R",
      img: "/img/superbikes/zx10r.png",
      price: "₹17,00,000",
      mileage: "12 kmpl",
      engine: "998cc",
    },
    {
      name: "Suzuki Hayabusa",
      img: "/img/superbikes/hayabusa.png",
      price: "₹16,90,000",
      mileage: "11 kmpl",
      engine: "1340cc",
    },
    {
      name: "Yamaha R1M",
      img: "/img/superbikes/yamaha-r1m.png",
      price: "₹30,00,000",
      mileage: "14 kmpl",
      engine: "998cc",
    },
    {
      name: "Aprilia RSV4 Factory",
      img: "/img/superbikes/aprilia-rsv4.png",
      price: "₹31,00,000",
      mileage: "13 kmpl",
      engine: "1099cc",
    },
    {
      name: "MV Agusta F3 800",
      img: "/img/superbikes/mv-agusta-f4.png",
      price: "₹21,00,000",
      mileage: "16 kmpl",
      engine: "798cc",
    },
    {
      name: "Honda CBR1000RR-R Fireblade",
      img: "/img/superbikes/tenere.png",
      price: "₹23,50,000",
      mileage: "15 kmpl",
      engine: "999cc",
    },
  ];
}

export default async function SuperbikesPage() {
  const superbikes = await getSuperbikes();

  return (
    <main className="bg-[#f9f9f9] pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Superbikes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {superbikes.map((bike, index) => (
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
