"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import React from "react";

const Partners = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  return (
    <section id="partners" className="py-20 lg:py-28 bg-[#26335D]">
      <div className="container mx-auto flex flex-col items-center">
        <span
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-[#09B0C0] font-semibold mb-5"
        >
          Trusted by field experts
        </span>
        <h2
          data-aos="fade-up"
          data-aos-duration="1500"
          className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-10 lg:mb-16 text-white"
        >
          Our Partners
        </h2>
        <div className="flex items-center justify-center mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full max-w-4xl"
          >
            <CarouselContent className="-ml-5">
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-5 flex items-center justify-center">
                <img
                  className="max-h-44 md:max-h-48"
                  src={`/assets/partners/DTA2.png`}
                  alt="partner"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-5 flex items-center justify-center">
                <img
                  className="max-h-44 md:max-h-48"
                  src={`/assets/partners/bask2.png`}
                  alt="partner"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-5 flex items-center justify-center">
                <img
                  className="max-h-44 md:max-h-48"
                  src={`/assets/partners/cha2.png`}
                  alt="partner"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-5 flex items-center justify-center">
                <img
                  className="max-h-44 md:max-h-48"
                  src={`/assets/partners/sb2.png`}
                  alt="partner"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-5 flex items-center justify-center">
                <img
                  className="max-h-44 md:max-h-48"
                  src={`/assets/partners/nnh2.png`}
                  alt="partner"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-5 flex items-center justify-center">
                <img
                  className="max-h-44 md:max-h-48"
                  src={`/assets/partners/stpkised2.png`}
                  alt="partner"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-5 flex items-center justify-center">
                <img
                  className="max-h-44 md:max-h-48"
                  src={`/assets/partners/uni.png`}
                  alt="partner"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-5 flex items-center justify-center">
                <img
                  className="max-h-44 md:max-h-48"
                  src={`/assets/partners/pc2.png`}
                  alt="partner"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Partners;
