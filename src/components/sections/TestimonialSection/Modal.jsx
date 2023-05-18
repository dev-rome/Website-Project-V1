import { useEffect } from "react";
import { Icon } from "@iconify/react";
import Button from "../../Button";

function Modal({ testimonial, onClose }) {
  const { src, alt, title, name, contentOne, contentTwo, contentThree } =
    testimonial;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 px-4"
      ></div>
      <div className="relative max-w-5xl bg-[#C5E0E3] shadow-[0_10px_4px_rgba(0,0,0,0.25)] backdrop-blur-[2px] rounded-2xl pt-7 px-4 md:px-14 pb-11">
        <div className="grid lg:grid-cols-4">
          <div className="col-start-1 col-span-3 flex items-start gap-10 mb-6">
            <img src={src} alt={alt} />
            <div>
              <h2 className="font-roboto md:text-lg">{title}</h2>
              <p className="font-roboto md:text-lg">{name}</p>
            </div>
          </div>
          <div className="col-start-4 justify-self-end">
            <Button onClick={onClose}>
              <Icon className="text-3xl" icon="ic:baseline-close" />
            </Button>
          </div>
          <div className="grid col-span-4 gap-y-5">
            <p className="font-roboto md:text-lg">{contentOne}</p>
            <p className="font-roboto md:text-lg">{contentTwo}</p>
            <p className="font-roboto md:text-lg">{contentThree}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
