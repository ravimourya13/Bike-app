"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Import your sections
import HeroSection from "@/components/home/HeroSection";
import Categories from "@/components/home/Categories";
import FeaturedBikes from "@/components/home/FeaturedBike";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setShowWelcome(true);

      const timer = setTimeout(() => setShowWelcome(false), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Welcome Message */}
      {showWelcome && user && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded shadow-lg z-50">
          Welcome, {user.name} 👋
        </div>
      )}

      {/* Main Content */}
      <div className="flex-grow">
        <HeroSection />
        <Categories />
        <FeaturedBikes />

        {/* Login/register message if not logged in */}
        {!user && (
          <div className="text-center my-8 text-gray-700">
            Please{" "}
            <button
              onClick={() => router.push("/login")}
              className="text-blue-600 underline"
            >
              login
            </button>{" "}
            or{" "}
            <button
              onClick={() => router.push("/register")}
              className="text-blue-600 underline"
            >
              register
            </button>{" "}
            to get started.
          </div>
        )}
         {/* Logout button at bottom before footer */}
      {user && (
        <div className="text-center my-8">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      )}
      </div>

     
    </div>
  );
}
