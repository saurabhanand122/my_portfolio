import React from 'react';
import Icon from '../../../components/AppIcon';

const ValuesSection = () => {
  const values = [
    {
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and so do I. I dedicate time each week to learning new technologies, reading research papers, and experimenting with emerging tools.",
      icon: "BookOpen",
      color: "from-blue-500 to-cyan-500",
      examples: [
        "Weekly tech newsletter subscriptions",
        "Monthly side projects with new tech",
        "Annual conference attendance",
        "Daily coding challenges"
      ]
    },
    {
      title: "Quality Over Quantity",
      description: "I believe in writing code that stands the test of time. Every line should be purposeful, every function should be clear, and every feature should add genuine value.",
      icon: "Award",
      color: "from-green-500 to-teal-500",
      examples: [
        "Comprehensive code reviews",
        "Test-driven development",
        "Performance optimization",
        "Documentation as priority"
      ]
    },
    {
      title: "User-First Mindset",
      description: "Technology should serve people, not the other way around. I always consider the end user's experience, accessibility needs, and real-world usage patterns.",
      icon: "Users",
      color: "from-purple-500 to-pink-500",
      examples: [
        "User research and testing",
        "Accessibility compliance",
        "Performance optimization",
        "Intuitive interface design"
      ]
    },
    {
      title: "Collaborative Spirit",
      description: "The best solutions emerge from diverse perspectives. I foster inclusive environments where ideas flow freely and everyone\'s voice is heard and valued.",
      icon: "Heart",
      color: "from-red-500 to-orange-500",
      examples: [
        "Cross-functional collaboration",
        "Knowledge sharing sessions",
        "Mentoring junior developers",
        "Open source contributions"
      ]
    },
    {
      title: "Ethical Technology",
      description: "With great power comes great responsibility. I'm committed to building technology that respects privacy, promotes inclusivity, and has a positive impact on society.",
      icon: "Shield",
      color: "from-indigo-500 to-purple-500",
      examples: [
        "Privacy-by-design principles",
        "Inclusive design practices",
        "Sustainable development",
        "Transparent data handling"
      ]
    },
    {
      title: "Innovation Balance",
      description: "I embrace new technologies while respecting proven patterns. Innovation should solve real problems, not create complexity for its own sake.",
      icon: "Lightbulb",
      color: "from-yellow-500 to-orange-500",
      examples: [
        "Thoughtful technology adoption",
        "Risk assessment for new tools",
        "Gradual migration strategies",
        "Proof of concept validation"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Core Values & Principles
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The fundamental beliefs that guide my approach to development, collaboration, and professional growth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {values?.map((value, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover-lift transition-all duration-300 hover:shadow-brand"
            >
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${value?.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon name={value?.icon} size={28} color="white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value?.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {value?.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
                      In Practice
                    </h4>
                    <ul className="space-y-2">
                      {value?.examples?.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start space-x-3">
                          <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values Summary */}
        <div className="mt-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Values in Action
            </h3>
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
              These values aren't just words on a page—they're the foundation of every project I work on, every team I join, and every solution I create. They guide my decisions, shape my interactions, and ensure that the technology I build makes a positive impact.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Target" size={20} color="white" />
                </div>
                <div className="text-lg font-bold text-foreground">Purpose-Driven</div>
                <div className="text-sm text-muted-foreground">Every decision serves a clear purpose</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-success to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="TrendingUp" size={20} color="white" />
                </div>
                <div className="text-lg font-bold text-foreground">Growth-Oriented</div>
                <div className="text-sm text-muted-foreground">Constantly evolving and improving</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-conversion to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Users" size={20} color="white" />
                </div>
                <div className="text-lg font-bold text-foreground">People-Centered</div>
                <div className="text-sm text-muted-foreground">Technology that serves humanity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;