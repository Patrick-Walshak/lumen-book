"use client"

import FeaturedBooks from "./components/home/FeaturedBooks";
import Hero from "./components/home/Hero";
import Newsletter from "./components/home/Newsletter";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedBooks />
      <Newsletter />
      <Footer />
    </main>
  );
}
