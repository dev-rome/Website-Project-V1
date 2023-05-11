import { useState, useEffect } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function LogoCarousel() {
  const [visibleSlides, setVisibleSlides] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setVisibleSlides(3);
      } else {
        setVisibleSlides(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    "/images/staples.png",
    "/images/zipcar.png",
    "/images/ellipse.png",
    "/images/indigo.png",
    "/images/gloo.png",
  ];

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={50}
      totalSlides={items.length}
      visibleSlides={visibleSlides}
      infinite={true}
      isIntrinsicHeight={true}
      isPlaying={true}
      interval={2000}
    >
      <Slider>
        {items.map((item, index) => (
          <Slide index={index} key={index}>
            <img className="w-[85px]" src={item} role="presentation" alt="" />
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
}

export default LogoCarousel;
