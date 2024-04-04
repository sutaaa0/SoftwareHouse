import { Tabs } from "@/components/ui/tabs";
import React, { ReactNode } from "react";
import StackIcon from "tech-stack-icons"; // You can also use any another import name

const TechStack = () => {
  const tabs = [
    {
      title: "Frontend",
      value: "frontend",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold text-black bg-white">
          <p>Frontend</p>
          <DummyContent>
            <StackIcon name="nextjs" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="react" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="astro" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="tailwindcss" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="chakraui" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="laravel" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="mysql" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="github" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="flutter" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
          </DummyContent>
        </div>
      ),
    },
    {
      title: "Backend",
      value: "backend",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold text-black bg-white">
          <p>Backend</p>
          <DummyContent>
            <StackIcon name="nodejs" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="c++" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="django" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="ruby" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="spring" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="asp" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="laravel" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="docker" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
          </DummyContent>
        </div>
      ),
    },
    {
      title: "Database",
      value: "database",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold text-black bg-white">
          <p>Database</p>
          <DummyContent>
            <StackIcon name="mongodb" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="firebase" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="supabase" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="mysql" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="prisma" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="postgresql" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="mariadb" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
          </DummyContent>
        </div>
      ),
    },
    {
      title: "CMS",
      value: "cms",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold text-black bg-white">
          <p>CMS</p>
          <DummyContent>
            <StackIcon name="affinity" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="react" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="astro" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="alpinejs" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="supabase" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="laravel" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="mysql" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="github" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="ae" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
          </DummyContent>
        </div>
      ),
    },
    {
      title: "Cloud Testing",
      value: "cloud",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl  text-xl md:text-4xl font-bold text-black bg-white">
          <p>Cloud Testing</p>
          <DummyContent>
            <StackIcon name="aws" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="amznwebserv" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="astro" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="cloudflare" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="supabase" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="onedrive" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="mysql" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
            <StackIcon name="cloudinary" className=" w-[60px] lg:w-[100px]  h-[60px] lg:h-[100px]" />
          </DummyContent>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-32">
      <div className="flex flex-col justify-center items-center mx-auto text-2xl md:text-3xl py-12">
        <h1>Our</h1>
        <h1 className="font-bold">Tech Stack</h1>
      </div>
      <Tabs tabs={tabs} />
    </div>
  );
};

const DummyContent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="flex flex-wrap justify-center items-center mt-[130px] gap-7 lg:gap-x-[80px] w-full p-y-3 ">{children}</div>;
};

export default TechStack;
