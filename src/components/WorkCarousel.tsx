"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { workTemplates } from "@/constants";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import WorkCard from "./WorkCard";

const WorkCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleClickLeft = () => api?.scrollTo(current - 1);
  const handleClickRight = () => api?.scrollTo(current + 1);

  return (
    <div className="relative w-full">
      <div className="absolute -top-14.5 right-4 space-x-3 lg:-top-16">
        <Button
          onClick={handleClickLeft}
          className="cursor-pointer bg-[#e36414] hover:bg-[#e36414] lg:size-12"
        >
          <ArrowLeft />
        </Button>
        <Button
          onClick={handleClickRight}
          className="cursor-pointer bg-[#e36414] hover:bg-[#e36414] lg:size-12"
        >
          <ArrowRight />
        </Button>
      </div>
      <Carousel setApi={setApi}>
        <CarouselContent className="-ml-1">
          {workTemplates.map((template) => (
            <CarouselItem
              key={template.id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="h-full p-1">
                <WorkCard
                  title={template.title}
                  image={template.image}
                  year={template.year}
                  description={template.description}
                  techStack={template.techStack}
                  link={template.link}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default WorkCarousel;
