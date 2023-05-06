import { useState } from "react";
import { clientOne, clientTwo } from "./ClientsData";
import { Icon } from "@iconify/react";
import SectionContainer from "../../SectionContainer";
import Staples from "/images/staples-logo.png";
import ZipCar from "/images/zipcar-logo.png";
import Testimonial from "../TestimonialSection/Testimonial";
import Button from "../../Button";

function Clients() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleClick = () => {
    window.location.href = `/case-studies/${
      isActive ? clientTwo.slug : clientOne.slug
    }`;
  };

  return (
    <SectionContainer className="pt-20 lg:pt-48" id="clients">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-zwodrei font-bold text-2xl lg:text-4xl text-[rgba(0,0,0,0.8)]">
          Working with great leaders
        </h2>
        <div className="grid md:grid-cols-5 lg:grid-cols-11 mt-6 lg:mt-12">
          <div className="col-span-2 md:col-span-1 lg:row-start-1 lg:col-span-2 flex gap-3 md:items-start lg:gap-2 md:pr-3">
            <img
              className={`cursor-pointer ${
                isActive ? " " : `border-2 border-black`
              }`}
              onClick={handleToggle}
              src={Staples}
              alt="Staples"
            />
            <img
              className={`cursor-pointer ${
                isActive ? `border-2 border-black` : " "
              }`}
              onClick={handleToggle}
              src={ZipCar}
              alt="Zipcar"
            />
          </div>
          <div className="col-span-7 md:col-start-3 lg:col-start-5 md:border-l-4 md:border-black md:pl-4">
            <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-3 mt-5 md:mt-0">
              {!isActive ? (
                <img src={clientOne.title} alt="Staples" />
              ) : (
                <img src={clientTwo.title} alt="Zipcar" />
              )}
              <div className="col-start-4 col-span-3 md:col-start-4 lg:col-start-5">
                <ul>
                  {!isActive
                    ? clientOne.augmentations.map((augmentation) => (
                        <li className="font-roboto text-lg">{augmentation}</li>
                      ))
                    : clientTwo.augmentations.map((augmentation) => (
                        <li className="font-roboto text-lg">{augmentation}</li>
                      ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-11">
              <p className="font-roboto text-lg lg:mt-7">Problem</p>
              <div className="mt-4">
                <p className="font-roboto">
                  {!isActive ? clientOne.problem : clientTwo.problem}
                </p>
                <p className="font-roboto mt-4 lg:mt-6">
                  {!isActive ? clientOne.goal : clientTwo.goal}
                </p>
              </div>
              <div className="mt-6">
                <p className="font-roboto">
                  {!isActive ? clientOne.offer : clientTwo.offer}
                </p>
                <ul className="mt-4 lg:mt-6 pl-4 lg:pl-6">
                  {!isActive
                    ? clientOne.benefits.map((benefit) => (
                        <li className="list-disc font-roboto">{benefit}</li>
                      ))
                    : clientTwo.benefits.map((benefit) => (
                        <li className="list-disc font-roboto">{benefit}</li>
                      ))}
                </ul>
              </div>
            </div>
            <div className="flex items-center mt-8 lg:mt-14">
              <Button caseStudy onClick={handleClick}>
                Read Full Case Study
              </Button>
              <Icon
                className="self-end text-2xl"
                icon="ic:round-keyboard-arrow-right"
              />
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
    </SectionContainer>
  );
}

export default Clients;
