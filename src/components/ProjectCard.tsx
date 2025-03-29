
import React from "react";
import { ExternalLink, Github, Briefcase, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techs: string[];
  liveUrl?: string;
  repoUrl?: string;
  type?: "client" | "personal";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  techs,
  liveUrl,
  repoUrl,
  type,
}) => {
  return (
    <div className="card-hover bg-card rounded-lg overflow-hidden border border-border/40 group">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {type && (
          <div className="absolute top-3 right-3">
            <Badge variant={type === "client" ? "default" : "secondary"} className="flex items-center gap-1">
              {type === "client" ? (
                <>
                  <Briefcase className="h-3 w-3" />
                  <span>Client</span>
                </>
              ) : (
                <>
                  <Code className="h-3 w-3" />
                  <span>Personal</span>
                </>
              )}
            </Badge>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {techs.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-3 mt-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md bg-primary text-white transition-colors duration-200 hover:bg-primary/90"
              )}
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
          
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md bg-secondary text-secondary-foreground transition-colors duration-200 hover:bg-secondary/80"
              )}
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
