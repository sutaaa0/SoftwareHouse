import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Nav = () => {
  return (
    <>
      <div className=" md:flex hidden justify-between items-center  p-6">
        <div className="ms-12">
          <h1 className="font-bold text-xl">Tech</h1>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Link href={"#about"} className="hover:font-bold hover:text-transparent bg-clip-text bg-gradient-to-br p-2 from-pink-500 to-blue-800 transition-all">
            About us
          </Link>
          <Link href={"#services"} className="hover:font-bold hover:text-transparent bg-clip-text bg-gradient-to-br p-2 from-pink-500 to-blue-800 transition-all">
            Services
          </Link>
          <Link href={"#casestudies"} className="hover:font-bold hover:text-transparent bg-clip-text bg-gradient-to-br p-2 from-pink-500 to-blue-800 transition-all">
            Case Studies
          </Link>
          <Link href={"/"} className="hover:font-bold hover:text-transparent bg-clip-text bg-gradient-to-br p-2 from-pink-500 to-blue-800 transition-all">
            Blog
          </Link>
          <Link href={"#howitworks"} className="hover:font-bold hover:text-transparent bg-clip-text bg-gradient-to-br p-2 from-pink-500 to-blue-800 transition-all">
            How it Works
          </Link>
          <Link href={"#hire"} className="hover:font-bold hover:text-transparent bg-clip-text bg-gradient-to-br p-2 from-pink-500 to-blue-800 transition-all">
            Hire
          </Link>
        </div>
        <div className="me-12">
          <Button className="bg hover:text-gray-200"><Link href={"#hire"}>Contact us</Link></Button>
        </div>
      </div>

      <div className="md:hidden absolute top-3 right-3">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col justify-center items-start gap-4">
                  <Link href={"#about"} className="hover:text-black transition-all">
                    About us
                  </Link>
                  <Link href={"#services"} className="hover:text-black transition-all">
                    Services
                  </Link>
                  <Link href={"#casestudies"} className="hover:text-black transition-all">
                    Case Studies
                  </Link>
                  <Link href={"/"} className="hover:text-black transition-all">
                    Blog
                  </Link>
                  <Link href={"#howitworks"} className="hover:text-black transition-all">
                    How it Works
                  </Link>
                  <Link href={"#hire"} className="hover:text-black transition-all">
                    Hire
                  </Link>
                </div>
                <div>
                  <Button>Contact us</Button>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Nav;
