"use client";

// import * as motion from "motion/react-client";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PrintOut } from "./SVGIcon";
import { ChevronDown, ChevronUp, Clock } from "lucide-react";
import { Experiences } from "@/lib/constants";

export default function Main() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="fixed bottom-4 right-2 md:right-5">
      <Popover onOpenChange={() => setOpen(!open)}>
        <PopoverTrigger className="cursor-pointer w-[100px] md:w-[250px] ">
          <div className="h-16 bg-black py-2.5 px-2 md:px-7 flex items-center justify-between">
            <PrintOut />
            <p className="text-md font-bold text-white hidden md:block">Job Experience</p>
            {!open ? <ChevronUp color="white" /> : <ChevronDown color="white" />}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-screen md:w-[488px]" align="end">
          <Content />
        </PopoverContent>
      </Popover>
    </div>
  );
}

function Content() {
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
