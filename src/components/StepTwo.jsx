function StepTwo() {
  return (
    <div className="relative bg-black-rgba pt-3 px-4 pb-16">
      <p className="font-roboto font-bold text-xl text-center">
        Match your needs
      </p>
      <div className="flex justify-center mt-10">
        <svg
        className="relative top-6"
          width="75"
          height="75"
          viewBox="0 0 99 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M73.7327 2.94011C74.2182 2.94011 74.699 3.04363 75.1475 3.24476C75.5961 3.4459 76.0037 3.7407 76.347 4.11234C76.6903 4.48399 76.9626 4.9252 77.1484 5.41077C77.3342 5.89635 77.4299 6.41679 77.4298 6.94237L77.4296 28.3015C79.4019 27.2903 81.5785 26.8355 83.7568 26.9794C85.9351 27.1233 88.0444 27.8613 89.8885 29.1246C91.7326 30.388 93.2516 32.1357 94.3042 34.2052C95.3567 36.2747 95.9087 38.5987 95.9087 40.9612C95.9087 43.3236 95.3567 45.6477 94.3042 47.7172C93.2516 49.7866 91.7326 51.5344 89.8885 52.7977C88.0444 54.0611 85.9351 54.799 83.7568 54.9429C81.5785 55.0868 79.4019 54.632 77.4296 53.6208L77.4298 74.98C77.4298 75.5056 77.3342 76.026 77.1484 76.5116C76.9626 76.9972 76.6903 77.4384 76.347 77.81C76.0036 78.1817 75.596 78.4765 75.1475 78.6776C74.6989 78.8787 74.2181 78.9823 73.7326 78.9823L52.1528 78.982C53.087 81.117 53.5071 83.4732 53.3742 85.8312C53.2412 88.1892 52.5595 90.4726 51.3925 92.4688C50.2254 94.4651 48.6109 96.1094 46.6991 97.2488C44.7874 98.3882 42.6404 98.9856 40.4581 98.9856C38.2757 98.9856 36.1288 98.3882 34.217 97.2488C32.3053 96.1094 30.6908 94.4651 29.5237 92.4688C28.3566 90.4726 27.6749 88.1892 27.542 85.8312C27.4091 83.4732 27.8292 81.117 28.7634 78.982L7.18358 78.9823C6.20303 78.9823 5.26264 78.5606 4.56927 77.8101C3.87591 77.0595 3.48637 76.0415 3.48636 74.9801L3.48612 53.6208C5.45845 54.632 7.63501 55.0868 9.81332 54.9429C11.9916 54.799 14.101 54.0611 15.9451 52.7977C17.7892 51.5344 19.3081 49.7866 20.3607 47.7172C21.4133 45.6477 21.9652 43.3236 21.9652 40.9612C21.9652 38.5988 21.4133 36.2747 20.3607 34.2052C19.3081 32.1357 17.7892 30.388 15.9451 29.1246C14.101 27.8613 11.9916 27.1233 9.81332 26.9794C7.63501 26.8355 5.45845 27.2903 3.48612 28.3016L3.48636 6.94228C3.48637 5.88083 3.8759 4.86287 4.56925 4.11232C5.26261 3.36177 6.203 2.94011 7.18355 2.94011L73.7327 2.94011Z"
            stroke="black"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
        className="relative left-3"
          width="85"
          height="85"
          viewBox="0 0 104 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.54932 55.7322V23.8661H24.7324V18.5551C24.7324 9.75551 31.3536 2.62204 39.5212 2.62204C47.6887 2.62204 54.3099 9.75551 54.3099 18.5551V23.8661H76.493V55.7322H86.3521C94.5197 55.7322 101.141 62.8656 101.141 71.6652C101.141 80.4648 94.5197 87.5983 86.3521 87.5983H76.493V108.842H2.54932V87.5983H12.4085C20.5761 87.5983 27.1972 80.4648 27.1972 71.6652C27.1972 62.8656 20.5761 55.7322 12.4085 55.7322H2.54932Z"
            stroke="black"
            stroke-width="4"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <p className="mt-10">
        We will gather the best tools and talents based on your needs to meet
        your project and business goals
      </p>
      <div className="absolute -bottom-8 left-2/4 -translate-x-2/4">
        <span className="font-roboto text-6xl bg-step-two bg-clip-text text-transparent">
          2
        </span>
      </div>
    </div>
  );
}

export default StepTwo;
