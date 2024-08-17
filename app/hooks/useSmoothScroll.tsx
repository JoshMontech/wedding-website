import { useCallback } from "react";

const useSmoothScroll = () => {
  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);

    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;

      window.scrollTo({
        behavior: "smooth",
        top: y,
      });
    }
  }, []);

  return scrollToSection;
};

export default useSmoothScroll;
