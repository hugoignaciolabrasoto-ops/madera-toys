import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "./types";
import { PRODUCTS } from "./products";

interface AdminStore {
  isAuthenticated: boolean;
  products: Product[];
  login: (username: string, password: string) => boolean;
  logout: () => void;
  addProduct: (product: Omit<Product, "id">) => void;
  removeProduct: (id: number) => void;
}

export const useAdminStore = create<AdminStore>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      products: PRODUCTS,

      login: (username, password) => {
        if (username === "admin" && password === "admin123") {
          set({ isAuthenticated: true });
          return true;
        }
        return false;
      },

      logout: () => set({ isAuthenticated: false }),

      addProduct: (product) => {
        const { products } = get();
        const newId = Math.max(...products.map((p) => p.id), 0) + 1;
        set({ products: [...products, { ...product, id: newId }] });
      },

      removeProduct: (id) =>
        set({ products: get().products.filter((p) => p.id !== id) }),
    }),
    {
      name: "madera-toys-admin",
      partialize: (state) => ({ products: state.products }),
    }
  )
);
