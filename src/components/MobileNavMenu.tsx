import Link from "next/link";
import { ArrowUp } from "./SVGIcon";
import Image from "next/image";
import Golden from "../../public/golden.jpg";
import { MenuIcon } from "lucide-react";

export default function MobileNavMenu() {
  return (
    <nav className="fixed top-11 left-1/2 -translate-x-1/2 w-full max-w-[718px] h-[70px] mx-auto md:hidden">
      <ul className="flex justify-between items-center bg-black w-full h-hull p-2 rounded-[100px]">
        <li className="h-full ">
          <Link href="/" className="block h-full rounded-[90px] py-4 px-8 bg-portfolio-orange">
            {/* <ArrowUp /> */}
            <Image src={Golden} alt="golden portrait" width={32} height={32} className="rounded-full" />
          </Link>
        </li>
        <li>
          <button type="button" title="menu" className="uppercase text-white text-lg font-medium h-full rounded-[90px] py-4 px-8 bg-portfolio-grey">
            <MenuIcon color="white" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
