import Logo from "/images/timber-hatchet-logo.svg";
import Support from "/images/support.png";
import Collaboration from "/images/collaboration.png";
import Transparency from "/images/transparency.png";
import SectionContainer from "./SectionContainer";

function About() {
  return (
    <SectionContainer className="lg:pt-48" id="about">
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <div className="grid lg:grid-cols-11">
          <div className="lg:col-span-5">
            <div className="grid lg:grid-cols-5">
              <img className="col-span-5" src={Logo} alt="Timber & Hatchet" />
              <p className="lg:row-start-2 lg:col-span-5 font-roboto mt-4">
                Timber and Hatchet was founded in 2017 by Diego having a
                software development background and cross-industry experience.
                He was able to build Timber & Hatchet to able to curate a team
                with the necessary skills to create software solutions that meet
                the specific needs and goals of each project.
              </p>
            </div>
          </div>
          <div className="lg:col-start-8">
            <div className="grid lg:grid-cols-1 lg:gap-y-20">
              <div className="flex items-center gap-2 lg:pt-24">
                <img src={Support} alt="Support" />
                <p className="font-zwodrei font-bold text-2xl">Support</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={Collaboration} alt="Collaboration" />
                <p className=" font-zwodrei font-bold text-2xl">
                  Collaboration
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src={Transparency} alt="Transparency" />
                <p className=" font-zwodrei font-bold text-2xl">Transparency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default About;
