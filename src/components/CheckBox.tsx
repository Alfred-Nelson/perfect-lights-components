import "../style/Checkbox.css";
import { useState } from "react";

type CheckboxPropType = {
  CheckValue?: 0 | 1 | 2;
  onClick?: (value: number) => void;
  disabled?: boolean;
};

const Checkbox = ({
  CheckValue = 0,
  onClick,
  disabled = false,
}: CheckboxPropType) => {
  const [value, setValue] = useState<0 | 1 | 2>(CheckValue);

  const size = true ? "w-4 h-4" : "lg:w-5 lg:h-5 w-4 h-4";
  const borderStyle =
    "cursor-pointer border-2 border-pot-grey hover:border-2 hover:border-pot-yellow hover:opacity-50 active:border-2 active:border-black active:opacity-100";
  const tickStyle =
    "checked before:bg-pot-yellow bg-white border-2 border-pot-yellow  hover:bg-pot-yellow  hover:bg-opacity-25  active:border-2 active:border-black cursor-pointer relative";
  const minusStyle =
    "minus before:bg-pot-yellow bg-white border-2 border-pot-yellow hover:bg-pot-yellow  hover:bg-opacity-25 active:border-black cursor-pointer relative";

  const checkStyle =
    value === 0
      ? borderStyle
      : value === 1
      ? tickStyle
      : value === 2
      ? minusStyle
      : "";

  const borderDisabledStyle = "cursor-not-allowed relative  border-2 ";
  const checkedDisabledStyle =
    "checked relative cursor-not-allowed before:bg-pot-grey2 border-2 before:bg-opacity-25";
  const disabledStyle =
    value === 0
      ? borderDisabledStyle
      : value === 1
      ? checkedDisabledStyle
      : "";

  const handleClick = () => {
    if (disabled) {
      return;
    }

    let newValue: 0 | 1 | 2;

    if (value === 0) {
      newValue = 1;
    } else if (value === 1) {
      newValue = 0;
    } else {
      newValue = 0;
    }

    setValue(newValue);

    if (onClick) {
      onClick(newValue);
    }
  };

  return (
    <label className="flex gap-x-2.5 items-center relative">
      <input
        type="checkbox"
        className={`appearance-none ${size} ${
          disabled ? disabledStyle : checkStyle
        }`}
        onClick={handleClick}
        checked={value === 1}
      />
    </label>
  );
};


export default Checkbox;