import { Button } from "@/components/ui/button";
import Image from "next/image";
import Services from "./pages/Services";
import Casestudies from "./pages/Casestudies";
import Working from "./pages/Working";
import WithUs from "./pages/WithUs";
import Case from "./pages/Case";
import Building from "./pages/Building";
import Desain from "./pages/Desain";
import TechStack from "./pages/TechStack";
import Development from "./pages/Development";
import FeatureResource from "./pages/FeatureResource";
import Hire from "./pages/Hire";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-12 justify-between px-5 md:px-24">
      <div className="flex md:mt-0 mt-12 flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col justify-center gap-y-12 items-start">
          <div>
            <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br p-2 from-pink-500 to-blue-800">
              <span className="font-thin text-black">Great</span> Product <span className="font-thin text-black">is</span> <br /> <span className="text-black">built by great</span> teams
            </h1>
          </div>
          <div>
            <p className="text-xl text-gray-500">
              We help build and manage a team of world-class developers <br /> to bring your vision to life
            </p>
          </div>
          <div>
            <Button className="bg-blue-500">Let's get started!</Button>
          </div>
        </div>
        <div>
          <Image src={"/web-development 1.png"} alt="landingpage" width={614} height={546} />
        </div>
      </div>
      <Services />
      <Casestudies /> 
      <Working />
      <WithUs />
      <Case />
      <Building />
      <Desain />
      <TechStack />
      <Development/>
      <FeatureResource/>
      <Hire/>
    </main>
  );
}
