import { useState, useEffect } from "react";
import SectionContainer from "../../SectionContainer";
import Globe from "/images/globe.gif";
import Dev from "/images/dev.gif";
import Percent from "/images/percent.gif";

function Company() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const images = [
    <img className="w-full h-full object-cover" src={Globe} alt="Globe" />,
    <img className="w-full h-full object-cover" src={Dev} alt="Dev" />,
    <img className="w-full h-full object-cover" src={Percent} alt="Percent" />,
  ];

  const imageDescriptions = [
    "Near shore means same time zone",
    "100% the right skillset for your business",
    "Of our clients return to work with us",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
      setCurrentText(
        (currentText) => (currentText + 1) % imageDescriptions.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionContainer className="py-20 md:py-28" id="company">
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-4">
        <h2 className="font-zwodrei font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-[rgba(0,0,0,0.8)]">
          Crafting tailored teams for your business needs
        </h2>
        <div className="grid md:grid-cols-8 lg:grid-cols-11 md:mt-8 lg:mt-0">
          <div className="md:col-span-4 lg:col-span-6 md:border-r-4 md:border-black md:pr-8 md:mt-4 lg:mt-16">
            <p className="font-roboto 2xl:text-lg mt-7">
              We help businesses like yours achieve their goals through software
              improvements. We support the strategic implementation of software
              solutions by working with teams of skilled software developers
              from Central and South America.
            </p>
            <h3 className="font-roboto font-extrabold text-lg lg:text-xl 2xl:text-2xl text-black mt-8 lg:mt-16">
              Why nearshore?
            </h3>
            <p className="font-roboto 2xl:text-lg mt-2 lg:mt-3">
              The best team with the skillset you need could be anywhere. That’s
              why expanding our search while also taking into account your
              budget needs and timezone leads us to Latin America.
            </p>
          </div>
          <div className="md:col-start-5 md:col-span-4 lg:col-span-4 md:pl-8">
            <div className="grid lg:grid-cols-6 place-items-center md:place-items-start ">
              <div className="w-[13.438rem] h-[13.438rem] 2xl:w-[16rem] 2xl:h-[16rem] lg:col-span-6 mt-4 md:mt-7 lg:mt-14 md:ml-16">
                {images[currentImage]}
              </div>
            </div>
            <p className="md:max-w-xs sm:col-start-3 font-zwodrei font-bold text-[1.375rem] lg:text-2xl 2xl:text-[1.8rem] mt-5 lg:mt-9">
              {imageDescriptions[currentText]}
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Company;
