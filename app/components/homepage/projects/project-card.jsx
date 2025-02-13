"use client";

import React from "react";
import Image from "next/image";

function ProjectCard({ project, onClick }) {
  return (
    <div
      className="border scroll-mt-20 border-gray-800 rounded-lg bg-gray-900 p-4 w-full text-white shadow-lg cursor-pointer
      transition-all transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
      onClick={onClick} // Open expanded view when clicked
    >
     
      <div className="overflow-hidden rounded-md h-56">
        <img
          src={project.img}
          alt={project.name}
          className="w-full h-full object-cover rounded-md transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-semibold text-center mt-4">{project.name}</h3>
    </div>
  );
}

export default ProjectCard;
