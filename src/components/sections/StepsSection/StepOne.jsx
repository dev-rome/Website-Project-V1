import { motion } from "framer-motion";

function StepOne() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="relative bg-black-rgba pt-3 px-4 pb-16"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 1 }} 
      variants={variants}
    >
      <p className="font-roboto font-bold text-xl 2xl:text-2xl text-center">
        Let’s get connected
      </p>
      <div className="flex justify-center mt-10">
        <svg
          width="85"
          height="85"
          viewBox="0 0 151 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M75.5 52.125C74.2639 52.125 73.0555 52.4915 72.0277 53.1783C70.9999 53.865 70.1988 54.8412 69.7258 55.9832C69.2527 57.1252 69.1289 58.3819 69.3701 59.5943C69.6113 60.8067 70.2065 61.9203 71.0806 62.7944C71.9547 63.6685 73.0683 64.2637 74.2807 64.5049C75.4931 64.746 76.7498 64.6223 77.8918 64.1492C79.0338 63.6762 80.0099 62.8751 80.6967 61.8473C81.3835 60.8195 81.75 59.6111 81.75 58.375C81.75 56.7174 81.0915 55.1277 79.9194 53.9556C78.7473 52.7835 77.1576 52.125 75.5 52.125ZM119.25 8.37497H31.75C26.7772 8.37497 22.0081 10.3504 18.4917 13.8667C14.9754 17.383 13 22.1522 13 27.125V89.625C13 94.5978 14.9754 99.3669 18.4917 102.883C22.0081 106.4 26.7772 108.375 31.75 108.375H104.188L127.313 131.562C127.897 132.142 128.589 132.6 129.351 132.911C130.112 133.222 130.927 133.38 131.75 133.375C132.57 133.396 133.383 133.225 134.125 132.875C135.266 132.406 136.243 131.61 136.933 130.587C137.623 129.563 137.994 128.359 138 127.125V27.125C138 22.1522 136.025 17.383 132.508 13.8667C128.992 10.3504 124.223 8.37497 119.25 8.37497ZM131 125L111.5 104.5C110.916 103.921 109.5 103.125 108 101.625C107.52 101.437 105.832 101.625 104.919 101.625L31.75 101.625C30.0924 101.625 23.6721 99.1721 22.5 98C21.3279 96.8279 20 91.2826 20 89.625V26.5C20 23.3308 22.3279 18.0468 23.5 16.8747C24.6721 15.7026 29.8424 14.5 31.5 14.5L119.25 14.5C120.908 14.5 126.14 16.8279 127.313 18C128.485 19.1721 131 25.4674 131 27.125V125ZM50.5 52.125C49.2639 52.125 48.0555 52.4915 47.0277 53.1783C45.9999 53.865 45.1988 54.8412 44.7258 55.9832C44.2527 57.1252 44.1289 58.3819 44.3701 59.5943C44.6113 60.8067 45.2065 61.9203 46.0806 62.7944C46.9547 63.6685 48.0683 64.2637 49.2807 64.5049C50.4931 64.746 51.7497 64.6223 52.8918 64.1492C54.0338 63.6762 55.0099 62.8751 55.6967 61.8473C56.3835 60.8195 56.75 59.6111 56.75 58.375C56.75 56.7174 56.0915 55.1277 54.9194 53.9556C53.7473 52.7835 52.1576 52.125 50.5 52.125ZM100.5 52.125C99.2639 52.125 98.0555 52.4915 97.0277 53.1783C95.9999 53.865 95.1988 54.8412 94.7258 55.9832C94.2527 57.1252 94.129 58.3819 94.3701 59.5943C94.6113 60.8067 95.2065 61.9203 96.0806 62.7944C96.9547 63.6685 98.0683 64.2637 99.2807 64.5049C100.493 64.746 101.75 64.6223 102.892 64.1492C104.034 63.6762 105.01 62.8751 105.697 61.8473C106.383 60.8195 106.75 59.6111 106.75 58.375C106.75 56.7174 106.092 55.1277 104.919 53.9556C103.747 52.7835 102.158 52.125 100.5 52.125Z"
            fill="rgba(0, 0, 0, 1)"
          />
        </svg>
      </div>
      <p className="mt-10 2xl:text-lg">
        Share your ideas, budget, requirements, and any other information that
        can help us get to know you and your business better
      </p>
      <div className="absolute -bottom-8 left-2/4 -translate-x-2/4">
        <span className="font-roboto text-6xl bg-step-one bg-clip-text text-transparent">
          1
        </span>
      </div>
    </motion.div>
  );
}

export default StepOne;
