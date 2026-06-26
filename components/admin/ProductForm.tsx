"use client";

import { useState } from "react";
import { useAdminStore } from "@/lib/adminStore";
import { Product } from "@/lib/types";

interface ProductFormProps {
  onSuccess: () => void;
}

type FormData = {
  name: string;
  description: string;
  price: string;
  category: Product["category"];
  stock: string;
  imageUrl: string;
};

const INITIAL: FormData = {
  name: "",
  description: "",
  price: "",
  category: "bloques",
  stock: "",
  imageUrl: "",
};

export function ProductForm({ onSuccess }: ProductFormProps) {
  const { addProduct } = useAdminStore();
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [saved, setSaved] = useState(false);

  const validate = (): Partial<FormData> => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "El nombre es requerido";
    if (!form.description.trim()) e.description = "La descripción es requerida";
    if (!form.price || Number(form.price) <= 0) e.price = "Ingresa un precio válido";
    if (form.stock === "" || Number(form.stock) < 0) e.stock = "Ingresa un stock válido";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    addProduct({
      name: form.name.trim(),
      description: form.description.trim(),
      price: Number(form.price),
      category: form.category,
      stock: Number(form.stock),
      imageUrl:
        form.imageUrl.trim() ||
        `https://picsum.photos/seed/producto-${Date.now()}/400/400`,
    });
    setForm(INITIAL);
    setErrors({});
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
    onSuccess();
  };

  const field =
    (key: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm({ ...form, [key]: e.target.value });
      if (errors[key]) setErrors({ ...errors, [key]: undefined });
    };

  const inputCls =
    "w-full border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all";
  const labelCls = "block text-sm font-semibold text-gray-700 mb-1.5";
  const errCls = "text-red-500 text-xs mt-1";

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-base font-bold text-gray-800 mb-5">Agregar nuevo producto</h3>

      {saved && (
        <div className="mb-4 bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-2.5 rounded-xl">
          ✅ Producto guardado correctamente
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Nombre */}
          <div className="sm:col-span-2">
            <label className={labelCls}>Nombre del producto *</label>
            <input
              type="text"
              value={form.name}
              onChange={field("name")}
              className={inputCls}
              placeholder="Ej: Set de Bloques Naturales"
            />
            {errors.name && <p className={errCls}>{errors.name}</p>}
          </div>

          {/* Descripción */}
          <div className="sm:col-span-2">
            <label className={labelCls}>Descripción *</label>
            <textarea
              value={form.description}
              onChange={field("description")}
              rows={2}
              className={`${inputCls} resize-none`}
              placeholder="Describe el producto brevemente"
            />
            {errors.description && <p className={errCls}>{errors.description}</p>}
          </div>

          {/* Categoría */}
          <div>
            <label className={labelCls}>Categoría *</label>
            <select
              value={form.category}
              onChange={field("category")}
              className={inputCls}
            >
              <option value="bloques">Bloques</option>
              <option value="rompecabezas">Rompecabezas</option>
              <option value="vehiculos">Vehículos</option>
              <option value="educativos">Educativos</option>
            </select>
          </div>

          {/* Precio */}
          <div>
            <label className={labelCls}>Precio CLP *</label>
            <input
              type="number"
              value={form.price}
              onChange={field("price")}
              className={inputCls}
              placeholder="18990"
              min="1"
            />
            {errors.price && <p className={errCls}>{errors.price}</p>}
          </div>

          {/* Stock */}
          <div>
            <label className={labelCls}>Stock *</label>
            <input
              type="number"
              value={form.stock}
              onChange={field("stock")}
              className={inputCls}
              placeholder="10"
              min="0"
            />
            {errors.stock && <p className={errCls}>{errors.stock}</p>}
          </div>

          {/* URL imagen */}
          <div>
            <label className={labelCls}>URL de imagen</label>
            <input
              type="url"
              value={form.imageUrl}
              onChange={field("imageUrl")}
              className={inputCls}
              placeholder="https://picsum.photos/seed/mi-producto/400/400"
            />
            <p className="text-gray-400 text-xs mt-1">
              Opcional — se usa placeholder si se deja vacío
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-5 pt-4 border-t border-gray-100">
          <button
            type="button"
            onClick={() => { setForm(INITIAL); setErrors({}); onSuccess(); }}
            className="px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-amber-800 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-amber-900 transition-colors"
          >
            Guardar producto
          </button>
        </div>
      </form>
    </div>
  );
}
