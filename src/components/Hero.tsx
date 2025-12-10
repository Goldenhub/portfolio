import MobileNavMenu from "@/components/MobileNavMenu";
import NavMenu from "@/components/NavMenu";
import { useState } from "react";

const sections = ["home", "about", "recent-works", "testimonials", "contact"];

export default function Hero() {
  const [active, setActive] = useState("home");

  return (
    <header id="home" className="relative max-w-[456px] md:max-w-[1280px] mx-auto overflow-hidden px-5 p-20">
      {/* <div className="absolute top-0 left-0 w-full h-full bg-white -z-10"></div> */}
      <NavMenu sections={sections} active={active} setActive={setActive} />
      <MobileNavMenu sections={sections} active={active} setActive={setActive} />
      <section className="mt-24 md:mt-[200px] w-full mx-auto">
        <div>
          <h1 className="text-4xl md:text-9xl uppercase">
            Software <span className="text-portfolio-green">Product</span> Developer
          </h1>
          <h3 className="text-xl md:text-4xl text-end text-portfolio-purple">Golden Azubuike</h3>
        </div>
        <p className="text-2xl md:text-4xl md:leading-12 bg-gradient-to-r from-portfolio-black-light via-portfolio-purple to-portfolio-hero-green bg-clip-text text-transparent mb-5">I build secure, production-ready platforms that handle money, identity, access, and critical business operations. From user identity, role-based access and payments to dashboards, billings, subscriptions, admin operations and real-time integrations.</p>
        <p className="text-2xl md:text-4xl md:leading-12 bg-gradient-to-r from-portfolio-purple via-portfolio-hero-green to-portfolio-black-light bg-clip-text text-transparent">I don&apos;t just ship features. I design systems that protect revenue, reduce risk, and scale with the business.</p>
      </section>
    </header>
  );
}
