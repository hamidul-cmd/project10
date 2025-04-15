import React, { useEffect, useState } from "react";

function Gotop() {
  const [showup, setshowup] = useState(false);
  const gotop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenToScroll = () => {
    let HeightToShow = 350;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > HeightToShow) {
      setshowup(true);
    } else {
      setshowup(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);
  return (
    <>
      {showup && (
        <button
          className="bg-orange-65 p-3 rounded-full fixed bottom-5 right-4 z-[1000] cursor-pointer"
          onClick={gotop}
        >
          <div className="gotop">
            <svg
              className="h-5 w-5 xll:h-6 xll:w-6 3xl:h-8.5 3xl:w-8.5"
              viewBox="0 0 24 24"
              fill="#141414"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25 6.75L12 3M12 3L15.75 6.75M12 3V21"
                stroke="#141414"
              />
            </svg>
          </div>
        </button>
      )}
    </>
  );
}

export default Gotop;
