"use client";

import Link from "next/link";
import { ArrowUp } from "./SVGIcon";
import Image from "next/image";
import Golden from "../../public/images/golden.jpg";

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
          <a href="#about" className={`${true ? "text-portfolio-orange" : "text-white"} uppercase text-lg font-medium`}>
            about
          </a>
        </li>
        <li className="h-full">
          <a href="#recent-works" className="uppercase text-white text-lg font-medium">
            recent works
          </a>
        </li>
        <li className="h-full">
          <a href="#testimonials" className="uppercase text-white text-lg font-medium">
            testimonials
          </a>
        </li>
        <li className="h-full">
          <a href="#contact" className="uppercase text-white text-lg font-medium">
            contact
          </a>
        </li>
        <li className="h-full">
          <a href="#" className="uppercase text-white text-lg font-medium">
            resume
          </a>
        </li>
        <li className="h-full">
          <a href="#" className="uppercase text-portfolio-hero-yellow text-lg font-medium h-full rounded-[90px] py-4 px-8 bg-portfolio-purple">
            book a call
          </a>
        </li>
      </ul>
    </nav>
  );
}
