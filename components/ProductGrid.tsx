import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <section className="py-16 bg-cream" id="productos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-wood mb-2">
            Nuestros productos
          </h2>
          <p className="text-wood/60 text-sm sm:text-base">
            Juguetes artesanales que duran toda la infancia
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
