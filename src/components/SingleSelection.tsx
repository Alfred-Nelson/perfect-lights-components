import "../style/SingleSelection.css";

type SingleSelectionPropType = {
    value?: number;
    // label?: string;
    // checked: boolean;
    onClick?: () => void;
    disabled?: boolean;
    // small?: boolean;
    // showMinus?: boolean;
};

const SingleSelection = ({
    value = 0,
    // onClick,
    disabled = false,
}: SingleSelectionPropType) => {
    const size = true ? "w-4 h-4" : "lg:w-5 lg:h-5 w-4 h-4";
    const borderStyle =
        "cursor-pointer border-2 border-pot-grey hover:border-2 hover:border-pot-yellow hover:opacity-50 active:border-2 active:border-black active:opacity-100";
    const tickStyle =
        "selected before:bg-pot-yellow bg-white border-2 border-pot-yellow  hover:bg-pot-yellow  hover:bg-opacity-25  active:border-2 active:border-black cursor-pointer relative";


    const checkStyle =
        value === 0
            ? borderStyle
            : value === 1
                ? tickStyle
                : "";

    const borderDisabledStyle = "cursor-not-allowed relative  border-2 ";
    const selectedDisabledStyle = "selected relative cursor-not-allowed before:bg-pot-grey2 border-2 before:bg-opacity-25";
    const disabledStyle =
        value === 0
            ? borderDisabledStyle
            : value === 1
                ? selectedDisabledStyle
                : "";

    return (
        <label className="flex gap-x-2.5 items-center relative">
            <input
                type="checkbox"
                // defaultChecked={checked}
                // onChange={disabled ? () => {} : onClick}
                className={`appearance-none ${size} ${disabled ? disabledStyle : checkStyle}`}
            />
        </label>
    );
};

export default SingleSelection;