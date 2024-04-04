import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

const datas = [
  {
    id: 1,
    logo: "/code.png",
    title: "Software Testing Service",
    desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    id: 2,
    logo: "/dashboard.png",
    title: "Mobile Design & Development",
    desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    id: 3,
    logo: "/mobile.png",
    title: "Web Design & Development",
    desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    id: 4,
    logo: "/code.png",
    title: "Software Testing Service",
    desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    id: 5,
    logo: "/code.png",
    title: "Mobile App Development",
    desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
];

export function Servis() {
  return (
    <Carousel className="w-full justify-center items-center">
      <CarouselContent className="-ml-1">
        {datas.map((data) => (
          <CarouselItem key={data.id} className="mr-1 basis-full md:basis-1/2 lg:basis-2/5">
            <div className="p-1">
              <Card className="w-[333px] relative h-[287px]">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="flex flex-col  justify-center items-start gap-y-3 p-2">
                    <Image className="absolute top-7 left-7 mb-12" src={data.logo} alt="logo" width={50} height={50}></Image>
                    <h1 className="font-bold">{data.title}</h1>
                    <p>{data.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ms-3" />
      <CarouselNext className="me-3" />
    </Carousel>
  );
}
