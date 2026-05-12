import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BeyondCode = () => {
  const [activeTab, setActiveTab] = useState('community');

  const activities = {
    community: {
      title: "Community Contributions",
      icon: "Users",
      items: [
        {
          title: "GitHub Contributor",
          description: "Actively contributing to open source projects — fixing bugs, improving documentation, and submitting PRs. Every contribution is a chance to learn from world-class codebases.",
          metrics: "2.5K+ commits, 150+ contributors",
          image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop",
          tags: ["Git", "JavaScript", "React"]
        },
        {
          title: "Personal Projects",
          description: "Shipping side projects and making them open source. I believe in building in public — sharing my process, mistakes, and learnings so others can benefit too.",
          metrics: "Building & sharing in public",
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
          tags: ["Node.js", "TypeScript", "Open Source"]
        },
        {
          title: "Community Learner",
          description: "Engaging with the developer community on GitHub, reading issues, reviewing others' code, and absorbing best practices from experienced engineers around the world.",
          metrics: "Growing every day",
          image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop",
          tags: ["Community", "Code Review","Learning"]
        }
      ]
    },
    mentorship: {
      title: "Mentorship & Teaching",
      icon: "GraduationCap",
      items: [
        {
          title: "Peer Mentor",
          description: "Helping classmates and online peers debug code, understand concepts, and build their first projects. Explaining things clearly has sharpened my own understanding too.",
          metrics: "Helping fellow students",
          image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
          tags: ["Mentoring", "Skill Development", "Communication"]
        },
        {
          title: "Knowledge Sharer",
          description: "Writing short tutorials, leaving detailed answers on forums, and documenting what I learn. The best way to truly understand something is to teach it to someone else.",
          metrics: "Writing & explaining concepts",
          image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop",
          tags: ["Stack Overflow", "Technical Writing", "Full-Stack"]
        }
      ]
    },
    personal: {
      title: "Personal Interests",
      icon: "Heart",
      items: [
        {
          title: "Music",
          description: "Music is where my creativity lives outside of code. Whether I'm deep in lo-fi beats while debugging or exploring new genres on a late night — music shapes how I think and feel. There's a certain art to a great track that mirrors writing clean, expressive code.",
          metrics: "My creative fuel & escape",
          image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=250&fit=crop",
          tags: ["Lo-fi", "Meditation", "Creativity"]
        },
        {
          title: "Movies",
          description: "Films are a huge part of how I see the world creatively. The art direction, world-building, and character design in great films inspires the way I approach UI and user experience — every frame is intentional, and so should every interface be.",
          metrics: "5.12a grade, 3 years experience",
          image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop",
          tags: ["Art Direction", "World-building", "Visual Design"]
        },
        {
          title: "Gaming ",
          description: "Gaming taught me how to think in systems, stay persistent through hard challenges, and appreciate great UX design. I love games with deep storytelling and clever mechanics — the same things I chase when building software.",
          metrics: "Strategy, story & problem-solving",
          image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=250&fit=crop",
          tags: ["Strategy", "Storytelling", "Problem Solving"]
        }
      ]
    }
  };

  return (
    <section id="beyond-code" className="scroll-mt-20 py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Beyond the Code
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Development is just one part of who I am. Here's how I contribute to the community, share knowledge, and find inspiration outside of coding
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(activities)?.map(([key, activity]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover-lift ${
                activeTab === key
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-card text-foreground hover:bg-muted border border-border'
              }`}
            >
              <Icon name={activity?.icon} size={20} />
              <span className="hidden sm:inline">{activity?.title}</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {activities?.[activeTab]?.items?.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden hover-lift transition-all duration-300 hover:shadow-brand"
            >
              <div className="relative overflow-hidden h-48">
                <Image
                  src={item?.image}
                  alt={item?.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white mb-1">{item?.title}</h3>
                  <p className="text-sm text-white/80">{item?.metrics}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-4">{item?.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {item?.tags?.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div id="connect" className="mt-16 scroll-mt-20 text-center">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Icon name="MessageCircle" size={28} color="white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Let's Connect & Collaborate
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're interested in collaborating on a project, need mentorship, or just want to chat about technology and life, I'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:saurabh.anandofficial122@gmail.com"
                className="flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-lift transition-all duration-300 hover:shadow-brand"
              >
                <Icon name="Mail" size={20} />
                <span>Gmail</span>
              </a>
              <a
                href="https://www.linkedin.com/in/saurabh-anand-2b5620279/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover-lift transition-all duration-300 hover:bg-muted"
              >
                <Icon name="Linkedin" size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/saurabhanand122"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover-lift transition-all duration-300 hover:bg-muted"
              >
                <Icon name="Github" size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.geeksforgeeks.org/profile/saurabhatweeknd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover-lift transition-all duration-300 hover:bg-muted"
              >
                <Icon name="Code2" size={20} />
                <span>GFG</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondCode;
