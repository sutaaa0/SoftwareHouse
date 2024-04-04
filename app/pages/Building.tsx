import Image from "next/image";
import React from "react";

const Building = () => {
  const datas = [
    {
      id: 1,
      title: "Build the right team to scale",
      desc1: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term not the case with freelancers",
      desc2: (
        <p>
          Our <span className="text-transparent bg-clip-text bg-gradient-to-br p-2 from-pink-500 to-blue-800">delivery model</span> helps you cut costs and deliver within budget.
        </p>
      ),
      qoutes: "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
      profile: "/build/image_profile1.png",
      name: "Jeewa markram",
      position: "CEO",
      image: "/build/build1.png",
      style: "lg:flex-row",
    },
    {
      id: 2,
      title: "Build the right team to scale",
      desc1: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term not the case with freelancers",
      desc2: (
        <p>
          Our <span className="text-transparent bg-clip-text bg-gradient-to-br p-2 from-pink-500 to-blue-800">delivery model</span> helps you cut costs and deliver within budget.
        </p>
      ),
      qoutes: "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
      profile: "/build/image_profile2.png",
      name: "Jeewa markram",
      position: "CEO",
      image: "/build/build2.png",
      style: "lg:flex-row-reverse",
    },
    {
      id: 3,
      title: "Build the right team to scale",
      desc1: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term not the case with freelancers",
      desc2: (
        <p>
          Our <span className="text-transparent bg-clip-text bg-gradient-to-br p-2 from-pink-500 to-blue-800">delivery model</span> helps you cut costs and deliver within budget.
        </p>
      ),
      qoutes: "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
      profile: "/build/image_profile3.png",
      name: "Jeewa markram",
      position: "CEO",
      image: "/build/build3.png",
      style: "lg:flex-row",
    },
  ];

  return (
    <div id="about" className="w-full flex flex-col justify-center">
      <div className="flex flex-col gap-y-2 justify-center items-center py-16 text-2xl md:text-3xl">
        <h1>Way of building</h1>
        <h1 className="font-bold">Great Software</h1>
      </div>
      {datas.map((data) => (
        <div key={data.id} className={`flex justify-between flex-col ${data.style} gap-x-[100px] gap-y-5 my-5 items-center`}>
          <div className="flex-grow flex flex-col gap-y-12 flex-1">
            <div className="font-bold dm:tetx-3xl text-2xl">
              <h1>{data.title}</h1>
            </div>
            <div className="flex text-base md:text-lg flex-col gap-y-12 justify-start">
              <p>{data.desc1}</p>
              {}
            </div>
            <div className="text-base md:text-lg">
              <p className="text-transparent bg-clip-text bg-gradient-to-br p-2 from-pink-500 to-blue-800">{data.qoutes}</p>
            </div>
            <div className="flex gap-3 items-center">
              <div>
                <Image alt="profile" width={50} height={50} src={data.profile} />
              </div>
              <div>
                <h2 className="font-bold text-base">{data.name}</h2>
                <p className="text-sm text-gray-500">{data.position}</p>
              </div>
            </div>
          </div>
          <div className="flex-grow flex-1">
            <Image src={data.image} alt="image build a software" width={500} height={300} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Building;
