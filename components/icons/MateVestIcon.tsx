import * as React from 'react';

export interface MateVestIconProps extends React.SVGProps<SVGSVGElement> {}

export const MateVestIcon: React.FC<MateVestIconProps> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <defs>
      <linearGradient id="mv-g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366F1" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#mv-g)" />
    <path d="M16 40l8-10 8 6 12-16 4 4-16 20-8-6-6 8z" fill="white" />
  </svg>
);

export default MateVestIcon;


