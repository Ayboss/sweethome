import React from "react";

function Facebook({ color = "#fff" }) {
  return (
    <svg
      width="11"
      height="20"
      viewBox="0 0 11 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.96296 11.4997H9.27777L10.2037 7.79601H6.96296V5.94415C6.96296 4.99045 6.96296 4.0923 8.81481 4.0923H10.2037V0.981192C9.90184 0.941377 8.76203 0.851562 7.55833 0.851562C5.04444 0.851562 3.25925 2.38582 3.25925 5.20341V7.79601H0.481476V11.4997H3.25925V19.3701H6.96296V11.4997Z"
        fill={color}
      />
    </svg>
  );
}

export default Facebook;
