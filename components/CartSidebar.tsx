"use client";

import { useCartStore } from "@/lib/store";
import { formatPrice } from "@/lib/products";

export function CartSidebar() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    getTotalPrice,
    clearCart,
  } = useCartStore();

  const totalPrice = getTotalPrice();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Carrito de compras"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-beige-dark">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-wood" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <h2 className="text-lg font-bold text-wood">Mi carrito</h2>
            {items.length > 0 && (
              <span className="bg-moss text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {items.length}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="text-wood/60 hover:text-wood transition-colors p-1"
            aria-label="Cerrar carrito"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-3">
              <span className="text-7xl">🛒</span>
              <p className="text-wood font-semibold text-lg">Tu carrito está vacío</p>
              <p className="text-wood/50 text-sm">¡Elige algún juguete y agrégalo aquí!</p>
              <button
                onClick={closeCart}
                className="mt-2 bg-wood text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-wood-dark transition-colors text-sm"
              >
                Ver productos
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 bg-white rounded-2xl p-3 shadow-sm">
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-beige">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-wood text-sm leading-tight line-clamp-2">
                      {item.name}
                    </p>
                    <p className="text-moss font-bold text-sm mt-1">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full border-2 border-beige-dark text-wood flex items-center justify-center hover:border-wood hover:bg-wood hover:text-white transition-all text-sm font-bold"
                          aria-label="Disminuir cantidad"
                        >
                          −
                        </button>
                        <span className="text-sm font-bold text-wood w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full border-2 border-beige-dark text-wood flex items-center justify-center hover:border-wood hover:bg-wood hover:text-white transition-all text-sm font-bold"
                          aria-label="Aumentar cantidad"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-300 hover:text-red-500 transition-colors"
                        aria-label={`Eliminar ${item.name}`}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-xs text-wood/40 mt-1">
                      Subtotal: {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-4 border-t border-beige-dark space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-wood/70 text-sm">Subtotal ({items.reduce((a, i) => a + i.quantity, 0)} productos)</span>
              <span className="text-2xl font-bold text-wood">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-wood/50">Envío calculado al finalizar la compra</p>
            <button className="w-full bg-moss text-white py-3.5 rounded-xl font-bold hover:bg-moss-light transition-colors text-base">
              Ir al checkout →
            </button>
            <button
              onClick={clearCart}
              className="w-full text-wood/50 hover:text-red-400 transition-colors text-xs py-1"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
