import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillsMatrix = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    programmingConcept: {
      title: "Languages & Concepts",
      icon: "Monitor",
      color: "from-primary to-accent",
      skills: [
        { name: "C++", level: 85, experience: "3+ years", description: "OOP, logic building, memory management" },
        { name: "Java", level: 82, experience: "3+ years", description: "OOP, MVC patterns, REST API logic" },
        { name: "JavaScript", level: 85, experience: "3+ years", description: "ES6+, async/await, DOM manipulation" },
        { name: "Python", level: 80, experience: "2+ years", description: "Scripting, automation, data manipulation" },
        { name: "DSA", level: 85, experience: "3+ years", description: "Data structures, algorithmic problem-solving" },
        { name: "Core CS Concepts", level: 82, experience: "3+ years", description: "OOP, DBMS, Operating Systems, Computer Networks" }
      ]
    },
    frontend: {
      title: "Frontend Technologies",
      icon: "Monitor",
      color: "from-primary to-accent",
      skills: [
        { name: "React.js", level: 92, experience: "3+ years", description: "Hooks, state management, component tree" },
        { name: "Next.js", level: 90, experience: "2+ years", description: "SSR, SSG, API routes, layout management" },
        { name: "Angular", level: 75, experience: "1+ year", description: "Components, modules, directives" },
        { name: "Tailwind CSS", level: 92, experience: "3+ years", description: "Utility-first design, custom configurations" },
        { name: "Bootstrap", level: 88, experience: "3+ years", description: "Responsive grid layout, UI kits" },
        { name: "CSS3 & HTML5", level: 92, experience: "4+ years", description: "Flexbox, Grid, animations, semantic structures" }
      ]
    },
    backend: {
      title: "Backend & Databases",
      icon: "Server",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Node.js & Express.js", level: 88, experience: "3+ years", description: "Asynchronous runtime, MVC routes, middleware" },
        { name: "MongoDB", level: 86, experience: "3+ years", description: "NoSQL modeling, aggregation pipeline" },
        { name: "PostgreSQL & MySQL", level: 85, experience: "2+ years", description: "Relational queries, schema design" },
        { name: "Supabase & Firebase", level: 88, experience: "2+ years", description: "BaaS database, real-time sync, auth integration" },
        { name: "Clerk & JWT / bcrypt", level: 90, experience: "2+ years", description: "Auth tokens, secure passwords, session management" },
        { name: "REST APIs", level: 92, experience: "3+ years", description: "Robust API endpoints design, CRUD, status codes" }
      ]
    },
    devops: {
      title: "AI & Cloud DevOps",
      icon: "Cloud",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Agentic AI & Chatbots", level: 90, experience: "1+ year", description: "Autonomous workflows, custom assistants" },
        { name: "Vapi AI", level: 92, experience: "1+ year", description: "Voice conversational AI, low-latency calls" },
        { name: "OpenAI & Gemini APIs", level: 90, experience: "2+ years", description: "Prompt engineering, function calling, embeddings" },
        { name: "AWS", level: 78, experience: "1+ year", description: "EC2, S3 bucket storage, cloud instances" },
        { name: "Docker", level: 80, experience: "2+ years", description: "Environment containerization, multi-stage builds" },
        { name: "Vercel & Render", level: 90, experience: "3+ years", description: "Static/serverless deployments, pipeline automation" }
      ]
    },
    tools: {
      title: "Tools & Workflow",
      icon: "Wrench",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git & GitHub", level: 92, experience: "3+ years", description: "Version control, branching, pull requests" },
        { name: "Postman", level: 90, experience: "3+ years", description: "API endpoints testing, documentation" },
        { name: "Cloudinary", level: 88, experience: "2+ years", description: "Cloud media uploads and optimization" },
        { name: "VS Code", level: 95, experience: "3+ years", description: "Workspace customization, active extensions" }
      ]
    }
  };

  const allSkills = Object.values(skillCategories).flatMap(category => category.skills);
  const expertCount = allSkills.filter(skill => skill.level >= 90).length;
  const advancedCount = allSkills.filter(skill => skill.level >= 80 && skill.level < 90).length;
  const intermediateCount = allSkills.filter(skill => skill.level >= 70 && skill.level < 80).length;

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
    <section id="skills" className="relative overflow-hidden scroll-mt-20 py-20 bg-background">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
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
        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {skillCategories?.[activeCategory]?.skills?.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover-lift transition-all duration-300 hover:shadow-brand cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
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
            </motion.div>
          ))}
        </motion.div>

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
              <div className="text-2xl font-bold text-foreground">{expertCount}</div>
              <div className="text-sm text-muted-foreground">Expert Level</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="TrendingUp" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold text-foreground">{advancedCount}</div>
              <div className="text-sm text-muted-foreground">Advanced Level</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-warning to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Target" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold text-foreground">{intermediateCount}</div>
              <div className="text-sm text-muted-foreground">Intermediate Level</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="BookOpen" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold text-foreground">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;
