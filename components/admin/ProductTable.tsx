"use client";

import Image from "next/image";
import { useAdminStore } from "@/lib/adminStore";
import { formatPrice } from "@/lib/products";

const CATEGORY_LABEL: Record<string, string> = {
  bloques: "Bloques",
  rompecabezas: "Rompecabezas",
  vehiculos: "Vehículos",
  educativos: "Educativos",
};

export function ProductTable() {
  const { products, removeProduct } = useAdminStore();

  if (products.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
        <span className="text-5xl block mb-3">📦</span>
        <p className="text-gray-500 font-medium">No hay productos aún</p>
        <p className="text-gray-400 text-sm mt-1">¡Agrega el primero usando el formulario!</p>
      </div>
    );
  }

  const handleDelete = (id: number, name: string) => {
    if (window.confirm(`¿Eliminar el producto "${name}"?\n\nEsta acción no se puede deshacer.`)) {
      removeProduct(id);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left px-5 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide">
                Producto
              </th>
              <th className="text-left px-5 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide hidden sm:table-cell">
                Categoría
              </th>
              <th className="text-left px-5 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide">
                Precio
              </th>
              <th className="text-left px-5 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide hidden md:table-cell">
                Stock
              </th>
              <th className="px-5 py-3.5" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                {/* Producto */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-800 text-sm leading-snug line-clamp-1">
                        {product.name}
                      </p>
                      <p className="text-gray-400 text-xs mt-0.5 line-clamp-1 max-w-xs">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Categoría */}
                <td className="px-5 py-4 hidden sm:table-cell">
                  <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {CATEGORY_LABEL[product.category] ?? product.category}
                  </span>
                </td>

                {/* Precio */}
                <td className="px-5 py-4">
                  <span className="font-bold text-green-700">
                    {formatPrice(product.price)}
                  </span>
                </td>

                {/* Stock */}
                <td className="px-5 py-4 hidden md:table-cell">
                  <span
                    className={`text-sm font-semibold ${
                      product.stock === 0
                        ? "text-red-500"
                        : product.stock <= 5
                        ? "text-amber-500"
                        : "text-gray-700"
                    }`}
                  >
                    {product.stock === 0
                      ? "Sin stock"
                      : `${product.stock} unid.`}
                  </span>
                </td>

                {/* Acción */}
                <td className="px-5 py-4">
                  <button
                    onClick={() => handleDelete(product.id, product.name)}
                    className="text-gray-300 hover:text-red-500 transition-colors p-1.5 rounded-lg hover:bg-red-50"
                    aria-label={`Eliminar ${product.name}`}
                    title="Eliminar producto"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-5 py-3 border-t border-gray-100 bg-gray-50 text-xs text-gray-400 text-right">
        {products.length} producto{products.length !== 1 ? "s" : ""} en total
      </div>
    </div>
  );
}
