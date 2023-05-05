import Tech from "/images/tech-pattern.png";
import TreeOne from "/images/tree-one.png";
import TreeTwo from "/images/tree-two.png";
import TreeThree from "/images/tree-three.png";
import TreeFour from "/images/tree-four.png";
import TreeFive from "/images/tree-five.png";

function CompositeBackground() {
  return (
    <div>
      <div className="absolute inset-0 bg-hero-background bg-no-repeat bg-cover bg-center bg-blend-multiply"></div>
      <div className="absolute right-0 bottom-0 opacity-80">
        <img className="w-64 md:w-80 lg:w-96" src={Tech} alt="Tech Pattern" />
      </div>
      <div className="absolute left-0 bottom-0 opacity-40">
        <img className="w-80 2xl:w-[25.938rem]" src={TreeOne} alt="Trees" />
      </div>
      <div className="absolute hidden sm:block left-[14.063rem] 2xl:left-[17.188rem] bottom-0 opacity-40">
        <img className="w-96 2xl:w-[40.625rem]" src={TreeTwo} alt="Trees" />
      </div>
      <div className="absolute hidden md:block left-[37.5rem] 2xl:left-[56.25rem] bottom-0 opacity-40">
        <img className="w-[31.25rem] 2xl:w-[37.5rem]" src={TreeThree} alt="Trees" />
      </div>
      <div className="absolute hidden lg:block left-[59.375rem] 2xl:left-[81.25rem] bottom-0 opacity-40">
        <img className="w-[12.5rem] 2xl:w-[17.188rem]" src={TreeFour} alt="Trees" />
      </div>
      <div className="absolute hidden lg:block left-[65.625rem] 2xl:left-[90.625rem] bottom-0 opacity-40">
        <img className="w-[25rem] 2xl:w-[34.375rem]" src={TreeFive} alt="Trees" />
      </div>
    </div>
  );
}

export default CompositeBackground;
