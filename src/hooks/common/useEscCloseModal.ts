import { useEffect, KeyboardEvent, useCallback } from "react";

const useEscCloseModal = (close: () => void, question?: string) => {
  const handleKeyDown = useCallback((e: KeyboardEvent<Element>) => {
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
  }, [close, question]);

  useEffect(() => {
    const eventListener: EventListener = (e: Event) =>
      handleKeyDown(e as unknown as KeyboardEvent<Element>);
    window.addEventListener("keydown", eventListener);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", eventListener);
    };
  }, [handleKeyDown]);
};

export default useEscCloseModal;