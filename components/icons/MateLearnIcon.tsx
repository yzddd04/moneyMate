import * as React from 'react';

export interface MateLearnIconProps extends React.SVGProps<SVGSVGElement> {}

export const MateLearnIcon: React.FC<MateLearnIconProps> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <defs>
      <linearGradient id="ml-g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#ml-g)" />
    <path d="M18 42V22h6l8 8 8-8h6v20h-8V32l-6 6-6-6v10h-8z" fill="white" />
  </svg>
);

export default MateLearnIcon;


