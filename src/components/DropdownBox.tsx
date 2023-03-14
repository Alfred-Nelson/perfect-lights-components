import React, { useEffect, useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import useMouseLocation from "../hooks/useMouseLocation";

type DropdownBoxType = {
  mouseLocation: number;
};

const DropdownBox = ({ mouseLocation }: DropdownBoxType) => {
  const [leftOffset, setLeftOffset] = useState(`${Math.trunc(mouseLocation * 2)}%`);

  console.log(mouseLocation, "mouseLocation", leftOffset);

  return (
    <div
      style={{ left: `-${leftOffset}` }}
      className={`w-72 absolute max-h-[40svh] h-[20svh] bg-red-200 border border-pot-grey3 `}
    ></div>
  );
};

export default DropdownBox;
