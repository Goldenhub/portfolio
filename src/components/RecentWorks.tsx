export default function Main() {
  return (
    <section className="max-w-[456px] md:max-w-[1280px] mx-auto px-5 mb-20" id="recent-works">
      <h4 className="uppercase text-3xl md:text-4xl mb-5 text-end">Recent Works</h4>
      <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-3 h-[579px] bg-[#ced8da]"></div>
        <div className="md:col-span-2 h-[579px] bg-[#ced8da]"></div>
      </div>
    </section>
  );
}
