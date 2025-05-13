"use client";

import Link from "next/link";
import { ArrowUp } from "./SVGIcon";
import Image from "next/image";
import Golden from "../../public/images/golden.jpg";
import { DownloadCloud, PhoneCallIcon } from "lucide-react";

export default function NavMenu() {
  return (
    <nav className="fixed top-22 left-1/2 -translate-x-1/2 w-full max-w-[718px] h-[70px] mx-auto hidden md:block z-50">
      <ul className="flex justify-between items-center bg-black w-full p-2 rounded-[100px]">
        <li className="h-full">
          <Link href="/" className="block h-full rounded-[90px] py-4 px-8 bg-portfolio-hero-yellow relative">
            {/* <ArrowUp /> */}
            <Image src={Golden} alt="golden portrait" width={32} height={32} className="rounded-full" />
          </Link>
        </li>
        <li className="h-full">
          <a href="#about" className={`${true ? "text-portfolio-orange" : "text-white"} uppercase text-md font-medium`}>
            about
          </a>
        </li>
        <li className="h-full">
          <a href="#recent-works" className="uppercase text-white text-md font-medium">
            recent works
          </a>
        </li>
        <li className="h-full">
          <a href="#testimonials" className="uppercase text-white text-md font-medium">
            testimonials
          </a>
        </li>
        <li className="h-full">
          <a href="#contact" className="uppercase text-white text-md font-medium">
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
