import React from 'react';
import dynamic from 'next/dynamic';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PersonalIntro = ({ isLowPerformance = false }) => {
  return (
    <section id="home" className="relative overflow-hidden scroll-mt-20 bg-transparent py-20">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                Hi, I'm <span className="text-gradient-primary">Saurabh Anand</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Full-Stack Developer & UI/UX (Beginner)
              </p>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                My journey into tech started with a simple question — "how does this actually work?" That curiosity led me deep into codebases, data structures, and building things from scratch. I'm a final-year B.Tech Computer Science student at United Institute of Technology, Prayagraj, I've been building real products ever since.
              </p>
              <p>
                I've shipped projects ranging from real-time communication tools to advanced AI-powered applications, such as a voice-based AI Mock Interview platform and an AI Learning Recommendation system. I don't just write code; I think about data flows, user experience, and clean architecture.
              </p>
              <p>
                I believe that great developers are digital craftspeople who blend technical precision with creative vision. Every project is an opportunity to push boundaries, challenge assumptions, and create something meaningful that stands the test of time.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Projects Shipped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Top 50</div>
                <div className="text-sm text-muted-foreground">Google Cloud Jam</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 mx-auto grid w-full max-w-xl gap-5 sm:grid-cols-[minmax(0,1fr)_10rem] sm:items-end">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-brand-lg">
                <Image
                  src="/assets/images/saurabh-professional-headshot.png"
                  alt="Professional headshot of Saurabh Anand"
                  className="h-[32rem] w-full object-cover object-[center_18%]"
                  width={900}
                  height={1400}
                  sizes="(min-width: 1024px) 448px, 100vw"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/70 to-transparent"></div>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-brand sm:-ml-14 sm:mb-8">
                <Image
                  src="/assets/images/saurabh-professional-portrait.png"
                  alt="Saurabh Anand in formal business attire"
                  className="h-44 w-full object-cover object-[center_26%] sm:h-56"
                  width={900}
                  height={500}
                  sizes="(min-width: 640px) 160px, 100vw"
                />
              </div>
            </div>

            {/* Code Snippet Decoration */}
            <div className="absolute top-8 -left-8 bg-card border border-border rounded-lg p-4 shadow-brand hidden lg:block">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <code className="text-sm text-muted-foreground font-mono">
                const passion = "building";<br/>
                const focus = "user-centric";<br/>
                const result = "impact";
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalIntro;
