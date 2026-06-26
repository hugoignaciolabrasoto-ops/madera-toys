export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: "bloques" | "rompecabezas" | "vehiculos" | "educativos";
  stock: number;
  imageUrl: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  emoji: string;
}
