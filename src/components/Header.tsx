import Logo from "./Logo";
import Navbar from "./Navbar";
import type { Header } from "../types";

export default function Header({ isOpen, setIsOpen }: Header) {
  return (
    <header
      id="header"
      className={`transition-transform duration-300 ${
        isOpen === true
          ? "visible translate-x-0"
          : "invisible -translate-x-full sm:visible sm:translate-x-0"
      }`}
    >
      <Logo />

      <Navbar setIsOpen={setIsOpen} />
    </header>
  );
}
