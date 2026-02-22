import Image from "next/image";

// Placeholder data matching your screenshot's vibe
const treats = [
  {
    name: "Puff Pastry",
    price: "Rp 35.000",
    // Dark, moody pastry image
    image: "/products/pudding-buah.png", 
  },
  {
    name: "Doughnuts",
    price: "Rp 25.000",
    // Dark themed doughnut image
    image: "/products/pudding-mango.png",
  },
  {
    name: "Brownies",
    price: "Rp 45.000",
    // Dark themed brownie image
    image: "/products/pudding-matcha.png",
  },
];

export default function FeaturedTreats({ fontClass }) {
  return (
    <section className="py-20 px-8 max-w-6xl mx-auto bg-white">
      {/* Title */}
      <div className="mb-12 text-center">
        <h2 className={`${fontClass} text-5xl md:text-6xl text-black`}>
          Featured Treats
        </h2>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {treats.map((treat, index) => (
          <div key={index} className="flex flex-col group cursor-pointer">
            
            {/* Image Container with aspect-square to make them perfectly boxy */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-5 shadow-sm group-hover:shadow-md transition-shadow">
              <Image
                src={treat.image}
                alt={treat.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Name and Price Layout */}
            <div className="flex justify-between items-center px-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                {treat.name}
              </h3>
              <span className="text-xl md:text-2xl font-bold text-gray-900">
                {treat.price}
              </span>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}