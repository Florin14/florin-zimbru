import React from "react";

const Logo = ({ size = 32, className = "" }) => {
  const scale = size / 32;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="fz-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6c63ff" />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>
        <linearGradient id="fz-border" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6c63ff" />
          <stop offset="50%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#6c63ff" />
        </linearGradient>
      </defs>

      {/* Outer hexagonal frame */}
      <path
        d="M16 1.5 L28.5 8.75 L28.5 23.25 L16 30.5 L3.5 23.25 L3.5 8.75 Z"
        stroke="url(#fz-border)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />

      {/* Inner accent line */}
      <path
        d="M16 4.5 L26 10.25 L26 21.75 L16 27.5 L6 21.75 L6 10.25 Z"
        stroke="url(#fz-border)"
        strokeWidth="0.5"
        fill="rgba(108, 99, 255, 0.06)"
        opacity="0.4"
      />

      {/* FZ centered */}
      <text
        x="16"
        y="16"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Inter, Poppins, sans-serif"
        fontWeight="700"
        fontSize="13"
        fill="url(#fz-gradient)"
        letterSpacing="-0.5"
      >
        FZ
      </text>

      {/* Small accent dot */}
      <circle cx="27" cy="5" r="1.5" fill="url(#fz-gradient)" opacity="0.5" />
    </svg>
  );
};

export default Logo;
