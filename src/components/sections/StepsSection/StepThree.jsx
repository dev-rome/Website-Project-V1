import { motion } from "framer-motion";

function StepThree() {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="relative bg-black-rgba pt-3 px-4 pb-16"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 3 }}
      variants={variants}
    >
      <p className="font-roboto font-bold text-xl 2xl:text-2xl text-center">
        Meet your goals
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
            d="M10.7086 9.2915C9.6981 9.77415 9 10.8056 9 12.0001C9 13.6569 10.3432 15.0001 12 15.0001C13.1945 15.0001 14.226 14.302 14.7086 13.2915"
            stroke="black"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.1397 5.86035C13.4696 5.6269 12.7496 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5898 8.41015 18.5 12 18.5C15.5898 18.5 18.5 15.5898 18.5 12C18.5 11.2504 18.3731 10.5304 18.1397 9.86035"
            stroke="black"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.7838 3.21627C15.3628 2.44075 13.7328 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22C17.5229 22 22 17.5229 22 12C22 10.2672 21.5593 8.63725 20.7838 7.21625"
            stroke="black"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 2L12 12"
            stroke="black"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="mt-10 2xl:text-lg">
        We will work alongside you and deliver end-to-end support throughout the
        project to ensure maximum efficiency and excellent results
      </p>
      <div className="absolute -bottom-8 left-2/4 -translate-x-2/4">
        <span className="font-roboto text-6xl bg-step-three bg-clip-text text-transparent">
          3
        </span>
      </div>
    </motion.div>
  );
}

export default StepThree;
