"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "react.js",
    name: "MAUZN",
    description: "This is amazing website that is making using react",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Next.js",
    name: "Rent Home",
    description: "This is amazing website that is making using react",
    link: "https://github.com/Mohammed-Arif-Uddin/CSE-327-Project",
    github: "https://github.com/Mohammed-Arif-Uddin/CSE-327-Project",
  },
  {
    image: "/work/mauzn.png",
    category: "react.js",
    name: "Ema John",
    description: "This is amazing website that is making using react",
    link: "https://github.com/Mohammed-Arif-Uddin/EmaJohn-Project",
    github: "https://github.com/Mohammed-Arif-Uddin/EmaJohn-Project",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filterProjects = projectData.filter((project) => {
    return category === "all projects" ? project : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filterProjects.map((project,index)=>{
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project}></ProjectCard>
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
