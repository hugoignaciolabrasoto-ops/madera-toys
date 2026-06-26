"use client";

import Image from "next/image";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/products";
import { useCartStore } from "@/lib/store";

const CATEGORY_LABELS: Record<Product["category"], string> = {
  bloques: "Bloques",
  rompecabezas: "Rompecabezas",
  vehiculos: "Vehículos",
  educativos: "Educativos",
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, openCart } = useCartStore();

  const handleAddToCart = () => {
    addItem(product);
    openCart();
  };

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 group flex flex-col">
      <div className="relative h-52 overflow-hidden bg-beige">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-beige/90 backdrop-blur-sm text-wood text-xs font-semibold px-2.5 py-1 rounded-full">
            {CATEGORY_LABELS[product.category]}
          </span>
        </div>
        {product.stock <= 5 && product.stock > 0 && (
          <div className="absolute top-3 right-3">
            <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full">
              ¡Últimas {product.stock}!
            </span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-wood mb-1 leading-snug line-clamp-2 text-sm sm:text-base">
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm text-wood/55 mb-3 line-clamp-2 flex-1 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between gap-2 mt-auto">
          <span className="text-lg sm:text-xl font-bold text-moss">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-1.5 bg-wood text-white px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold hover:bg-wood-dark active:scale-95 transition-all"
            aria-label={`Agregar ${product.name} al carrito`}
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}
