import { useState } from "react";
import { links } from "../data/links";
import type { Link, NavId } from "../types";

function Navbar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [activeId, setActiveId] = useState<NavId>("#hero");

  const handleLinkClick = (id: NavId) => {
    setActiveId(id);
    setIsOpen(!isOpen);
  };

  return (
    <nav id="navbar">
      <ul className="nav-links">
        {links.map((link: Link) => (
          <li className="line" key={link.text}>
            {isOpen === true ? (
              <a
                href={link.path}
                onClick={() => handleLinkClick(link.path as NavId)}
                className={activeId === link.path ? "active" : ""}
              >
                {link.text}
              </a>
            ) : (
              <a
                href={link.path}
                onClick={() => handleLinkClick(link.path as NavId)}
                className={activeId === link.path ? "active" : ""}
              >
                {link.text}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
