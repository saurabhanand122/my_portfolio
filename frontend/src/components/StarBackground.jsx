import React, { useMemo } from 'react';

function StarBackground() {
  const stars = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: `${Math.random() * 4}s`,
      duration: `${Math.random() * 3 + 3}s`
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background pointer-events-none select-none">
      {/* Cybernetic Tech Grid */}
      <div 
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-primary) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)'
        }}
      />

      {/* Futuristic Glowing Ambient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 dark:bg-primary/5 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent/10 dark:bg-accent/5 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Shimmering Star Field */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white opacity-40 dark:opacity-60"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationName: 'fadeIn',
            animationIterationCount: 'infinite',
            animationDirection: 'alternate',
            animationDelay: star.delay,
            animationDuration: star.duration,
            boxShadow: star.size > 2 ? '0 0 8px rgba(255,255,255,0.8)' : 'none'
          }}
        />
      ))}
    </div>
  );
}

export default React.memo(StarBackground);