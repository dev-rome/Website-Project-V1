import { useInView } from 'react-intersection-observer';
import SectionContainer from "../../SectionContainer";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

function Steps() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <SectionContainer className="min-h-screen pt-20 lg:pt-44" id="steps">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-zwodrei font-bold text-2xl lg:text-4xl text-[rgba(0,0,0,0.8)]">
          How we find your perfect match
        </h2>
      </div>

      <div className="max-w-7xl mx-auto" ref={ref}>
        {inView && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4 mt-6 lg:mt-12 px-4">
            <StepOne />
            <StepTwo />
            <StepThree />
            <StepFour />
          </div>
        )}
      </div>
    </SectionContainer>
  );
}

export default Steps;
