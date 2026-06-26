"use client";

import { useState } from "react";
import { useAdminStore } from "@/lib/adminStore";
import { ProductForm } from "./ProductForm";
import { ProductTable } from "./ProductTable";
import { formatPrice } from "@/lib/products";

export function Dashboard() {
  const { products, logout } = useAdminStore();
  const [showForm, setShowForm] = useState(false);

  const totalProducts = products.length;
  const inStock = products.filter((p) => p.stock > 0).length;
  const noStock = products.filter((p) => p.stock === 0).length;
  const totalValue = products.reduce((acc, p) => acc + p.price * p.stock, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-amber-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl" aria-hidden>🌲</span>
            <div>
              <h1 className="font-bold text-base sm:text-lg leading-tight">MaderaToys Admin</h1>
              <p className="text-white/60 text-xs hidden sm:block">Panel de administración</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="text-white/70 hover:text-white text-sm transition-colors hidden sm:block"
            >
              Ver tienda →
            </a>
            <button
              onClick={logout}
              className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
              Salir
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total productos", value: totalProducts, color: "text-gray-800", bg: "bg-white" },
            { label: "En stock", value: inStock, color: "text-green-600", bg: "bg-white" },
            { label: "Sin stock", value: noStock, color: "text-red-500", bg: "bg-white" },
            { label: "Valor inventario", value: formatPrice(totalValue), color: "text-amber-700", bg: "bg-white" },
          ].map((stat) => (
            <div key={stat.label} className={`${stat.bg} rounded-2xl p-4 shadow-sm border border-gray-100`}>
              <p className="text-xs font-medium text-gray-500 mb-1">{stat.label}</p>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Actions bar */}
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-bold text-gray-800">
            Catálogo de productos
          </h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              showForm
                ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                : "bg-amber-800 text-white hover:bg-amber-900"
            }`}
          >
            {showForm ? (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Cancelar
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Nuevo producto
              </>
            )}
          </button>
        </div>

        {/* Product form */}
        {showForm && (
          <ProductForm onSuccess={() => setShowForm(false)} />
        )}

        {/* Product table */}
        <ProductTable />
      </main>
    </div>
  );
}
