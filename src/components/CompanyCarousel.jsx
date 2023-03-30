import React, { useState, useEffect } from "react";
import Image from "./Image";
import Globe from "/images/globe.gif";
import Dev from "/images/dev.gif";
import Percent from "/images/percent.gif";

function ComapnyCarousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    <Image src={Globe} width={300} height={300} alt={"Globe"} />,
    <Image src={Dev} width={300} height={300} alt={"Dev"} />,
    <Image src={Percent} width={400} height={400} alt={"Percent"} />,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      <div>{images[currentImage]}</div>
    </div>
  );
}

export default ComapnyCarousel;
