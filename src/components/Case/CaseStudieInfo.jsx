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

  return (
    <SectionContainer className="min-h-screen bg-[#DFE8E8] pt-36 px-4 lg:px-0">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-12 flex flex-col sm:flex-row justify-between gap-8">
            <img className="w-44 order-2 sm:order-none" src={src} alt={alt} />
            <div className="flex items-center">
              <a
                className="swup-link custom-case-study-button group"
                href="/#clients"
              >
                <Button className="flex items-center italic">
                  <span className="gradient-text mr-2">
                    All Our Case Studies
                  </span>
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
          <div className="col-span-12 mt-10">
            <p className="font-roboto">{description}</p>
            <ol className="list-decimal font-roboto pl-6">
              {solution.solutionList.map(([title, item]) => {
                return (
                  <li key={title}>
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
              {resultsAndBenefits.benefitsList.map((item) => {
                return <li key={item}>{item}</li>;
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
