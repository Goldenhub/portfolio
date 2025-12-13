export const Skills = [{ title: "JavaScript" }, { title: "TypeScript" }, { title: "NodeJS" }, { title: "NestJS" }, { title: "React" }, { title: "NextJS" }, { title: "Redux" }, { title: "PHP (Laravel)" }, { title: "C# (ASP.NET)" }, { title: "MongoDB" }, { title: "MySQL" }, { title: "SQLite" }, { title: "MSSQL" }, { title: "PostgreSQL" }, { title: "Docker" }, { title: "React Native" }, { title: "Expo" }, { title: "Figma" }, { title: "Framer" }, { title: "Git" }, { title: "GitHub Actions" }, { title: "+" }];

export const color: { [key: number]: { text: string; border: string } } = {
  0: { text: "hover:text-portfolio-purple", border: "border-portfolio-purple" },
  1: { text: "hover:text-portfolio-orange", border: "border-portfolio-orange" },
  2: { text: "hover:text-portfolio-green", border: "border-portfolio-green" },
  3: { text: "hover:text-portfolio-grey", border: "border-portfolio-grey" },
};

export const Experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Celebut",
    location: "United kingdom",
    duration: "Present",
    description: (
      <ul className="flex flex-col gap-4 text-xs font-inter mb-4">
        <li>Led the full-stack development lifecycle for our internal admin platform, from architecture to deployment.</li>
        <li>Designed and maintained backend APIs for authentication, user management, and role-based access control.</li>
        <li>Built internal dashboards for operations teams to manage users, transactions, and system activity.</li>
        <li>Implemented background processing using Redis to improve performance and reliability. </li>
        <li>Built an email campaign system that has an email builder and batch processing of emails.</li>
      </ul>
    ),
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Cinfores Limited",
    location: "Nigeria",
    duration: "2020 - 2025",
    description: (
      <ul className="flex flex-col gap-4 text-xs font-inter mb-4">
        <li>Led the development of major platforms, including our Health Management System and Healthcare Regulation System.</li>
        <li>Collaborated with stakeholders to define product roadmaps and deliver features that meet business goals and regulatory requirements</li>
        <li>Mentored over 80 junior developers, improving team delivery speed by 60% over three years.</li>
      </ul>
    ),
  },
];

interface ITestimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  description: string;
  image: string;
  linkedin: string;
}

export const Testimonials: ITestimonial[] = [
  {
    id: 1,
    name: "Nyero Eseurhobo",
    role: "Product Manager",
    company: "IBT Learning",
    description: "Having worked with Golden for months now, I must say he is a great professional and a developer good at his job. He helped me as a PM understand the project better from a technical standpoint, he easily adjusts to any given situation or business dynamics. He did an incredible job on all projects, making timely deliveries and helping me nurture long-term relationships with clients, working with Golden has been a great experience for me as I learned many hard and soft skills from him.",
    image: "/images/nyero.jpeg",
    linkedin: "https://linkedin.com/in/nyeroesurhobo",
  },
  {
    id: 2,
    name: "Melody Onyeocha",
    role: "Framer Developer",
    company: "Neue World",
    description: "Golden understands complex requirements quickly, writes clean and efficient code, and always goes the extra mile to ensure everything functions smoothly. His communication is clear, his turnaround time is impressive, and he brings a level of professionalism that makes me highly recommend him for any project involving Framer overrides, custom integrations, or broader software engineering tasks. He is skilled, dependable, and capable of delivering even more than expected.",
    image: "/images/melody.jpg",
    linkedin: "https://linkedin.com/in/nyeroesurhobo",
  },
  {
    id: 3,
    name: "Jane Reeds",
    role: "Product designer",
    company: "Spotify",
    description: "Led development of the admin interface for the company's core product, focusing on usability, performance, and scalability. Also built the marketing landing page, aligning design and content with the company's brand and product positioning.",
    image: "/images/testimonial-2.jpg",
    linkedin: "https://linkedin.com/in/nyeroesurhobo",
  },
];

interface IWork {
  title: string;
  description: string;
  image: string;
  github: string;
  live_link: string;
  url_to_case_study: string;
}

export const WORKS: IWork[] = [
  {
    title: "Billkit",
    description: "A production billing platform that enables users to purchase electricity units.",
    image: "bg-[url('/images/billkit.png')]",
    github: "https://github.com/goldenhub/betterpush",
    live_link: "https://usebillkit.com",
    url_to_case_study: "/recent-works/billkit",
  },
  {
    title: "BetterPush",
    description: "A developer platform that lets individuals deploy applications to multiple hosting providers from a single interface.",
    image: "bg-[url('/images/billkit.png')]",
    github: "https://github.com/goldenhub/betterpush",
    live_link: "https://usebillkit.com",
    url_to_case_study: "/recent-works/betterpush",
  },
];
