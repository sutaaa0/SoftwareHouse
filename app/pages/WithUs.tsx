import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const WithUs = () => {
  const datas = [
    {
      id: 1,
      image: "/profile/profile1.png",
      star: (
        <div className="flex justify-center items-center gap-1">
        <Star className="text-yellow-300"/>
          <Star className="text-yellow-300"/>
          <Star className="text-yellow-300"/>
          <Star className="text-yellow-300"/>
          <Star className="text-yellow-300"/>
        </div>
      ),
      name: "Romeena De Silva",
      job: "Software Engineer",
    },
    {
      id: 2,
      image: "/profile/profile2.png",
      star: (
        <div className="flex justify-center items-center gap-1">
          <Star className="text-yellow-300"/>
          <Star className="text-yellow-300"/>
          <Star className="text-yellow-300"/>
          <Star className="text-yellow-300"/>
          <Star className="text-yellow-300"/>
        </div>
      ),
      name: "Romeena De Silva",
      job: "Software Engineer",
    },
    {
      id: 3,
      image: "/profile/profile3.png",
      star: (
        <div className="flex justify-center items-center gap-1">
         <Star className="text-yellow-300"/>
          <Star className="text-yellow-300"/>
          <Star className="text-yellow-300"/>
          <Star className="text-yellow-300"/>
          <Star className="text-yellow-300"/>
        </div>
      ),
      name: "Romeena De Silva",
      job: "Software Engineer",
    },
    {
      id: 4,
      image: "/profile/profile4.png",
      star: (
        <div className="flex justify-center items-center gap-1">
         <Star className="text-yellow-300"/>
          <Star className="text-yellow-300"/>
          <Star className="text-yellow-300"/>
          <Star className="text-yellow-300"/>
          <Star className="text-yellow-300"/>
        </div>
      ),
      name: "Romeena De Silva",
      job: "Software Engineer",
    },
    {
      id: 5,
      image: "/profile/profile5.png",
      star: (
        <div className="flex justify-center items-center gap-1">
          <Star className="text-yellow-300"/>
          <Star className="text-yellow-300"/>
          <Star className="text-yellow-300"/>
          <Star className="text-yellow-300"/>
          <Star className="text-yellow-300"/>
        </div>
      ),
      name: "Romeena De Silva",
      job: "Software Engineer",
    },
  ];
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-y-[80px] w-full">
      <div className="flex flex-col items-center text-2xl md:text-3xl">
        <h1>Why cutomers love</h1>
        <h1 className="font-bold">working with us</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center text-base md:text-lg text-center text-slate-600 lg:w-[535px]">
        <p>Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.</p>
      </div>
      <div className="flex justify-center flex-wrap items-center gap-x-5">
        {datas.map((data) => (
          <div key={data.id} className="flex flex-col justify-center items-center">
            <Image src={data.image} alt="profil Image" width={100} height={100}></Image>
            <div>{data.star}</div>
            <h1 className="font-bold text-base md:text-lg">{data.name}</h1>
            <p className=" text-sm md:text-base text-slate-600">{data.job}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WithUs;
