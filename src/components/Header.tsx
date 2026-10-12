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
        isOpen === true ?
          "visible translate-x-0"
        :	"invisible -translate-x-full sm:visible sm:translate-x-0"
      }`}
    >
      <Logo />

      <Navbar setIsOpen={setIsOpen} />
    </header>
  );
}

export default Header;
