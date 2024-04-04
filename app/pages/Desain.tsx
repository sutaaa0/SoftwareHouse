import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const Desain = () => {
  const datas = [
    {
      id: 1,
      iamge: "/desain_development/desaindev1.png",
      style: "bg-gradient-to-br p-2 from-cyan-400 to-blue-600",
      title: "UX Driven Engineering",
      desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      id: 2,
      iamge: "/desain_development/desaindev2.png",
      style: "bg-black",
      title: "UX Driven Engineering",
      desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      id: 3,
      iamge: "/desain_development/desaindev3.png",
      style: " bg-gradient-to-br p-2 from-cyan-400 to-green-400",
      title: "UX Driven Engineering",
      desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      id: 4,
      iamge: "/desain_development/desaindev4.png",
      style: "bg-gradient-to-br p-2 from-pink-500 to-blue-800",
      title: "UX Driven Engineering",
      desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      id: 5,
      iamge: "/desain_development/desaindev5.png",
      style: "bg-gradient-to-br p-2 from-yellow-200 to-orange-300",
      title: "UX Driven Engineering",
      desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      id: 6,
      iamge: "/desain_development/desaindev6.png",
      style: "bg-gradient-to-br p-2 from-pink-300 to-pink-500",
      title: "UX Driven Engineering",
      desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col p-12 justify-center items-center w-full text-2xl md:text-3xl">
        <h1>Our design and</h1>
        <h1 className="font-bold">development approach</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {datas.map((data) => (
          <Card key={data.id} className="flex justify-center relative items-start w-full">
            <CardContent className={`w-auto h-auto p-3 mt-7 ms-7 ${data.style}  rounded`}>
              <Image width={50} height={50} alt="logo desain dev" src={data.iamge} />
            </CardContent>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl ">{data.title}</CardTitle>
              <CardDescription className="md:tet-base text-sm">{data.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Desain;
