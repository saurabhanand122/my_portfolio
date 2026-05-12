import React from 'react';
import dynamic from 'next/dynamic';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const Section3DAccent = dynamic(() => import('components/hero/Section3DAccent'), {
  ssr: false,
});

const PersonalIntro = () => {
  return (
    <section id="home" className="relative overflow-hidden scroll-mt-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
      <Section3DAccent />
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
                I've shipped projects ranging from a college companion website to an AI-powered quiz app and an actively running platform — EngineersMaterial.in — an AI-enabled study resource for engineering students. I don't just write code; I think about data flows, user experience, and clean architecture.
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
            <div className="relative z-10">
              <div className="w-full max-w-md mx-auto">
                <div className="relative overflow-hidden rounded-2xl shadow-brand-lg">
                  <Image
                    src="/assets/images/my-image.png"
                    alt="Saurabh Anand - Full-Stack Developer"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-lg"></div>
            
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
