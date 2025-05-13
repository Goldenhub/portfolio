// import * as motion from "motion/react-client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Golden from "../../public/images/golden.jpg";

export default function Main() {
  return (
    <footer className="relative overflow-hidden w-auto mx-auto bg-black" id="footer">
      <Marquee className="items-center whitespace-nowrap tracking-wider animate-scroll pointer-events-none" speed={80} gradient={true} gradientColor="#000" gradientWidth={50}>
        <h4 className="uppercase inline-block text-8xl md:text-[200px] text-portfolio-orange mx-10">Golden Azubuike</h4>
        <Image src={Golden} alt="golden portrait" width={64} height={64} className="rounded-full w-8 md:w-16" />
        <h4 className="uppercase inline-block text-8xl md:text-[200px] text-portfolio-orange mx-10">Golden Azubuike</h4>
        <Image src={Golden} alt="golden portrait" width={64} height={64} className="rounded-full w-8 md:w-16" />
        <h4 className="uppercase inline-block text-8xl md:text-[200px] text-portfolio-orange mx-10">Golden Azubuike</h4>
        <Image src={Golden} alt="golden portrait" width={64} height={64} className="rounded-full w-8 md:w-16" />
        <h4 className="uppercase inline-block text-8xl md:text-[200px] text-portfolio-orange mx-10">Golden Azubuike</h4>
        <Image src={Golden} alt="golden portrait" width={64} height={64} className="rounded-full w-8 md:w-16" />
      </Marquee>
    </footer>
  );
}
