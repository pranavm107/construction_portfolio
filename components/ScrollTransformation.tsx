'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollFrames } from '@/hooks/useScrollFrames';
import { HelpCircle } from 'lucide-react';

const stages = [
  {
    title: "Vision Begins",
    subtitle: "Planning. Precision. Possibility.",
    minFrame: 1,
    maxFrame: 40,
  },
  {
    title: "Breaking Ground",
    subtitle: "Engineering the foundation.",
    minFrame: 41,
    maxFrame: 90,
  },
  {
    title: "Structure Rising",
    subtitle: "Where design meets craftsmanship.",
    minFrame: 91,
    maxFrame: 140,
  },
  {
    title: "Architectural Excellence",
    subtitle: "Built with enduring quality.",
    minFrame: 141,
    maxFrame: 200,
  },
  {
    title: "The Final Landmark",
    subtitle: "A signature destination completed.",
    minFrame: 201,
    maxFrame: 240,
  }
];

export default function ScrollTransformation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const activeStageIdxRef = useRef(0);

  const { images, loaded, progress: preloadProgress } = useScrollFrames('/frames', 240);

  const TOTAL_FRAMES = 240;
  
  // High performance interpolation refs to prevent re-renders
  const targetFrameRef = useRef(0);
  const interpolatedFrameRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  // Resize handler
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    function handleResize() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial sizing

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [loaded]);

  // Main scroll and frame interpolation loop
  useEffect(() => {
    if (!loaded || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function draw(frameIndex: number) {
      if (!canvas || !ctx) return;
      const img = images[frameIndex];
      
      if (img && img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Aspect cover logic
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasRatio > imgRatio) {
          drawHeight = canvas.width / imgRatio;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgRatio;
          offsetX = (canvas.width - drawWidth) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    }

    function renderLoop() {
      // Smooth interpolation math: current = current + (target - current) * ease
      const ease = 0.12; // Easing constant for smooth momentum feeling
      const diff = targetFrameRef.current - interpolatedFrameRef.current;
      
      if (Math.abs(diff) > 0.05) {
        interpolatedFrameRef.current += diff * ease;
        const drawIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.floor(interpolatedFrameRef.current))
        );
        draw(drawIndex);
      }

      rafIdRef.current = requestAnimationFrame(renderLoop);
    }

    function handleScroll() {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewHeight = window.innerHeight;

      // Calculate scroll progress within the pinned sticky section
      const scrollableHeight = sectionHeight - viewHeight;
      const scrolled = -rect.top;

      let progress = scrolled / scrollableHeight;
      progress = Math.max(0, Math.min(1, progress));

      // Map progress to frame index (0 to 239)
      const frameIndex = progress * (TOTAL_FRAMES - 1);
      targetFrameRef.current = frameIndex;

      // Identify active stage based on current target frame (1-based frame numbers)
      const currentFrameNumber = Math.floor(frameIndex) + 1;
      let matchingStageIdx = 0;
      for (let i = 0; i < stages.length; i++) {
        if (currentFrameNumber >= stages[i].minFrame && currentFrameNumber <= stages[i].maxFrame) {
          matchingStageIdx = i;
          break;
        }
      }

      // Only set state when stage transitions to minimize React re-renders
      if (matchingStageIdx !== activeStageIdxRef.current) {
        activeStageIdxRef.current = matchingStageIdx;
        setActiveStageIdx(matchingStageIdx);
      }
    }

    // Start requestAnimationFrame render loop
    rafIdRef.current = requestAnimationFrame(renderLoop);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Draw initial frame
    draw(0);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [loaded, images]);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-primary">
      {/* Sticky Canvas Viewport */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-primary">
        
        {/* Loading Screen Overlay */}
        <AnimatePresence>
          {!loaded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-[#111111] text-warm-white z-40"
            >
              <div className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin mb-6" />
              <h4 className="font-display font-bold text-sm tracking-widest text-accent uppercase mb-2">
                Loading Construction Journey
              </h4>
              <p className="font-mono text-[10px] text-neutral-500 tracking-wider">
                PRELOADING FRAMES: {preloadProgress}%
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Canvas Element */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />

        {/* Dark Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-transparent to-primary/35 pointer-events-none z-10" />

        {/* Technical Blueprint Overlay lines */}
        <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-[0.03] z-10" />

        {/* Storytelling Text Overlays */}
        {loaded && (
          <div className="absolute inset-0 z-20 flex flex-col justify-end items-start p-8 md:p-24 select-none pointer-events-none max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStageIdx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
                className="dark-glass rounded-3xl p-8 md:p-10 border border-white/5 max-w-lg shadow-2xl"
              >
                <span className="font-mono text-[10px] text-accent font-bold tracking-widest uppercase mb-2 block">
                  // Phase 0{activeStageIdx + 1} // evolution
                </span>
                
                <h2 className="font-display font-black text-3xl md:text-4xl text-warm-white mb-3 tracking-tight leading-none">
                  {stages[activeStageIdx].title}
                </h2>
                
                <p className="font-sans text-neutral-400 text-sm leading-relaxed">
                  {stages[activeStageIdx].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Floating coordinate markings for architectural HUD feel */}
        {loaded && (
          <>
            <div className="absolute top-8 left-8 md:left-20 z-20 hidden sm:block font-mono text-[8px] text-neutral-500 uppercase tracking-widest pointer-events-none select-none">
              AURA HQ // DEVELOPMENT SEQUENCE
            </div>
            <div className="absolute top-8 right-8 md:right-20 z-20 hidden sm:block font-mono text-[8px] text-neutral-500 uppercase tracking-widest pointer-events-none select-none">
              FRAME CAPTURE SYSTEM 240 // ISO 400
            </div>
          </>
        )}

      </div>
    </div>
  );
}
