// "use client"

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import Newsletter from "@/components/home/Newsletter";
import Hero from "@/components/home/Hero";
import Book from "@/components/home/Book";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <FeaturedBooks />
      <Book />
      <Newsletter/>
      
      <Footer />
    </main>
  );
}
