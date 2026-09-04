import React from 'react';

interface FlourishDividerProps {
  className?: string;
  lineWidth?: string;
}

/**
 * Authentic gold flourish monogram divider matching reference:
 * Thin line on the left, an infinity loop bow with a solid gold center dot,
 * and a thin line on the right.
 */
export const FlourishDivider: React.FC<FlourishDividerProps> = ({
  className = 'my-2.5',
  lineWidth = 'w-16 sm:w-28',
}) => {
  return (
    <div className={`flex items-center justify-center gap-1.5 select-none ${className}`}>
      {/* Left line with smooth gradient fade */}
      <div className={`h-[1px] ${lineWidth} bg-gradient-to-r from-transparent via-gold-500/70 to-gold-400`} />

      {/* Monogram Flourish Icon */}
      <svg
        viewBox="0 0 54 14"
        className="w-9 sm:w-11 h-3 sm:h-3.5 text-gold-400 flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left outer horizontal line */}
        <line x1="2" y1="7" x2="18.6" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        
        {/* Left circular ring with center dot */}
        <circle cx="22.8" cy="7" r="4.2" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="22.8" cy="7" r="1.3" fill="currentColor" />
        
        {/* Vertical perpendicular bar at the junction, length equal to circle diameter (8.4) */}
        <line x1="27" y1="2.8" x2="27" y2="11.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

        {/* Right circular ring with center dot */}
        <circle cx="31.2" cy="7" r="4.2" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="31.2" cy="7" r="1.3" fill="currentColor" />
        
        {/* Right outer horizontal line */}
        <line x1="35.4" y1="7" x2="52" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>

      {/* Right line with smooth gradient fade */}
      <div className={`h-[1px] ${lineWidth} bg-gradient-to-l from-transparent via-gold-500/70 to-gold-400`} />
    </div>
  );
};
