import { useState } from "react";

type SingleSelectionPropType = {
    isSelected?: boolean;
    onClick?: (value: boolean) => void;
    disabled?: boolean;
};

const SingleSelection = ({
    isSelected = false,
    onClick,
    disabled = false,
}: SingleSelectionPropType) => {

    const [value, setValue] = useState<boolean>(isSelected);

    const handleClick = () => {
        if (disabled) {
            return;
        }
        setValue(!value);

        if (onClick) {
            onClick(value);
        }
    }
    // console.log(value, isSelected)
    const activeStyle = " border-pot-yellow hover:bg-pot-yellow  hover:bg-opacity-25  active:border-2 active:border-black cursor-pointer"
    const disabledStyle = "cursor-not-allowed border-[#F4F2EE]"



    return (
        <label className="flex gap-x-2.5 items-center relative">
            <div
                onClick={handleClick}
                className={`flex items-center justify-center w-[25px] h-[25px] border-2 ${disabled ? disabledStyle : activeStyle}`}>
                {
                    value && <div className={`${disabled ? `bg-[#F4F2EE] border` : `bg-pot-yellow`} w-[60%] h-[60%]`}> </div>
                }

            </div>
        </label>
    );
};

export default SingleSelection;