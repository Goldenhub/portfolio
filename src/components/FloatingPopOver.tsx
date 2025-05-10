"use client";

import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PrintOut } from "./SVGIcon";
import { ChevronDown, ChevronUp, Clock } from "lucide-react";

export default function FloatingPopOver() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="absolute bottom-4 right-10 ">
      <Popover onOpenChange={() => setOpen(!open)}>
        <PopoverTrigger className="cursor-pointer w-[358px]">
          <div className="h-16 bg-black py-2.5 px-7 flex items-center justify-between">
            <PrintOut />
            <p className="text-xl font-bold text-white">Professional Experience</p>
            {!open ? <ChevronUp color="white" /> : <ChevronDown color="white" />}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[488px]" align="end">
          <Content />
        </PopoverContent>
      </Popover>
    </div>
  );
}

function Content() {
  const Experiences = [
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
  return (
    <Accordion type="single" collapsible className="w-full">
      {Experiences.map((experience) => (
        <AccordionItem key={experience.id} value={`item-${experience.id}`}>
          <AccordionTrigger>
            <div>
              <p className="text-lg font-bold mb-2.5">{experience.role}</p>
              <p className="text-base font-normal">{experience.company}</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">{experience.description}</p>
            <em className="flex items-center justify-start gap-4 font-inter text-sm font-normal">
              {" "}
              <Clock size={14} /> {experience.duration}
            </em>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
