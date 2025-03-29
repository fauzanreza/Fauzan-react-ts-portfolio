
import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/useTheme";

interface NavbarProps {
  setIsContactOpen: (isOpen: boolean) => void;
}

const Navbar = ({ setIsContactOpen }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#portfolio" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* <Link to="/" className="text-xl font-bold text-primary">
            Portfolio
          </Link> */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center w-full space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="text-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-4 absolute right-0 p-5">
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center p-2 rounded-full bg-accent text-foreground"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button 
                className={cn("btn-primary", "btn-lg")} 
                onClick={() => setIsContactOpen(true)}
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="flex items-center justify-center p-2 rounded-full bg-accent text-foreground"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-md animate-fade-in-down">
            <ul className="py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="block text-foreground hover:text-primary transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="block text-foreground hover:text-primary transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
              <li>
              <button 
                className={cn("btn-primary", "btn-lg")} 
                onClick={() => setIsContactOpen(true)}
              >
                Contact Me
              </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
