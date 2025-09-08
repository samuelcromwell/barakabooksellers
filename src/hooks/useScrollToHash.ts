import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToHash = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);
};
