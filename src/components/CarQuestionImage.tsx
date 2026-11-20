import React, { useEffect, useState } from 'react';

interface CarQuestionImageProps {
  primarySrc: string;
  originalPartSrc: string;
  alt: string;
  className: string;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

// Keep a player's valid edited image. If its URL fails, use the original
// photograph for the SAME car question, never another part's image.
export function CarQuestionImage({
  primarySrc,
  originalPartSrc,
  alt,
  className,
  referrerPolicy,
}: CarQuestionImageProps) {
  const [failedUrls, setFailedUrls] = useState<string[]>([]);

  useEffect(() => {
    setFailedUrls([]);
  }, [primarySrc, originalPartSrc]);

  const preferred = primarySrc || originalPartSrc;
  const activeSrc = !failedUrls.includes(preferred)
    ? preferred
    : !failedUrls.includes(originalPartSrc)
      ? originalPartSrc
      : null;

  if (!activeSrc) {
    return (
      <span role="status" className="text-amber-300 text-sm font-bold py-4">
        تعذر تحميل صورة قطعة السيارة
      </span>
    );
  }

  return (
    <img
      src={activeSrc}
      alt={alt}
      className={className}
      referrerPolicy={referrerPolicy}
      loading="eager"
      onError={() => setFailedUrls((previous) =>
        previous.includes(activeSrc) ? previous : [...previous, activeSrc]
      )}
    />
  );
}
