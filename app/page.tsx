"use client"

import Footer from "./components/layout/Footer";
import Hero from "./components/layout/home/Hero";
import Newsletter from "./components/layout/home/Newsletter";
import Navbar from "./components/layout/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Newsletter />
      <Footer />
    </main>
  );
}
