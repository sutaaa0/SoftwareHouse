import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hire = () => {
  return (
    <div id="hire" className="w-full flex-col flex justify-center items-center min-h-screen">
      <div className="flex-1 py-12 w-full">
        <div className="flex flex-col md:flex-row justify-between rounded-3xl md:gap-y-0 gap-y-3  max-h-[299px] w-full p-5 lg:p-[100px] bg-slate-300 items-center">
          <div className="flex font-bold max-w-[500px] text-xl md:text-3xl">
            <h1 className="text-center md:text-start">Hire the best developers and designers around!</h1>
          </div>
          <div>
            <Button className="lg:text-base md:w-auto w-[140px] text-sm">Hire Top Developer</Button>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full flex flex-col justify-end py-7">
        <div className="flex gap-x-5">
          <div className="flex-grow flex flex-col gap-y-4 max-w-[370px]">
            <h1 className="font-bold md:text-base text-gray-700 text-sm">Tech</h1>
            <p className="text-sm text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="flex-grow flex flex-col gap-y-4 px-1 justify-center items-start">
            <h1 className="font-bold md:text-base text-gray-700 text-sm">Link</h1>
            <div className="flex flex-col justify-center items-start md:w-auto w-16 gap-y-1 text-sm text-gray-500">
              <Link href={"/"}>About us</Link>
              <Link href={"/"}>Services</Link>
              <Link href={"/"}>Case studies</Link>
              <Link href={"/"}>How it works</Link>
              <Link href={"/"}>Blog</Link>
              <Link href={"/"}>Careers</Link>
              <Link href={"/"}>Areas We Serve</Link>
            </div>
          </div>
          <div className="flex-grow max-w-[306px] flex flex-col gap-y-4">
            <h1 className="font-bold md:text-base text-gray-700 text-sm" >Contact Us</h1>
            <p className="text-sm text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <p className="text-sm text-gray-500">+99877698323</p>
          </div>
          <div className="flex-grow hidden md:flex items-end justify-center gap-x-2">
            <div className="p-1 rounded-full shadow-md">
              <Instagram/>
            </div>
            <div className="p-1 rounded-full shadow-md">
              <Twitter/>
            </div>
            <div className="p-1 rounded-full shadow-md">
              <Facebook/>
            </div>
            <div className="p-1 rounded-full shadow-md">
              <Linkedin/>
            </div>
          </div>
        </div>
        <div className="flex-grow flex md:hidden items-end justify-center gap-x-2">
            <div className="p-1 rounded-full shadow-md">
              <Instagram/>
            </div>
            <div className="p-1 rounded-full shadow-md">
              <Twitter/>
            </div>
            <div className="p-1 rounded-full shadow-md">
              <Facebook/>
            </div>
            <div className="p-1 rounded-full shadow-md">
              <Linkedin/>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Hire;
