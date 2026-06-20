// "use client"

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import Newsletter from "@/components/home/Newsletter";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <FeaturedBooks />
      <Newsletter/>
      <Footer />
    </main>
  );
}
