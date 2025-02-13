// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";

function Skills() {
  return (
    
    <>
    <div id="skills" className="scroll-mt-20 relative border-t my-12 lg:my-24 border-[#25213b]">
      {/* Background Glow */}
      {/* <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] bg-violet-100 rounded-full filter blur-3xl opacity-20"></div> */}
     <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-0 -z-10 w-full h-full object-cover"
      />
          <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      {/* Title Section */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center gap-4">
          <span className="w-16 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] text-white px-6 py-2 text-lg lg:text-xl font-semibold rounded-md">
            Skills
          </span>
          <span className="w-16 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="w-full flex justify-center pt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skillsData.map((skill, id) => (
            <div
              key={id}
              className="group border border-[0.1px] flex flex-col items-center justify-center p-4 bg-[rgb(4,8,26)] rounded-full transition-transform duration-300 hover:scale-110 shadow-md shadow-gray-900"
            >
            
              {/* Skill Icon */}
              <div className="h-12 sm:h-14">
                <Image
                  src={skillsImage(skill)?.src}
                  alt={skill}
                  width={50}
                  height={50}
                  className="h-full w-auto rounded-lg"
                />
              </div>
              
              {/* Skill Name */}
              <p className="text-white text-sm sm:text-base mt-3 font-medium">
                {skill}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Skills;
