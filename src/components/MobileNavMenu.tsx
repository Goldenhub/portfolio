"use strict";

import Link from "next/link";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import Golden from "../../public/images/golden.jpg";
import { DownloadCloud, MenuIcon, PhoneCallIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function MobileNavMenu({ sections, active, setActive }: { sections: string[]; active: string; setActive: (value: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="fixed top-11 left-1/2 -translate-x-1/2 w-[90%] max-w-[718px] h-[70px] mx-auto md:hidden z-50">
      <ul className="flex justify-between items-center bg-black w-full h-hull p-2 rounded-[100px]">
        <li className="h-full ">
          <Link href="/" className={`block h-full rounded-[90px] py-4 px-8 ${active === "home" ? "bg-portfolio-orange" : "bg-portfolio-hero-yellow"}`}>
            {/* <ArrowUp /> */}
            <Image src={Golden} alt="golden portrait" width={32} height={32} className="rounded-full" />
          </Link>
        </li>
        <li>
          {!isOpen ? (
            <button type="button" title="open menu" className="uppercase text-white text-lg font-medium h-full rounded-[90px] py-4 px-8 bg-portfolio-grey" onClick={() => setIsOpen(true)}>
              <MenuIcon color="white" />
            </button>
          ) : (
            <button type="button" title="close menu" className="uppercase text-white text-lg font-medium h-full rounded-[90px] py-4 px-8 bg-portfolio-grey" onClick={() => setIsOpen(false)}>
              <XIcon color="white" />
            </button>
          )}
        </li>
      </ul>
      <AnimatePresence>
        {isOpen && (
          <motion.div className="z-50" initial={{ x: "100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "100%", opacity: 0 }} transition={{ type: "tween", duration: 0.4 }}>
            <ul className="w-full bottom-0 left-0 bg-black p-2 flex flex-col gap-5 rounded-4xl">
              <li className="border-b">
                <a href="#about" className={`${active === "about" ? "text-portfolio-orange" : "text-white"} uppercase inline-block text-md font-medium w-full px-10 py-5`}>
                  about
                </a>
              </li>
              <li className="border-b">
                <a href="#recent-works" className={`${active === "recent-works" ? "text-portfolio-orange" : "text-white"} uppercase text-white text-md font-medium inline-block w-full px-10 py-5`}>
                  recent works
                </a>
              </li>
              <li className="border-b">
                <a href="#testimonials" className={`${active === "testimonials" ? "text-portfolio-orange" : "text-white"} uppercase text-white text-md font-medium inline-block w-full px-10 py-5`}>
                  testimonials
                </a>
              </li>
              <li className="border-b">
                <a href="#contact" className={`${active === "contact" ? "text-portfolio-orange" : "text-white"} uppercase text-white text-md font-medium inline-block w-full px-10 py-5`}>
                  contact
                </a>
              </li>
              <li className="border-b px-10 py-5">
                <a href="/docs/Azubuike_Chibueze_Golden.pdf" download className="uppercase text-white text-md font-medium flex">
                  <DownloadCloud /> resume
                </a>
              </li>
              <li className="">
                <a href="https://cal.com/goldenazubuike/30min" rel="noopener" target="_blank" className="uppercase text-portfolio-hero-yellow text-md font-medium rounded-[90px] py-4 px-8 bg-portfolio-purple flex justify-center items-center gap-5">
                  book a call <PhoneCallIcon />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
