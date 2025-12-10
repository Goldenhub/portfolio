import { ul } from "motion/react-client";

export const Skills = [
  { id: 1, title: "TypeScript" },
  { id: 2, title: "JavaScript" },
  { id: 3, title: "React" },
  { id: 4, title: "Redux" },
  { id: 5, title: "NextJS" },
  { id: 6, title: "PHP" },
  { id: 7, title: "Laravel" },
  { id: 8, title: "C#" },
  { id: 9, title: "ASP.NET" },
  { id: 10, title: "NodeJS" },
  { id: 11, title: "NestJS" },
  { id: 12, title: "MongoDB" },
  { id: 13, title: "MySQL" },
  { id: 14, title: "SQLite" },
  { id: 15, title: "MSSQL" },
  { id: 16, title: "PostgreSQL" },
  { id: 17, title: "Docker" },
  { id: 18, title: "React Native" },
  { id: 19, title: "Figma" },
  { id: 20, title: "Framer" },
  { id: 21, title: "GitHub" },
  { id: 22, title: "GitLab" },
  { id: 23, title: "+" },
];

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
}

export const Testimonials: ITestimonial[] = [
  {
    id: 1,
    name: "Anna Reeds",
    role: "Product designer",
    company: "Cinfores LTD",
    description: "Led development of the admin interface for the company's core product, focusing on usability, performance, and scalability. Also built the marketing landing page, aligning design and content with the company's brand and product positioning.",
    image: "/images/testimonial-2.jpg",
  },
  {
    id: 2,
    name: "Michael Reeds",
    role: "Product designer",
    company: "Spotify",
    description: "Led development of the admin interface for the company's core product, focusing on usability, performance, and scalability. Also built the marketing landing page, aligning design and content with the company's brand and product positioning.",
    image: "/images/testimonial-1.jpg",
  },
  {
    id: 3,
    name: "Jane Reeds",
    role: "Product designer",
    company: "Spotify",
    description: "Led development of the admin interface for the company's core product, focusing on usability, performance, and scalability. Also built the marketing landing page, aligning design and content with the company's brand and product positioning.",
    image: "/images/testimonial-2.jpg",
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
    description: "An electricity unit purchase application",
    image: "bg-[url('/images/billkit.png')]",
    github: "https://github.com/goldenhub/betterpush",
    live_link: "https://usebillkit.com",
    url_to_case_study: "/recent-works/billkit",
  },
  {
    title: "BetterPush",
    description: "One unified interface. One deploy flow.",
    image: "bg-[url('/images/billkit.png')]",
    github: "https://github.com/goldenhub/betterpush",
    live_link: "https://usebillkit.com",
    url_to_case_study: "/recent-works/betterpush",
  },
];
