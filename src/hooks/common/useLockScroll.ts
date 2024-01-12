import { useEffect } from "react";

const useLockScroll = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
};

export default useLockScroll;
