
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with the 'animate-on-scroll' class
    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar setIsContactOpen={setIsContactOpen} />
      <main className="overflow-hidden">
        <Hero setIsContactOpen={setIsContactOpen} />
        <div className="container mx-auto px-4 md:px-6">
          <section id="about" className="animate-on-scroll opacity-0">
            <h2 className="section-heading">About Me</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
              Bachelor of Software Engineering graduate from Telkom University with strong expertise in programming (PHP, JavaScript, Java, Golang), full-stack development (Web & Mobile), project management, and network fundamentals. Previously honed my skills as a Backend Developer Intern at Telkom Indonesia, a leading tech company, where I gained hands-on experience in large-scale system development and agile workflows. Currently working at Telkom University, where I lead the flagship project across 4 university branches, managing systems for over 3,000 users—including lecturers, professors, and researchers—while ensuring seamless operations and compliance. I successfully revitalized sidelined and stalled projects, transforming them into fully functional platforms, and now oversee high-impact research grants ranging from millions to billions of rupiah. Passionate about solving complex technical challenges, I thrive in environments where innovation meets execution, leveraging my technical and managerial skills to deliver scalable, real-world solutions.
              </p>
              <p className="text-lg font-medium text-center italic">
                ~ Build Something With Pleasure ~
              </p>
            </div>
          </section>
          
          <TechStack />
          <Experience />
          <Projects />
        </div>
      </main>
      
      {/* Contact Modal */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <Contact />
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Index;
