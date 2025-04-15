import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FlippingImageGallery = ({ images, interval = 5000, width = '100%', height = '500px' }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const containerRef = useRef(null);

  // Auto-rotate through images
  useEffect(() => {
    if (hovering) return; // Pause animation when hovering

    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, hovering]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-xl"
      style={{ width, height, perspective: '1200px' }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {images.map((src, index) => {
        // Calculate if this image is active or next in queue
        const isActive = index === activeIndex;
        const isNext = index === (activeIndex + 1) % images.length;

        return (
          <motion.div
            key={src}
            className="absolute inset-0 rounded-xl border-4 border-white shadow-xl"
            style={{
              zIndex: isActive ? 10 : (isNext ? 5 : 1),
              filter: isActive ? 'none' : 'brightness(0.9)',
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotateY: isActive ? 0 : (isNext ? -90 : 90),
              x: isActive ? 0 : (isNext ? '100%' : '-100%'),
              y: 0,
              scale: isActive ? 1 : 0.9,
              opacity: isActive ? 1 : (isNext ? 0.8 : 0)
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
              opacity: { duration: 0.5 }
            }}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        );
      })}

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={`dot-${index}`}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === activeIndex ? 'bg-primary' : 'bg-white/50'
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FlippingImageGallery;
