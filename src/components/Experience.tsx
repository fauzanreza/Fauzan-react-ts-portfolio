
import React from "react";
import TimelineItem from "./TimelineItem";

const Experience = () => {
  const experiences = [
    {
      title: "Programmer",
      company: "Telkom University – Direktorat Penelitian dan Pengabdian Masyarakat",
      date: "March 2024 – Now",
      description: [
        "Architected and deployed a unified web platform serving over 3,000 users across 4 university branches (Bandung, Jakarta, Surabaya, Purwokerto), streamlining research and community service processes.",
        "Engineered comprehensive full-stack solutions, encompassing frontend (user interface), backend (server-side logic), and server management, ensuring optimal performance and scalability.",
        "Successfully revitalized and launched previously stalled projects, transforming them into fully functional, high-impact platforms for university-wide use.",
        "Managed and supported online systems facilitating the administration of research grants ranging from millions to billions of rupiah, ensuring accurate data management and efficient workflow.",
        "Enhanced website responsiveness and accessibility, guaranteeing a seamless user experience across diverse devices for all university members.",
        "Contributed directly to the Direktorat Penelitian dan Pengabdian Masyarakat's mission by providing robust, user-friendly online tools, significantly improving research and community service accessibility."
      ]
    },
    {
      title: "Back End Developer",
      company: "PT TELKOM INDONESIA (PERSERO) TBK – Joint Development Telkom | Chapter DPE",
      date: "February 2023 – July 2023",
      description: [
        "Designed and implemented RESTful APIs using Node.JS, prioritizing best practices, scalability, and performance optimization.",
        "Ensured seamless communication between the front-end interface, databases, and other systems for efficient data interchange and functionality.",
        "Integrated the APIs with MongoDB to guarantee data consistency, security, and efficient data retrieval.",
        "Worked in an agile development environment, participating in daily stand-ups, sprint planning, and regular code reviews."
      ]
    },
    {
      title: "Backend Developer Intern",
      company: "PT TELKOM INDONESIA (PERSERO) TBK – Telkom DBT",
      date: "February 2022 - January 2023",
      description: [
        "Learned and practiced the core engineering of Telkom Indonesia's back-end stack, such as microservices, Kubernetes, CI/CD, Docker, and the CQRS design pattern.",
        "Collaborated with a team to recreate one of Telkom Indonesia's products as closely as possible, based on its features and services.",
        "Demonstrated the ability to reverse engineer complex systems, showcasing problem-solving and analytical skills."
      ]
    },
    {
      title: "Practicum Assistant of Web Programming",
      company: "Informatics Laboratory Telkom University",
      date: "September 2022 – January 2023",
      description: [
        "Provided practical guidance and mentorship to college students enrolled in the Web Programming practicum course.",
        "Evaluated students' quizzes and projects, assessing their problem-solving abilities, coding skills, and project management abilities.",
        "Collaborated with other Practicum Assistants and course instructors to optimize the practicum curriculum."
      ]
    },
    {
      title: "Laravel Developer",
      company: "Bandung Techno Park",
      date: "July 2022 – August 2022",
      description: [
        "Developed a user-friendly website for the university's administrative tasks, focusing on creating important documents like graduation letters.",
        "Used Laravel to build a secure and scalable platform, ensuring easy access for both staff and students.",
        "Integrated features with PostgreSQL database to improve data management and user experience.",
        "Utilized effective teamwork to understand project requirements and develop seamless user experiences."
      ]
    }
  ];

  return (
    <section id="experience" className="animate-on-scroll opacity-0">
      <h2 className="section-heading">Work Experience</h2>
      <div className="max-w-3xl mx-auto relative">
        <div className="timeline-line"></div>
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            title={exp.title}
            company={exp.company}
            date={exp.date}
            description={exp.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
