import React from 'react';
import Icon from '../AppIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Journey', id: 'journey' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Values', id: 'values' },
    { name: 'Beyond Code', id: 'beyond-code' },
    { name: 'Connect', id: 'connect' }
  ];

  const socialLinks = [
    { name: 'Mail', url: 'mailto:saurabh.anandofficial122@gmail.com', icon: 'Mail' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/saurabh-anand-2b5620279/', icon: 'Linkedin' },
    { name: 'GitHub', url: 'https://github.com/saurabhanand122', icon: 'Github' },
    { name: 'GFG', url: 'https://www.geeksforgeeks.org/profile/saurabhatweeknd', icon: 'Code2' }
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-card border-t border-border mt-20 py-12 overflow-hidden select-none">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] overflow-hidden">
        <div className="absolute bottom-[-50px] left-[50%] -translate-x-[50%] w-[300px] h-[300px] rounded-full bg-primary blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start border-b border-border/60 pb-8 mb-8">
          
          {/* Column 1: Info */}
          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-brand">
                <Icon name="Code2" size={16} color="white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold text-foreground tracking-tight">Saurabh Anand</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Pragmatic full-stack developer crafting optimized digital solutions, AI interfaces, and secure study resources.
            </p>
            <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-mono text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span>SYS_STATUS: ACTIVE // v2.6</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-left md:text-center space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-foreground">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 max-w-xs md:mx-auto text-sm font-medium">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left md:text-center py-1"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Connect & Top */}
          <div className="space-y-4 text-left md:text-right flex flex-col md:items-end">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-foreground">
              Connect Securely
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-border bg-surface text-foreground hover:text-accent hover:border-accent/40 flex items-center justify-center transition-all duration-200 hover-lift shadow-soft"
                  aria-label={link.name}
                >
                  <Icon name={link.icon} size={16} />
                </a>
              ))}
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 text-xs text-muted-foreground hover:text-primary transition-colors duration-200 pt-2 font-mono"
            >
              <span>Scroll to top</span>
              <Icon name="ArrowUp" size={14} />
            </button>
          </div>

        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground font-medium gap-4">
          <p>© {currentYear} Saurabh Anand. All rights reserved.</p>
          <div className="flex items-center space-x-1 font-mono text-[10px]">
            <span>Designed & Built with</span>
            <Icon name="Heart" size={10} className="text-primary animate-pulse" />
            <span>in Prayagraj, IN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
