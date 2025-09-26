import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  applyMask?: boolean;
  [key: string]: any;
}

const Marquee = ({ 
  children, 
  vertical = false, 
  repeat = 5, 
  pauseOnHover = false, 
  reverse = false, 
  className = '', 
  applyMask = true, 
  ...props 
}: MarqueeProps) => {
  return (
    <div
      {...props}
      className={`group relative flex h-full w-full p-2 [--duration:10s] [--gap:12px] [gap:var(--gap)] overflow-hidden ${vertical ? 'flex-col' : 'flex-row'} ${className}`}
    >
      {Array.from({ length: repeat }).map((_, index) => (
        <div
          key={`item-${index}`}
          className={`flex shrink-0 [gap:var(--gap)] ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''} ${reverse ? '[animation-direction:reverse]' : ''} ${vertical ? 'animate-marquee-vertical flex-col' : 'animate-marquee flex-row'}`}
        >
          {children}
        </div>
      ))}
      {applyMask && (
        <div
          className={`pointer-events-none absolute inset-0 z-10 h-full w-full from-white/50 from-5% via-transparent via-50% to-white/50 to-95% dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50 ${vertical ? 'bg-gradient-to-b' : 'bg-gradient-to-r'}`}
        />
      )}
    </div>
  );
};

export default Marquee;
