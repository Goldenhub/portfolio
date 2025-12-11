import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Testimonials } from "@/lib/constants";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Main() {
  return (
    <section className="max-w-[456px] md:max-w-[1280px] mx-auto px-5 py-20" id="testimonials">
      <h4 className="uppercase text-3xl md:text-4xl mb-5 text-center">What people I&apos;ve worked with say about me</h4>
      <CarouselElement />
    </section>
  );
}

function CarouselElement() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel plugins={[plugin.current]} className="w-full" onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
      <CarouselContent>
        {Testimonials.map((testimonial) => (
          <CarouselItem className="md:basis-1/3" key={testimonial.id}>
            <div className="bg-[#FCF4FE] rounded-2xl md:rounded-4xl">
              <figure className="flex flex-col gap-10 md:gap-20 p-6 md:p-10">
                <blockquote>
                  <p className="text-justify md:text-start text:lg font-normal text-portfolio-text-light">{testimonial.description}</p>
                </blockquote>
                <figcaption>
                  <Image src={testimonial.image} alt={testimonial.name} width={100} height={100} className="w-20 h-20 object-cover rounded-full" />
                  <p className="text-2xl md:text-3xl font-normal text-portfolio-orange text-start">{testimonial.name}</p>
                  <span className="font-inter text-md">
                    {testimonial.role} @<cite>{testimonial.company}</cite>
                  </span>
                  <Link href={testimonial.linkedin} className="block text-portfolio-black-light text-sm">
                    LinkedIn
                  </Link>
                </figcaption>
              </figure>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:inline-flex" />
      <CarouselNext className="hidden md:inline-flex" />
    </Carousel>
  );
}
