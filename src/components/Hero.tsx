
import React from "react";
import TypeAnimation from "./TypeAnimation";
import SocialLinks from "./SocialLinks";
import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  setIsContactOpen: (isOpen: boolean) => void;
}

const Hero = ({ setIsContactOpen }: HeroProps) => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
      {/* Background Blob */}
      <div className="blue-blob w-72 h-72 md:w-96 md:h-96 right-0 top-32 md:top-0"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, my name is{" "}<br></br>
              <span className="text-gradient">Fauzan Reza Arnanda</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
              I am a{" "}
              <TypeAnimation
                strings={["Fullstack Dev", "Web Designer", "UX Designer"]}
                speed={100}
                className="font-semibold text-foreground"
              />
            </h2>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button 
                className={cn("btn-primary")} 
                size="lg"
                onClick={() => setIsContactOpen(true)}
              >
                <Send size={18} className="mr-2" />
                Contact Me
              </Button>
              <Button
                className={cn("btn-secondary")}
                size="lg"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "../../CV_ATS_Fauzan Reza Arnanda-2.pdf";
                  link.download = "CV_ATS_Fauzan Reza Arnanda-2.pdf";
                  link.click();
                }}
              >
                <Download size={18} className="mr-2" />
                Download CV
              </Button>
            </div>

            <SocialLinks className="pt-4 justify-center lg:justify-start" />
          </div>
            <div className="w-full lg:w-1/2 relative">
            <div className="relative w-56 h-56 md:w-70 md:h-70 lg:w-96 lg:h-96 mx-auto overflow-hidden rounded-full bg-primary/10">
              <div className="absolute inset-0 w-full h-full rounded-full bg-primary/20 animate-pulse-light z-0"></div>
              <img
                src={"././profile.PNG"}
                alt="Profile"
                className="w-full h-full object-cover object-center rounded-full relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
