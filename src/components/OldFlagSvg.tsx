import React, { useState } from 'react';

interface OldFlagSvgProps {
  id?: string;
  answer?: string;
  className?: string;
  fallbackUrl?: string;
}

export const OldFlagSvg: React.FC<OldFlagSvgProps> = ({ id = '', answer = '', className = '', fallbackUrl }) => {
  const normAnswer = answer.trim();
  const [imgFailed, setImgFailed] = useState(false);

  // ==========================================
  // 🟡 مجموعة الـ 200 نقطة (old_flags_200_001 - 034)
  // ==========================================

  // 1. Soviet Union
  if (id === 'old_flags_200_001' || normAnswer.includes('الاتحاد السوفيتي') || normAnswer.includes('السوفياتي')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#CC0000" />
        <g transform="translate(110, 95)">
          <polygon points="0,-48 11,-15 45,-15 17,5 28,38 0,18 -28,38 -17,5 -45,-15 -11,-15" fill="#FFD700" stroke="#CC0000" strokeWidth="2" />
          <path d="M-15,45 C-35,30 -45,5 -38,-20 C-32,-40 -12,-55 10,-60 C2,-48 -5,-35 -5,-20 C-5,-5 10,15 25,25 Z" fill="#FFD700" />
          <rect x="-8" y="-35" width="40" height="12" transform="rotate(-45)" fill="#FFD700" rx="2" />
          <rect x="8" y="-45" width="10" height="65" transform="rotate(-45)" fill="#FFD700" rx="2" />
        </g>
      </svg>
    );
  }

  // 2. Ottoman Empire
  if (id === 'old_flags_200_002' || normAnswer.includes('الدولة العثمانية') || normAnswer.includes('العثماني')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#E30A17" />
        <circle cx="280" cy="200" r="105" fill="#FFFFFF" />
        <circle cx="310" cy="200" r="85" fill="#E30A17" />
        <g transform="translate(365, 200)">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <polygon key={i} points="0,-42 9,-12 0,0 -9,-12" fill="#FFFFFF" transform={`rotate(${angle})`} />
          ))}
        </g>
      </svg>
    );
  }

  // 3. Kingdom of Egypt (1922-1952)
  if (id === 'old_flags_200_003' || normAnswer.includes('المملكة المصرية') || normAnswer.includes('مصر الملكية')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#007A3D" />
        <circle cx="270" cy="200" r="105" fill="#FFFFFF" />
        <circle cx="295" cy="200" r="86" fill="#007A3D" />
        <polygon points="320,150 324,162 336,162 326,170 330,182 320,174 310,182 314,170 304,162 316,162" fill="#FFFFFF" />
        <polygon points="320,225 324,237 336,237 326,245 330,257 320,249 310,257 314,245 304,237 316,237" fill="#FFFFFF" />
        <polygon points="365,188 369,200 381,200 371,208 375,220 365,212 355,220 359,208 349,200 361,200" fill="#FFFFFF" />
      </svg>
    );
  }

  // 4. United Arab Republic (1958-1971)
  if (id === 'old_flags_200_004' || normAnswer.includes('الجمهورية العربية المتحدة')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="133.3" y="0" fill="#CE1126" />
        <rect width="600" height="133.3" y="133.3" fill="#FFFFFF" />
        <rect width="600" height="133.3" y="266.6" fill="#000000" />
        <g transform="translate(225, 200)">
          <polygon points="0,-35 10,-10 35,-10 15,6 22,30 0,16 -22,30 -15,6 -35,-10 -10,-10" fill="#007A3D" />
        </g>
        <g transform="translate(375, 200)">
          <polygon points="0,-35 10,-10 35,-10 15,6 22,30 0,16 -22,30 -15,6 -35,-10 -10,-10" fill="#007A3D" />
        </g>
      </svg>
    );
  }

  // 5. Kingdom of Iraq (1924-1959)
  if (id === 'old_flags_200_005' || normAnswer.includes('المملكة العراقية') || normAnswer.includes('العراق الملكي')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="133.3" y="0" fill="#000000" />
        <rect width="600" height="133.3" y="133.3" fill="#FFFFFF" />
        <rect width="600" height="133.3" y="266.6" fill="#007A3D" />
        <polygon points="0,0 200,90 200,310 0,400" fill="#CE1126" />
        <g transform="translate(90, 150)">
          <circle cx="0" cy="0" r="16" fill="#FFFFFF" />
          {[0, 51.4, 102.8, 154.2, 205.6, 257, 308.4].map((deg, i) => (
            <polygon key={i} points="0,-22 5,-5 -5,-5" fill="#FFFFFF" transform={`rotate(${deg})`} />
          ))}
        </g>
        <g transform="translate(90, 250)">
          <circle cx="0" cy="0" r="16" fill="#FFFFFF" />
          {[0, 51.4, 102.8, 154.2, 205.6, 257, 308.4].map((deg, i) => (
            <polygon key={i} points="0,-22 5,-5 -5,-5" fill="#FFFFFF" transform={`rotate(${deg})`} />
          ))}
        </g>
      </svg>
    );
  }

  // 6. Kingdom of Libya (1951-1969)
  if (id === 'old_flags_200_006' || normAnswer.includes('المملكة الليبية') || normAnswer.includes('السنوسي')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="100" y="0" fill="#E70013" />
        <rect width="600" height="200" y="100" fill="#000000" />
        <rect width="600" height="100" y="300" fill="#239E46" />
        <circle cx="285" cy="200" r="55" fill="#FFFFFF" />
        <circle cx="298" cy="200" r="46" fill="#000000" />
        <g transform="translate(325, 200)">
          <polygon points="0,-22 6,-6 22,-6 10,4 14,20 0,10 -14,20 -10,4 -22,-6 -6,-6" fill="#FFFFFF" />
        </g>
      </svg>
    );
  }

  // 7. Syrian Arab Kingdom (1920)
  if (id === 'old_flags_200_007' || normAnswer.includes('المملكة السورية العربية') || normAnswer.includes('المملكة السورية')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="133.3" y="0" fill="#000000" />
        <rect width="600" height="133.3" y="133.3" fill="#007A3D" />
        <rect width="600" height="133.3" y="266.6" fill="#FFFFFF" />
        <polygon points="0,0 260,200 0,400" fill="#CE1126" />
        <g transform="translate(90, 200)">
          <circle cx="0" cy="0" r="16" fill="#FFFFFF" />
          {[0, 51.4, 102.8, 154.2, 205.6, 257, 308.4].map((deg, i) => (
            <polygon key={i} points="0,-25 6,-5 -6,-5" fill="#FFFFFF" transform={`rotate(${deg})`} />
          ))}
        </g>
      </svg>
    );
  }

  // 8. German Empire (1871-1918)
  if (id === 'old_flags_200_008' || normAnswer.includes('الإمبراطورية الألمانية') || normAnswer.includes('الرايخ الألماني')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="133.3" y="0" fill="#000000" />
        <rect width="600" height="133.3" y="133.3" fill="#FFFFFF" />
        <rect width="600" height="133.3" y="266.6" fill="#DD0000" />
      </svg>
    );
  }

  // 9. Russian Empire (1858-1896)
  if (id === 'old_flags_200_009' || normAnswer.includes('الإمبراطورية الروسية') || normAnswer.includes('روسيا القيصرية')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="133.3" y="0" fill="#000000" />
        <rect width="600" height="133.3" y="133.3" fill="#F4C430" />
        <rect width="600" height="133.3" y="266.6" fill="#FFFFFF" />
      </svg>
    );
  }

  // 10. Imperial Japan (Rising Sun)
  if (id === 'old_flags_200_010' || normAnswer.includes('إمبراطورية اليابان') || normAnswer.includes('اليابان')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#FFFFFF" />
        <g transform="translate(300, 200)">
          {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, i) => (
            <polygon key={i} points="0,0 -30,-400 30,-400" fill="#BC002D" transform={`rotate(${angle})`} />
          ))}
          <circle cx="0" cy="0" r="90" fill="#BC002D" />
        </g>
      </svg>
    );
  }

  // 11. Austria-Hungary (1869-1918)
  if (id === 'old_flags_200_011' || normAnswer.includes('الإمبراطورية النمساوية المجرية') || normAnswer.includes('النمسا-المجر')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="133.3" y="0" fill="#E30A17" />
        <rect width="600" height="133.3" y="133.3" fill="#FFFFFF" />
        <rect width="300" height="133.3" x="0" y="266.6" fill="#E30A17" />
        <rect width="300" height="133.3" x="300" y="266.6" fill="#388E3C" />
        <g transform="translate(180, 200)">
          <path d="M-40,-45 L40,-45 L40,15 C40,40 0,60 0,60 C0,60 -40,40 -40,15 Z" fill="#E30A17" stroke="#FFD700" strokeWidth="4" />
          <rect x="-36" y="-15" width="72" height="30" fill="#FFFFFF" />
          <polygon points="-25,-55 -30,-75 -10,-65 0,-85 10,-65 30,-75 25,-55" fill="#FFD700" />
        </g>
        <g transform="translate(420, 200)">
          <path d="M-40,-45 L40,-45 L40,15 C40,40 0,60 0,60 C0,60 -40,40 -40,15 Z" fill="#E30A17" stroke="#FFD700" strokeWidth="4" />
          <path d="M0,-45 L40,-45 L40,15 C40,40 0,60 0,60 Z" fill="#388E3C" />
          <polygon points="-25,-55 -30,-75 -10,-65 0,-85 10,-65 30,-75 25,-55" fill="#FFD700" />
          <line x1="0" y1="-85" x2="-8" y2="-98" stroke="#FFD700" strokeWidth="4" />
        </g>
      </svg>
    );
  }

  // 12. Chinese Soviet Republic (1931-1937)
  if (id === 'old_flags_200_012' || normAnswer.includes('الجمهورية الصينية السوفيتية')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#DE2910" />
        <g transform="translate(300, 200)">
          <circle cx="0" cy="0" r="85" fill="none" stroke="#FFDE00" strokeWidth="12" />
          <polygon points="0,-120 12,-85 45,-85 17,-65 28,-30 0,-50 -28,-30 -17,-65 -45,-85 -12,-85" fill="#FFDE00" />
          <rect x="-8" y="-30" width="60" height="15" transform="rotate(-45)" fill="#FFDE00" rx="2" />
          <path d="M-20,40 C-45,20 -55,-10 -45,-40 C-40,-60 -20,-70 5,-75 C-3,-60 -10,-45 -10,-30 C-10,-10 10,15 30,25 Z" fill="#FFDE00" />
        </g>
      </svg>
    );
  }

  // 13. Czechoslovakia (1920-1992)
  if (id === 'old_flags_200_013' || normAnswer.includes('تشيكوسلوفاكيا')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="200" y="0" fill="#FFFFFF" />
        <rect width="600" height="200" y="200" fill="#D7141A" />
        <polygon points="0,0 300,200 0,400" fill="#11457E" />
      </svg>
    );
  }

  // 14. Kingdom of Sicily (1296)
  if (id === 'old_flags_200_014' || normAnswer.includes('مملكة صقلية')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#FFD700" />
        <polygon points="0,0 300,200 0,400" fill="#FFFFFF" />
        <polygon points="600,0 300,200 600,400" fill="#FFFFFF" />
        <line x1="220" y1="0" x2="270" y2="180" stroke="#CC0000" strokeWidth="20" />
        <line x1="380" y1="0" x2="330" y2="180" stroke="#CC0000" strokeWidth="20" />
        <line x1="220" y1="400" x2="270" y2="220" stroke="#CC0000" strokeWidth="20" />
        <line x1="380" y1="400" x2="330" y2="220" stroke="#CC0000" strokeWidth="20" />
        <g transform="translate(130, 200) scale(0.6)">
          <path d="M0,-50 L-30,-20 L-60,-10 L-40,20 L-50,60 L-20,40 L0,70 L20,40 L50,60 L40,20 L60,-10 L30,-20 Z" fill="#000000" />
        </g>
        <g transform="translate(470, 200) scale(0.6)">
          <path d="M0,-50 L-30,-20 L-60,-10 L-40,20 L-50,60 L-20,40 L0,70 L20,40 L50,60 L40,20 L60,-10 L30,-20 Z" fill="#000000" />
        </g>
      </svg>
    );
  }

  // 15. Spanish Empire (Cross of Burgundy)
  if (id === 'old_flags_200_015' || normAnswer.includes('الإمبراطورية الإسبانية') || normAnswer.includes('صليب بورغندي')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#FFFFFF" />
        <g stroke="#C60B1E" strokeWidth="32" strokeLinecap="square">
          <line x1="60" y1="40" x2="540" y2="360" />
          <line x1="540" y1="40" x2="60" y2="360" />
        </g>
        <g fill="#C60B1E">
          {[
            [160, 110], [240, 165], [360, 245], [440, 300],
            [440, 110], [360, 165], [240, 245], [160, 300]
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="18" />
          ))}
        </g>
      </svg>
    );
  }

  // 16. Mutawakkilite Kingdom of Yemen
  if (id === 'old_flags_200_016' || normAnswer.includes('المملكة المتوكلية') || normAnswer.includes('اليمن الملكي')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#CE1126" />
        <path d="M120,270 L460,270 C480,265 490,250 490,250 C480,260 460,262 440,262 L120,262 Z" fill="#FFFFFF" />
        <rect x="95" y="250" width="30" height="32" fill="#FFFFFF" rx="4" />
        <line x1="120" y1="240" x2="120" y2="292" stroke="#FFFFFF" strokeWidth="8" />
        {[
          [140, 120], [220, 100], [300, 90], [380, 100], [460, 120]
        ].map(([cx, cy], idx) => (
          <polygon key={idx} points="0,-18 5,-5 18,-5 8,4 12,17 0,9 -12,17 -8,4 -18,-5 -5,-5" fill="#FFFFFF" transform={`translate(${cx}, ${cy})`} />
        ))}
      </svg>
    );
  }

  // 17. Beylik of Tunis
  if (id === 'old_flags_200_017' || (id === 'old_flags_400_022' && !normAnswer.includes('الحماية')) || normAnswer.includes('بايات تونس')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#E70013" />
        <circle cx="300" cy="200" r="95" fill="#FFFFFF" />
        <circle cx="295" cy="200" r="65" fill="#E70013" />
        <circle cx="310" cy="200" r="52" fill="#FFFFFF" />
        <polygon points="330,175 336,192 354,192 340,203 345,220 330,210 315,220 320,203 306,192 324,192" fill="#E70013" />
      </svg>
    );
  }

  // 18. Pahlavi Iran (1964-1980) / Qajar Persia
  if (id === 'old_flags_200_018' || id === 'old_flags_400_004' || normAnswer.includes('الدولة البهلوية') || normAnswer.includes('الدولة القاجارية') || normAnswer.includes('إيران') || normAnswer.includes('فارس')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="133.3" y="0" fill="#239F40" />
        <rect width="600" height="133.3" y="133.3" fill="#FFFFFF" />
        <rect width="600" height="133.3" y="266.6" fill="#DA0000" />
        <g transform="translate(300, 200)">
          <circle cx="20" cy="-20" r="40" fill="#FFD700" opacity="0.9" />
          {[0, 30, 60, 90, 120, 150, 180].map((a, i) => (
            <line key={i} x1="20" y1="-20" x2={20 + 60 * Math.cos((a * Math.PI) / 180)} y2={-20 - 60 * Math.sin((a * Math.PI) / 180)} stroke="#FFD700" strokeWidth="4" />
          ))}
          <path d="M-40,25 C-35,5 -20,-10 0,-10 C20,-10 35,0 45,25 L-40,25 Z" fill="#D4AF37" />
          <line x1="-15" y1="20" x2="35" y2="-15" stroke="#D4AF37" strokeWidth="7" />
          <polygon points="-15,-40 -20,-60 -5,-50 0,-65 5,-50 20,-60 15,-40" fill="#D4AF37" />
        </g>
      </svg>
    );
  }

  // 19. South Vietnam (1955-1975)
  if (id === 'old_flags_200_019' || normAnswer.includes('فيتنام الجنوبية')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#FFFF00" />
        <rect width="600" height="26" y="147" fill="#DA251D" />
        <rect width="600" height="26" y="187" fill="#DA251D" />
        <rect width="600" height="26" y="227" fill="#DA251D" />
      </svg>
    );
  }

  // 20. Ethiopian Empire (Lion of Judah)
  if (id === 'old_flags_200_020' || normAnswer.includes('الإمبراطورية الإثيوبية') || normAnswer.includes('الحبشة')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="133.3" y="0" fill="#078930" />
        <rect width="600" height="133.3" y="133.3" fill="#FCDD09" />
        <rect width="600" height="133.3" y="266.6" fill="#DA121A" />
        <g transform="translate(300, 200)">
          <ellipse cx="0" cy="0" rx="38" ry="24" fill="#8B4513" />
          <circle cx="28" cy="-14" r="18" fill="#8B4513" />
          <polygon points="20,-32 15,-46 25,-40 30,-50 35,-40 45,-46 40,-32" fill="#DAA520" />
          <line x1="30" y1="-20" x2="-20" y2="40" stroke="#8B4513" strokeWidth="6" />
          <polygon points="32,-22 55,-35 48,-15" fill="#DA121A" />
        </g>
      </svg>
    );
  }

  // 21. Socialist Republic of Romania
  if (id === 'old_flags_200_021' || normAnswer.includes('رومانيّة الاشتراكية') || normAnswer.includes('رومانيا الاشتراكية')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="400" x="0" fill="#002B7F" />
        <rect width="200" height="400" x="200" fill="#FCD116" />
        <rect width="200" height="400" x="400" fill="#CE1126" />
        <g transform="translate(300, 200)">
          <circle cx="0" cy="0" r="50" fill="#4B9CD3" stroke="#FCD116" strokeWidth="6" />
          <polygon points="0,-65 6,-50 20,-50 10,-40 14,-25 0,-35 -14,-25 -10,-40 -20,-50 -6,-50" fill="#CE1126" stroke="#FCD116" strokeWidth="2" />
        </g>
      </svg>
    );
  }

  // 22. Great Britain Union Flag (1606-1801)
  if (id === 'old_flags_200_022' || normAnswer.includes('مملكة بريطانيا العظمى')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#012169" />
        <line x1="0" y1="0" x2="600" y2="400" stroke="#FFFFFF" strokeWidth="70" />
        <line x1="600" y1="0" x2="0" y2="400" stroke="#FFFFFF" strokeWidth="70" />
        <rect x="250" y="0" width="100" height="400" fill="#FFFFFF" />
        <rect x="0" y="150" width="600" height="100" fill="#FFFFFF" />
        <rect x="270" y="0" width="60" height="400" fill="#C8102E" />
        <rect x="0" y="170" width="600" height="60" fill="#C8102E" />
      </svg>
    );
  }

  // 23 & 34. SFR Yugoslavia (1946-1992)
  if (id === 'old_flags_200_023' || id === 'old_flags_200_034' || normAnswer.includes('يوغوسلافيا')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="133.3" y="0" fill="#003893" />
        <rect width="600" height="133.3" y="133.3" fill="#FFFFFF" />
        <rect width="600" height="133.3" y="266.6" fill="#DE0000" />
        <g transform="translate(300, 200)">
          <polygon points="0,-85 25,-25 85,-25 35,15 55,75 0,38 -55,75 -35,15 -85,-25 -25,-25" fill="#DE0000" stroke="#FFD700" strokeWidth="12" />
        </g>
      </svg>
    );
  }

  // 24. Kingdom of Greece
  if (id === 'old_flags_200_024' || normAnswer.includes('المملكة اليونانية') || normAnswer.includes('اليونان الملكية')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#0D5EAF" />
        <rect x="260" y="0" width="80" height="400" fill="#FFFFFF" />
        <rect x="0" y="160" width="600" height="80" fill="#FFFFFF" />
        <g transform="translate(300, 200)">
          <polygon points="-25,-15 -35,-40 -12,-30 0,-52 12,-30 35,-40 25,-15" fill="#FFD700" stroke="#0D5EAF" strokeWidth="2" />
          <rect x="-25" y="-15" width="50" height="14" fill="#FFD700" rx="3" />
        </g>
      </svg>
    );
  }

  // 25. Kingdom of Portugal (1830-1910)
  if (id === 'old_flags_200_025' || normAnswer.includes('مملكة البرتغال')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="400" x="0" fill="#003399" />
        <rect width="300" height="400" x="300" fill="#FFFFFF" />
        <g transform="translate(300, 200)">
          <path d="M-45,-55 L45,-55 L45,15 C45,55 0,75 0,75 C0,75 -45,55 -45,15 Z" fill="#FFFFFF" stroke="#DA291C" strokeWidth="14" />
          <rect x="-20" y="-30" width="40" height="45" fill="#003399" rx="4" />
          <polygon points="-30,-65 -40,-95 -15,-80 0,-105 15,-80 40,-95 30,-65" fill="#FFD700" />
        </g>
      </svg>
    );
  }

  // 26. Korean Empire (1897-1910)
  if (id === 'old_flags_200_026' || normAnswer.includes('الإمبراطورية الكورية') || normAnswer.includes('كوريا')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#FFFFFF" />
        <g transform="translate(300, 200)">
          <circle cx="0" cy="0" r="75" fill="#CD2E3A" />
          <path d="M0,75 A75,75 0 0,0 0,-75 A37.5,37.5 0 0,1 0,0 A37.5,37.5 0 0,0 0,75 Z" fill="#0047A0" />
          <circle cx="0" cy="-37.5" r="37.5" fill="#CD2E3A" />
          <circle cx="0" cy="37.5" r="37.5" fill="#0047A0" />
        </g>
        <g transform="translate(150, 100) rotate(35)" fill="#000000">
          <rect x="-35" y="-18" width="70" height="8" rx="2" />
          <rect x="-35" y="-4" width="70" height="8" rx="2" />
          <rect x="-35" y="10" width="70" height="8" rx="2" />
        </g>
        <g transform="translate(450, 300) rotate(35)" fill="#000000">
          <rect x="-35" y="-18" width="30" height="8" rx="2" />
          <rect x="5" y="-18" width="30" height="8" rx="2" />
          <rect x="-35" y="-4" width="30" height="8" rx="2" />
          <rect x="5" y="-4" width="30" height="8" rx="2" />
          <rect x="-35" y="10" width="30" height="8" rx="2" />
          <rect x="5" y="10" width="30" height="8" rx="2" />
        </g>
      </svg>
    );
  }

  // 27. Kingdom of Georgia
  if (id === 'old_flags_200_027' || normAnswer.includes('مملكة جورجيا') || normAnswer.includes('جورجيا')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#FFFFFF" />
        <rect x="260" y="0" width="80" height="400" fill="#FF0000" />
        <rect x="0" y="160" width="600" height="80" fill="#FF0000" />
        {[
          [130, 80], [470, 80], [130, 320], [470, 320]
        ].map(([cx, cy], i) => (
          <g key={i} transform={`translate(${cx}, ${cy})`} fill="#FF0000">
            <rect x="-18" y="-6" width="36" height="12" rx="3" />
            <rect x="-6" y="-18" width="12" height="36" rx="3" />
          </g>
        ))}
      </svg>
    );
  }

  // 28. Holy Roman Empire
  if (id === 'old_flags_200_028' || normAnswer.includes('الإمبراطورية الرومانية المقدسة')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#F4C430" />
        <g transform="translate(300, 200) scale(1.1)">
          <circle cx="-35" cy="-70" r="22" fill="none" stroke="#CC0000" strokeWidth="6" />
          <circle cx="35" cy="-70" r="22" fill="none" stroke="#CC0000" strokeWidth="6" />
          <path d="M-35,-70 C-50,-50 -20,-20 0,0 C20,-20 50,-50 35,-70 L20,-50 L0,-30 L-20,-50 Z" fill="#000000" />
          <path d="M-10,-10 C-80,-70 -130,-20 -110,60 C-80,40 -40,30 -10,30 Z" fill="#000000" />
          <path d="M10,-10 C80,-70 130,-20 110,60 C80,40 40,30 10,30 Z" fill="#000000" />
          <path d="M-25,40 L0,100 L25,40 L0,60 Z" fill="#000000" />
        </g>
      </svg>
    );
  }

  // 29. Sultanate of Zanzibar
  if (id === 'old_flags_200_029' || normAnswer.includes('سلطنة زنجبار')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#CC0000" />
      </svg>
    );
  }

  // 30. Syrian Republic (1932-1958)
  if (id === 'old_flags_200_030' || normAnswer.includes('الجمهورية السورية الأولى') || normAnswer.includes('علم الاستقلال السوري')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="133.3" y="0" fill="#007A3D" />
        <rect width="600" height="133.3" y="133.3" fill="#FFFFFF" />
        <rect width="600" height="133.3" y="266.6" fill="#000000" />
        {[170, 300, 430].map((cx, idx) => (
          <polygon key={idx} points="0,-28 8,-8 28,-8 12,5 18,24 0,12 -18,24 -12,5 -28,-8 -8,-8" fill="#CE1126" transform={`translate(${cx}, 200)`} />
        ))}
      </svg>
    );
  }

  // 31. Kingdom of Italy (1861-1946)
  if (id === 'old_flags_200_031' || normAnswer.includes('مملكة إيطاليا')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="400" x="0" fill="#009246" />
        <rect width="200" height="400" x="200" fill="#FFFFFF" />
        <rect width="200" height="400" x="400" fill="#CE2B37" />
        <g transform="translate(300, 200)">
          <path d="M-40,-50 L40,-50 L40,15 C40,55 0,75 0,75 C0,75 -40,55 -40,15 Z" fill="#CE2B37" stroke="#002B7F" strokeWidth="8" />
          <rect x="-6" y="-50" width="12" height="120" fill="#FFFFFF" />
          <rect x="-40" y="-8" width="80" height="12" fill="#FFFFFF" />
          <polygon points="-30,-60 -40,-88 -15,-75 0,-98 15,-75 40,-88 30,-60" fill="#FFD700" />
        </g>
      </svg>
    );
  }

  // 32. Qing Dynasty (1889-1912)
  if (id === 'old_flags_200_032' || normAnswer.includes('سلالة تشينغ') || normAnswer.includes('تشينغ')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#FFD900" />
        <circle cx="160" cy="110" r="35" fill="#E30A17" />
        <path d="M180,240 Q260,130 360,200 T480,250 Q520,300 440,320 T300,280 Q200,300 160,240" fill="none" stroke="#1A3B8B" strokeWidth="36" strokeLinecap="round" />
        <g transform="translate(210, 160)">
          <ellipse cx="0" cy="0" rx="30" ry="20" fill="#1A3B8B" />
          <circle cx="10" cy="-6" r="6" fill="#FFFFFF" />
          <circle cx="10" cy="-6" r="3" fill="#000000" />
          <path d="M-10,10 Q-40,20 -60,0" fill="none" stroke="#1A3B8B" strokeWidth="6" />
        </g>
      </svg>
    );
  }

  // 33. Arab Federation (Iraq + Jordan 1958)
  if (id === 'old_flags_200_033' || normAnswer.includes('الاتحاد العربي')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="133.3" y="0" fill="#000000" />
        <rect width="600" height="133.3" y="133.3" fill="#FFFFFF" />
        <rect width="600" height="133.3" y="266.6" fill="#007A3D" />
        <polygon points="0,0 260,200 0,400" fill="#CE1126" />
      </svg>
    );
  }

  // ==========================================
  // 🟠 مجموعة الـ 400 نقطة (old_flags_400_001 - 033)
  // ==========================================

  // 400_001. First Saudi State (Diriyah)
  if (id === 'old_flags_400_001' || normAnswer.includes('الدرعية') || normAnswer.includes('الدولة السعودية الأولى')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#006C35" />
        <circle cx="120" cy="200" r="70" fill="#FFFFFF" />
        <circle cx="140" cy="200" r="58" fill="#006C35" />
        <text x="360" y="220" fill="#FFFFFF" fontSize="36" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">لا إله إلا الله</text>
      </svg>
    );
  }

  // 400_002. Jabal Shammar (Al Rashid)
  if (id === 'old_flags_400_002' || normAnswer.includes('جبل شمر') || normAnswer.includes('آل رشيد')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#CE1126" />
        <g transform="translate(140, 130)">
          <circle cx="0" cy="0" r="55" fill="#FFD700" />
          <circle cx="18" cy="0" r="45" fill="#CE1126" />
          <polygon points="50,-10 55,5 70,5 58,15 62,30 50,20 38,30 42,15 30,5 45,5" fill="#FFD700" />
        </g>
      </svg>
    );
  }

  // 400_003. Kingdom of Hejaz (1916-1925)
  if (id === 'old_flags_400_003' || normAnswer.includes('المملكة الحجازية') || normAnswer.includes('الحجاز')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="133.3" y="0" fill="#000000" />
        <rect width="600" height="133.3" y="133.3" fill="#007A3D" />
        <rect width="600" height="133.3" y="266.6" fill="#FFFFFF" />
        <polygon points="0,0 260,200 0,400" fill="#CE1126" />
      </svg>
    );
  }

  // 400_005. Republic of Ragusa
  if (id === 'old_flags_400_005' || normAnswer.includes('راغوسا')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#FFFFFF" stroke="#003893" strokeWidth="8" />
        <g transform="translate(300, 200)">
          <circle cx="0" cy="-40" r="30" fill="#E30A17" />
          <path d="M-40,60 L40,60 L20,-10 L-20,-10 Z" fill="#E30A17" />
          <text x="0" y="100" fill="#003893" fontSize="26" fontWeight="bold" textAnchor="middle">LIBERTAS</text>
        </g>
      </svg>
    );
  }

  // 400_006. Byzantine Empire
  if (id === 'old_flags_400_006' || normAnswer.includes('الإمبراطورية البيزنطية')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#B30000" />
        <rect x="265" y="0" width="70" height="400" fill="#FFD700" />
        <rect x="0" y="165" width="600" height="70" fill="#FFD700" />
        {[
          [130, 85], [470, 85], [130, 315], [470, 315]
        ].map(([cx, cy], i) => (
          <g key={i} transform={`translate(${cx}, ${cy})`}>
            <path d="M-20,-25 L10,-25 C25,-25 25,-5 10,-5 L-5,-5 L-5,5 L10,5 C25,5 25,25 10,25 L-20,25 Z" fill="#FFD700" />
          </g>
        ))}
      </svg>
    );
  }

  // 400_007. Duchy of Urbino
  if (id === 'old_flags_400_007' || normAnswer.includes('أوربينو')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="133.3" y="0" fill="#003399" />
        <rect width="600" height="133.3" y="133.3" fill="#FFFFFF" />
        <rect width="600" height="133.3" y="266.6" fill="#003399" />
        <text x="300" y="215" fill="#003399" fontSize="32" fontWeight="bold" textAnchor="middle">DUCHY OF URBINO</text>
      </svg>
    );
  }

  // 400_008. Irish Free State / St Patrick Saltire (1783-1922)
  if (id === 'old_flags_400_008' || normAnswer.includes('أيرلندا') || normAnswer.includes('ايرلندا')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#FFFFFF" />
        {/* Red Saltire of St Patrick */}
        <line x1="0" y1="0" x2="600" y2="400" stroke="#C8102E" strokeWidth="60" />
        <line x1="600" y1="0" x2="0" y2="400" stroke="#C8102E" strokeWidth="60" />
      </svg>
    );
  }

  // 400_009. Ukrainian People's Republic (1917-1921)
  if (id === 'old_flags_400_009' || normAnswer.includes('أوكرانيا الشعبية')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="200" y="0" fill="#FFD700" />
        <rect width="600" height="200" y="200" fill="#0057B7" />
      </svg>
    );
  }

  // 400_010. Kalmar Union
  if (id === 'old_flags_400_010' || normAnswer.includes('اتحاد كالمار')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#FFCC00" />
        <rect x="180" y="0" width="75" height="400" fill="#CC0000" />
        <rect x="0" y="162.5" width="600" height="75" fill="#CC0000" />
      </svg>
    );
  }

  // 400_011. Gran Colombia (1821-1830)
  if (id === 'old_flags_400_011' || normAnswer.includes('كولومبيا الكبرى')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="200" y="0" fill="#FCD116" />
        <rect width="600" height="100" y="200" fill="#003893" />
        <rect width="600" height="100" y="300" fill="#CE1126" />
        <g transform="translate(180, 100) scale(0.7)">
          <circle cx="0" cy="0" r="45" fill="none" stroke="#003893" strokeWidth="6" />
          <polygon points="0,-35 25,25 -25,25" fill="#CE1126" />
        </g>
      </svg>
    );
  }

  // 400_012. Majapahit Empire
  if (id === 'old_flags_400_012' || normAnswer.includes('ماجاباهيت')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <rect key={i} width="600" height={400 / 9} y={i * (400 / 9)} fill={i % 2 === 0 ? '#CE1126' : '#FFFFFF'} />
        ))}
      </svg>
    );
  }

  // 400_013. Dominican Republic (1844)
  if (id === 'old_flags_400_013' || normAnswer.includes('الدومينيكان')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" x="0" y="0" fill="#002B7F" />
        <rect width="300" height="200" x="300" y="0" fill="#CE1126" />
        <rect width="300" height="200" x="0" y="200" fill="#CE1126" />
        <rect width="300" height="200" x="300" y="200" fill="#002B7F" />
        <rect x="270" y="0" width="60" height="400" fill="#FFFFFF" />
        <rect x="0" y="170" width="600" height="60" fill="#FFFFFF" />
      </svg>
    );
  }

  // 400_014. Paris Commune (1871)
  if (id === 'old_flags_400_014' || normAnswer.includes('كومونة باريس')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#D50000" />
        <text x="300" y="215" fill="#FFFFFF" fontSize="32" fontWeight="bold" textAnchor="middle">COMMUNE DE PARIS 1871</text>
      </svg>
    );
  }

  // 400_015. Republic of Venice
  if (id === 'old_flags_400_015' || normAnswer.includes('البندقية')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#8B0000" />
        <rect x="20" y="20" width="560" height="360" fill="none" stroke="#FFD700" strokeWidth="12" />
        <g transform="translate(300, 200)">
          <ellipse cx="0" cy="10" rx="60" ry="35" fill="#FFD700" />
          <circle cx="45" cy="-15" r="25" fill="#FFD700" />
          <path d="M-20,-10 C-60,-80 0,-70 20,-20 Z" fill="#FFD700" />
          <rect x="35" y="10" width="35" height="25" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
        </g>
      </svg>
    );
  }

  // 400_016. Teutonic Order
  if (id === 'old_flags_400_016' || normAnswer.includes('فرسان التوتون') || normAnswer.includes('التوتوني')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#FFFFFF" />
        <rect x="260" y="0" width="80" height="400" fill="#000000" />
        <rect x="0" y="160" width="600" height="80" fill="#000000" />
      </svg>
    );
  }

  // 400_017. Transvaal Republic
  if (id === 'old_flags_400_017' || normAnswer.includes('ترانسفال')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="133.3" y="0" fill="#CE1126" />
        <rect width="600" height="133.3" y="133.3" fill="#FFFFFF" />
        <rect width="600" height="133.3" y="266.6" fill="#002B7F" />
        <rect width="150" height="400" x="0" y="0" fill="#007A3D" />
      </svg>
    );
  }

  // 400_018. Kingdom of Montenegro
  if (id === 'old_flags_400_018' || normAnswer.includes('الجبل الأسود') || normAnswer.includes('مونتينيغرو')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#C8102E" stroke="#FFD700" strokeWidth="20" />
        <g transform="translate(300, 200) scale(0.9)">
          <path d="M-30,-50 L0,-30 L30,-50 L20,-10 L0,10 L-20,-10 Z" fill="#FFD700" />
          <path d="M-10,-10 C-80,-60 -110,-10 -90,40 C-60,30 -40,20 -10,20 Z" fill="#FFD700" />
          <path d="M10,-10 C80,-60 110,-10 90,40 C60,30 40,20 10,20 Z" fill="#FFD700" />
        </g>
      </svg>
    );
  }

  // 400_019. North Caucasian Emirate (1919)
  if (id === 'old_flags_400_019' || normAnswer.includes('القوقاز الشمالية')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#007A3D" />
        <circle cx="300" cy="200" r="70" fill="#FFFFFF" />
        <circle cx="320" cy="200" r="60" fill="#007A3D" />
        {[
          [300, 90], [360, 130], [360, 270]
        ].map(([cx, cy], i) => (
          <polygon key={i} points="0,-15 4,-4 15,-4 7,3 10,14 0,7 -10,14 -7,3 -15,-4 -4,-4" fill="#FFFFFF" transform={`translate(${cx}, ${cy})`} />
        ))}
      </svg>
    );
  }

  // 400_020. Royal Standard of France (Fleur-de-lis)
  if (id === 'old_flags_400_020' || normAnswer.includes('مملكة فرنسا')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#FFFFFF" />
        {[
          [150, 100], [300, 100], [450, 100],
          [225, 200], [375, 200],
          [150, 300], [300, 300], [450, 300]
        ].map(([cx, cy], i) => (
          <g key={i} transform={`translate(${cx}, ${cy}) scale(0.6)`}>
            <path d="M0,-40 C-15,-20 -10,0 0,20 C10,0 15,-20 0,-40 Z" fill="#FFD700" />
            <path d="M-8,5 C-30,-5 -35,-25 -25,-35 C-20,-10 -5,5 -8,5 Z" fill="#FFD700" />
            <path d="M8,5 C30,-5 35,-25 25,-35 C20,-10 5,5 8,5 Z" fill="#FFD700" />
            <rect x="-18" y="16" width="36" height="6" fill="#FFD700" rx="2" />
          </g>
        ))}
      </svg>
    );
  }

  // 400_021. Maratha Empire (Bhagwa Zenda)
  if (id === 'old_flags_400_021' || normAnswer.includes('ماراثا')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,0 550,130 350,200 550,270 0,400" fill="#FF6F00" />
      </svg>
    );
  }

  // 400_022. French Tunisia
  if (id === 'old_flags_400_022' || normAnswer.includes('الحماية الفرنسية في تونس')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#E70013" />
        <circle cx="340" cy="220" r="80" fill="#FFFFFF" />
        <circle cx="335" cy="220" r="55" fill="#E70013" />
        <circle cx="348" cy="220" r="44" fill="#FFFFFF" />
        <polygon points="365,200 370,214 385,214 373,223 377,237 365,229 353,237 357,223 345,214 360,214" fill="#E70013" />
        <rect width="180" height="120" fill="#002654" />
        <rect width="120" height="120" x="60" fill="#FFFFFF" />
        <rect width="60" height="120" x="120" fill="#CE1126" />
      </svg>
    );
  }

  // 400_023. Emirate of Bukhara
  if (id === 'old_flags_400_023' || normAnswer.includes('بخارى')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#007A3D" stroke="#D4AF37" strokeWidth="20" />
        <circle cx="300" cy="180" r="60" fill="#FFFFFF" />
        <circle cx="320" cy="180" r="50" fill="#007A3D" />
        <polygon points="340,150 345,165 360,165 348,175 352,190 340,180 328,190 332,175 320,165 335,165" fill="#FFFFFF" />
        <text x="300" y="310" fill="#FFD700" fontSize="28" fontWeight="bold" textAnchor="middle">إمارة بخارى</text>
      </svg>
    );
  }

  // 400_024. Kingdom of Nepal (1928-1962)
  if (id === 'old_flags_400_024' || normAnswer.includes('نيبال')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,0 350,180 120,180 420,400 0,400" fill="#DC143C" stroke="#003893" strokeWidth="16" />
        <circle cx="110" cy="100" r="28" fill="#FFFFFF" />
        <circle cx="120" cy="290" r="38" fill="#FFFFFF" />
      </svg>
    );
  }

  // 400_025. Union Mark of Sweden and Norway
  if (id === 'old_flags_400_025' || normAnswer.includes('السويد والنرويج')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" x="0" y="0" fill="#005293" />
        <rect width="300" height="200" x="300" y="0" fill="#BA0C2F" />
        <rect width="300" height="200" x="0" y="200" fill="#BA0C2F" />
        <rect width="300" height="200" x="300" y="200" fill="#005293" />
        <line x1="0" y1="0" x2="600" y2="400" stroke="#FFD700" strokeWidth="30" />
        <line x1="600" y1="0" x2="0" y2="400" stroke="#FFD700" strokeWidth="30" />
      </svg>
    );
  }

  // 400_026. Alawite State (1920)
  if (id === 'old_flags_400_026' || normAnswer.includes('العلويين')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#FFFFFF" />
        <polygon points="300,100 325,170 400,170 340,215 365,285 300,240 235,285 260,215 200,170 275,170" fill="#CE1126" />
        <rect width="180" height="120" fill="#002654" />
        <rect width="120" height="120" x="60" fill="#FFFFFF" />
        <rect width="60" height="120" x="120" fill="#CE1126" />
      </svg>
    );
  }

  // 400_027. Colonial Malta (1875-1898)
  if (id === 'old_flags_400_027' || normAnswer.includes('مالطا')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="400" x="0" fill="#FFFFFF" />
        <rect width="300" height="400" x="300" fill="#C8102E" />
      </svg>
    );
  }

  // 400_028. People's Republic of the Congo (1970-1992)
  if (id === 'old_flags_400_028' || normAnswer.includes('الكونغو الشعبية')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#DC241F" />
        <g transform="translate(100, 90)">
          <polygon points="0,-40 9,-12 38,-12 14,4 23,32 0,15 -23,32 -14,4 -38,-12 -9,-12" fill="#FFD700" />
          <path d="M-30,40 C-10,20 10,20 30,40" stroke="#FFD700" strokeWidth="8" fill="none" />
        </g>
      </svg>
    );
  }

  // 400_029. Dominion of Ceylon (1948-1951)
  if (id === 'old_flags_400_029' || normAnswer.includes('سيلان')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#8D1B3D" stroke="#FFBE29" strokeWidth="24" />
        <g transform="translate(300, 200)">
          <ellipse cx="0" cy="10" rx="60" ry="40" fill="#FFBE29" />
          <line x1="-30" y1="-10" x2="40" y2="-10" stroke="#FFBE29" strokeWidth="12" />
        </g>
      </svg>
    );
  }

  // 400_030. Turkestan Autonomy (1917)
  if (id === 'old_flags_400_030' || normAnswer.includes('تركستان')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="200" y="0" fill="#CE1126" />
        <rect width="600" height="200" y="200" fill="#0057B7" />
        <circle cx="280" cy="200" r="55" fill="#FFFFFF" />
        <circle cx="295" cy="200" r="45" fill="#CE1126" />
        <polygon points="325,185 330,195 342,195 332,203 336,215 325,207 314,215 318,203 308,195 320,195" fill="#FFFFFF" />
      </svg>
    );
  }

  // 400_031. Second Spanish Republic (1931-1939)
  if (id === 'old_flags_400_031' || normAnswer.includes('الجمهورية الإسبانية الثانية')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="133.3" y="0" fill="#AA151B" />
        <rect width="600" height="133.3" y="133.3" fill="#F1BF00" />
        <rect width="600" height="133.3" y="266.6" fill="#742A7C" />
      </svg>
    );
  }

  // 400_032. Kingdom of Croatia (1941-1945)
  if (id === 'old_flags_400_032' || normAnswer.includes('كرواتيا')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="133.3" y="0" fill="#CE1126" />
        <rect width="600" height="133.3" y="133.3" fill="#FFFFFF" />
        <rect width="600" height="133.3" y="266.6" fill="#003893" />
        <g transform="translate(250, 150)">
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 5 }).map((_, c) => (
              <rect key={`${r}-${c}`} x={c * 20} y={r * 20} width="20" height="20" fill={(r + c) % 2 === 0 ? '#FFFFFF' : '#CE1126'} />
            ))
          )}
        </g>
      </svg>
    );
  }

  // 400_033. Kingdom of Leon
  if (id === 'old_flags_400_033' || normAnswer.includes('مملكة ليون') || normAnswer.includes('ليون')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#FFFFFF" />
        <g transform="translate(300, 200)">
          <ellipse cx="0" cy="20" rx="65" ry="45" fill="#742A7C" />
          <circle cx="35" cy="-20" r="28" fill="#742A7C" />
          <polygon points="25,-55 18,-70 30,-62 38,-75 44,-62 55,-70 48,-55" fill="#FFD700" />
        </g>
      </svg>
    );
  }

  // ==========================================
  // 🔴 مجموعة الـ 600 نقطة (old_flags_600_001 - 034)
  // ==========================================

  // 600_001. Almoravid Dynasty
  if (id === 'old_flags_600_001' || normAnswer.includes('المرابطية') || normAnswer.includes('المرابطين')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#F8F9FA" stroke="#D4AF37" strokeWidth="16" />
        <text x="300" y="215" fill="#1A1A1A" fontSize="32" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">لا إله إلا الله محمد رسول الله</text>
      </svg>
    );
  }

  // 600_002. Almohad Caliphate
  if (id === 'old_flags_600_002' || normAnswer.includes('الموحدية') || normAnswer.includes('الموحدين')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#C4151C" />
        <g transform="translate(180, 80)">
          {Array.from({ length: 8 }).map((_, r) =>
            Array.from({ length: 8 }).map((_, c) => (
              <rect
                key={`${r}-${c}`}
                x={c * 30}
                y={r * 30}
                width="30"
                height="30"
                fill={(r + c) % 2 === 0 ? '#FFFFFF' : '#000000'}
              />
            ))
          )}
        </g>
      </svg>
    );
  }

  // 600_003. County of Edessa
  if (id === 'old_flags_600_003' || normAnswer.includes('الرها')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#FFFFFF" />
        <rect x="250" y="0" width="100" height="400" fill="#C8102E" />
        <rect x="0" y="150" width="600" height="100" fill="#C8102E" />
      </svg>
    );
  }

  // 600_004. Kingdom of Nejd and Hejaz (1926-1932)
  if (id === 'old_flags_600_004' || normAnswer.includes('نجد والحجاز')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#006C35" stroke="#FFFFFF" strokeWidth="18" />
        <text x="300" y="215" fill="#FFFFFF" fontSize="34" fontWeight="bold" textAnchor="middle">لا إله إلا الله محمد رسول الله</text>
      </svg>
    );
  }

  // 600_005. Abbasid Caliphate (Black Standard)
  if (id === 'old_flags_600_005' || normAnswer.includes('العباسية') || normAnswer.includes('العباسي')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#111111" />
        <text x="300" y="215" fill="#E5E5E5" fontSize="30" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">الراية السوداء (الخلافة العباسية)</text>
      </svg>
    );
  }

  // 600_006. Umayyad Caliphate (White Standard)
  if (id === 'old_flags_600_006' || normAnswer.includes('الأموية') || normAnswer.includes('الأموي')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#FFFFFF" stroke="#CCCCCC" strokeWidth="4" />
        <text x="300" y="215" fill="#444444" fontSize="30" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">الراية البيضاء (الخلافة الأموية)</text>
      </svg>
    );
  }

  // 600_007. Fatimid Caliphate (Green Standard)
  if (id === 'old_flags_600_007' || normAnswer.includes('الفاطمية') || normAnswer.includes('الفاطمي')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#007A3D" />
        <text x="300" y="215" fill="#FFFFFF" fontSize="30" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">الراية الخضراء (الخلافة الفاطمية)</text>
      </svg>
    );
  }

  // 600_008. Eyalet of Tripolitania
  if (id === 'old_flags_600_008' || normAnswer.includes('طرابلس الغرب')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="133.3" y="0" fill="#007A3D" />
        <rect width="600" height="133.3" y="133.3" fill="#CE1126" />
        <rect width="600" height="133.3" y="266.6" fill="#007A3D" />
        <circle cx="300" cy="200" r="50" fill="#FFFFFF" />
        <circle cx="315" cy="200" r="40" fill="#CE1126" />
      </svg>
    );
  }

  // 600_009. Tuvan People's Republic
  if (id === 'old_flags_600_009' || normAnswer.includes('توفا')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#DE2910" />
        <g transform="translate(300, 200)">
          <circle cx="0" cy="0" r="80" fill="#FFD700" />
          <text x="0" y="10" fill="#DE2910" fontSize="24" fontWeight="bold" textAnchor="middle">TAR</text>
        </g>
      </svg>
    );
  }

  // 600_010. Kingdom of Sardinia (1800-1848)
  if (id === 'old_flags_600_010' || normAnswer.includes('سردينيا')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#FFFFFF" />
        <rect x="260" y="0" width="80" height="400" fill="#CE1126" />
        <rect x="0" y="160" width="600" height="80" fill="#CE1126" />
        {[
          [130, 80], [470, 80], [130, 320], [470, 320]
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="25" fill="#000000" />
        ))}
      </svg>
    );
  }

  // 600_011. Kingdom of Ayutthaya
  if (id === 'old_flags_600_011' || normAnswer.includes('أيوثايا')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#CE1126" />
        <circle cx="300" cy="200" r="75" fill="#FFD700" />
      </svg>
    );
  }

  // 600_012. Ilkhanate
  if (id === 'old_flags_600_012' || normAnswer.includes('الإيلخانية')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#8B0000" />
        <polygon points="300,100 450,200 300,300 150,200" fill="#FFD700" />
      </svg>
    );
  }

  // 600_013. Holy Roman Emperor Banner (1200-1433)
  if (id === 'old_flags_600_013' || normAnswer.includes('ألمانيّة القروسطية')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#FFCC00" />
        <g transform="translate(300, 200) scale(1.1)">
          <path d="M0,-50 L-30,-20 L-60,-10 L-40,20 L-50,60 L-20,40 L0,70 L20,40 L50,60 L40,20 L60,-10 L30,-20 Z" fill="#000000" />
        </g>
      </svg>
    );
  }

  // 600_014. State of Jabal Druze (1921-1936)
  if (id === 'old_flags_600_014' || normAnswer.includes('الدروز')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="80" y="0" fill="#007A3D" />
        <rect width="600" height="80" y="80" fill="#CE1126" />
        <rect width="600" height="80" y="160" fill="#FFD700" />
        <rect width="600" height="80" y="240" fill="#003893" />
        <rect width="600" height="80" y="320" fill="#FFFFFF" />
        <polygon points="0,0 200,200 0,400" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
      </svg>
    );
  }

  // 600_015. Principality of Antioch
  if (id === 'old_flags_600_015' || normAnswer.includes('أنطاكية')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#CE1126" />
        <g fill="#FFFFFF">
          <circle cx="300" cy="200" r="40" />
          <rect x="280" y="100" width="40" height="200" rx="8" />
          <rect x="200" y="180" width="200" height="40" rx="8" />
        </g>
      </svg>
    );
  }

  // 600_016. First Republic of Lithuania (1918-1940)
  if (id === 'old_flags_600_016' || normAnswer.includes('ليتوانيا')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="133.3" y="0" fill="#FDB913" />
        <rect width="600" height="133.3" y="133.3" fill="#006A44" />
        <rect width="600" height="133.3" y="266.6" fill="#C1272D" />
      </svg>
    );
  }

  // 600_017. Kingdom of Bavaria
  if (id === 'old_flags_600_017' || normAnswer.includes('بافاريا')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bavaria-pat" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="60" height="60" fill="#0066B3" />
            <polygon points="0,0 30,0 0,30" fill="#FFFFFF" />
            <polygon points="30,0 60,30 30,60 0,30" fill="#FFFFFF" />
            <polygon points="60,30 60,60 30,60" fill="#FFFFFF" />
          </pattern>
        </defs>
        <rect width="600" height="400" fill="url(#bavaria-pat)" />
      </svg>
    );
  }

  // 600_018. Kingdom of Hungary (15th century)
  if (id === 'old_flags_600_018' || normAnswer.includes('المجر')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <rect key={i} width="600" height={50} y={i * 50} fill={i % 2 === 0 ? '#CE1126' : '#FFFFFF'} />
        ))}
        <g transform="translate(180, 200)">
          <path d="M-30,-40 L30,-40 L30,10 C30,30 0,50 0,50 C0,50 -30,30 -30,10 Z" fill="#007A3D" stroke="#FFD700" strokeWidth="4" />
          <line x1="0" y1="-25" x2="0" y2="25" stroke="#FFFFFF" strokeWidth="8" />
          <line x1="-15" y1="-12" x2="15" y2="-12" stroke="#FFFFFF" strokeWidth="6" />
          <line x1="-20" y1="5" x2="20" y2="5" stroke="#FFFFFF" strokeWidth="6" />
        </g>
      </svg>
    );
  }

  // 600_019. Republic of Benin (1967)
  if (id === 'old_flags_600_019' || normAnswer.includes('بنين')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="266.6" y="0" fill="#000000" />
        <rect width="600" height="133.3" y="266.6" fill="#007A3D" />
        <circle cx="300" cy="180" r="50" fill="#FFD700" />
      </svg>
    );
  }

  // 600_020. Mountainous Republic of the Northern Caucasus
  if (id === 'old_flags_600_020' || normAnswer.includes('الجبال لشعوب شمال القوقاز')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect key={i} width="600" height={400 / 7} y={i * (400 / 7)} fill={i % 2 === 0 ? '#007A3D' : '#FFFFFF'} />
        ))}
        <rect width="240" height="170" fill="#003893" />
        <circle cx="100" cy="85" r="35" fill="#FFD700" />
        <circle cx="110" cy="85" r="28" fill="#003893" />
      </svg>
    );
  }

  // 600_021. Golden Horde
  if (id === 'old_flags_600_021' || normAnswer.includes('القبيلة الذهبية')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#FFFFFF" />
        <circle cx="300" cy="200" r="70" fill="#CE1126" />
        <circle cx="315" cy="200" r="55" fill="#FFFFFF" />
      </svg>
    );
  }

  // 600_022. Kingdom of Sikkim
  if (id === 'old_flags_600_022' || normAnswer.includes('سيكيم')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#FFFFFF" stroke="#CE1126" strokeWidth="24" />
        <circle cx="300" cy="200" r="70" fill="#FFD700" stroke="#CE1126" strokeWidth="8" />
      </svg>
    );
  }

  // 600_023. Krushevo Republic (1903)
  if (id === 'old_flags_600_023' || normAnswer.includes('كروشوفو')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#CE1126" />
        <text x="300" y="215" fill="#FFD700" fontSize="30" fontWeight="bold" textAnchor="middle">СВОБОДА ИЛИ СМЪРТЪ</text>
      </svg>
    );
  }

  // 600_024. Kingdom of Prussia (1892-1918)
  if (id === 'old_flags_600_024' || normAnswer.includes('بروسيا')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="65" y="0" fill="#000000" />
        <rect width="600" height="270" y="65" fill="#FFFFFF" />
        <rect width="600" height="65" y="335" fill="#000000" />
        <g transform="translate(300, 200)">
          <path d="M-15,-60 L0,-40 L15,-60 L25,-40 L0,-10 L-25,-40 Z" fill="#000000" />
          <path d="M-20,-10 C-80,-50 -110,-10 -90,40 C-60,30 -40,20 -10,20 Z" fill="#000000" />
          <path d="M20,-10 C80,-50 110,-10 90,40 C60,30 40,20 10,20 Z" fill="#000000" />
          <polygon points="-12,-65 0,-85 12,-65" fill="#FFD700" />
        </g>
      </svg>
    );
  }

  // 600_025. Emirate of Beihan
  if (id === 'old_flags_600_025' || normAnswer.includes('بيحان')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="133.3" y="0" fill="#000000" />
        <rect width="600" height="133.3" y="133.3" fill="#FFFFFF" />
        <rect width="600" height="133.3" y="266.6" fill="#007A3D" />
        <circle cx="300" cy="200" r="45" fill="#CE1126" />
      </svg>
    );
  }

  // 600_026. Ouaddai Sultanate
  if (id === 'old_flags_600_026' || normAnswer.includes('واداي')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#FFCC00" />
        <circle cx="300" cy="200" r="70" fill="#007A3D" />
      </svg>
    );
  }

  // 600_027. Duchy of Modena and Reggio
  if (id === 'old_flags_600_027' || normAnswer.includes('مودينا')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="133.3" y="0" fill="#CE1126" />
        <rect width="600" height="133.3" y="133.3" fill="#FFFFFF" />
        <rect width="600" height="133.3" y="266.6" fill="#003893" />
      </svg>
    );
  }

  // 600_028. Italian Social Republic (Salo 1943-1945)
  if (id === 'old_flags_600_028' || normAnswer.includes('سالو') || normAnswer.includes('الاشتراكية الإيطالية')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="400" x="0" fill="#009246" />
        <rect width="200" height="400" x="200" fill="#FFFFFF" />
        <rect width="200" height="400" x="400" fill="#CE2B37" />
        <g transform="translate(300, 200)">
          <path d="M0,-40 L-30,20 L30,20 Z" fill="#000000" />
          <rect x="-10" y="20" width="20" height="30" fill="#000000" />
        </g>
      </svg>
    );
  }

  // 600_029. Principality of Bar / Antibari
  if (id === 'old_flags_600_029' || normAnswer.includes('أنتيباري') || normAnswer.includes('بار')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#003893" />
        <rect x="270" y="0" width="60" height="400" fill="#FFD700" />
        <rect x="0" y="170" width="600" height="60" fill="#FFD700" />
      </svg>
    );
  }

  // 600_030. Roman Republic (1798)
  if (id === 'old_flags_600_030' || normAnswer.includes('الجمهورية الرومانية')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="400" x="0" fill="#000000" />
        <rect width="200" height="400" x="200" fill="#FFFFFF" />
        <rect width="200" height="400" x="400" fill="#CE1126" />
      </svg>
    );
  }

  // 600_031. Ghaznavid Empire
  if (id === 'old_flags_600_031' || normAnswer.includes('الغزنويين') || normAnswer.includes('الغزنوية')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#007A3D" />
        <circle cx="300" cy="200" r="70" fill="#000000" />
        <circle cx="300" cy="200" r="50" fill="#007A3D" />
        <circle cx="300" cy="200" r="20" fill="#FFD700" />
      </svg>
    );
  }

  // 600_032. Principality of Wallachia
  if (id === 'old_flags_600_032' || normAnswer.includes('الأفلاق') || normAnswer.includes('والاشيا')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="133.3" y="0" fill="#003893" />
        <rect width="600" height="133.3" y="133.3" fill="#FFD700" />
        <rect width="600" height="133.3" y="266.6" fill="#CE1126" />
      </svg>
    );
  }

  // 600_033. Swedish Empire (1562-1650)
  if (id === 'old_flags_600_033' || normAnswer.includes('الإمبراطورية السويدية')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#005293" />
        <rect x="180" y="0" width="70" height="400" fill="#FFCD00" />
        <rect x="0" y="165" width="600" height="70" fill="#FFCD00" />
      </svg>
    );
  }

  // 600_034. Republic of Mahabad (1946)
  if (id === 'old_flags_600_034' || normAnswer.includes('مهاباد')) {
    return (
      <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="133.3" y="0" fill="#007A3D" />
        <rect width="600" height="133.3" y="133.3" fill="#FFFFFF" />
        <rect width="600" height="133.3" y="266.6" fill="#CE1126" />
        <circle cx="300" cy="200" r="45" fill="#FFD700" />
      </svg>
    );
  }

  // Universal Fallback: If image URL exists and hasn't failed, try loading through proxy, otherwise render crisp vector banner
  if (fallbackUrl && fallbackUrl.startsWith('http') && !imgFailed) {
    const proxyUrl = fallbackUrl.includes('wsrv.nl')
      ? fallbackUrl
      : `https://wsrv.nl/?url=${encodeURIComponent(fallbackUrl)}`;

    return (
      <img
        src={proxyUrl}
        alt={normAnswer || 'علم الدولة'}
        className={className}
        loading="eager"
        onError={() => setImgFailed(true)}
      />
    );
  }

  // Clean Default Vector Flag Banner
  return (
    <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="400" fill="#1E293B" rx="8" />
      <rect x="20" y="20" width="560" height="360" fill="#0F172A" stroke="#475569" strokeWidth="4" rx="6" />
      <circle cx="300" cy="180" r="60" fill="#334155" />
      <path d="M275,150 L325,150 L315,185 L335,185 L285,225 L295,195 L275,195 Z" fill="#F59E0B" />
      <text x="300" y="290" fill="#E2E8F0" fontSize="24" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
        {normAnswer || 'علم تاريخي'}
      </text>
    </svg>
  );
};
