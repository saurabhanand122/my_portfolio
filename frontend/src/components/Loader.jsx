import React from 'react';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-[#030008] text-foreground font-mono select-none">
      {/* Background Cyber Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-primary) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative text-left max-w-md w-full px-6">
        <div className="border border-primary/20 rounded-xl bg-[#0a0514]/80 p-6 shadow-brand-lg backdrop-blur-sm">
          {/* Header Row */}
          <div className="flex items-center justify-between border-b border-border pb-3 mb-4 text-xs text-accent">
            <span className="flex items-center space-x-1.5">
              <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
              <span>BOOT_DIAGNOSTICS // V2.6</span>
            </span>
            <span>SECURE_MODE</span>
          </div>

          {/* Simulated Terminal Boot Messages */}
          <div className="space-y-2 text-sm sm:text-base leading-relaxed">
            <div className="animate-fade-in text-primary" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              &gt; INITIALIZING SAURABH_OS...
            </div>
            <div className="animate-fade-in text-accent" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              &gt; LOADING SKILLS MODULES... [ OK ]
            </div>
            <div className="animate-fade-in text-accent" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
              &gt; SYNCHRONIZING CORE WORKSPACES... [ OK ]
            </div>
            <div className="animate-fade-in text-accent" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              &gt; VERIFYING ENGINEERSMATERIAL.IN... [ ONLINE ]
            </div>
            <div className="animate-fade-in text-emerald-400 font-bold mt-4 pt-2 border-t border-border/40" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
              &gt; DECRYPTION COMPLETE. ACCESS GRANTED.
            </div>
          </div>

          {/* Spinner bar */}
          <div className="mt-6 h-1 w-full bg-surface rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" style={{ width: '100%', animationDuration: '1.2s' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
