import { useState } from "react";
import SectionContainer from "../../SectionContainer";
import Email from "/images/email.gif";
import Form from "./Form";
import Button from "../../Button";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleBack = () => {
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <SectionContainer className="pt-20 lg:pt-48">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-zwodrei font-bold text-2xl lg:text-4xl text-[rgba(0,0,0,0.8)] lg:mb-12">
            Thank You!
          </h2>

          <div className="grid md:grid-cols-8 lg:grid-cols-11 sm:gap-4 mt-4">
            <div className="col-span-4">
              <p className="font-roboto">
                Thank you for reaching out. We received your information and
                will get back to you as soon as we can.
              </p>
              <Button
                className="custom-form-button custom-form-back-button"
                onClick={handleBack}
              >
                Return to form
              </Button>
            </div>
            <img
              className="col-span-4 md:col-start-6 lg:col-start-7"
              src={Email}
              alt="Email Message"
            />
          </div>
        </div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer className="pt-20 lg:pt-48" id="contact">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-zwodrei font-bold text-2xl lg:text-4xl text-[rgba(0,0,0,0.8)] lg:mb-12">
          Let’s chat!
        </h2>
        <div className="grid md:grid-cols-8 lg:grid-cols-11 sm:gap-4 mt-6">
          <div className="md:col-span-3 lg:col-span-3">
            <p className="font-roboto">
              You are one step away from hiring the right skill set of engineer
              for your project!
            </p>
            <p className="font-roboto lg:row-start-2 mt-4 lg:mt-8">
              Please fill in our form and our team will be in contact you within
              3-5 business days.
            </p>
          </div>

          <div className="md:col-span-5 md:col-start-5 lg:col-start-6 lg:col-span-5 mt-8 sm:mt-0">
            <Form onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Contact;
