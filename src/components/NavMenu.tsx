import Link from "next/link";
import { ArrowUp } from "./SVGIcon";
import Image from "next/image";
import Golden from "../../public/golden.jpg";

export default function NavMenu() {
  return (
    <nav className="absolute top-22 left-1/2 -translate-x-1/2 w-full max-w-[718px] h-[70px] mx-auto max-sm:hidden">
      <ul className="flex justify-between items-center bg-black w-full p-2 rounded-[100px]">
        <li className="h-full">
          <Link href="/" className="block h-full rounded-[90px] py-4 px-8 bg-portfolio-orange relative">
            {/* <ArrowUp /> */}
            <Image src={Golden} alt="golden portrait" width={32} height={32} className="rounded-full" />
          </Link>
        </li>
        <li className="h-full">
          <a href="#about" className="uppercase text-white text-lg font-medium">
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
          <a href="#" className="uppercase text-white text-lg font-medium h-full rounded-[90px] py-4 px-8 bg-portfolio-grey">
            resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
