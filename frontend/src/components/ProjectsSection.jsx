import React, { useState } from 'react';
import Icon from './AppIcon';
import AppImage from './AppImage';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "AI Interview Companion",
      description: "An AI-powered interview preparation platform that conducts real-time voice-based mock interviews using Vapi AI, Clerk, and Supabase.",
      liveUrl: "https://interview-companion-tuvs.vercel.app/",
      codeUrl: "https://github.com/saurabhanand122/Interview_companion",
      tech: ["Next.js", "TypeScript", "Vapi AI", "Clerk", "Supabase"],
      screenshot: "/assets/images/ai-interview-companion.png",
      color: "from-violet-600 to-indigo-600",
      icon: "Mic",
      features: [
        "Developed an AI-powered interview preparation platform that conducts real-time voice-based mock interviews using Vapi AI.",
        "Implemented secure user authentication and profile management using Clerk with role-based access control.",
        "Integrated Supabase for database management, interview history storage, and real-time data synchronization."
      ]
    },
    {
      title: "AI Learning Recommendation System",
      description: "An AI-powered learning recommendation platform that generates personalized course and career pathways based on student interests and goals.",
      liveUrl: "https://ai-learning-recommendation-system-f.vercel.app/",
      codeUrl: "https://github.com/saurabhanand122/ai-learning-recommendation-system",
      tech: ["Next.js", "Supabase", "OpenAI", "Gemini", "Vapi AI"],
      screenshot: "/assets/images/ai-learning-recommendation.png",
      color: "from-cyan-500 to-teal-500",
      icon: "GraduationCap",
      features: [
        "Built an AI-powered learning recommendation platform that generates personalized course and career pathways based on student interests and goals.",
        "Integrated OpenAI, Gemini, and Vapi AI to provide intelligent recommendations, chatbot assistance, and voice-based learning guidance.",
        "Developed role-based Student, Admin, and Coordinator dashboards using Next.js, Express.js, Supabase, and Clerk authentication."
      ]
    },
    {
      title: "Sehat Connect",
      description: "A comprehensive healthcare platform connecting patients with doctors through modern web technology. Features appointment booking, telemedicine consultations, and health record management.",
      liveUrl: "https://sehat-connect-psi.vercel.app/",
      codeUrl: "https://github.com/saurabhanand122/SehatConnect",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      screenshot: "/assets/images/sehat-connect.png",
      color: "from-primary to-accent",
      icon: "Heart",
      features: [
        "A comprehensive healthcare platform connecting patients with doctors through modern web technology.",
        "Features appointment booking and telemedicine consultations.",
        "Integrated health record management."
      ]
    },
    {
      title: "Real-Time Chat Application",
      description: "Engineered a full-stack real-time chat application using MongoDB, Express.js, React.js, and Node.js.",
      liveUrl: "https://my-chat-app-74fw.vercel.app/",
      codeUrl: "https://github.com/saurabhanand122/my-chat-app",
      tech: ["MERN", "Socket.io", "Tailwind CSS", "Daisy UI", "Cloudinary"],
      screenshot: "/assets/images/chat-app.png",
      color: "from-purple-500 to-pink-500",
      icon: "MessageSquare",
      features: [
        "Engineered a full-stack real-time chat application using MongoDB, Express.js, React.js, and Node.js.",
        "Integrated Socket.io for bidirectional real-time communication supporting instant messaging and live updates.",
        "Implemented JWT Authentication, protected routes, secure login/signup workflows, and Cloudinary media uploads."
      ]
    }
  ];

  return (
    <section id="projects" className="relative overflow-hidden scroll-mt-20 py-20 bg-transparent">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, from healthcare platforms to voice-based AI interviewers and personalized learning pathways
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
              className="group cursor-pointer bg-card border border-border rounded-xl p-8 hover:bg-surface/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-brand"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={project.icon} size={28} color="white" />
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                  >
                    <Icon name="ExternalLink" size={16} />
                    <span>Live</span>
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 bg-slate-600/50 hover:bg-slate-600/70 text-slate-300 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                  >
                    <Icon name="Github" size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>

              <div className="group block mb-6 overflow-hidden rounded-3xl border border-border bg-surface shadow-inner transition-transform duration-300">
                <div className="h-48 bg-slate-950 relative overflow-hidden">
                  <AppImage
                    src={project.screenshot}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover"
                    width={400}
                    height={192}
                    draggable="false"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {selectedProject === index && (
                <div className="rounded-3xl border border-accent/20 bg-surface p-5 text-foreground shadow-xl mt-4 space-y-4">
                  {project.features && (
                    <div>
                      <span className="font-semibold text-white block mb-2">Key Features:</span>
                      <ul className="space-y-1.5 text-slate-300 text-sm pl-1">
                        {project.features.map((feature, fIndex) => (
                          <li key={fIndex} className="leading-relaxed flex items-start space-x-2">
                            <Icon name="CheckCircle2" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <ul className="space-y-2 text-slate-300 text-sm border-t border-border/50 pt-4">
                    <li><span className="font-semibold text-white">Live Link:</span> <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-100 break-all">{project.liveUrl}</a></li>
                    <li><span className="font-semibold text-white">Code Repo:</span> <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-100 break-all">{project.codeUrl}</a></li>
                    <li><span className="font-semibold text-white">Tech Stack:</span> {project.tech.join(', ')}</li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/saurabhanand122"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105"
          >
            <Icon name="Github" size={20} />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;