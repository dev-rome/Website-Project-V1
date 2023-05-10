import { Icon } from "@iconify/react";
import { caseStudyData } from "./CaseStudyData";
import SectionContainer from "../SectionContainer";
import Button from "../Button";

function CaseStudyInfo({ slug }) {
  const caseStudy = caseStudyData.find((data) => data.slug === slug);
  const {
    src,
    alt,
    description,
    descriptionTwo,
    descriptionThree,
    solution,
    resultsAndBenefits,
  } = caseStudy;

  const handleBack = () => {
    window.location.href = "/#clients";
  };

  return (
    <SectionContainer className="min-h-screen bg-[#DFE8E8] pt-36 px-4 lg:px-0">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-12 flex flex-col sm:flex-row justify-between gap-8">
            <img className="w-44 order-2 sm:order-none" src={src} alt={alt} />
            <div className="flex items-center">
              <Button caseStudy onClick={handleBack}>
                All Our Case Studies
              </Button>
              <Icon className="text-2xl" icon="ic:round-keyboard-arrow-right" />
            </div>
          </div>
          <div className="col-span-12 mt-10">
            <p className="font-roboto">{description}</p>
            <ol className="list-decimal font-roboto pl-6">
              {solution.solutionList.map(([title, item], index) => {
                return (
                  <li key={index + 1}>
                    <span className="font-bold">{title}</span> {item}
                  </li>
                );
              })}
            </ol>
            <p className="font-roboto">{descriptionTwo}</p>
          </div>
          <p className="col-span-3 font-roboto font-bold text-lg mt-10">
            Results and Benefits
          </p>
          <div className="col-span-12 mt-5">
            <p className="font-roboto">{descriptionThree}</p>
            <ul className="list-disc font-roboto pl-6">
              {resultsAndBenefits.benefitsList.map((item, index) => {
                return <li key={index + 1}>{item}</li>;
              })}
            </ul>
            <p className="font-roboto pb-10">{resultsAndBenefits.results}</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default CaseStudyInfo;
