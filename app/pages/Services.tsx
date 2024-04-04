import { Servis } from "@/components/Servis";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="flex flex-col relative justify-center items-center p-4 h-[80vh] w-full bg-slate-50">
      <div className="flex absolute top-7  ">
        <h1 className=" text-center p-2 text-2xl font-bold">Services we offer</h1>
      </div>
      <div className="flex justify-center w-full h-full items-center">
        <Servis />
      </div>
    </div>
  );
};

export default Services;
