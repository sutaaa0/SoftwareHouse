import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const FeatureResource = () => {
  const datas = [
    {
      id: 1,
      image: "/feature_resource/image1.png",
      desc: "How to Build a Scalable Application up to 1 Million Users on AWS",
      link: "/",
    },
    {
      id: 2,
      image: "/feature_resource/image2.png",
      desc: "How to Build a Scalable Application up to 1 Million Users on AWS",
      link: "/",
    },
    {
      id: 3,
      image: "/feature_resource/image3.png",
      desc: "How to Build a Scalable Application up to 1 Million Users on AWS",
      link: "/",
    },
    {
      id: 4,
      image: "/feature_resource/image4.png",
      desc: "How to Build a Scalable Application up to 1 Million Users on AWS",
      link: "/",
    },
    {
      id: 5,
      image: "/feature_resource/image5.png",
      desc: "How to Build a Scalable Application up to 1 Million Users on AWS",
      link: "/",
    },
    {
      id: 6,
      image: "/feature_resource/image1.png",
      desc: "How to Build a Scalable Application up to 1 Million Users on AWS",
      link: "/",
    },
    {
      id: 7,
      image: "/feature_resource/image2.png",
      desc: "How to Build a Scalable Application up to 1 Million Users on AWS",
      link: "/",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center py-12">
      <div className="flex justify-center items-center w-full flex-col md:text-3xl text-2xl py-12">
        <h1>Featured</h1>
        <h1 className="font-bold">Resources</h1>
      </div>
      <ScrollArea className="w-full">
        <div className="flex w-max space-x-4 p-4">
          {datas.map((data) => (
            <Card key={data.id} className="w-[300px] border-none">
              <CardHeader>
                <Image src={data.image} alt="image feature resource" width={300} height={300} className="w-full" />
              </CardHeader>
              <CardContent>
                <CardDescription>{data.desc}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant={"ghost"} className="flex gap-x-1">
                  <Link href={data.link}>Read more</Link>
                  <ArrowRight />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default FeatureResource;
