import Image from "next/image"; // Brought this back!

export default function ProductCard({ product }) {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(product.price);

  const phoneNumber = "628123456789"; 
  const message = `Halo, saya mau pesan ${product.name} seharga ${formattedPrice}. Masih ada?`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group bg-gray-100">
      
      {/* Restored the powerful Next.js Image component! */}
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/70 to-transparent z-0"></div>

      <div className="absolute top-0 left-0 w-full p-5 flex justify-between items-start z-10">
        
        <div className="flex flex-col">
          <h3 className="font-bold text-gray-900 text-lg leading-tight">
            {product.name}
          </h3>
          <p className="text-gray-800 font-semibold text-sm mt-0.5">
            {formattedPrice}
          </p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#4a4a4a] hover:bg-black text-white text-xs font-medium px-4 py-1.5 rounded transition-colors"
        >
          Detail
        </a>
        
      </div>
    </div>
  );
}