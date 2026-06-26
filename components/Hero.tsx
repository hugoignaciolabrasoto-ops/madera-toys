import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative min-h-[580px] sm:min-h-[680px] flex items-center"
      style={{
        backgroundImage:
          "url('https://picsum.photos/seed/madera-hero-forest/1920/1080')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-wood-dark/85 via-wood-dark/70 to-wood-dark/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-1.5 bg-moss/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            <span>🌱</span>
            100% artesanal · Hecho en Chile
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Juguetes de madera{" "}
            <span className="text-beige">artesanales</span>{" "}
            para Chile
          </h1>

          <p className="text-beige/90 text-base sm:text-lg mb-8 leading-relaxed">
            Creados con amor por artesanos chilenos. Madera certificada,
            pinturas no tóxicas y envío a todo el país.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="#productos"
              className="inline-flex items-center justify-center gap-2 bg-beige text-wood-dark font-bold py-3.5 px-7 rounded-xl hover:bg-cream transition-colors text-sm sm:text-base shadow-lg"
            >
              🪵 Ver productos
            </Link>
            <Link
              href="#nosotros"
              className="inline-flex items-center justify-center gap-2 border-2 border-beige/60 text-beige font-semibold py-3.5 px-7 rounded-xl hover:bg-white/10 transition-colors text-sm sm:text-base"
            >
              Conoce más
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[
              { icon: "🛡️", text: "Seguro para niños" },
              { icon: "🚚", text: "Envío a todo Chile" },
              { icon: "🌿", text: "Ecológico" },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-1.5 text-beige/80 text-xs font-medium">
                <span>{badge.icon}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
