import Logo from "./Logo";
import Navbar from "./Navbar";

function Header({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <header
      id="header"
      className={`transition-transform duration-300 ${
        isOpen === true ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
      }`}
    >
      <Logo />

      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}

export default Header;
