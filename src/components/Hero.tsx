import MobileNavMenu from "@/components/MobileNavMenu";
import NavMenu from "@/components/NavMenu";

export default function Hero() {
  return (
    <header id="home" className="relative max-w-[456px] md:max-w-[1280px] mx-auto overflow-hidden max-h-screen px-5 pb-20">
      {/* <div className="absolute top-0 left-0 w-full h-full bg-white -z-10"></div> */}
      <NavMenu />
      <MobileNavMenu />
      <section className="mt-[247px] w-full mx-auto">
        <div>
          <h1 className="text-4xl md:text-9xl uppercase">
            Software <span className="text-portfolio-green">Product</span> Developer
          </h1>
          <h3 className="text-xl md:text-4xl text-end text-portfolio-purple">Golden Azubuike</h3>
        </div>
        <p className="text-2xl md:text-5xl md:leading-14 bg-gradient-to-r from-portfolio-black-light via-portfolio-purple to-portfolio-hero-green bg-clip-text text-transparent">I design applications that handle real business-critical workflows (user identity, role-based access, billing, subscriptions, webhooks, transactions, and admin operations)</p>
      </section>
    </header>
  );
}
