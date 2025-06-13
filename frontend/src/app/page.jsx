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

      // Hide welcome message after 3 seconds
      const timer = setTimeout(() => setShowWelcome(false), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="relative">
      {/* Floating logout button */}
      {user && (
        <button
          onClick={handleLogout}
          className="absolute top-5 right-5 px-3 py-1 text-sm bg-red-500 text-white rounded shadow hover:bg-red-600 z-50"
        >
          Logout
        </button>
      )}

      {/* Temporary welcome message */}
      {showWelcome && user && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded shadow-lg z-50">
          Welcome, {user.name} 👋
        </div>
      )}

      {/* Sections */}
      <HeroSection/>
      <Categories/>
      <FeaturedBikes/>

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
    </div>
  );
}
