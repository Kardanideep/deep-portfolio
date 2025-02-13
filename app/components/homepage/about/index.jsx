// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <>
    
    <div className="flex justify-center -translate-y-[1px] border-t border-[#25213b]">
        <div className="w-3/4 ">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
    </div> 
    <div
      id="about"
      className="my-12 scroll-mt-20 lg:my-12 rounded-lg  relative bg-[url('/back.avif')] bg-cover bg-center bg-no-repeat border-2 border-gray-500"

    >
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8 pt-20">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 bg-[#000000cc] p-8 rounded-lg">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
          <br />
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description1}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
        <Image
  src={personalData.profile}
  width={350}
  height={280}
  alt="Profile Image"
  unoptimized  // Required for external URLs
  className="rounded-lg transition-all duration-1000 hover:grayscale-0 hover:scale-105 cursor-pointer active:scale-95"
/>


        </div>
      </div>
    </div>
  </>
  );
}

export default AboutSection;

