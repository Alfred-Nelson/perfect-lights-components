import React from "react";

export type IconProp = { color?: string };

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

export const LeftwardArrayIcon = ({ color }: IconProp) => {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.17006 6.70999L5.41006 10.95C5.50302 11.0437 5.61362 11.1181 5.73548 11.1689C5.85734 11.2197 5.98805 11.2458 6.12006 11.2458C6.25207 11.2458 6.38277 11.2197 6.50463 11.1689C6.62649 11.1181 6.73709 11.0437 6.83006 10.95C7.01631 10.7626 7.12085 10.5092 7.12085 10.245C7.12085 9.9808 7.01631 9.72735 6.83006 9.53999L3.29006 5.99999L6.83006 2.45999C7.01631 2.27263 7.12085 2.01918 7.12085 1.75499C7.12085 1.4908 7.01631 1.23735 6.83006 1.04999C6.73662 0.957309 6.6258 0.883984 6.50396 0.834219C6.38213 0.784454 6.25166 0.75923 6.12006 0.759991C5.98845 0.75923 5.85799 0.784454 5.73615 0.834219C5.61431 0.883984 5.5035 0.957309 5.41006 1.04999L1.17006 5.28999C1.07633 5.38295 1.00193 5.49356 0.951166 5.61541C0.900397 5.73727 0.874259 5.86798 0.874259 5.99999C0.874259 6.132 0.900397 6.26271 0.951166 6.38457C1.00193 6.50643 1.07633 6.61703 1.17006 6.70999Z"
        fill={color || "currentColor"}
      />
    </svg>
  );
};
