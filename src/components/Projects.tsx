
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { projectsData } from "@/lib/data";
import { Briefcase, Code } from "lucide-react";

const Projects = () => {
  const [projectType, setProjectType] = useState<"all" | "client" | "personal">("all");
  const [category, setCategory] = useState("all");

  const filters = [
    { id: "all", name: "All" },
    { id: "web", name: "Web Apps" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "api", name: "API" },
  ];

  // Filter by client/personal and then by category
  const filteredProjects = projectsData
    .filter(project => {
      if (projectType === "all") return true;
      return project.type === projectType;
    })
    .filter(project => {
      if (category === "all") return true;
      return project.category === category;
    });

  return (
    <section id="portfolio" className="animate-on-scroll opacity-0">
      <h2 className="section-heading">My Projects</h2>
      
      <div className="flex flex-col gap-6 items-center mb-8">
        <div className="bg-secondary/80 p-1 rounded-lg">
          <ToggleGroup 
            type="single" 
            value={projectType} 
            onValueChange={(value) => value && setProjectType(value as "all" | "client" | "personal")}
            className="justify-center"
          >
            <ToggleGroupItem value="all" aria-label="Show all projects">
              All Projects
            </ToggleGroupItem>
            <ToggleGroupItem value="client" aria-label="Show client projects">
              <Briefcase className="mr-2 h-4 w-4" />
              Client Projects
            </ToggleGroupItem>
            <ToggleGroupItem value="personal" aria-label="Show personal projects">
              <Code className="mr-2 h-4 w-4" />
              Personal Projects
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        
        <div className="inline-flex rounded-md bg-secondary/80 p-1 gap-1">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setCategory(filter.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                category === filter.id
                  ? "bg-primary text-white"
                  : "bg-transparent text-foreground hover:bg-primary/10"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>
      
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No projects found with the selected filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              techs={project.techs}
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
              type={project.type as "client" | "personal"}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
