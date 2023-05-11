import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function LogoCarousel() {
  const items = [
    <img
      className="w-[85px]"
      src="/images/staples.png"
      role="presentation"
      alt="Staples"
    />,
    <img
      className="w-[85px]"
      src="/images/zipcar.png"
      role="presentation"
      alt="Zipcar"
    />,
    <img
      className="w-[85px]"
      src="/images/ellipse.png"
      role="presentation"
      alt="Ellipse"
    />,
    <img
      className="w-[85px]"
      src="/images/indigo.png"
      role="presentation"
      alt="Indigo"
    />,
    <img
      className="w-[85px]"
      src="/images/gloo.png"
      role="presentation"
      alt="Gloo"
    />,
  ];

  const responsive = {
    0: { items: 2 },
    640: { items: 3 },
    1024: { items: 4 },
  };

  return (
    <AliceCarousel
      items={items}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlayInterval={2000}
      animationDuration={600}
      animationEasingFunction="linear"
      disableDotsControls
      disableButtonsControls
    />
  );
}

export default LogoCarousel;
