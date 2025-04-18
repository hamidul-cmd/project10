import React from "react";

function AwardsCird({ icon, tittle, pera }) {
  return (
    <>
      <div className="relative pt-12.5 space-y-4 h-full">
        <h3 className="text-22 l-130 font-bold text-gray-10 font-raleway">
          {tittle}
        </h3>
        <p className="text-base l-150 font-medium text-gray-30 font-outfit">
          {pera}
        </p>
        <div className="absolute p-4 rounded-lg bg-orange-90 border-2 border-gray-15 left-6 top-[-28px]">
          {icon}
        </div>
      </div>
    </>
  );
}

export default AwardsCird;
