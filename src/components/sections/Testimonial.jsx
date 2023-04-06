import TestimonialItem from "../TestimonialItem";

function Testimonial() {
  const testimonials = [
    {
      src: "/images/icon-one.png",
      title: "Guardian Premier Solutions (GPS) LLC",
      name: "Doug I.",
      description:
        "Without question, for the past 7 years T&H always engaged us with incredible expertise and sage consulting with an amazing professional touch.",
    },
    {
      src: "/images/icon-two.png",
      title: "Relevant Equity Systems, Inc.",
      name: "Ray Haarstick",
      description:
        "T&H Designed the architecture of our next generation Investor Portal. Modernized our tech stack with React, Node, TypeScript, unit and e2e tests, CICD, and much more.",
    },
    {
      src: "/images/icon-three.png",
      title: "Mostly vibes and front-end development.",
      name: "Mundi Morgado",
      description:
        "Over the years T&H been trusted to lead some of our most difficult and complex projects. In all cases, they succeeded with flying colors.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto pt-24 lg:pt-28 px-4 lg:px-0">
      <h2 className="font-zwodrei font-bold text-2xl lg:text-4xl text-[rgba(0,0,0,0.8)]">
        In their words...
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6 lg:mt-12">
        {testimonials.map((testimonial) => (
            <TestimonialItem testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
