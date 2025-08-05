import Image from "next/image";
import React from "react";

// Simulated data
async function getBajajBikes() {
  return [
    {
      name: "Bajaj Pulsar 150",
      img: "/img/bajaj-bike-img/bajaj-pulsar150.png",
      price: "₹1,10,000",
      mileage: "50 kmpl",
      engine: "149.5cc",
    },
    {
      name: "Bajaj Platina 100",
      img: "/img/bajaj-bike-img/bajaj-platina100.png",
      price: "₹61,000",
      mileage: "70 kmpl",
      engine: "102cc",
    },
    {
      name: "Bajaj CT 110X",
      img: "/img/bajaj-bike-img/bajaj-ct110x.png",
      price: "₹67,000",
      mileage: "70 kmpl",
      engine: "115.45cc",
    },
    {
      name: "Bajaj Dominar 400",
      img: "/img/bajaj-bike-img/bajaj-dominar400.png",
      price: "₹2,30,000",
      mileage: "27 kmpl",
      engine: "373.3cc",
    },
    {
      name: "Bajaj Avenger Street 160",
      img: "/img/bajaj-bike-img/bajaj-avenger160.png",
      price: "₹1,15,000",
      mileage: "47 kmpl",
      engine: "160cc",
    },
    {
      name: "Bajaj Pulsar NS200",
      img: "/img/bajaj-bike-img/bajaj-pulsar200.png",
      price: "₹1,49,000",
      mileage: "35 kmpl",
      engine: "199.5cc",
    },
    {
      name: "Bajaj Chetak (Electric)",
      img: "/img/bajaj-bike-img/bajaj-ns400.png",
      price: "₹1,25,000",
      mileage: "90 km/charge",
      engine: "Electric",
    },
    {
      name: "Bajaj Pulsar N160",
      img: "/img/bajaj-bike-img/bajaj-n160.png",
      price: "₹1,22,000",
      mileage: "45 kmpl",
      engine: "164.82cc",
    },
  ];
}

export default async function BajajPage() {
  const bikes = await getBajajBikes();

  return (
    <main className="bg-[#f9f9f9] pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Bajaj Bikes
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
