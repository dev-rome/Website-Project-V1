import Image from "./Image";
import Tech from "/images/tech-pattern.png";
import TreeOne from "/images/tree-one.png";
import TreeTwo from "/images/tree-two.png";
import TreeThree from "/images/tree-three.png";
import TreeFour from "/images/tree-four.png";
import TreeFive from "/images/tree-five.png";

function CompositeBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-hero-background bg-no-repeat bg-cover bg-center bg-blend-multiply"></div>
      <div className="absolute right-0 bottom-0 opacity-80">
        <img className="w-64 md:w-80 lg:w-96" src={Tech} alt="Tech Pattern" />
      </div>
      <div className="absolute left-0 bottom-0 opacity-40">
        <img className="w-64" src={TreeOne} alt="Trees" />
      </div>
      <div className="absolute left-[225px] bottom-0 opacity-40">
        <img className="w-96" src={TreeTwo} alt="Trees" />
      </div>
      {/* <div className="hidden md:block absolute left-[600px] bottom-0 opacity-40">
        <Image src={TreeThree} width={500} alt={"Trees"} />
      </div>
      <div className="absolute left-[950px] bottom-0 opacity-40">
        <Image src={TreeFour} width={200} alt={"Trees"} />
      </div>
      <div className="absolute left-[1050px] bottom-0 opacity-40">
        <Image src={TreeFive} width={400} alt={"Trees"} />
      </div> */}
    </>
  );
}

export default CompositeBackground;
