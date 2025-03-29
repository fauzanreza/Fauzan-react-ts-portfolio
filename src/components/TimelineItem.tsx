import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  company: string;
  date: string;
  description: string[]; // Changed to array of strings
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  date,
  description,
  index,
}) => {
  return (
    <motion.div 
      className="pl-10 relative pb-10 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.2,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      <div className="timeline-dot top-1.5 group-hover:bg-blue-600 transition-colors duration-300"></div>
      <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/40 hover:border-primary/20">
        <span className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-primary/10 text-primary rounded-full">
          {date}
        </span>
        <h3 className="text-xl font-bold">{title}</h3>
        <h4 className="text-lg font-medium text-muted-foreground mb-2">{company}</h4>
        <ul className="text-muted-foreground list-disc pl-5 space-y-1">
          {description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default TimelineItem;