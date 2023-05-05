import { Icon } from "@iconify/react";
import Button from "../../Button";

function Modal({ testimonial, onClose }) {
  return (
    <div className="absolute bg-[#C5E0E3] shadow-[0_10px_4px_rgba(0,0,0,0.25)] backdrop-blur-[2px] rounded-2xl lg:pt-7 lg:px-14 lg:pb-11">
      <div className="grid lg:grid-cols-4">
        <div className="col-start-1 col-span-3 flex gap-16">
          <img src={testimonial.src} alt={testimonial.alt} />
          <div>
            <h2 className="font-roboto text-lg">{testimonial.title}</h2>

            <p className="font-roboto">{testimonial.name}</p>
          </div>
        </div>
        <div className="col-start-4 justify-self-end">
          <Button onClick={onClose}>
            <Icon className="text-3xl" icon="ic:baseline-close" />
          </Button>
        </div>
        <div className="grid col-span-4 gap-y-5 lg:mt-6">
          <p className="font-roboto">{testimonial.contentOne}</p>
          <p className="font-roboto">{testimonial.contentTwo}</p>
          <p className="font-roboto">{testimonial.contentThree}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
