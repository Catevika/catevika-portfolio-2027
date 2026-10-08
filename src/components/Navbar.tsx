import { useEffect, useState } from "react";
import { links } from "../data/links";
import type { Link, NavId } from "../types";

function isNavId(value: string): value is NavId {
  return links.some((link) => link.path === value);
}

function Navbar({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [activeId, setActiveId] = useState<NavId>(() =>
    isNavId(window.location.hash) ? window.location.hash : "#hero",
  );

  useEffect(() => {
    const syncActiveLink = () => {
      if (isNavId(window.location.hash)) {
        setActiveId(window.location.hash);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              first.boundingClientRect.top - second.boundingClientRect.top,
          )[0];

        const visibleId = visibleSection
          ? `#${visibleSection.target.id}`
          : "";
        if (isNavId(visibleId)) {
          setActiveId(visibleId);
        }
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );

    links.forEach(({ path }) => {
      const section = document.getElementById(path.slice(1));
      if (section) observer.observe(section);
    });

    window.addEventListener("hashchange", syncActiveLink);
    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncActiveLink);
    };
  }, []);

  return (
    <nav id="navbar">
      <ul className="nav-links">
        {links.map((link: Link) => (
          <li className="line" key={link.text}>
            <a
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={activeId === link.path ? "active" : ""}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
