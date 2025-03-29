
import React from "react";
import SocialLinks from "./SocialLinks";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-secondary/50 mt-16 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="mb-8 bg-primary text-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
          
          <SocialLinks className="mb-6" />
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Fauzan Reza Arnanda</h3>
            <p className="text-muted-foreground mb-4">
              Fullstack Developer
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
