import React, { useEffect, useState } from 'react'
import type { CarouselProps } from "./CarouselType";

type Props = {}

const Carousel : React.FC<CarouselProps> = ({
  children,
  autoPlay = false,
  interval = 3000,
  showArrows = true,
  showDots = true,
  loop = true,
}) => {
  


  const slides = React.Children.toArray(children);

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => {
      if (prev === slides.length - 1) {
        return loop ? 0 : prev;
      }

      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrent((prev) => {
      if (prev === 0) {
        return loop ? slides.length - 1 : prev;
      }

      return prev - 1;
    });
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, current]);

  if (slides.length === 0) {
    return null;
  }

  return (
    <div>Carousel</div>
  )
}

export default Carousel