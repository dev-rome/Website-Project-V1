import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionContainer from "../../SectionContainer";
import Logo from "/images/hatchet-logo.png";
import Timber from "/images/timber-text.png";
import Hatchet from "/images/hatchet-text.png";
import Support from "/images/support.png";
import Collaboration from "/images/collaboration.png";
import Transparency from "/images/transparency.png";

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <SectionContainer className="pt-20 lg:pt-48" id="about">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-8 lg:grid-cols-11">
          <div className="md:col-span-4 lg:col-span-5">
            <div className="grid grid-cols-3 lg:grid-cols-5">
              <div
                ref={ref}
                className="flex justify-center items-center col-start-2 lg:col-start-3 w-36"
              >
                {inView && (
                  <motion.img
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative right-[-0.5rem] top-[0.5rem] w-44"
                    src={Timber}
                    alt="Image of the text Timber"
                  />
                )}
                <img className="w-[5rem]" src={Logo} alt="Timber & Hatchet" />
                {inView && (
                  <motion.img
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative right-[2.2rem] top-[0.6rem] w-44"
                    src={Hatchet}
                    alt="Image of the text Hatchet"
                  />
                )}
              </div>
              <p className="col-span-4 row-start-2 lg:col-span-5 font-roboto mt-4">
                We have a software development and cross-industry experience
                that gives us a unique perspective when looking for the right
                developers to join your projects.
              </p>
              <p className="col-span-4 row-start-3 lg:col-span-5 font-roboto mt-4">
                Focusing on collaboration and transparency, we make sure that
                our clients and developers create products that are sustainable
                and valuable. We believe that working together means creating a
                partnership that is reflected on the end-result.
              </p>
            </div>
          </div>
          <div className="md:col-start-6 lg:col-start-8">
            <div className="grid grid-cols-6 md:grid-cols-1 lg:grid-cols-1 gap-y-14 lg:gap-y-20 mt-11 md:mt-0">
              <div className="flex items-center gap-2 md:pt-20">
                <img src={Support} alt="Support" />
                <p className="font-zwodrei font-bold text-lg sm:text-2xl">
                  Support
                </p>
              </div>
              <div className="col-start-4 md:row-start-2 md:col-start-1 flex items-center gap-2">
                <img src={Collaboration} alt="Collaboration" />
                <p className="font-zwodrei font-bold text-lg sm:text-2xl">
                  Collaboration
                </p>
              </div>
              <div className="row-start-2 md:row-start-3 flex items-center gap-2">
                <img src={Transparency} alt="Transparency" />
                <p className="font-zwodrei font-bold text-lg sm:text-2xl">
                  Transparency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default About;
