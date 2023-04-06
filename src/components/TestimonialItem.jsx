import Button from "./Button";

function TestimonialItem({ testimonial }) {
  return (
    <div className="lg:max-w-sm bg-white/20 drop-shadow-[4px_4px_4px_rgba(255,255,255,0.5)] rounded-2xl pt-4 px-6 lg:px-2 pb-14">
      <div className="flex items-center gap-3">
        <img src={testimonial.src} alt="Image One" />
        <div>
          <h3 className="font-roboto">{testimonial.title}</h3>
          <p className="font-roboto text-sm">{testimonial.name}</p>
        </div>
      </div>
      <p className="font-roboto my-6 lg:mt-12 lg:mb-8">{testimonial.description}</p>
      <div className="flex justify-center">
        <Button readMore>Read More</Button>
      </div>
    </div>
  );
}

export default TestimonialItem;
