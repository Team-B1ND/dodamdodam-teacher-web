import { useEffect, KeyboardEvent } from "react";

export const useEscCloseModal = (close: () => void, question?: string) => {
  const handleKeyDown = (e: KeyboardEvent<Element>) => {
    if (e.key === "Escape") {
      if (question) {
        const answer = window.confirm(question);
        if (answer) {
          close();
        }
      } else {
        close();
      }
    }
  };

  useEffect(() => {
    const eventListener: EventListener = (e: Event) =>
      handleKeyDown(e as unknown as KeyboardEvent<Element>);
    window.addEventListener("keydown", eventListener);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", eventListener);
    };
  }, []);
};
