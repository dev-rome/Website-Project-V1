import Staples from "/images/staples-logo.png";
import ZipCar from "/images/zipcar-logo.png";
import StaplesRed from "/images/staples-red.png";
import SectionContainer from "./SectionContainer";
import Testimonial from "./Testimonial";
import Button from "../Button";

function Clients() {
  return (
    <SectionContainer className="pt-20 lg:pt-48" id="clients">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-zwodrei font-bold text-2xl lg:text-4xl text-[rgba(0,0,0,0.8)]">
          Working with great leaders
        </h2>
        <div className="grid md:grid-cols-5 lg:grid-cols-11 mt-6 lg:mt-12">
          <div className="col-span-2 md:col-span-1 lg:row-start-1 lg:col-span-2 flex gap-3 md:items-start lg:gap-2 md:pr-3">
            <img src={Staples} alt="Staples" />
            <img src={ZipCar} alt="Zipcar" />
          </div>
          <div className="col-span-7 md:col-start-3 lg:col-start-5 md:border-l-4 md:border-black md:pl-4">
            <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-3 mt-5 md:mt-0">
              <img src={StaplesRed} alt="Staples Red" />
              <div className="col-start-4 col-span-3 md:col-start-4 lg:col-start-5">
                <ul>
                  <li className="font-roboto text-lg">Staffing Augmentation</li>
                  <li className="font-roboto text-lg">3 Month Project</li>
                  <li className="font-roboto text-lg">Team size</li>
                </ul>
              </div>
            </div>
            <div className=" lg:col-span-11">
              <p className="font-roboto text-lg lg:mt-7">Problem</p>
              <div className="mt-4">
                <p className="font-roboto">
                  Staples was facing difficulties in attracting and retaining
                  talented software developers for its development teams. As a
                  result, Staples faced delays in product development, lower
                  productivity, and increased costs.
                </p>
                <p className="font-roboto mt-4 lg:mt-6">
                  The goal of this initiative was to increase the company's pool
                  of skilled software developers.
                </p>
              </div>
              <div className="mt-6">
                <p className="font-roboto">
                  With Timber & Hatchet offering nearshore staffing in
                  development teams it offers Staples several benefits to the
                  company, including:
                </p>
                <ul className="mt-4 lg:mt-6 pl-4 lg:pl-6">
                  <li className="list-disc">Faster Product Development</li>
                  <li className="list-disc">Improved Product Quality</li>
                  <li className="list-disc">Reduced Costs</li>
                  <li className="list-disc">Increased Productivity</li>
                </ul>
              </div>
              <Button className="flex w-[11.563rem] mt-8 lg:mt-14" caseStudy>
                Read Full Case Study
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
    </SectionContainer>
  );
}

export default Clients;
