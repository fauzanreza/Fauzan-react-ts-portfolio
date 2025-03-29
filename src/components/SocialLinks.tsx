
import React from "react";
import { Github, Linkedin, Instagram, Twitter, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => {
  const socialLinks = [
    {
      icon: <Instagram size={22} />,
      href: "https://www.instagram.com/arz_co/",
      label: "Instagram",
    },
    {
      icon: <Linkedin size={22} />,
      href: "https://www.linkedin.com/in/fauzan-reza/",
      label: "LinkedIn",
    },
    {
      icon: <Github size={22} />,
      href: "https://github.com/fauzanreza",
      label: "GitHub",
    },
    {
      icon: <Send size={22} />,
      href: "https://t.me/fauzan_co",
      label: "Telegram",
    },
  ];

  return (
    <div className={cn("flex items-center space-x-4", className)}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
