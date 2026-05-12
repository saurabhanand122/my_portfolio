import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CareerTimeline = () => {
  const [activeItem, setActiveItem] = useState(0);

  const timelineData = [
    {
      year: "2022",
      title: "The Beginning",
      role: "Starting B.Tech CSE",
      company: "TechStart Solutions",
      description: "Started my journey into software development by diving into core programming concepts and web fundamentals. Built my first responsive layouts and discovered a passion for solving logical problems through code.",
      achievements: [
        "Learned C, C++ and core programming concepts",
        "Built first responsive web pages with HTML, CSS & JavaScript",
        "Explored OOP principles and algorithm design"
      ],
      technologies: ["C", "C++","HTML","CSS", "JavaScript", "Bootstrap"],
      icon: "Rocket"
    },
    {
      year: "2023",
      title: "First Real Project",
      role: "My College Companion",
      company: "College Website Project",
      description: "Designed and developed a fully responsive college companion website — my first shipped product.Applied UI/UX principles, modular frontend architecture, and real defect-tracking practices.",
      achievements: [
        "Designed & built a complete responsive website end-to-end",
        "Applied UI/UX design principles and structured content management",
        "Participated in code reviews, refactoring & performance optimization"
      ],
      technologies: ["HTML","CSS", "JavaScript","React", "ES6+","UI/UX"],
      icon: "Zap"
    },
    {
      year: "2024 ",
      title: "Industry Exposure",
      role: "Internship & Summer Training",
      company: "Softpro India · UIT Prayagraj",
      description: "Completed a Summer Training & Internship in Application Development at Softpro India, and Java & Java Framework training at UIT. Got my first real taste of professional software development workflows.",
      achievements: [
        "Trained in Java, Spring Boot basics & MVC architecture",
        "Worked on REST API concepts and backend data flows",
        "Followed Agile & Scrum methodologies in a team environment"
      ],
      technologies: ["Java", "Spring Boot", "REST APIs", "Agile", "Scrum"],
      icon: "Database"
    },
    {
      year: "2025",
      title: "AI & Upskilling",
      role: "IBM Certifications & Cloud",
      company: "IBM · Google Cloud Study Jam",
      description: "Levelled up into AI and cloud — earning IBM certifications in AI-Enabled Applications and AI Fundamentals, and ranking in the Top 50 at Google Cloud Study Jam. Started integrating AI tools and prompt engineering into my development workflow.",
      achievements: [
        "IBM Certified — AI-Enabled Applications for Customer Service",
        "IBM Certified — Artificial Intelligence Fundamentals",
        "Mentored 8 junior developerRanked Top 50 at Google Cloud Study Jams"
      ],
      technologies: ["Prompt Engineering", "AI Tools", "Google Cloud","GenAI", "AWS"],
      icon: "Users"
    },
    {
      year: "2026",
      title: "Present",
      role: "AI-Powered Apps & EngineersMaterial.in",
      company: "Independent · Live Product",
      description: "Built and launched two real products: an AI-Powered Test & Quiz Application with performance tracking, and EngineersMaterial.in — a live AI-enabled study resource platform for engineering students,actively running today.",
      achievements: [
        "Launched EngineersMaterial.in — a live platform used by engineering students",
        "Built AI-powered quiz app with structured backend & performance analytics",
        "Designed & optimized database structures and SQL queries"
      ],
      technologies: ["React", "JavaScript", "Python", "MongoDB", "AI/ GenAI"],
      icon: "Trophy"
    }
  ];

  return (
    <section id="journey" className="scroll-mt-20 py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            My Technical Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From curious beginner to technical leader - every step shaped my approach to building digital experiences
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {timelineData?.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row lg:items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-brand z-10"></div>

                {/* Content Card */}
                <div
                  className={`ml-20 lg:ml-0 lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                  }`}
                >
                  <div
                    className={`bg-card border border-border rounded-xl p-6 shadow-brand hover-lift cursor-pointer transition-all duration-300 ${
                      activeItem === index ? 'ring-2 ring-primary shadow-brand-lg' : ''
                    }`}
                    onClick={() => setActiveItem(activeItem === index ? -1 : index)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                          <Icon name={item?.icon} size={20} color="white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-accent">{item?.year}</div>
                          <h3 className="text-xl font-bold text-foreground">{item?.title}</h3>
                        </div>
                      </div>
                      <Icon
                        name={activeItem === index ? "ChevronUp" : "ChevronDown"}
                        size={20}
                        className="text-muted-foreground"
                      />
                    </div>

                    <div className="mb-4">
                      <div className="text-lg font-semibold text-primary">{item?.role}</div>
                      <div className="text-sm text-muted-foreground">{item?.company}</div>
                    </div>

                    <p className="text-foreground mb-4">{item?.description}</p>

                    {/* Expandable Content */}
                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        activeItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pt-4 border-t border-border space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Key Achievements</h4>
                          <ul className="space-y-1">
                            {item?.achievements?.map((achievement, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {item?.technologies?.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Year Badge for Mobile */}
                <div className="lg:hidden absolute left-0 top-0 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                  {item?.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
