import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Case = () => {
  const datas = [
    {
      id: 1,
      image: "/desain/desain1.png",
      title: "Website Design for SCFC Canada",
      desc: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      link: "/",
      style: "bg-slate-50",
    },
    {
      id: 2,
      image: "/desain/desain2.png",
      title: "Website Design for SCFC Canada",
      desc: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      link: "/",
      style: "bg-green-50",
    },
    {
      id: 3,
      image: "/desain/desain3.png",
      title: "Website Design for SCFC Canada",
      desc: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      link: "/",
      style: "bg-amber-50",
    },
  ];

  return (
    <div id="casestudies" className="w-full md:mt-0 mt-16 flex flex-col justify-center">
      <div className="flex text-2xl md:text-3xl flex-col mb-12 justify-center items-center p-12">
        <h1>Our recent</h1>
        <h3 className="font-bold">Case studies</h3>
      </div>

      {datas.map((data) => (
        <div key={data.id} className={`flex flex-col-reverse md:flex-row justify-center items-center ${data.style} my-2`}>
          <div className="flex-grow flex-1">
            <Image alt="desain" width={1200} height={400} src={data.image} className="w-full" />
          </div>
          <div className="flex-grow flex-1 px-12">
            <div className="md:py-0 py-5">
              <h1 className="font-bold text-2xl md:text-3xl">{data.title}</h1>
            </div>
            <div>
              <p className="text-base md:text-lg text-gray-400 py-12">{data.desc}</p>
            </div>
            <div className="flex justify-end items-center ">
              <Link href={data.link} className="text-transparent hover:mr-4 transition-all bg-clip-text bg-gradient-to-br p-2 from-pink-500 to-blue-800 font-bold">
                Read more
              </Link>
              <ArrowRight className="text-violet-500" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Case;
