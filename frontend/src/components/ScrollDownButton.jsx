import { useEffect, useState } from 'react';
import Icon from './AppIcon';

const NAV_OFFSET = 64;
const SECTION_IDS = ['home', 'journey', 'projects', 'skills', 'beyond-code', 'connect'];

const ScrollDownButton = () => {
  const [nextSectionId, setNextSectionId] = useState(SECTION_IDS[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateButton = () => {
      const scrollPosition = window.scrollY + NAV_OFFSET + 24;
      const sectionTops = SECTION_IDS
        .map((id) => {
          const section = document.getElementById(id);
          return section
            ? { id, top: section.getBoundingClientRect().top + window.scrollY }
            : null;
        })
        .filter(Boolean);

      const nextSection = sectionTops.find((section) => section.top > scrollPosition);
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 160;

      setNextSectionId(nextSection?.id || '');
      setIsVisible(Boolean(nextSection) && !nearBottom);
    };

    updateButton();
    window.addEventListener('scroll', updateButton, { passive: true });
    window.addEventListener('resize', updateButton);

    return () => {
      window.removeEventListener('scroll', updateButton);
      window.removeEventListener('resize', updateButton);
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById(nextSectionId);

    if (!nextSection) {
      return;
    }

    const top = nextSection.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToNextSection}
      className={`fixed bottom-6 right-6 z-[9997] flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-card/95 text-primary shadow-brand backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 ${
        isVisible
          ? 'visible translate-y-0 opacity-100'
          : 'invisible translate-y-3 opacity-0'
      }`}
      aria-label="Scroll to next section"
      title="Scroll to next section"
    >
      <Icon name="ArrowDown" size={20} />
    </button>
  );
};

export default ScrollDownButton;
