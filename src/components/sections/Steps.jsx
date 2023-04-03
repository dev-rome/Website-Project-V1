import SectionContainer from "./SectionContainer";
import StepOne from "../StepOne";
import StepTwo from "../StepTwo";
import StepThree from "../StepThree";
import StepFour from "../StepFour";

function Steps() {
  return (
    <SectionContainer className="lg:pt-48" id="steps">
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <h2 className="font-zwodrei font-bold text-2xl lg:text-4xl text-[rgba(0,0,0,0.8)] lg:mb-12">
          How we find your perfect match
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4">
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
      </div>
    </SectionContainer>
  );
}

export default Steps;
