import { useCallback, useEffect, useRef, useState } from "react";
import { skills } from "../data/skills";
import type { Item, Skill } from "../types";

function SkillsCarousel() {
  const skillsContainerRef = useRef<HTMLDivElement>(null);
  const skillCardRefs = useRef<(HTMLElement | null)[]>([]);
  const [cardsPerPage, setCardsPerPage] = useState(1);
  const [activePage, setActivePage] = useState(0);
  const pageCount = Math.ceil(skills.length / cardsPerPage);

  useEffect(() => {
    const container = skillsContainerRef.current;
    const firstCard = skillCardRefs.current[0];
    if (!container || !firstCard) return;

    const updateCardsPerPage = () => {
      const gap = Number.parseFloat(
        window.getComputedStyle(container).columnGap,
      );
      const cardWidth = firstCard.getBoundingClientRect().width;
      const visibleCards = Math.max(
        1,
        Math.floor(
          (container.clientWidth + (Number.isNaN(gap) ? 0 : gap)) /
            (cardWidth + (Number.isNaN(gap) ? 0 : gap)),
        ),
      );
      setCardsPerPage(visibleCards);
    };

    const resizeObserver = new ResizeObserver(updateCardsPerPage);
    resizeObserver.observe(container);
    resizeObserver.observe(firstCard);
    updateCardsPerPage();

    return () => resizeObserver.disconnect();
  }, []);

  const updateActivePage = useCallback(() => {
    const container = skillsContainerRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    let closestPage = 0;
    let closestDistance = Infinity;

    for (let page = 0; page < pageCount; page += 1) {
      const card = skillCardRefs.current[page * cardsPerPage];
      if (!card) continue;
      const targetScroll = Math.min(
        container.scrollLeft +
          card.getBoundingClientRect().left -
          container.getBoundingClientRect().left,
        maxScroll,
      );
      const distance = Math.abs(container.scrollLeft - targetScroll);
      if (distance < closestDistance) {
        closestPage = page;
        closestDistance = distance;
      }
    }

    setActivePage(closestPage);
  }, [cardsPerPage, pageCount]);

  useEffect(() => {
    updateActivePage();
  }, [updateActivePage]);

  const scrollToPage = (page: number) => {
    const container = skillsContainerRef.current;
    const card = skillCardRefs.current[page * cardsPerPage];
    if (!container || !card) return;

    container.scrollTo({
      left: Math.min(
        container.scrollLeft +
          card.getBoundingClientRect().left -
          container.getBoundingClientRect().left,
        container.scrollWidth - container.clientWidth,
      ),
      behavior: "smooth",
    });
    setActivePage(page);
  };

  return (
    <div className="about-skills-carousel">
      <div
        ref={skillsContainerRef}
        className="about-skills-container"
        onScroll={updateActivePage}
      >
        {skills.map((skill: Skill, index) => (
          <article
            key={skill.title}
            ref={(element) => {
              skillCardRefs.current[index] = element;
            }}
            className="glass-card about-skill"
          >
            <h3 className="about-skill-title">{skill.title}</h3>
            {skill.items.map((item: Item) => (
              <p key={item.name} className="about-skill-item">
                {item.icon ? (
                  <img src={item.icon} alt="" className="about-skill-icon" />
                ) : null}
                <span>{item.name}</span>
              </p>
            ))}
          </article>
        ))}
      </div>
      <div
        className="about-skills-dots"
        role="group"
        aria-label="Choose a skill category"
      >
        {Array.from({ length: pageCount }, (_, page) => (
          <button
            key={page}
            type="button"
            className="about-skill-dot"
            aria-label={`Show skill page ${page + 1} of ${pageCount}`}
            aria-current={activePage === page ? "true" : undefined}
            onClick={() => scrollToPage(page)}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillsCarousel;
