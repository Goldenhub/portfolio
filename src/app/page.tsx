"use client";

// import * as motion from "motion/react-client";
import About from "@/components/About";
import FloatingPopOver from "@/components/FloatingPopOver";
import Hero from "@/components/Hero";
import RecentWorks from "@/components/RecentWorks";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <RecentWorks />
        <Testimonials />
      </main>
      <FloatingPopOver />
    </>
  );
}
