import Image from "next/image";

export default function Footer() {
  // The golden-sand color used for headings and icons in your design
  const goldColor = "#dcb48c";

  return (
    <footer
      className="relative text-white pt-16 pb-8 bg-cover bg-center mt-auto"
      style={{
        // A dark textured slate background to match your screenshot
        backgroundImage: "url('/images/black-texture-background.jpg')",
        backgroundColor: "#111", // Fallback color
      }}
    >
      {/* Dark overlay to make the texture subtle and text readable */}
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        
        {/* ================= TOP ROW: LOGO & SOCIALS ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: goldColor }}>
            LANNY&apos;s Bakery
          </h2>

          <div className="flex items-center space-x-4">
            <span className="font-semibold text-lg mr-2" style={{ color: goldColor }}>
              Follow us
            </span>
            {/* Social Icons (Using standard SVGs for easy copy-pasting) */}
            <div className="flex space-x-3">
              {/* Facebook */}
              <a href="#" style={{ color: goldColor }} className="hover:text-white transition-colors">
                <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              {/* Pinterest */}
              <a href="#" style={{ color: goldColor }} className="hover:text-white transition-colors">
                <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.633 0 12.017 0z"/></svg>
              </a>
              {/* WhatsApp */}
              <a href="#" style={{ color: goldColor }} className="hover:text-white transition-colors">
                <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" style={{ color: goldColor }} className="hover:text-white transition-colors">
                <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER LINE ================= */}
        <hr className="border-gray-600/50 mb-12" />

        {/* ================= MAIN 3-COLUMN GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: About Us */}
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: goldColor }}>
              About Us
            </h3>
            <div className="space-y-4 text-gray-200 font-medium">
              <p>+62 8123 123 1233</p>
              <p>test@email.com</p>
              <p>Jl. Jakarta Raya no 17</p>
              <p>Jakarta Selatan</p>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: goldColor }}>
              Explore
            </h3>
            <div className="flex flex-col space-y-4 font-medium text-gray-200">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#" className="hover:text-white transition-colors">Blog</a>
              <a href="#" className="hover:text-white transition-colors">Contact us</a>
              <a href="#" className="hover:text-white transition-colors">Services</a>
            </div>
          </div>

          {/* Column 3: Recent News */}
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: goldColor }}>
              Recent News
            </h3>
            
            {/* News Item 1 */}
            <div className="flex items-center space-x-4 mb-6 cursor-pointer group">
              <div className="relative w-20 h-14 rounded overflow-hidden">
                <Image 
                  src="/products/marmer-cake.png" 
                  alt="Pastry news" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform"
                />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">June 14, 2024</p>
                <p className="font-semibold text-gray-200 group-hover:text-white transition-colors">
                  Puff pastry bliss.
                </p>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="flex items-center space-x-4 cursor-pointer group">
              <div className="relative w-20 h-14 rounded overflow-hidden">
                <Image 
                  src="/products/brudel-cake.png" 
                  alt="Pastry news" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform"
                />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">June 14, 2024</p>
                <p className="font-semibold text-gray-200 group-hover:text-white transition-colors">
                  Puff pastry bliss.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="text-center text-gray-400 font-medium text-sm pt-8 border-t border-gray-600/50">
          © 2026 LANNY&apos;S BAKERY. All rights reserved
        </div>
      </div>
    </footer>
  );
}