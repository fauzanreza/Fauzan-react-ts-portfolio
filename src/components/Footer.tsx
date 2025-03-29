
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="text-center md:text-left">
        <h3 className="text-xl font-bold mb-4">About Me</h3>
        <p className="text-sm text-muted-foreground">
          Hi, I'm Fauzan Reza Arnanda, a passionate developer focused on creating impactful digital experiences. Let's connect and build something amazing together!
        </p>
          </div>

          {/* Social Links Section */}
          <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold mb-4">Follow Me</h3>
        <SocialLinks className="justify-center" />
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-right">
        <h3 className="text-xl font-bold mb-4">Contact</h3>
        <p className="text-sm text-muted-foreground">
          Email: <a href="mailto:fauzan.rez@gmail.com" className="text-primary hover:underline">fauzan.rez@gmail.com</a>
        </p>
        <p className="text-sm text-muted-foreground">
          Phone: <a href="tel:+6282118452010" className="text-primary hover:underline">+62 821 1845 2010</a>
        </p>
          </div>
        </div>

        <div className="mt-12 pt-6 text-center">
          <button
        onClick={scrollToTop}
        className="mb-8 bg-primary text-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        aria-label="Scroll to top"
          >
        <ChevronUp size={24} />
          </button>

          <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Fauzan Reza Arnanda - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
