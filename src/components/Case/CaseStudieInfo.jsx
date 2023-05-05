import { Icon } from "@iconify/react";
import Staples from "/images/staples-red.png";
import SectionContainer from "../SectionContainer";
import Button from "../Button";

function CaseStudieInfo() {
  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <SectionContainer className="min-h-screen bg-[#DFE8E8] pt-36 px-4 lg:px-0">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-12 flex flex-col sm:flex-row justify-between gap-8">
            <img className="w-44 order-2 sm:order-none" src={Staples} alt="" />
            <div className="flex items-center">
              <Button caseStudy onClick={handleBack}>
                All Our Case Studies
              </Button>
              <Icon className="text-2xl" icon="ic:round-keyboard-arrow-right" />
            </div>
          </div>
          <div className="col-span-12 mt-10">
            <p className="font-roboto">
              Timber and Hatchet will address Staples challenges in attracting
              and retaining talented software developers by implementing the
              following solution:
            </p>
            <ol className="list-decimal font-roboto pl-6">
              <li>
                <p>
                  <span className="font-extrabold">
                    Research and Identify Potential Staff:
                  </span>
                  Timber and Hatchet can research and identify potential
                  nearshore locations that have a large pool of skilled software
                  developers. Timber and Hatchet can help to screen, interview,
                  and provide high-quality developers to work on this project
                  with the company.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-extrabold">Set Up Remote Teams:</span>{" "}
                  We curate teams consisting of nearshore software developers to
                  work in collaboration with its existing development teams.
                  These remote teams will provide additional resources and
                  expertise, allowing the company to accelerate product
                  development and increase productivity.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-extrabold">
                    Communication and Collaboration Tools:
                  </span>
                  In order to ensure effective collaboration between its remote
                  and on-site teams, Timber and Hatchet implemented
                  communication and collaboration tools such as project
                  management software, and instant messaging.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-extrabold">
                    Provide Training and Professional Development:
                  </span>
                  Timber and Hatchet provides training and professional
                  development opportunities. This will help to improve the
                  skills of its developers and increase the overall quality of
                  its products.
                </p>
              </li>
            </ol>
            <p className="font-roboto">
              By implementing these steps, Staples can successfully augment its
              development teams with nearshore staffing, increasing its pool of
              talented software developers, reducing delays in product
              development, increasing productivity, and reducing costs.
            </p>
          </div>
          <p className="col-span-3 font-roboto font-bold text-lg mt-10">
            Results and Benefits
          </p>
          <div className="col-span-12 mt-5">
            <p className="font-roboto">
              With Timber & Hatchet offering nearshore staffing in development
              teams it offers Staples several benefits to the company,
              including:
            </p>
            <ul className="list-disc font-roboto pl-6">
              <li>Faster Product Development</li>
              <li>Improved Product Quality</li>
              <li>Reduced Costs</li>
              <li>Increased Productivity</li>
            </ul>
            <p className="font-roboto pb-10">
              Overall improve its product development cycle, increase its pool
              of skilled developers, reduce costs, and enhance customer
              satisfaction.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default CaseStudieInfo;
