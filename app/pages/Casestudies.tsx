import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Casestudies = () => {
  return (
    <div className="w-full flex justify-between md:flex-row flex-col items-center gap-x-12">
      <div className="flex md:w-[50%] flex-col gap-y-12">
        <h1 className="text-2xl md:text-3xl">
          Leading companies trust us <br />
          <span className="font-bold">to develop software</span>
        </h1>
        <p className="text-base text-gray-500">
          We <span className="text-fuchsia-600">add development capacity</span> to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company
          that guarantees the successful delivery of your project..
        </p>
        <div className="flex text-violet-600 gap-x-1">
          <Link href={"/"} className="hover:mr-4 transition-all">See more informations</Link>
          <ArrowRight className="hover:ml-4 transition-all " />
        </div>
      </div>
      <div className="flex-1 md:my-0 my-5">
        <video width="500" height="500" preload="none" autoPlay muted loop className="rounded w-[900px]">
          <source src="/dev.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Casestudies;
