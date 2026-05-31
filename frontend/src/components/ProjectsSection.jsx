import React, { useState } from 'react';
import Icon from './AppIcon';
import AppImage from './AppImage';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Sehat Connect",
      description: "A comprehensive healthcare platform connecting patients with doctors through modern web technology. Features appointment booking, telemedicine consultations, and health record management.",
      liveUrl: "https://sehat-connect-psi.vercel.app/",
      codeUrl: "https://github.com/saurabhanand122/SehatConnect",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      screenshot: "/assets/images/sehat-connect.png",
      color: "from-primary to-accent",
      icon: "Heart"
    },
    {
      title: "Chat Application",
      description: "Real-time messaging platform with modern UI/UX design. Features group chats, direct messaging, file sharing, and online status indicators.",
      liveUrl: "https://my-chat-app-74fw.vercel.app/",
      codeUrl: "https://github.com/saurabhanand122/my-chat-app",
      tech: ["React", "Socket.io", "Express", "MongoDB"],
      screenshot: "/assets/images/chat-app.png",
      color: "from-purple-500 to-pink-500",
      icon: "MessageCircle"
    },
    {
      title: "Engineers Material",
      description: "Comprehensive study resource platform for engineering students. AI-powered quiz system, study materials, and interactive learning tools.",
      liveUrl: "https://official-engineers-material.vercel.app/",
      codeUrl: "https://github.com/saurabhanand122/official_EngineersMaterial",
      tech: ["Next.js", "AI/ML", "PostgreSQL", "Tailwind"],
      screenshot: "/assets/images/engineers-material.png",
      color: "from-green-500 to-teal-500",
      icon: "BookOpen"
    },
    {
      title: "Portfolio Website",
      description: "This futuristic 3D portfolio website showcasing modern web development skills with interactive animations, 3D models, and responsive design.",
      liveUrl: "#",
      codeUrl: "https://github.com/saurabhanand122/my_portfolio",
      tech: ["Next.js", "Three.js", "Framer Motion", "Tailwind"],
      screenshot: "/assets/images/portfolio.png",
      color: "from-orange-500 to-red-500",
      icon: "Code"
    }
  ];

  return (
    <section id="projects" className="relative overflow-hidden scroll-mt-20 py-20 bg-transparent">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            A showcase of my recent work, from healthcare platforms to AI-powered educational tools
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
                <div className="rounded-3xl border border-accent/20 bg-surface p-5 text-foreground shadow-xl">
                  <p className="text-slate-300 mb-4">
                    <span className="font-semibold text-white">Details:</span> {project.description}
                  </p>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li><span className="font-semibold text-white">Live link:</span> <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-100">{project.liveUrl}</a></li>
                    <li><span className="font-semibold text-white">Code repo:</span> <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-100">{project.codeUrl}</a></li>
                    <li><span className="font-semibold text-white">Tech stack:</span> {project.tech.join(', ')}</li>
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