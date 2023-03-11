import React from "react";
import "../style/Checkbox.css";

type CheckboxPropType = {
  label?: string;
  checked: boolean;
  onClick?: () => void;
  disabled?: boolean;
  small?: boolean;
  showMinus?: boolean;
};

const Checkbox = ({
  checked = false,
  onClick,
  label,
  disabled = false,
  small = false,
  showMinus = false,
}: CheckboxPropType) => {
  const size = small ? "w-4 h-4" : "lg:w-5 lg:h-5 w-4 h-4";

  return (
    <label className="flex gap-x-2.5 items-center relative">
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={disabled ? () => { } : onClick}
        className={`appearance-none ${size} ${checked
          ? `${disabled ? "checked relative cursor-not-allowed before:bg-pot-grey2 border-2 before:bg-opacity-25" : " checked before:bg-pot-yellow bg-white border-2 border-pot-yellow  hover:bg-pot-yellow  hover:bg-opacity-25  active:border-2 active:border-black cursor-pointer relative"} `
          : `${disabled ? "cursor-not-allowed" : showMinus ? "minus before:bg-white  bg-white border-2 border-pot-yellow cursor-pointer relative" : "cursor-pointer hover:border-2 hover:border-pot-yellow active:border-2 active:border-black "} border-2`
          }`}
      />
      {label && (<span>{label}</span>)}
    </label>
  );
};

export default Checkbox;
