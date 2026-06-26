import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MaderaToys — Juguetes de madera artesanales para Chile",
  description:
    "Tienda de juguetes de madera artesanales hechos en Chile. Seguros, ecológicos y con envío a todo el país.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full bg-cream">{children}</body>
    </html>
  );
}
