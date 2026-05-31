import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Header from '../../components/ui/Header';
import AnimatedSection from '../../components/AnimatedSection';
import ContactForm from '../../components/ContactForm';
import PersonalIntro from './components/PersonalIntro';
import CareerTimeline from './components/CareerTimeline';
import ProjectsSection from '../../components/ProjectsSection';
import SkillsMatrix from './components/SkillsMatrix';
import BeyondCode from './components/BeyondCode';
import Footer from '../../components/ui/Footer';

const StarBackground = dynamic(() => import('../../components/StarBackground'), {
  ssr: false,
});

const Hero3D = dynamic(() => import('../../components/hero/FuturisticHero'), {
  ssr: false,
  loading: () => (
    <div className="relative h-[calc(80vh)] min-h-[560px] bg-background" />
  ),
});

const Loader = dynamic(() => import('../../components/Loader'), {
  ssr: false,
});

const AboutTech = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Saurabh Anand Portfolio</title>
        <meta
          name="description"
          content="Discover the technical journey and values that drive Saurabh Anand's approach to full-stack development and digital experience architecture."
        />
      </Head>

      {isLoading && <Loader />}

      <div className={`relative min-h-screen overflow-hidden bg-background text-foreground ${isLoading ? 'pointer-events-none' : ''}`}>
        <StarBackground />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.12),_transparent_35%),radial-gradient(circle_at_20%_20%,_rgba(16,185,129,0.08),_transparent_18%),radial-gradient(circle_at_80%_10%,_rgba(139,92,246,0.08),_transparent_16%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_18%)]" />
        <Header />

        <main className="relative pt-16">
          <Hero3D />

          <div className="relative z-10">
            {/* Personal Introduction */}
            <AnimatedSection delay={0.1}>
              <PersonalIntro />
            </AnimatedSection>

            {/* Career Timeline */}
            <AnimatedSection delay={0.2}>
              <CareerTimeline />
            </AnimatedSection>

            {/* Projects Section */}
            <AnimatedSection delay={0.3}>
              <ProjectsSection />
            </AnimatedSection>

            {/* Skills Matrix */}
            <AnimatedSection delay={0.4}>
              <SkillsMatrix />
            </AnimatedSection>



            {/* Beyond Code */}
            <AnimatedSection delay={0.6}>
              <BeyondCode />
            </AnimatedSection>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutTech;