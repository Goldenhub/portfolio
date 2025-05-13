import { FaGithub, FaLinkedinIn, FaEnvelope, FaX } from "react-icons/fa6";

export default function Main() {
  return (
    <section className="flex flex-col items-start justify-between max-w-[456px] md:max-w-[1280px] mx-auto px-5 mb-20" id="contact">
      <h4 className="uppercase text-3xl md:text-5xl mb-5 text-center w-full">
        want to <span className="font-anton text-portfolio-purple">connect??</span>
      </h4>
      <p className="font-normal text-md md:text-2xl w-full md:w-4/5 mx-auto text-center mb-10 text-portfolio-black-light">If you&apos;ve got an idea, a project, or just want to chat about building great products, I&apos;d love to hear from you. Let&apos;s connect.</p>
      <div className="flex items-center w-full justify-center gap-5">
        <a title="github profile" href="https://github.com/goldenhub" target="_blank" rel="noopener">
          <FaGithub size={26} />
        </a>
        <a title="x handle" href="https://x.com/chibu_exe" target="_blank" rel="noopener">
          <FaX size={26} />
        </a>
        <a title="linkedin profile" href="https://linkedin.com/in/goldenazubuike" target="_blank" rel="noopener">
          <FaLinkedinIn size={26} />
        </a>
        <a title="email address" href="mailto:goldenazubuike@gmail.com">
          <FaEnvelope size={26} />
        </a>
      </div>
    </section>
  );
}
