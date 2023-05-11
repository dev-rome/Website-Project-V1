// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";

import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function LogoCarousel() {
  // const items = [
  //   <img
  //     className="w-[85px]"
  //     src="/images/staples.png"
  //     role="presentation"
  //     alt="Staples"
  //   />,
  //   <img
  //     className="w-[85px]"
  //     src="/images/zipcar.png"
  //     role="presentation"
  //     alt="Zipcar"
  //   />,
  //   <img
  //     className="w-[85px]"
  //     src="/images/ellipse.png"
  //     role="presentation"
  //     alt="Ellipse"
  //   />,
  //   <img
  //     className="w-[85px]"
  //     src="/images/indigo.png"
  //     role="presentation"
  //     alt="Indigo"
  //   />,
  //   <img
  //     className="w-[85px]"
  //     src="/images/gloo.png"
  //     role="presentation"
  //     alt="Gloo"
  //   />,
  // ];

  // const responsive = {
  //   0: { items: 2 },
  //   640: { items: 3 },
  //   1024: { items: 4 },
  // };

  // return (
  //   <AliceCarousel
  //     items={items}
  //     responsive={responsive}
  //     infinite={true}
  //     autoPlay={true}
  //     autoPlayInterval={2000}
  //     animationDuration={600}
  //     animationEasingFunction="linear"
  //     disableDotsControls
  //     disableButtonsControls
  //   />
  // );
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
