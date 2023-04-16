import { Icon } from "@iconify/react";
import Button from "../Button";
import SectionContainer from "../SectionContainer";
import { companyData } from "./CaseStudieData";

function CaseStudies() {
  return (
    <SectionContainer className="h-screen">
      <div className="h-[30vh] bg-blue-200">
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
          <h1 className=" font-zwodrei font-bold text-4xl text-white pt-32">
            Case Studies
          </h1>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <div className="flex items-center pt-12">
          <Icon
            className="self-end text-2xl"
            icon="ic:round-keyboard-arrow-left"
          />
          <Button back>Back to homepage</Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 place-items-center sm:place-items-start gap-y-5 mt-12">
          {companyData.map((item) => {
            return <img src={item.src} alt={item.alt} />;
          })}
        </div>
      </div>
    </SectionContainer>
  );
}

export default CaseStudies;
