import MobileNavMenu from "@/components/MobileNavMenu";
import NavMenu from "@/components/NavMenu";

export default function Hero() {
  return (
    <header className="relative w-full overflow-hidden min-h-screen pb-30">
      {/* <div className="absolute top-0 left-0 w-full h-full bg-white -z-10"></div> */}
      <NavMenu />
      <MobileNavMenu />
      <section className="mt-[163px] md:mt-[247px] px-5 md:px-[127px] lg:px-[200px]">
        <div>
          <h1 className="text-4xl md:text-9xl">
            SOFTWARE <span className="text-portfolio-green">PRODUCT</span> DEVELOPER
          </h1>
          <h3 className="text-xl md:text-4xl text-end text-portfolio-purple">Golden Azubuike</h3>
        </div>
        <p className="text-2xl md:text-5xl">I collaborate with startups and founders to build scalable products that drive sales</p>
      </section>
    </header>
  );
}
