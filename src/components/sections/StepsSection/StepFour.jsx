import { motion } from "framer-motion";

function StepFour() {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="relative bg-black-rgba pt-3 px-4 pb-16"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 4 }}
      variants={variants}
    >
      <p className="font-roboto font-bold text-xl 2xl:text-2xl text-center">
        Stay connected
      </p>
      <div className="flex justify-center mt-10">
        <svg
          width="85"
          height="85"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21.5C16.6944 21.5 20.5 17.6944 20.5 13C20.5 8.30558 16.6944 4.5 12 4.5C7.30558 4.5 3.5 8.30558 3.5 13C3.5 17.6944 7.30558 21.5 12 21.5Z"
            stroke="black"
            strokeWidth="1"
          />
          <path
            d="M21.5 18C21.5 18.6708 21.2358 19.2798 20.8058 19.7288C20.3507 20.2041 19.7099 20.5 19 20.5C17.6193 20.5 16.5 19.3807 16.5 18C16.5 16.995 17.0931 16.1285 17.9484 15.7313C18.268 15.5829 18.6244 15.5 19 15.5C20.3807 15.5 21.5 16.6193 21.5 18Z"
            fill="black"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 18C7.5 18.6708 7.2358 19.2798 6.80585 19.7288C6.35075 20.2041 5.70995 20.5 5 20.5C3.61929 20.5 2.5 19.3807 2.5 18C2.5 16.995 3.09307 16.1285 3.94833 15.7313C4.26802 15.5829 4.62434 15.5 5 15.5C6.3807 15.5 7.5 16.6193 7.5 18Z"
            fill="black"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 4.5C14.5 5.1708 14.2358 5.77985 13.8059 6.22885C13.3507 6.7041 12.7099 7 12 7C10.6193 7 9.5 5.8807 9.5 4.5C9.5 3.49495 10.093 2.62843 10.9483 2.2313C11.268 2.08286 11.6244 2 12 2C13.3807 2 14.5 3.11929 14.5 4.5Z"
            fill="black"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="mt-10 2xl:text-lg">
        Our partnership doesn’t stop here! Stay in touch to review previous
        projects, share your thoughts with us, or bring a new idea to life!
      </p>
      <div className="absolute -bottom-8 left-2/4 -translate-x-2/4">
        <span className="font-roboto text-6xl bg-step-four bg-clip-text text-transparent">
          4
        </span>
      </div>
    </motion.div>
  );
}

export default StepFour;
