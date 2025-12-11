import { useState, useEffect } from "react";
import slideshow1 from "@/assets/slideshow-1.jpg";
import slideshow2 from "@/assets/slideshow-2.jpg";
import slideshow3 from "@/assets/slideshow-3.jpg";

const slideshowImages = [slideshow1, slideshow2, slideshow3];

const ImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
        setIsTransitioning(false);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slideshowImages.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? (isTransitioning ? "opacity-0" : "opacity-100") : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              <img src={src} alt={`Travel photo ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      ))}
      {/* Foggy overlay */}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
    </div>
  );
};

export default ImageSlideshow;
