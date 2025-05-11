export const Skills = [
  { id: 1, title: "TypeScript" },
  { id: 2, title: "React" },
  { id: 3, title: "Redux" },
  { id: 4, title: "NextJS" },
  { id: 5, title: "PHP" },
  { id: 6, title: "Laravel" },
  { id: 7, title: "C#" },
  { id: 8, title: "ASP.NET" },
  { id: 9, title: "NodeJS" },
  { id: 10, title: "NestJS" },
  { id: 11, title: "MongoDB" },
  { id: 12, title: "MySQL" },
  { id: 13, title: "MSSQL" },
  { id: 14, title: "PostgreSQL" },
  { id: 15, title: "Docker" },
  { id: 16, title: "React Native" },
  { id: 17, title: "Figma" },
  { id: 18, title: "Framer" },
  { id: 19, title: "GitHub" },
  { id: 20, title: "GitLab" },
  { id: 21, title: "+" },
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
    duration: "Present",
    description: "Led development of the admin interface for the company's core product, focusing on usability, performance, and scalability. Also built the marketing landing page, aligning design and content with the company's brand and product positioning.",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Cinfores Limited",
    duration: "2020 - 2025",
    description: "Led development of the admin interface for the company's core product, focusing on usability, performance, and scalability. Also built the marketing landing page, aligning design and content with the company's brand and product positioning.",
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
