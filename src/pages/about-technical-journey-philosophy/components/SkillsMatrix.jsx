import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsMatrix = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    programmingConcept: {
      title: "Programming & Concepts",
      icon: "Monitor",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "C / C++", level: 85, experience: "3+ years", description: "OOP, data structures, algorithms" },
        { name: "Java", level: 82, experience: "3+ years", description: "OOP, REST APIs, Spring Boot basics, MVC concepts" },
        { name: "Python", level: 80, experience: "2+ years", description: "Scripting, AI/ML basics, data processing" },
        { name: "JavaScript (ES6+)", level: 80, experience: "3+ years", description: "ES6+, async patterns, frontend interactivity" },
        { name: "DSA", level: 85, experience: "3+ years", description: "Arrays, trees, graphs, problem-solving" },
        { name: "SQL", level: 80, experience: "2+ years", description: "Queries, joins, schema design, MSSQL fundamentals" }
      ]
    },
    frontend: {
      title: "Web Technologies",
      icon: "Monitor",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95, experience: "5+ years", description: "Advanced hooks, context, performance optimization" },
        { name: "Next.js", level: 90, experience: "3+ years", description: "SSR, SSG, API routes, deployment optimization" },
        { name: "TypeScript", level: 88, experience: "4+ years", description: "Advanced types, generics, utility types" },
        { name: "Tailwind CSS", level: 92, experience: "3+ years", description: "Custom components, design systems" },
        { name: "JavaScript (ES6+)", level: 95, experience: "8+ years", description: "Async/await, modules, advanced patterns" },
        { name: "HTML5 & CSS3", level: 98, experience: "8+ years", description: "Semantic markup, animations, responsive design" }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: "Server",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Node.js", level: 90, experience: "5+ years", description: "Express, Fastify, microservices architecture" },
        { name: "Python", level: 85, experience: "3+ years", description: "Django, FastAPI, data processing" },
        { name: "PostgreSQL", level: 88, experience: "4+ years", description: "Complex queries, optimization, migrations" },
        { name: "MongoDB", level: 85, experience: "4+ years", description: "Aggregation, indexing, schema design" },
        { name: "GraphQL", level: 82, experience: "2+ years", description: "Apollo Server, schema design, resolvers" },
        { name: "REST APIs", level: 95, experience: "6+ years", description: "Design, documentation, versioning" }
      ]
    },
    devops: {
      title: "DevOps & Cloud",
      icon: "Cloud",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "AWS", level: 85, experience: "3+ years", description: "EC2, S3, Lambda, RDS, CloudFormation" },
        { name: "Docker", level: 88, experience: "4+ years", description: "Containerization, multi-stage builds" },
        { name: "CI/CD", level: 90, experience: "4+ years", description: "GitHub Actions, Jenkins, automated testing" },
        { name: "Kubernetes", level: 75, experience: "2+ years", description: "Deployments, services, ingress" },
        { name: "Terraform", level: 78, experience: "2+ years", description: "Infrastructure as code, modules" },
        { name: "Monitoring", level: 82, experience: "3+ years", description: "Prometheus, Grafana, logging" }
      ]
    },
    tools: {
      title: "Tools & Workflow",
      icon: "Wrench",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: 95, experience: "8+ years", description: "Advanced workflows, branching strategies" },
        { name: "VS Code", level: 98, experience: "6+ years", description: "Extensions, debugging, customization" },
        { name: "Figma", level: 85, experience: "3+ years", description: "Design systems, prototyping, collaboration" },
        { name: "Jest/Testing", level: 88, experience: "4+ years", description: "Unit, integration, e2e testing" },
        { name: "Webpack/Vite", level: 85, experience: "4+ years", description: "Build optimization, plugins" },
        { name: "Postman", level: 90, experience: "5+ years", description: "API testing, automation, documentation" }
      ]
    }
  };

  const getSkillLevelColor = (level) => {
    if (level >= 90) return "bg-success";
    if (level >= 80) return "bg-accent";
    if (level >= 70) return "bg-warning";
    return "bg-muted-foreground";
  };

  const getSkillLevelText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <section id="skills" className="scroll-mt-20 py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Technical Skills Matrix
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across the full development stack
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories)?.map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover-lift ${
                activeCategory === key
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-card text-foreground hover:bg-muted border border-border'
              }`}
            >
              <Icon name={category?.icon} size={20} />
              <span>{category?.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories?.[activeCategory]?.skills?.map((skill, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover-lift transition-all duration-300 hover:shadow-brand"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground">{skill?.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill?.experience}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-foreground">{skill?.level}%</div>
                  <div className={`text-xs px-2 py-1 rounded-full text-white ${getSkillLevelColor(skill?.level)}`}>
                    {getSkillLevelText(skill?.level)}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-1000 ${getSkillLevelColor(skill?.level)}`}
                    style={{ width: `${skill?.level}%` }}
                  ></div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">{skill?.description}</p>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Skills Overview</h3>
            <p className="text-muted-foreground">Proficiency distribution across all technical areas</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-success to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Award" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold text-foreground">12</div>
              <div className="text-sm text-muted-foreground">Expert Level</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="TrendingUp" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold text-foreground">8</div>
              <div className="text-sm text-muted-foreground">Advanced Level</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-warning to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Target" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold text-foreground">4</div>
              <div className="text-sm text-muted-foreground">Intermediate Level</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="BookOpen" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold text-foreground">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;
