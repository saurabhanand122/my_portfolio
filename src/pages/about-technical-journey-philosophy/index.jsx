import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import PersonalIntro from './components/PersonalIntro';
import CareerTimeline from './components/CareerTimeline';
import TechnicalPhilosophy from './components/TechnicalPhilosophy';
import SkillsMatrix from './components/SkillsMatrix';
import ValuesSection from './components/ValuesSection';
import BeyondCode from './components/BeyondCode';

const AboutTech = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Saurabh Anand Protfolio';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Discover the technical journey, and values that drive Saurabh Anand \'s approach to full-stack development and digital experience architecture.');
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Personal Introduction */}
        <PersonalIntro />
        
        {/* Career Timeline */}
        <CareerTimeline />
        
        {/* Technical Philosophy */}
        <TechnicalPhilosophy />
        
        {/* Skills Matrix */}
        <SkillsMatrix />
        
        {/* Values Section */}
        <ValuesSection />
        
        {/* Beyond Code */}
        <BeyondCode />
      </main>
    </div>
  );
};

export default AboutTech;