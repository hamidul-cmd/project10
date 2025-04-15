import React, { useEffect, useRef } from "react";

function CustomScrollTrigger({ children, onEnter, onExit }) {
  const triggerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          onEnter && onEnter();
        } else {
          onExit && onExit();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const currentRef = triggerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [onEnter, onExit]);

  return <div ref={triggerRef}>{children}</div>;
}

export default CustomScrollTrigger;
