import React, { useState } from 'react';
import { QrCode as QrIcon } from 'lucide-react';

interface QrCodeDisplayProps {
  value: string;
  size?: number;
  className?: string;
}

export const QrCodeDisplay: React.FC<QrCodeDisplayProps> = ({
  value,
  size = 175,
  className = '',
}) => {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // استخدام API الموثوق api.qrserver.com مع ترميز UTF-8 للنص الصريح المباشر
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
    value || 'بيبسي'
  )}&margin=8&charset-source=UTF-8&charset-target=UTF-8`;

  return (
    <div
      className={`relative inline-block p-2 sm:p-2.5 bg-white rounded-xl sm:rounded-2xl shadow-xl border-2 sm:border-3 border-amber-400/90 transition-transform duration-300 hover:scale-105 ${className}`}
    >
      {!loaded && !hasError && (
        <div
          style={{ width: size, height: size }}
          className="flex items-center justify-center bg-white rounded-lg animate-pulse"
        >
          <QrIcon className="w-8 h-8 text-amber-500 animate-spin" />
        </div>
      )}

      {hasError ? (
        <div
          style={{ width: size, height: size }}
          className="flex flex-col items-center justify-center bg-slate-900 text-amber-300 text-xs rounded-lg p-2 text-center"
        >
          <span className="font-bold mb-1">الكلمة المطلوبة:</span>
          <span className="text-base text-white font-black">{value}</span>
        </div>
      ) : (
        <img
          src={qrApiUrl}
          alt={`QR Code: ${value}`}
          width={size}
          height={size}
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
          style={{
            width: size,
            height: size,
            display: loaded ? 'block' : 'none',
            margin: 'auto',
          }}
          className="rounded-lg object-contain"
          loading="eager"
        />
      )}
    </div>
  );
};

