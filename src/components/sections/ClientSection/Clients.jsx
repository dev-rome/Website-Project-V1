import { useState } from "react";
import { clientOne, clientTwo } from "./ClientsData";
import SectionContainer from "../../SectionContainer";
import Staples from "/images/staples-logo.png";
import ZipCar from "/images/zipcar-logo.png";
import Testimonial from "../TestimonialSection/Testimonial";
import Button from "../../Button";

function Clients() {
  const [isActive, setIsActive] = useState("clientOne");

  const handleToggle = (client) => {
    if (client !== isActive) {
      setIsActive(client);
    }
  };

  const clients = isActive === "clientOne" ? clientOne : clientTwo;

  return (
    <SectionContainer
      className="min-h-screen flex flex-col justify-center items-center pt-20 md:pt-0 py-24"
      id="clients"
    >
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-4">
        <h2 className="font-zwodrei font-bold text-2xl lg:text-4xl 2xl:text-5xl text-[rgba(0,0,0,0.8)]">
          Working with great leaders
        </h2>
        <div className="grid md:grid-cols-5 lg:grid-cols-11 mt-6 lg:mt-12">
          <div className="col-span-2 md:col-span-1 lg:row-start-1 lg:col-span-2 flex gap-3 md:items-start lg:gap-2 md:pr-3">
            <img
              className={`cursor-pointer ${
                isActive === "clientOne" ? "border-2 border-black" : ""
              }`}
              onClick={() => handleToggle("clientOne")}
              src={Staples}
              alt="Staples"
            />
            <img
              className={`cursor-pointer ${
                isActive === "clientTwo" ? "border-2 border-black" : ""
              }`}
              onClick={() => handleToggle("clientTwo")}
              src={ZipCar}
              alt="Zipcar"
            />
          </div>
          <div className="col-span-7 md:col-start-3 lg:col-start-5 md:border-l-4 md:border-black md:pl-4">
            <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-3 mt-5 md:mt-0">
              <img src={clients.src} alt={clients.alt} />
              <div className="col-start-4 col-span-3 md:col-start-4 lg:col-start-5">
                <ul>
                  {clients.augmentations.map((augmentation) => (
                    <li key={augmentation} className="font-roboto text-lg 2xl:text-xl">
                      {augmentation}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-11">
              <p className="font-roboto text-lg 2xl:text-xl lg:mt-7">Problem</p>
              <div className="mt-4">
                <p className="font-roboto 2xl:text-lg">{clients.problem}</p>
                <p className="font-roboto 2xl:text-lg mt-4 lg:mt-6">{clients.goal}</p>
              </div>
              <div className="mt-6">
                <p className="font-roboto 2xl:text-lg">{clients.offer}</p>
                <ul className="mt-4 lg:mt-6 pl-4 lg:pl-6">
                  {clients.benefits.map((benefit) => (
                    <li key={benefit} className="list-disc font-roboto 2xl:text-lg">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a
              className="custom-case-study-button flex w-[13rem] group"
              href={`/case-studies/${clients.slug}`}
            >
              <Button className="flex items-center !bg-transparent italic mt-8 lg:mt-14">
                <span className="gradient-text mr-2">Read Full Case Study</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 18"
                  fill="none"
                  className="text-2xl transform transition-transform duration-500 ease-in-out group-hover:translate-x-2"
                  width="10"
                  height="12"
                >
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                      gradientTransform="rotate(90)"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#003a5a", stopOpacity: 1 }}
                      />
                      <stop
                        offset="42.71%"
                        style={{ stopColor: "#005382", stopOpacity: 1 }}
                      />
                      <stop
                        offset="55.73%"
                        style={{ stopColor: "#00934c", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#00522b", stopOpacity: 1 }}
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M2 2L12.2479 9L2 16"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-500 ease-in-out"
                  />
                  <path
                    d="M2 2L12.2479 9L2 16"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                  />
                </svg>
              </Button>
            </a>
          </div>
        </div>
      </div>
      <Testimonial />
    </SectionContainer>
  );
}

export default Clients;
