import React, { useState } from "react";

function Stars({ stars = 5 }) {
  const [selectedStar, setSelectedStar] = useState(0);
  const [hover, setHover] = useState(0);
  const starsIndexHandler = (i) => {
    setSelectedStar(i);
  };

  const starsColorHandler = (i) => {
    if (selectedStar >= i || hover >= i) {
      return "gold";
    }
  };
  return (
    <div className="w-full h-50 flex items-center justify-center gap-0">
      {Array.from({ length: stars }, (_, index) => (
        <React.Fragment key={index}>
          <button
            onClick={() => starsIndexHandler(index + 1)}
            onMouseEnter={() => setHover(index + 1)}
            onMouseLeave={() => setHover(0)}
            className="cursor-pointer"
          >
            <svg
              width="50"
              height="50"
              fill={starsColorHandler(index + 1)}
            >
              <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l4.46 4.73L5.82 21z" />
            </svg>
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}
export default Stars;
