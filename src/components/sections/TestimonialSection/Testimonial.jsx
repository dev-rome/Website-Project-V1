import { useState, useCallback } from "react";
import { testimonials } from "./TestimonialData";
import TestimonialItem from "./TestimonialItem";
import Modal from "./Modal";

function Testimonial() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

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
    <div className="max-w-5xl 2xl:max-w-6xl mx-auto pt-24 lg:pt-28 px-4 lg:px-0">
      <h2 className="font-zwodrei font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-[rgba(0,0,0,0.8)]">
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
