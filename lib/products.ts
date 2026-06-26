import { Category, Product } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Set de Bloques Naturales",
    description:
      "Set de 30 bloques de madera certificada para estimular la creatividad y el desarrollo motor fino.",
    price: 18990,
    category: "bloques",
    stock: 15,
    imageUrl: "/images/bloques.jpg",
  },
  {
    id: 2,
    name: "Rompecabezas Animales Chile",
    description:
      "Puzzle de madera con 12 piezas grandes que representan la fauna chilena: cóndor, pudú y huemul.",
    price: 12490,
    category: "rompecabezas",
    stock: 20,
    imageUrl: "/images/rompecabezas.jpg",
  },
  {
    id: 3,
    name: "Auto de Madera Clásico",
    description:
      "Auto de madera torneada con ruedas de goma natural, ideal para niños mayores de 3 años.",
    price: 9990,
    category: "vehiculos",
    stock: 25,
    imageUrl: "/images/auto.jpg",
  },
  {
    id: 4,
    name: "Cocina de Juguete Mini",
    description:
      "Cocinita de madera con dos hornillas, horno y espacio de almacenamiento. Incluye utensilios de madera.",
    price: 34990,
    category: "educativos",
    stock: 8,
    imageUrl: "/images/cocina.jpg",
  },
  {
    id: 5,
    name: "Ábaco Colorido",
    description:
      "Ábaco de madera con 100 cuentas de colores para aprender a contar y sumar de forma entretenida.",
    price: 15490,
    category: "educativos",
    stock: 18,
    imageUrl: "/images/abaco.jpg",
  },
  {
    id: 6,
    name: "Xilófono de Madera",
    description:
      "Instrumento musical de 8 teclas con colores naturales y dos baquetas incluidas. Estimula el oído musical.",
    price: 19990,
    category: "educativos",
    stock: 12,
    imageUrl: "/images/xilofono.jpg",
  },
  {
    id: 7,
    name: "Tren Artesanal",
    description:
      "Set de tren artesanal con locomotora, 3 vagones y 2 metros de vías de madera ensamblables.",
    price: 28990,
    category: "vehiculos",
    stock: 10,
    imageUrl: "/images/tren.jpg",
  },
  {
    id: 8,
    name: "Caja Clasificadora de Formas",
    description:
      "Caja de madera con 10 figuras geométricas de colores para que los más pequeños aprendan las formas.",
    price: 13990,
    category: "bloques",
    stock: 22,
    imageUrl: "/images/clasificadora.jpg",
  },
];

export const CATEGORIES: Category[] = [
  {
    id: "bloques",
    name: "Bloques",
    description: "Construye y aprende",
    emoji: "🧱",
  },
  {
    id: "rompecabezas",
    name: "Rompecabezas",
    description: "Desafía tu mente",
    emoji: "🧩",
  },
  {
    id: "vehiculos",
    name: "Vehículos",
    description: "Aventuras sobre ruedas",
    emoji: "🚗",
  },
  {
    id: "educativos",
    name: "Educativos",
    description: "Aprendizaje y diversión",
    emoji: "📚",
  },
];

export function formatPrice(price: number): string {
  return `$${price.toLocaleString("es-CL")}`;
}
