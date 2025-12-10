import { Badge } from "@/components/ui/badge";
import { Skills } from "@/lib/constants";

export default function Main() {
  return (
    <section className="flex flex-col items-start justify-between max-w-[456px] md:max-w-[1280px] mx-auto px-5 py-20" id="about">
      <h4 className="uppercase text-3xl md:text-4xl mb-5">a little about me</h4>
      <article className="w-full">
        <p className="text-lg md:text-2xl font-normal text-portfolio-black-light flex-2 text-start mb-5 border border-s-portfolio-orange border-s-8 p-4">I'm a solution-driven full-stack product engineer with 5+ years of experience working directly with founders and early teams to turn ideas into revenue-generating, secure, and scalable products.</p>
        <p className="text-lg md:text-2xl font-normal text-portfolio-black-light flex-2 text-start mb-5 border border-s-portfolio-purple border-s-8 p-4">
          My strength sits at the intersection of <strong>Product execution</strong>, <strong>System security (auth, access, payments)</strong>, and <strong>Real world reliability</strong>
        </p>
        <div className="w-full flex flex-wrap gap-x-3 md:gap-x-6 justify-center md:justify-start">
          {Skills.map((skill) => {
            // const random = Math.floor(Math.random() * 4);
            // const border = color[random].border;
            // const text = color[random].text;
            return (
              <Badge key={skill.title} variant="outline" className="text-base font-medium mb-5 rounded-[100px] border-2 border-portfolio-black text-portfolio-black-light cursor-pointer">
                {skill.title}
              </Badge>
            );
          })}
        </div>

        <p className="text-lg md:text-2xl font-normal text-portfolio-black-light flex-2 text-start mb-5 border border-s-portfolio-green border-s-8 p-4">I am tools-agnostic by design. I choose technologies based on business risk, performance, security, and long-term maintainability. Not trends.</p>
        <p className="text-lg md:text-2xl font-normal text-portfolio-black-light flex-2 text-start mb-5 border border-s-portfolio-hero-yellow border-s-8 p-4">
          I have built and shipped systems that handle{" "}
          <strong className="text-portfolio-purple">
            <em>User Identity & Access Control</em>
          </strong>
          ,{" "}
          <strong className="text-portfolio-grey">
            <em>Payments & Transaction Workflows</em>
          </strong>
          ,{" "}
          <strong className="text-portfolio-green">
            <em>Admin Operations & Internal Tools</em>
          </strong>
          ,{" "}
          <strong className="text-portfolio-text-light">
            <em>Infrastructure Automation</em>
          </strong>
          ,{" "}
          <strong className="text-portfolio-orange">
            <em>Webhooks & Third-party Integrations</em>
          </strong>
        </p>
        <p className="text-lg md:text-2xl font-normal text-portfolio-black-light flex-2 text-start border border-s-portfolio-black-light border-s-8 p-4">
          Right now, I am intentionally deepening my expertise in <strong>Identity & Access Management (IAM)</strong> to build platforms that are not just functional, but provably secure and enterprise-ready.
        </p>
      </article>
    </section>
  );
}
