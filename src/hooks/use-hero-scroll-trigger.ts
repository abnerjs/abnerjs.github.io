import React from "react";

export function useHeroScrollTrigger() {
  const [showDrawerButton, setShowDrawerButton] = React.useState(false);

  React.useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const heroSection = document.getElementById("hero");
    if (!heroSection) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowDrawerButton(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(heroSection);

    const syncInitialVisibility = requestAnimationFrame(() => {
      setShowDrawerButton(heroSection.getBoundingClientRect().bottom <= 0);
    });

    return () => {
      cancelAnimationFrame(syncInitialVisibility);
      observer.disconnect();
    };
  }, []);

  return showDrawerButton;
}
