import ProductCard from "@/components/ProductCard";
// 1. Bring the font back
import { Dancing_Script } from "next/font/google";

// 2. Configure it
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"], 
});

const products = [
  {
    id: 1,
    name: "Pudding Bunga",
    price: 40000, 
    image: "/products/pudding-bunga.png", 
  },
  {
    id: 2,
    name: "Pudding Coklat",
    price: 40000,
    image: "/products/pudding-coklat.png",
  },
  {
    id: 3,
    name: "Pudding Pandan",
    price: 40000,
    image: "/products/pudding-pandan.png",
  },
  {
    id: 4,
    name: "Pudding Buah",
    price: 40000,
    image: "/products/pudding-buah.png",
  },
  {
    id: 5,
    name: "Pudding Matcha",
    price: 40000,
    image: "/products/pudding-matcha.png",
  },
  {
    id: 6,
    name: "Pudding Mango",
    price: 40000,
    image: "/products/pudding-mango.png",
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* ================= HEADER & HERO SECTION ================= */}
      <div 
        className="relative h-screen bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('/images/hero-section.png')",
          backgroundColor: "#f5f5f5"
        }}
      >
        <div className="absolute inset-0 bg-white/20"></div>

        <header className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
          <div className="text-2xl font-extrabold tracking-tight text-black">
            LANNY&apos;s Bakery
          </div>
          
          <nav className="hidden md:flex space-x-8 font-semibold text-black">
            <a href="#" className="hover:text-[#8A3D24] transition-colors">Home</a>
            <a href="#" className="hover:text-[#8A3D24] transition-colors">Blog</a>
            <a href="#" className="hover:text-[#8A3D24] transition-colors">Contact Us</a>
            <a href="#" className="hover:text-[#8A3D24] transition-colors">Services</a>
          </nav>
        </header>

        <div className="relative z-10 flex flex-col justify-center h-[calc(100vh-100px)] px-8 max-w-7xl mx-auto">
          <div className="max-w-xl">
            <h3 className="text-[#a86542] font-bold text-lg mb-2 tracking-wide">
              Delicious Cafe
            </h3>
            
            {/* 3. Re-applied the font here! */}
            <h1 className={`${dancingScript.className} text-7xl md:text-8xl text-black mb-10 leading-tight`}>
              Sweet Treats,<br />
              Perfect Eats
            </h1>
            
            <div className="flex items-center space-x-6">
              <a href="#products" className="bg-[#8A3D24] hover:bg-[#6b2f1c] text-white px-8 py-3 rounded border border-[#6b2f1c] font-semibold shadow-md transition-all">
                Shop Now
              </a>
              
              <button className="flex items-center text-[#c29671] hover:text-[#9e7655] font-semibold transition-colors">
                Learn More <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= TOP PRODUCTS SECTION ================= */}
      <main id="products" className="py-24 px-8 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          {/* Re-applied the font here! */}
          <h2 className={`${dancingScript.className} text-5xl md:text-6xl text-black`}>
            Top Products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </main>

      {/* ================= PROMO BANNER SECTION ================= */}
      <section 
        className="relative w-full py-28 mt-12 bg-cover bg-center flex flex-col items-center justify-center"
        style={{ 
          backgroundImage: "url('/images/promotion-background.png')", 
          backgroundColor: "#f9f9f9"
        }}
      >
        <div className="absolute inset-0 bg-white/60"></div>

        <div className="relative z-10 text-center flex flex-col items-center">
          {/* Re-applied the font here! */}
          <h2 className={`${dancingScript.className} text-5xl md:text-6xl text-[#8A3D24] leading-tight mb-8`}>
            20% Off Your <br/> First Order
          </h2>
          
          <button className="bg-[#8A3D24] hover:bg-[#6b2f1c] text-white px-10 py-3 rounded font-medium text-lg shadow-md transition-all">
            Learn More
          </button>
        </div>
      </section>

    </div>
  );
}