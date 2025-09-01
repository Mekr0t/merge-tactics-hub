import { useEffect, type PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ children }: PropsWithChildren) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Run after the new route renders
    requestAnimationFrame(() => {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "auto", block: "start" });
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: "auto" }); // change to "smooth" if you prefer
    });
  }, [pathname, hash]);

  return <>{children}</>;
}