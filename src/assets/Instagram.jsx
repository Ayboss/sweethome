import React from "react";

function Instagram({ color = "#fff", stroke = "#fff" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.7407 1.77759H5.48147C4.49919 1.77759 3.55714 2.1678 2.86256 2.86238C2.16798 3.55696 1.77777 4.49901 1.77777 5.48129V14.7405C1.77777 15.7228 2.16798 16.6649 2.86256 17.3595C3.55714 18.054 4.49919 18.4443 5.48147 18.4443H14.7407C15.723 18.4443 16.6651 18.054 17.3596 17.3595C18.0542 16.6649 18.4444 15.7228 18.4444 14.7405V5.48129C18.4444 4.49901 18.0542 3.55696 17.3596 2.86238C16.6651 2.1678 15.723 1.77759 14.7407 1.77759Z"
        fill={color}
        stroke={stroke}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M10.1111 13.8146C11.0934 13.8146 12.0354 13.4244 12.73 12.7298C13.4246 12.0353 13.8148 11.0932 13.8148 10.1109C13.8148 9.12865 13.4246 8.18659 12.73 7.49202C12.0354 6.79744 11.0934 6.40723 10.1111 6.40723C9.12882 6.40723 8.18677 6.79744 7.49219 7.49202C6.79761 8.18659 6.4074 9.12865 6.4074 10.1109C6.4074 11.0932 6.79761 12.0353 7.49219 12.7298C8.18677 13.4244 9.12882 13.8146 10.1111 13.8146Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M15.2037 5.94426C15.4493 5.94426 15.6848 5.84671 15.8584 5.67306C16.0321 5.49942 16.1296 5.2639 16.1296 5.01833C16.1296 4.77276 16.0321 4.53725 15.8584 4.3636C15.6848 4.18996 15.4493 4.09241 15.2037 4.09241C14.9581 4.09241 14.7226 4.18996 14.549 4.3636C14.3753 4.53725 14.2778 4.77276 14.2778 5.01833C14.2778 5.2639 14.3753 5.49942 14.549 5.67306C14.7226 5.84671 14.9581 5.94426 15.2037 5.94426Z"
        fill={stroke}
      />
    </svg>
  );
}

export default Instagram;