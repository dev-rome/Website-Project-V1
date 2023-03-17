import Logo from "/images/timber-hatchet-logo.png";
import Image from "../Image";
import NavItems from "./NavItems";

function Navbar() {
  return (
    <nav className="fixed left-0 top-0 w-full flex justify-between py-[0.625rem] pl-3 pr-[4.375rem] bg-white/10 backdrop-filter backdrop-blur-sm">
      <Image src={Logo} width={270} height={80} alt={"Timber & Hatchet Logo"} />
      <NavItems />
    </nav>
  );
}

export default Navbar;
