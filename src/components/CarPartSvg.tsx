import React from 'react';

interface CarPartSvgProps {
  id: string;
  className?: string;
}

export const CarPartSvg: React.FC<CarPartSvgProps> = ({ id, className = "max-h-48 sm:max-h-56 w-auto object-contain rounded-xl drop-shadow-md" }) => {
  // Extract canonical car key (e.g. "car_16" from "car_16", "16", or "/car_parts/car_16.jpg")
  let cleanKey = id || 'car_16';
  if (cleanKey.includes('/')) {
    const match = cleanKey.match(/car_(\d+)/);
    if (match) {
      cleanKey = `car_${match[1]}`;
    }
  } else if (!cleanKey.startsWith('car_') && !isNaN(Number(cleanKey))) {
    cleanKey = `car_${cleanKey}`;
  }

  const imageSrc = `/car_parts/${cleanKey}.jpg`;

  return (
    <img
      src={imageSrc}
      alt="صورة قطعة السيارة"
      className={className}
      onError={(e) => {
        const target = e.currentTarget;
        if (!target.src.includes('car_16.jpg')) {
          target.src = '/car_parts/car_16.jpg';
        }
      }}
    />
  );
};

