import Image from "next/image";
import React from "react";

// Simulated data
async function getEvBikes() {
  return [
    {
      name: "Revolt RV400",
      img: "/img/ev-bikes/revolt-rv400.png",
      price: "₹1,40,000",
      mileage: "150 km/charge",
      engine: "Electric",
    },
    {
      name: "Tork Kratos R",
      img: "/img/ev-bikes/tork-kratos.png",
      price: "₹1,67,000",
      mileage: "180 km/charge",
      engine: "Electric",
    },
    {
      name: "Ultraviolette F77",
      img: "/img/ev-bikes/ultraviolette-f77.png",
      price: "₹3,80,000",
      mileage: "307 km/charge",
      engine: "Electric",
    },
    {
      name: "Oben Rorr",
      img: "/img/ev-bikes/oben-rorr.png",
      price: "₹1,50,000",
      mileage: "187 km/charge",
      engine: "Electric",
    },
    {
      name: "Hop Oxo",
      img: "/img/ev-bikes/hop-oxo.png",
      price: "₹1,45,000",
      mileage: "150 km/charge",
      engine: "Electric",
    },
    {
      name: "Matter Aera",
      img: "/img/ev-bikes/matter-aera.png",
      price: "₹1,74,000",
      mileage: "125 km/charge",
      engine: "Electric",
    },
    {
      name: "Komaki Ranger",
      img: "/img/ev-bikes/komaki-ranger.png",
      price: "₹1,85,000",
      mileage: "200 km/charge",
      engine: "Electric",
    },
    {
      name: "Kabira KM 5000",
      img: "/img/ev-bikes/kabira-km5000.png",
      price: "₹3,15,000",
      mileage: "344 km/charge",
      engine: "Electric",
    },
  ];
}

export default async function EvBikesPage() {
  const evBikes = await getEvBikes();

  return (
    <main className="bg-[#f9f9f9] pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Electric Bikes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {evBikes.map((bike, index) => (
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
