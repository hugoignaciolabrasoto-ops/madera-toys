import { Navbar } from "@/components/Navbar";
import { CartSidebar } from "@/components/CartSidebar";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { ProductGrid } from "@/components/ProductGrid";
import { WhyUs } from "@/components/WhyUs";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <CartSidebar />
      <main>
        <Hero />
        <Categories />
        <ProductGrid />
        <WhyUs />
      </main>
      <Footer />
    </>
  );
}
