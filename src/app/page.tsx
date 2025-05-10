"use client";

// import * as motion from "motion/react-client";
import About from "@/components/About";
import FloatingPopOver from "@/components/FloatingPopOver";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <About />
      </main>
      <FloatingPopOver />
    </>
  );
}
