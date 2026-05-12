import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    {
      name: 'Home',
      id: 'home',
      icon: 'Home'
    },
    { 
      name: 'Journey', 
      id: 'journey',
      icon: 'Route'
    },
    { 
      name: 'Philosophy', 
      id: 'philosophy',
      icon: 'Lightbulb'
    },
    { 
      name: 'Skills', 
      id: 'skills',
      icon: 'Code'
    },
    { 
      name: 'Beyond Code', 
      id: 'beyond-code',
      icon: 'Sparkles'
    },
    { 
      name: 'Connect', 
      id: 'connect',
      icon: 'MessageCircle'
    },
    { 
      name: 'Resume', 
      id: 'resume',
      icon: 'FileText',
      downloadUrl: '/Saurabh_anand_resume.pdf'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navigate(`/#${sectionId}`);
    }

    closeMenu();
  };

  const isActiveSection = (sectionId) => {
    return location?.hash === `#${sectionId}`;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-brand border-b border-border' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 hover-lift"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-brand">
                <Icon name="Code2" size={20} color="white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-conversion rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">DevFolio Pro</h1>
              <p className="text-xs text-muted-foreground -mt-1">Architect of Digital Experiences</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => {
              const itemClasses = `flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover-lift ${
                isActiveSection(item?.id)
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'text-foreground hover:bg-muted hover:text-primary'
              }`;

              if (item?.downloadUrl) {
                return (
                  <a
                    key={item?.id}
                    href={item?.downloadUrl}
                    download="Saurabh_anand_resume.pdf"
                    className={itemClasses}
                    onClick={closeMenu}
                  >
                    <Icon name={item?.icon} size={16} />
                    <span>{item?.name}</span>
                  </a>
                );
              }

              return (
                <button
                  key={item?.id}
                  type="button"
                  onClick={() => scrollToSection(item?.id)}
                  className={itemClasses}
                >
                  <Icon name={item?.icon} size={16} />
                  <span>{item?.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={24} 
              className="transition-transform duration-200"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-brand ${
            isMenuOpen 
              ? 'max-h-screen opacity-100 visible' :'max-h-0 opacity-0 invisible overflow-hidden'
          }`}
        >
          <div className="px-6 py-4 bg-background/95 backdrop-blur-md border-t border-border">
            <nav className="space-y-2">
              {navigationItems?.map((item) => {
                const itemClasses = `flex w-full items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActiveSection(item?.id)
                    ? 'bg-primary text-primary-foreground shadow-brand'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`;

                if (item?.downloadUrl) {
                  return (
                    <a
                      key={item?.id}
                      href={item?.downloadUrl}
                      download="Saurabh_anand_resume.pdf"
                      className={itemClasses}
                      onClick={closeMenu}
                    >
                      <Icon name={item?.icon} size={18} />
                      <span>{item?.name}</span>
                    </a>
                  );
                }

                return (
                  <button
                    key={item?.id}
                    type="button"
                    onClick={() => scrollToSection(item?.id)}
                    className={itemClasses}
                  >
                    <Icon name={item?.icon} size={18} />
                    <span>{item?.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
