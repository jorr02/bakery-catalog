"use client"; // This is required because we are using useState for the tabs

import { useState } from "react";
import Image from "next/image";

// 1. Define the categories for the tabs
const categories = ["Cake", "Muffins", "Croissant", "Bread", "Tart", "Favorite"];

// 2. Define the images for the active "Cake" tab
// (In a real app, you'd have different images for each category)
const cakeImages = [
  "/products/brudel-cake.png",
  "/products/marmer-cake.png",
  "/products/ombekuk-cake.png",
  "/products/marmer-cake.png",
  "/products/brudel-cake.png",
  "/products/marmer-cake.png",
];

const muffinsImages = [
  "/products/brudel-cake.png",
  "/products/marmer-cake.png",
  "/products/ombekuk-cake.png",
  "/products/marmer-cake.png",
  "/products/brudel-cake.png",
  "/products/marmer-cake.png",
];

export default function ExploreMoreSection({ fontClass }) {
  // 3. State to keep track of the active tab. Defaults to "Cake".
  const [activeTab, setActiveTab] = useState("Cake");

  return (
    <section className="py-20 px-8 max-w-6xl mx-auto">
      {/* Title */}
      <div className="mb-12 text-center">
        <h2 className={`${fontClass} text-5xl md:text-6xl text-black`}>
          Explore More
        </h2>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center items-center space-x-4 md:space-x-8 mb-12 border-b border-gray-200">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`pb-4 text-lg font-semibold transition-colors relative ${
              activeTab === category
                ? "text-[#8A3D24]" // Active color (brown)
                : "text-gray-500 hover:text-gray-700" // Inactive color
            }`}
          >
            {category}
            {/* The underline for the active tab */}
            {activeTab === category && (
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#8A3D24] rounded-t-full"></span>
            )}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      {/* For this demo, we only show images if "Cake" is active */}
      {activeTab === "Cake" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cakeImages.map((src, index) => (
            <div
              key={index}
              className="relative w-full aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group bg-gray-100"
            >
              <Image
                src={src}
                alt={`Explore cake ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      ) : (
        // Placeholder for other tabs
        <div className="text-center text-gray-500 py-20">
          <p className="text-xl">
            More delicious {activeTab.toLowerCase()} coming soon!
          </p>
        </div>
      )}
    </section>
  );
}