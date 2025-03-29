
import React, { useState, useEffect, useRef } from "react";

interface TypeAnimationProps {
  strings: string[];
  speed?: number;
  delay?: number;
  loop?: boolean;
  className?: string;
}

const TypeAnimation: React.FC<TypeAnimationProps> = ({
  strings,
  speed = 100,
  delay = 1500,
  loop = true,
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);
  const currentTextRef = useRef<string>();

  useEffect(() => {
    currentTextRef.current = strings[loopNum % strings.length];
    
    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText((prev) => prev.substring(0, prev.length - 1));
        setTypingSpeed(speed / 2);
      } else {
        const currentText = currentTextRef.current || "";
        setDisplayText((prev) => 
          currentText.substring(0, prev.length + 1)
        );
        setTypingSpeed(speed);
      }
      
      // Handle deletion state
      if (!isDeleting && displayText === currentTextRef.current) {
        setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, strings, speed, delay, loop]);
  
  return (
    <span className={className}>
      {displayText}
      <span className="typed-cursor">|</span>
    </span>
  );
};

export default TypeAnimation;
