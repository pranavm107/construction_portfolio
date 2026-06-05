'use client';

import { useState, useEffect, useRef } from 'react';

export function useScrollFrames(basePath: string, totalFrames: number) {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const loadingInitiated = useRef(false);

  useEffect(() => {
    // Prevent double invocation in React 19 Strict Mode
    if (loadingInitiated.current) return;
    loadingInitiated.current = true;

    let loadedCount = 0;
    const tempImages: HTMLImageElement[] = [];

    // Pre-allocate array
    for (let i = 0; i < totalFrames; i++) {
      tempImages.push(null as any);
    }

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `${basePath}/ezgif-frame-${frameNum}.jpg`;
      
      img.onload = () => {
        // Maintain exact order in preallocated array
        tempImages[i - 1] = img;
        loadedCount++;
        
        const currentProgress = Math.round((loadedCount / totalFrames) * 100);
        setProgress(currentProgress);

        if (loadedCount === totalFrames) {
          // Filter out any failed null values
          const cleanImages = tempImages.filter(Boolean);
          setImages(cleanImages);
          setLoaded(true);
        }
      };

      img.onerror = () => {
        // Skip failed frames gracefully without freezing preloader
        loadedCount++;
        const currentProgress = Math.round((loadedCount / totalFrames) * 100);
        setProgress(currentProgress);
        
        if (loadedCount === totalFrames) {
          const cleanImages = tempImages.filter(Boolean);
          setImages(cleanImages);
          setLoaded(true);
        }
      };
    }
  }, [basePath, totalFrames]);

  return { images, loaded, progress };
}
