import React from "react";

export type IconProp = { color?: string }

export const RightArrowIcon = ({ color }: IconProp) => {
  return (
    <svg
      width="7"
      height="10"
      viewBox="0 0 7 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.39999 9L5.39999 5L1.39999 1"
        stroke={color || "inherit"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const UpwardArrowIcon = ({ color }: IconProp) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4 10L8.39999 6L4.39999 10"
        stroke={color || "inherit"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DownwardArrowIcon = ({ color }: IconProp) => {
  return (
    <svg
      width="11"
      height="6"
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.39999 1L5.39999 5L9.39999 1"
        stroke={color || "inherit"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
