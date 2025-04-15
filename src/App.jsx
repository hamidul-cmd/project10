import React, { useEffect } from "react";
import Approutes from "./Routes/Approutes";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <>
      <Approutes />
    </>
  );
}

export default App;
