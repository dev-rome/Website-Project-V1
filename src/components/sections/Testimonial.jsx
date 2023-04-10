import { useState, useCallback } from "react";
import TestimonialItem from "../TestimonialItem";
import Modal from "../Modal";

function Testimonial() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      id: 1,
      src: "/images/icon-one.png",
      alt: "Client One",
      title: "Guardian Premier Solutions (GPS) LLC",
      name: "Doug I.",
      description:
        "Without question, for the past 7 years T&H always engaged us with incredible expertise and sage consulting with an amazing professional touch.",
      contentOne:
        "Without question, for the past 7 years T&H always engaged us with incredible expertise and sage consulting with an amazing professional touch.",
      contentTwo:
        "I vividly remember a call we made to Diego that changed our company and made a pivotal difference in our growth. Bottom line, T&H provided us the honest answer and best solution, not just what we wanted to hear.",
      contentThree: "Thank you T&H, look forward to our next project together",
    },
    {
      id: 2,
      src: "/images/icon-two.png",
      alt: "Client Two",
      title: "Relevant Equity Systems, Inc.",
      name: "Ray Haarstick",
      description:
        "T&H Designed the architecture of our next generation Investor Portal. Modernized our tech stack with React, Node, TypeScript, unit and e2e tests, CICD, and much more.",
      contentOne:
        "T&H Designed the architecture of our next generation Investor Portal. Modernized our tech stack with React, Node, TypeScript, unit and e2e tests, CICD, and much more.",
      contentTwo:
        "T&H contributed to product strategy and roadmap, Led sprint planning sessions and standups, Extended, led, and collaborated with our global team of product and project managers, UX designers, developers, testers, AWS specialists, and cybersecurity experts.",
      contentThree:
        "T&H  Left behind an experienced team with a fully documented architecture and roadmap",
    },
    {
      id: 3,
      src: "/images/icon-three.png",
      alt: "Client Three",
      title: "Mostly vibes and front-end development.",
      name: "Mundi Morgado",
      description:
        "Over the years T&H been trusted to lead some of our most difficult and complex projects. In all cases, they succeeded with flying colors.",
      contentOne:
        "Over the years T&H been trusted to lead some of our most difficult and complex projects. In all cases, they succeeded with flying colors.",
      contentTwo:
        "Diego, as a technical leader, he’s expertly juggles the duties of architecture, execution, mentorship, and client relationships. He genuinely cares about his team and always has the best interests of our clients at heart.",
      contentThree:
        "Beyond work, Diego is a great all around human being. He’s smart, kind, compassionate, and funny. I look forward to working with him in the future!",
    },
  ];

  const handleOpen = useCallback((testimonial) => {
    setShowModal(true);
    setSelectedTestimonial(testimonial);
  }, []);

  const handleClose = () => {
    setShowModal(false);
    setSelectedTestimonial(null);
  };

  const createClickHandler = useCallback(
    (testimonial) => () => {
      handleOpen(testimonial);
    },
    [handleOpen]
  );

  return (
    <div className="max-w-5xl mx-auto pt-24 lg:pt-28 px-4 lg:px-0">
      <h2 className="font-zwodrei font-bold text-2xl lg:text-4xl text-[rgba(0,0,0,0.8)]">
        In their words...
      </h2>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 lg:mt-12">
        {testimonials.map((testimonial) => (
          <TestimonialItem
            key={testimonial.id}
            testimonial={testimonial}
            onOpen={createClickHandler(testimonial)}
          />
        ))}
        {selectedTestimonial && showModal && (
          <Modal testimonial={selectedTestimonial} onClose={handleClose} />
        )}
      </div>
    </div>
  );
}

export default Testimonial;
