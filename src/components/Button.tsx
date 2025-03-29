
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  onClick,
  type = "button",
  disabled = false,
  icon,
}) => {
  const baseStyles = "font-medium rounded-md inline-flex items-center justify-center transition-all duration-200";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-sm hover:shadow",
    secondary: "bg-secondary text-foreground hover:bg-secondary/80",
    outline: "border border-border bg-transparent hover:bg-secondary/50",
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
