"use client";

import React from "react";
import Image from "next/image";
import GlowCard from "../../helper/glow-card"; 

function ProjectCard({ project, onClick }) {
  return (
    <GlowCard key={project.id} identifier={`project-${project.id}`}>
    <div
      className="border  scroll-mt-20 border-[0.5px] rounded-lg bg-[rgb(13,17,25)] p-4 w-full text-white shadow-lg cursor-pointer"
      // transition-all transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
      onClick={onClick} // Open expanded view when clicked
    >
    <Image
                          src="/blur-23.svg"
                          alt="Hero"
                          width={1080}
                          height={200}
                          className="absolute bottom-0 opacity-80"
                        />
     
      <div className="overflow-hidden rounded-md h-56">
        <img
          src={project.img}
          alt={project.name}
          className="w-full h-full object-cover rounded-md transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-semibold text-center mt-4">{project.name}</h3>
    </div>
    </GlowCard>
  );
}

export default ProjectCard;
