import MobileNavMenu from "@/components/MobileNavMenu";
import NavMenu from "@/components/NavMenu";

export default function Hero() {
  return (
    <header className="relative max-w-[456px] md:max-w-[1280px] mx-auto overflow-hidden max-h-screen px-5 mb-40">
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
        <p className="text-2xl md:text-5xl text-portfolio-black-light">I collaborate with startups and founders to build scalable products that drive sales</p>
      </section>
    </header>
  );
}
