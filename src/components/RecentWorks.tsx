"use client";

import { WORKS } from "@/lib/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Main() {
  return (
    <section className="max-w-[456px] md:max-w-[1280px] mx-auto px-5 mb-20" id="recent-works">
      <h4 className="uppercase text-3xl md:text-4xl mb-5 text-end">Recent Works</h4>
      <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-12">
        {WORKS.map((project) => (
          <Card key={project.title} image={project.image} title={project.title} desc={project.description} github={project.github} live_link={project.live_link} case_study={project.url_to_case_study} />
        ))}
      </div>
    </section>
  );
}

function Card({ image, github, live_link, case_study, desc, title }: { image: string; github: string; live_link: string; case_study: string; desc: string; title: string }) {
  const router = useRouter();
  return (
    <div className={`relative md:h-[579px] h-[289px] w-full md:first:col-span-3 md:col-span-2 ${image} bg-no-repeat md:hover:first:bg-[length:160%_100%] md:hover:last:bg-[length:160%_75%] md:first:bg-[length:80%_50%] md:last:bg-[length:80%_35%] bg-[length:80%_60%] transition-[background-size] ease-in-out bg-center cursor-pointer`} onClick={() => router.push(case_study)}>
      <div className="absolute inset-0 bg-gradient-to-b from-portfolio-black via-portfolio-purple/40 to-portfolio-orange/30"></div>
      <div className="relative h-full text-white p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-base md:text-2xl font-medium md:font-semibold tracking-wider">{title}</h3>
          <p className="text-sm">{desc}</p>
        </div>
        <div className="flex gap-6">
          <Link href={github} className="py-2 px-5 bg-portfolio-black rounded-full hover:text-portfolio-hero-yellow">
            Github
          </Link>
          <Link href={live_link} className="py-2 px-5 bg-portfolio-black rounded-full hover:text-portfolio-hero-yellow">
            Live
          </Link>
        </div>
      </div>
    </div>
  );
}
