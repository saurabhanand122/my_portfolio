import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalPhilosophy = () => {
  const [activePhilosophy, setActivePhilosophy] = useState(0);

  const philosophies = [
    {
      title: "Thoughtful Innovation",
      subtitle: "Strategy Before Code",
      description: "Every line of code should serve a purpose. I believe in understanding the 'why' before diving into the 'how', ensuring that technical decisions align with business objectives and user needs.",
      principles: [
        "Research and understand the problem deeply",
        "Consider multiple solutions before implementation",
        "Balance innovation with proven patterns",
        "Measure impact, not just output"
      ],
      example: {
        title: "E-commerce Performance Optimization",
        challenge: "Client's checkout process had 60% abandonment rate",
        solution: "Instead of just optimizing code, analyzed user behavior data and discovered the real issue was trust signals, not performance",
        result: "Reduced abandonment by 35% through strategic UX improvements backed by technical optimization"
      },
      icon: "Lightbulb",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "User-Centric Design",
      subtitle: "Code with Empathy",
      description: "Technology should enhance human experiences, not complicate them. I prioritize accessibility, performance, and intuitive interfaces that work for everyone, regardless of their technical expertise.",
      principles: [
        "Design for accessibility from day one",
        "Optimize for real-world usage patterns",
        "Test with actual users, not assumptions",
        "Progressive enhancement over graceful degradation"
      ],
      example: {
        title: "Healthcare Dashboard Redesign",
        challenge: "Medical staff struggled with complex data visualization",
        solution: "Conducted user interviews and shadowing sessions to understand workflow",
        result: "Reduced task completion time by 40% and improved user satisfaction scores by 85%"
      },
      icon: "Heart",
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Clean Code Craftsmanship",
      subtitle: "Code as Communication",
      description: "Code is written once but read hundreds of times. I write code that tells a story, with clear naming, logical structure, and comprehensive documentation that makes maintenance a joy, not a burden.",
      principles: [
        "Self-documenting code through clear naming",
        "Single responsibility principle at all levels",
        "Consistent patterns and conventions",
        "Comprehensive testing as documentation"
      ],
      example: {
        title: "Legacy System Refactoring",
        challenge: "10,000+ line monolithic application with no tests",
        solution: "Gradual refactoring using the Strangler Fig pattern with comprehensive test coverage",
        result: "Reduced bug reports by 70% and onboarding time for new developers by 50%"
      },
      icon: "Code",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Collaborative Excellence",
      subtitle: "Together We Build Better",
      description: "The best solutions emerge from diverse perspectives and collaborative effort. I foster environments where ideas flow freely, knowledge is shared generously, and everyone grows together.",
      principles: [
        "Code reviews as learning opportunities",
        "Knowledge sharing through documentation",
        "Mentoring as a two-way street",
        "Inclusive decision-making processes"
      ],
      example: {
        title: "Cross-functional Team Leadership",
        challenge: "Siloed teams causing project delays and miscommunication",
        solution: "Implemented daily standups, shared documentation, and cross-team pairing sessions",
        result: "Improved delivery speed by 30% and team satisfaction scores increased across all departments"
      },
      icon: "Users",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="philosophy" className="scroll-mt-20 py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Technical Philosophy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My approach to development is guided by core principles that ensure every project delivers meaningful impact through thoughtful technical decisions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Philosophy Cards */}
          <div className="space-y-4">
            {philosophies?.map((philosophy, index) => (
              <div
                key={index}
                className={`bg-card border border-border rounded-xl p-6 cursor-pointer transition-all duration-300 hover-lift ${
                  activePhilosophy === index ? 'ring-2 ring-primary shadow-brand-lg' : 'hover:shadow-brand'
                }`}
                onClick={() => setActivePhilosophy(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${philosophy?.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon name={philosophy?.icon} size={24} color="white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {philosophy?.title}
                    </h3>
                    <p className="text-sm font-medium text-accent mb-2">
                      {philosophy?.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {philosophy?.description}
                    </p>
                  </div>
                  <Icon
                    name={activePhilosophy === index ? "ChevronRight" : "ChevronDown"}
                    size={20}
                    className="text-muted-foreground flex-shrink-0"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Detailed View */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-card border border-border rounded-xl p-8 shadow-brand">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${philosophies?.[activePhilosophy]?.color} rounded-xl flex items-center justify-center`}>
                  <Icon name={philosophies?.[activePhilosophy]?.icon} size={28} color="white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {philosophies?.[activePhilosophy]?.title}
                  </h3>
                  <p className="text-accent font-medium">
                    {philosophies?.[activePhilosophy]?.subtitle}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Core Principles</h4>
                  <ul className="space-y-2">
                    {philosophies?.[activePhilosophy]?.principles?.map((principle, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold text-foreground mb-3">Real-World Application</h4>
                  <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                    <div>
                      <h5 className="font-medium text-foreground text-sm">Project: {philosophies?.[activePhilosophy]?.example?.title}</h5>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-warning uppercase tracking-wider">Challenge</span>
                      <p className="text-sm text-muted-foreground mt-1">{philosophies?.[activePhilosophy]?.example?.challenge}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-accent uppercase tracking-wider">Solution</span>
                      <p className="text-sm text-muted-foreground mt-1">{philosophies?.[activePhilosophy]?.example?.solution}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-success uppercase tracking-wider">Result</span>
                      <p className="text-sm text-muted-foreground mt-1">{philosophies?.[activePhilosophy]?.example?.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalPhilosophy;
