import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

function TypingSubtitle() {
  const words = [
    "Full-Stack Developer",
    "AI App Integrator",
    "EngineersMaterial.in Creator",
    "B.Tech CSE Final-Year Student"
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
      setText(words[index].substring(0, subIndex));
    }, reverse ? 25 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="font-mono text-accent text-lg sm:text-2xl font-bold tracking-tight">
      &gt; {text}
      <span className="animate-pulse ml-1 text-primary">|</span>
    </span>
  );
}

export default function FuturisticHero() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24">
      {/* Background Cyber Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-primary/10 dark:bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[35vw] h-[35vw] rounded-full bg-accent/10 dark:bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authoritative Details */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-brand">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>SYSTEMS ACTIVE // Portfolio OS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-foreground leading-none">
              SAURABH <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ANAND</span>
            </h1>

            <div className="h-8">
              <TypingSubtitle />
            </div>

            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
              Pragmatic full-stack developer crafting robust web architectures, AI-enabled services, and highly optimized digital products. Passionate about efficiency, clean schemas, and clean UX.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#connect" 
                className="flex items-center space-x-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-brand hover:scale-105 transition-transform duration-300"
              >
                <Icon name="MessageSquare" size={16} />
                <span>Let&apos;s Connect</span>
              </a>
              <a 
                href="#skills" 
                className="flex items-center space-x-2 rounded-xl border border-border bg-card px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground hover:border-accent/40 hover:text-accent shadow-soft hover:scale-105 transition-transform duration-300"
              >
                <Icon name="Wrench" size={16} />
                <span>Explore Skills</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Terminal/IDE Dashboard */}
          <div className="lg:col-span-5 w-full">
            <div className="w-full rounded-2xl border border-border bg-card shadow-brand-lg overflow-hidden transition-all duration-300">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between bg-surface/80 px-4 py-3 border-b border-border select-none">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs font-mono text-muted-foreground flex items-center space-x-1">
                  <Icon name="Terminal" size={12} />
                  <span>saurabh_OS:~/{activeTab === 'profile' ? 'profile.json' : activeTab === 'skills' ? 'skills.config' : 'connect.sh'}</span>
                </div>
                <div className="w-12" /> {/* spacer */}
              </div>

              {/* IDE Tab Switcher */}
              <div className="flex bg-surface/40 border-b border-border text-xs font-mono select-none">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`flex items-center space-x-1.5 px-4 py-2.5 border-r border-border transition-colors duration-200 ${
                    activeTab === 'profile' 
                      ? 'bg-card text-primary font-semibold border-b border-b-primary' 
                      : 'text-muted-foreground hover:bg-card hover:text-foreground'
                  }`}
                >
                  <span className="text-primary">{'{ }'}</span>
                  <span>profile.json</span>
                </button>
                <button
                  onClick={() => setActiveTab('skills')}
                  className={`flex items-center space-x-1.5 px-4 py-2.5 border-r border-border transition-colors duration-200 ${
                    activeTab === 'skills' 
                      ? 'bg-card text-primary font-semibold border-b border-b-primary' 
                      : 'text-muted-foreground hover:bg-card hover:text-foreground'
                  }`}
                >
                  <span className="text-accent">#</span>
                  <span>skills.config</span>
                </button>
                <button
                  onClick={() => setActiveTab('connect')}
                  className={`flex items-center space-x-1.5 px-4 py-2.5 border-r border-border transition-colors duration-200 ${
                    activeTab === 'connect' 
                      ? 'bg-card text-primary font-semibold border-b border-b-primary' 
                      : 'text-muted-foreground hover:bg-card hover:text-foreground'
                  }`}
                >
                  <span className="text-primary">&gt;_</span>
                  <span>connect.sh</span>
                </button>
              </div>

              {/* Code Area */}
              <div className="p-5 font-mono text-sm leading-relaxed overflow-x-auto min-h-[260px] bg-card text-slate-300 text-left">
                {activeTab === 'profile' && (
                  <div className="space-y-1">
                    <div><span className="text-primary">{'{'}</span></div>
                    <div className="pl-4"><span className="text-primary">&quot;name&quot;</span>: <span className="text-accent">&quot;Saurabh Anand&quot;</span>,</div>
                    <div className="pl-4"><span className="text-primary">&quot;role&quot;</span>: <span className="text-accent">&quot;Full-Stack Software Engineer&quot;</span>,</div>
                    <div className="pl-4"><span className="text-primary">&quot;education&quot;</span>: <span className="text-accent">&quot;B.Tech CSE (Final Year)&quot;</span>,</div>
                    <div className="pl-4"><span className="text-primary">&quot;active_products&quot;</span>: <span className="text-primary">[</span><span className="text-accent">&quot;EngineersMaterial.in&quot;</span><span className="text-primary">]</span>,</div>
                    <div className="pl-4"><span className="text-primary">&quot;focus&quot;</span>: <span className="text-accent">&quot;Clean Architecture & Web Optimization&quot;</span>,</div>
                    <div className="pl-4"><span className="text-primary">&quot;status&quot;</span>: <span className="text-accent">&quot;Ready to build and ship code&quot;</span></div>
                    <div><span className="text-primary">{'}'}</span></div>
                  </div>
                )}

                {activeTab === 'skills' && (
                  <div className="space-y-3 text-slate-300">
                    <div>
                      <span className="text-primary font-semibold">[web_technologies]</span>
                      <div className="pl-4"><span className="text-primary">frontend</span> = <span className="text-accent">&quot;React, Next.js, TailwindCSS&quot;</span></div>
                      <div className="pl-4"><span className="text-primary">backend</span> = <span className="text-accent">&quot;Node.js, Express, Spring Boot&quot;</span></div>
                      <div className="pl-4"><span className="text-primary">databases</span> = <span className="text-accent">&quot;MongoDB, PostgreSQL, SQL&quot;</span></div>
                    </div>
                    <div>
                      <span className="text-primary font-semibold">[core_concepts]</span>
                      <div className="pl-4"><span className="text-primary">dsa</span> = <span className="text-accent">&quot;Algorithms, Trees, Graphs, Arrays&quot;</span></div>
                      <div className="pl-4"><span className="text-primary">cloud</span> = <span className="text-accent">&quot;AWS, Google Cloud (Study Jam Top 50)&quot;</span></div>
                    </div>
                  </div>
                )}

                {activeTab === 'connect' && (
                  <div className="space-y-1">
                    <div><span className="text-primary">#!/bin/bash</span></div>
                    <div><span className="text-slate-500"># Establishing secure connection...</span></div>
                    <div><span className="text-primary">echo</span> <span className="text-accent">&quot;Syncing social protocols...&quot;</span></div>
                    <div className="pt-2 text-xs sm:text-sm">
                      <span className="text-primary">Email:</span> <a href="mailto:saurabh.anandofficial122@gmail.com" className="text-accent hover:underline">saurabh.anandofficial122@gmail.com</a>
                    </div>
                    <div className="text-xs sm:text-sm">
                      <span className="text-primary">GitHub:</span> <a href="https://github.com/saurabhanand122" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">github.com/saurabhanand122</a>
                    </div>
                    <div className="text-xs sm:text-sm">
                      <span className="text-primary">LinkedIn:</span> <a href="https://www.linkedin.com/in/saurabh-anand-2b5620279/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">linkedin.com/in/saurabh-anand...</a>
                    </div>
                    <div className="pt-3"><span className="text-primary">echo</span> <span className="text-accent">&quot;Connection established successfully. Ready to build!&quot;</span></div>
                  </div>
                )}
              </div>

              {/* Terminal Status Bar */}
              <div className="bg-surface/50 px-4 py-2 border-t border-border flex items-center justify-between text-[11px] font-mono text-muted-foreground select-none">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center space-x-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    <span>UTF-8</span>
                  </span>
                  <span>JSON</span>
                </div>
                <span>Ln 1, Col 1</span>
              </div>

            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom section divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
