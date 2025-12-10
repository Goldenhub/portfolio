"use client";

import Image from "next/image";
import Golden from "../../public/images/golden.jpg";
import { DownloadCloud, PhoneCallIcon } from "lucide-react";
import { useEffect } from "react";

export default function NavMenu({ sections, active, setActive }: { sections: string[]; active: string; setActive: (value: string) => void }) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      let current = sections[0];
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPos) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="fixed top-22 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[70px] mx-auto hidden md:block z-50">
      <ul className="flex justify-between items-center bg-black w-full p-2 rounded-[100px]">
        <li className="h-full">
          <a href="/" className={`block h-full rounded-[90px] py-4 px-8 ${active === "home" ? "bg-portfolio-orange" : "bg-portfolio-hero-yellow"} relative`}>
            {/* <ArrowUp /> */}
            <Image src={Golden} alt="golden portrait" width={32} height={32} className="rounded-full" />
          </a>
        </li>
        <li className="h-full">
          <a href="#about" className={`${active === "about" ? "text-portfolio-orange" : "text-white"} uppercase text-md font-medium`}>
            about
          </a>
        </li>
        <li className="h-full">
          <a href="#recent-works" className={`${active === "recent-works" ? "text-portfolio-orange" : "text-white"} uppercase text-md font-medium`}>
            recent works
          </a>
        </li>
        <li className="h-full">
          <a href="#testimonials" className={`${active === "testimonials" ? "text-portfolio-orange" : "text-white"} uppercase text-md font-medium`}>
            testimonials
          </a>
        </li>
        <li className="h-full">
          <a href="#contact" className={`${active === "contact" ? "text-portfolio-orange" : "text-white"} uppercase text-md font-medium`}>
            contact
          </a>
        </li>
        <li className="h-full">
          <a href="/docs/Azubuike_Chibueze_Golden.pdf" download className="uppercase text-white text-md font-medium flex">
            <DownloadCloud /> resume
          </a>
        </li>
        <li className="h-full">
          <a href="https://cal.com/goldenazubuike/30min" rel="noopener" target="_blank" className="uppercase text-portfolio-hero-yellow text-md font-medium h-full rounded-[90px] py-4 px-8 bg-portfolio-purple flex">
            book a call <PhoneCallIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
}
