// SVG components for sea creatures

export function Fish({ className = "", color = "#FF6B6B" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="40" cy="30" rx="35" ry="20" fill={color} />
      <path d="M5 30 L0 20 L5 25 L0 30 L5 35 L0 40 L5 30Z" fill={color} />
      <path d="M75 15 L85 10 L80 20 L75 15Z" fill={color} />
      <path d="M75 45 L85 50 L80 40 L75 45Z" fill={color} />
      <circle cx="55" cy="25" r="3" fill="white" />
      <circle cx="56" cy="25" r="1.5" fill="black" />
      <path d="M30 30 Q40 25 50 30" stroke={color} strokeWidth="1" fill="none" opacity="0.3" />
    </svg>
  );
}

export function TropicalFish({ className = "", color = "#FFD93D" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="45" cy="40" rx="30" ry="25" fill={color} />
      <path d="M15 40 L5 30 L10 40 L5 50 L15 40Z" fill={color} />
      <path d="M45 15 L35 5 L40 15 L45 15Z" fill={color} />
      <path d="M45 65 L35 75 L40 65 L45 65Z" fill={color} />
      <path d="M75 30 L90 25 L80 35 L75 30Z" fill={color} />
      <path d="M75 50 L90 55 L80 45 L75 50Z" fill={color} />
      <circle cx="60" cy="35" r="3" fill="white" />
      <circle cx="61" cy="35" r="1.5" fill="black" />
      <line x1="25" y1="35" x2="55" y2="35" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
      <line x1="25" y1="45" x2="55" y2="45" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
    </svg>
  );
}

export function Shark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="40" rx="45" ry="22" fill="#5D6D7E" />
      <path d="M5 40 L0 35 L3 40 L0 45 L5 40Z" fill="#5D6D7E" />
      <path d="M50 18 L45 5 L48 18 L50 18Z" fill="#5D6D7E" />
      <path d="M95 30 L110 25 L100 35 L95 30Z" fill="#5D6D7E" />
      <path d="M95 50 L110 55 L100 45 L95 50Z" fill="#5D6D7E" />
      <path d="M30 50 L25 62 L28 50 L30 50Z" fill="#5D6D7E" />
      <circle cx="75" cy="35" r="3" fill="white" />
      <circle cx="76" cy="35" r="1.5" fill="black" />
      <path d="M20 35 Q30 33 40 35" stroke="rgba(0,0,0,0.2)" strokeWidth="1" fill="none" />
      <ellipse cx="50" cy="48" rx="30" ry="10" fill="#7F8C8D" opacity="0.5" />
    </svg>
  );
}

export function Turtle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="45" rx="35" ry="25" fill="#27AE60" />
      <path d="M15 45 L5 40 L10 45 L5 50 L15 45Z" fill="#229954" />
      <path d="M85 45 L95 40 L90 45 L95 50 L85 45Z" fill="#229954" />
      <circle cx="50" cy="20" r="12" fill="#229954" />
      <circle cx="55" cy="18" r="2" fill="white" />
      <circle cx="55.5" cy="18" r="1" fill="black" />
      <path d="M30 35 L35 30 L40 35 L45 30 L50 35 L55 30 L60 35 L65 30 L70 35" stroke="#1E8449" strokeWidth="2" fill="none" />
      <path d="M30 45 L35 50 L40 45 L45 50 L50 45 L55 50 L60 45 L65 50 L70 45" stroke="#1E8449" strokeWidth="2" fill="none" />
      <path d="M30 55 L35 60 L40 55 L45 60 L50 55 L55 60 L60 55 L65 60 L70 55" stroke="#1E8449" strokeWidth="2" fill="none" />
      <ellipse cx="25" cy="60" rx="8" ry="5" fill="#229954" />
      <ellipse cx="75" cy="60" rx="8" ry="5" fill="#229954" />
    </svg>
  );
}

export function Seaweed({ className = "", color = "#27AE60" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 30 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 80 Q10 70 15 60 Q20 50 15 40 Q10 30 15 20 Q20 10 15 0"
        stroke={color}
        strokeWidth="4"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M15 70 Q8 65 10 60"
        stroke={color}
        strokeWidth="3"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M15 50 Q22 45 20 40"
        stroke={color}
        strokeWidth="3"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M15 30 Q8 25 10 20"
        stroke={color}
        strokeWidth="3"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

export function Coral({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="50" r="8" fill="#E74C3C" opacity="0.8" />
      <circle cx="15" cy="40" r="6" fill="#E74C3C" opacity="0.7" />
      <circle cx="25" cy="40" r="6" fill="#E74C3C" opacity="0.7" />
      <circle cx="20" cy="30" r="7" fill="#E74C3C" opacity="0.6" />
      <circle cx="12" cy="25" r="5" fill="#E74C3C" opacity="0.5" />
      <circle cx="28" cy="25" r="5" fill="#E74C3C" opacity="0.5" />
      <circle cx="20" cy="15" r="6" fill="#E74C3C" opacity="0.4" />
      <circle cx="15" cy="10" r="4" fill="#E74C3C" opacity="0.3" />
      <circle cx="25" cy="10" r="4" fill="#E74C3C" opacity="0.3" />
    </svg>
  );
}

export function Kelp({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 25 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 90 Q8 80 12 70 Q16 60 12 50 Q8 40 12 30 Q16 20 12 10 Q8 5 12 0"
        stroke="#196F3D"
        strokeWidth="3"
        fill="none"
        opacity="0.8"
      />
      <ellipse cx="12" cy="75" rx="6" ry="8" fill="#27AE60" opacity="0.6" transform="rotate(-15 12 75)" />
      <ellipse cx="12" cy="60" rx="7" ry="9" fill="#27AE60" opacity="0.6" transform="rotate(15 12 60)" />
      <ellipse cx="12" cy="45" rx="6" ry="8" fill="#27AE60" opacity="0.6" transform="rotate(-15 12 45)" />
      <ellipse cx="12" cy="30" rx="7" ry="9" fill="#27AE60" opacity="0.6" transform="rotate(15 12 30)" />
      <ellipse cx="12" cy="15" rx="6" ry="8" fill="#27AE60" opacity="0.6" transform="rotate(-15 12 15)" />
    </svg>
  );
}
