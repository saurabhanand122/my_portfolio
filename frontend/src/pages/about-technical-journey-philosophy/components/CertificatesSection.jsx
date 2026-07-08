import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const certificates = [
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Dec 30, 2025",
    pdfUrl: "/ibm_ai_fundamentals.pdf",
    verifyUrl: "https://www.credly.com/badges/268ad4f7-7947-4b30-9ef6-049ff97bd2da",
    description: "I successfully completed the Artificial Intelligence Fundamentals course by IBM SkillsBuild. This credential validates my understanding of core AI concepts, machine learning paradigms, neural networks, natural language processing, and the ethical guardrails required for deploying trustworthy AI systems.",
    skills: ["AI Ethics", "Machine Learning", "Deep Learning Foundations", "Natural Language Processing"],
    color: "from-violet-600 to-indigo-600"
  },
  {
    title: "AI-Enabled Applications for Customer Service",
    issuer: "IBM SkillsBuild",
    date: "Jan 13, 2026",
    pdfUrl: "/ibm_ai_customer_service.pdf",
    verifyUrl: "https://www.credly.com/go/ph2KraQ8",
    description: "I successfully completed the AI-Enabled Applications for Customer Service credential by IBM SkillsBuild. This credential validates practical capabilities in designing and implementing AI-driven virtual agents, configuring intent classification, entity extraction, and conversational flows.",
    skills: ["Conversational AI", "Customer Experience Automation", "Virtual Agents", "Dialog Engineering"],
    color: "from-teal-600 to-emerald-600"
  }
];

const CertificatesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const currentCert = certificates[currentIndex];

  // Slide animation variants for split layouts
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 }
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 }
      }
    })
  };

  return (
    <section id="certificates" className="relative overflow-hidden scroll-mt-20 py-20 bg-transparent">
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Professional Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized credentials validating specialized expertise in Artificial Intelligence and Cloud architectures
          </p>
        </div>

        {/* Carousel & Navigation Container */}
        <div className="relative">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-card/40 border border-border rounded-2xl p-6 sm:p-10 shadow-brand"
            >
              
              {/* Left Column: PDF Certificate Viewer with adjusted CSS Crop to show borders fully */}
              <div className="lg:col-span-7 w-full h-[320px] sm:h-[420px] rounded-xl overflow-hidden bg-white border border-border shadow-brand-lg relative group select-none">
                <iframe
                  src={`${currentCert.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                  className="absolute border-0 outline-none pointer-events-none"
                  style={{
                    width: '103%',
                    height: '111%',
                    top: '-9.5%',
                    left: '-1.5%'
                  }}
                  title={currentCert.title}
                />
                
                {/* Transparent overlay to block PDF plugin click-interception & downloads */}
                <div className="absolute inset-0 bg-transparent z-10" />

                {/* PDF Interactive Helper Overlay (shows on hover) */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none sm:pointer-events-auto z-20">
                  <a
                    href={currentCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-background/90 text-foreground border border-border shadow-brand hover:scale-105 hover:text-primary transition-all duration-200"
                    title="Open PDF in new tab"
                  >
                    <Icon name="Maximize2" size={16} />
                  </a>
                </div>
              </div>

              {/* Right Column: Text Details and CTA Buttons */}
              <div className="lg:col-span-5 space-y-6 text-left flex flex-col justify-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground leading-tight">
                    {currentCert.title} Certificate
                  </h3>
                  <div className="mt-3 flex items-center space-x-2 text-sm text-muted-foreground font-semibold">
                    <span className="text-primary">From:</span>
                    <span className="text-foreground">{currentCert.issuer}</span>
                    <span className="text-border">|</span>
                    <span>{currentCert.date}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest font-bold text-primary">About:</span>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {currentCert.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-widest font-bold text-primary">Skills Validated:</span>
                  <div className="flex flex-wrap gap-2">
                    {currentCert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-surface border border-border rounded-full text-xs font-semibold text-foreground/80 hover:border-accent/40 hover:text-accent transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Call-to-actions */}
                <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row gap-4">
                  <a
                    href={currentCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-brand hover:scale-[1.03] active:scale-95 transition-all duration-300"
                  >
                    <Icon name="Download" size={16} />
                    <span>Download Certificate</span>
                  </a>
                  <a
                    href={currentCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 rounded-xl border border-border bg-card hover:border-accent/40 hover:text-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground shadow-soft hover:scale-[1.03] active:scale-95 transition-all duration-300"
                  >
                    <Icon name="ExternalLink" size={16} />
                    <span>Verify Credential</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute left-[-24px] top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-border bg-card/90 text-foreground hover:text-primary hover:border-primary/40 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-brand-lg focus:outline-none hidden md:flex"
            aria-label="Previous Certificate"
          >
            <Icon name="ChevronLeft" size={24} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute right-[-24px] top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-border bg-card/90 text-foreground hover:text-primary hover:border-primary/40 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-brand-lg focus:outline-none hidden md:flex"
            aria-label="Next Certificate"
          >
            <Icon name="ChevronRight" size={24} />
          </button>
        </div>

        {/* Mobile Swipe Buttons (visible only on mobile) */}
        <div className="flex md:hidden justify-center gap-4 mt-6 select-none animate-fade-in">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-border bg-card text-foreground flex items-center justify-center hover:scale-105 active:scale-95 shadow-soft"
            aria-label="Previous Certificate"
          >
            <Icon name="ChevronLeft" size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-border bg-card text-foreground flex items-center justify-center hover:scale-105 active:scale-95 shadow-soft"
            aria-label="Next Certificate"
          >
            <Icon name="ChevronRight" size={24} />
          </button>
        </div>

        {/* Carousel Indicators / Dots */}
        <div className="flex justify-center gap-2 mt-8 select-none">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-gradient-to-r from-primary to-accent' 
                  : 'w-2.5 bg-border hover:bg-muted-foreground/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificatesSection;
