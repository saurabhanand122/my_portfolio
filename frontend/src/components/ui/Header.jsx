import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Icon from '../AppIcon';

const NAV_HEIGHT = 64;

const navigationItems = [
  { name: 'Home', id: 'home', icon: 'Home' },
  { name: 'Journey', id: 'journey', icon: 'Route' },
  { name: 'Projects', id: 'projects', icon: 'Briefcase' },
  { name: 'Skills', id: 'skills', icon: 'Code' },
  { name: 'Beyond Code', id: 'beyond-code', icon: 'Sparkles' },
  { name: 'Connect', id: 'connect', icon: 'MessageCircle' },
  {
    name: 'Resume',
    id: 'resume',
    icon: 'FileText',
    downloadUrl: '/Saurabh_anand_resume.pdf'
  }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('light', savedTheme === 'light');
    document.documentElement.classList.toggle('dark', savedTheme !== 'light');
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.classList.toggle('light', nextTheme === 'light');
    document.documentElement.classList.toggle('dark', nextTheme !== 'light');
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      closeMenu();
      return;
    }

    const top = section.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
    window.history.replaceState(null, '', `#${sectionId}`);
    closeMenu();
  };

  const currentHash = router.asPath.split('#')[1] || '';

  const getItemClasses = (itemId, mobile = false) => {
    const baseClasses = mobile
      ? 'flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-200'
      : 'flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-colors duration-200';

    if (currentHash === itemId) {
      return `${baseClasses} border border-primary/30 bg-primary/15 text-primary`;
    }

    return `${baseClasses} border border-transparent text-foreground/85 hover:border-primary/25 hover:bg-primary/10 hover:text-primary`;
  };

  const renderNavItem = (item, mobile = false) => {
    const className = getItemClasses(item.id, mobile);

    if (item.downloadUrl) {
      return (
        <a
          key={item.id}
          href={item.downloadUrl}
          download="Saurabh_anand_resume.pdf"
          className={className}
          onClick={closeMenu}
        >
          <Icon name={item.icon} size={mobile ? 18 : 16} />
          <span>{item.name}</span>
        </a>
      );
    }

    return (
      <button
        key={item.id}
        type="button"
        className={className}
        onClick={() => scrollToSection(item.id)}
      >
        <Icon name={item.icon} size={mobile ? 18 : 16} />
        <span>{item.name}</span>
      </button>
    );
  };

  return (
    <>
      <header
        className="fixed left-0 right-0 top-0 z-[9999] h-16 border-b border-border bg-background/95 shadow-md backdrop-blur-xl"
      >
        <div className="flex h-full w-full items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            onClick={closeMenu}
          >
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-brand">
              <Icon name="Code2" size={20} color="white" strokeWidth={2.5} />
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-accent" />
            </span>
            <span className="hidden min-w-0 sm:block">
              <span className="block truncate text-lg font-bold leading-tight text-foreground">
                Saurabh Anand
              </span>
              <span className="block truncate text-xs leading-tight text-accent/75">
                Full-Stack Developer & Architect
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
              {navigationItems.map((item) => renderNavItem(item))}
            </nav>

            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors duration-200 hover:border-accent/50 hover:text-accent"
              aria-label="Toggle theme"
            >
              {mounted && theme === 'dark' ? (
                <Icon name="Sun" size={18} className="text-amber-400" />
              ) : (
                <Icon name="Moon" size={18} className="text-primary" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors duration-200 hover:border-accent/50 hover:text-accent lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <Icon name={isMenuOpen ? 'X' : 'Menu'} size={22} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-x-0 top-16 z-[9998] border-b border-border bg-background/98 px-4 py-4 shadow-lg backdrop-blur-xl transition-all duration-200 lg:hidden ${
          isMenuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-3 opacity-0'
        }`}
      >
        <nav className="space-y-2" aria-label="Mobile navigation">
          {navigationItems.map((item) => renderNavItem(item, true))}
        </nav>
      </div>
    </>
  );
};

export default Header;
