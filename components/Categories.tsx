import { CATEGORIES } from "@/lib/products";

export function Categories() {
  return (
    <section className="py-16 bg-beige" id="categorias">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-wood mb-2">
            Nuestras categorías
          </h2>
          <p className="text-wood/60 text-sm sm:text-base">
            Encuentra el juguete perfecto para cada edad
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href="#productos"
              className="group bg-cream rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
            >
              <span className="text-4xl mb-3 block">{cat.emoji}</span>
              <h3 className="font-bold text-wood text-sm sm:text-base mb-1 group-hover:text-moss transition-colors">
                {cat.name}
              </h3>
              <p className="text-wood/50 text-xs sm:text-sm">{cat.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
