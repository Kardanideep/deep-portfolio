"use client";

import React, { useState } from "react";
import ProjectCard from "./project-card";
import { projectsData } from "@/utils/data/projects-data";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="projects" className="scroll-mt-20">
      <div className="flex justify-center -translate-y-[1px] border-t border-[#25213b] w-full pb-[20px] sm:pb-[10px] lg:pb-[5px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="scroll-mt-20 my-12 lg:my-24 px-4">
        <div className="relative">
          {/* Background Blur Effect */}
          <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>

          {/* Section Heading */}
          <div className="flex items-center justify-start relative mb-20">
            <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
              PROJECTS
            </span>
            <span className="w-full h-[2px] bg-[#1a1443]"></span>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {projectsData.slice(0, 6).map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {/* Expanded Project View */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                className="fixed inset-0 bg-black z-50 bg-opacity-80 flex items-center justify-center z-50 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="relative bg-gray-900 border border-[0.5px] text-white p-6 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto scrollbar-hide shadow-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{
                    backgroundImage: `url('/card.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Close Button */}
                  <button
                    className="absolute top-3 right-3 text-gray-300 hover:text-white text-2xl transition-all duration-200"
                    onClick={() => setSelectedProject(null)}
                  >
                    ✕
                  </button>

                  {/* Project Images */}
                  {selectedProject.img2 && (
                    <motion.img
                      src={selectedProject.img2}
                      alt={selectedProject.name}
                      className="w-full h-auto max-h-[400px] object-cover rounded-md mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}

                  {/* Project Details */}
                  <h3 className="text-2xl font-semibold mt-4">
                    {selectedProject.name}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2">
                    {selectedProject.description1}
                  </p>
                  <p className="text-sm text-gray-300 mt-2">
                    {selectedProject.description2}
                  </p>
                  <p className="text-sm text-gray-300 mt-2">
                    {selectedProject.description3}
                  </p>
                  <p className="text-sm text-gray-300 mt-2">
                    {selectedProject.description4}
                  </p>

                  {/* Tools Used */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {selectedProject.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 text-gray-200 px-3 py-1 text-xs rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Role & Links */}
                  <p className="text-sm text-gray-400 mt-3">
                    Role:{" "}
                    <span className="text-cyan-400 font-medium">
                      {selectedProject.role}
                    </span>
                  </p>

                  <div className="mt-4 flex gap-4">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition-all"
                      >
                        Live Demo
                      </a>
                    )}
                    {selectedProject.code && (
                      <a
                        href={selectedProject.code}
                        target="_blank"
                        className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-all"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects;
