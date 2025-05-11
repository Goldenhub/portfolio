import { Badge } from "@/components/ui/badge";
import { color, Skills } from "@/lib/constants";

export default function Main() {
  return (
    <section className="flex flex-col items-start justify-between max-w-[456px] md:max-w-[1280px] mx-auto px-5 mb-20" id="about">
      <h4 className="uppercase text-3xl md:text-4xl mb-5">a little about me</h4>
      <article className="w-full">
        {/* <p className="text-2xl font-normal text-portfolio-black-light flex-2 text-start">I am a Fullstack Developer with over 5 years of experience in building scalable, innovative solutions that help startups, founders, and businesses turn their ideas into impactful products for their target users.</p> */}
        <p className="text-lg md:text-2xl font-normal text-portfolio-black-light flex-2 text-start mb-5">I am a solution-driven full stack developer with over 5 years of experience specializing in collaboration with startups and founders. My focus is building scalable products that drive sales while delivering satisfying user experiences.</p>
        <div className="w-full flex flex-wrap gap-0 md:gap-x-10 justify-between">
          {Skills.map((skill) => {
            const random = Math.floor(Math.random() * 4);
            const border = color[random].border;
            const text = color[random].text;
            return (
              <Badge key={skill.id} variant="outline" className={`text-base font-medium mb-5 rounded-[100px] border-2 ${border} ${text} cursor-pointer`}>
                {skill.title}
              </Badge>
            );
          })}
        </div>
        <p className="text-lg md:text-2xl font-normal text-portfolio-black-light flex-2 text-start">I am tools-agnostic, prioritizing product and client/team needs over specific technologies. This flexibility allows me to select the right solution for each unique project requirement.</p>
      </article>
    </section>
  );
}
