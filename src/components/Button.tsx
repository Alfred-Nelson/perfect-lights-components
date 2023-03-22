import React from "react";

type MustButtonPropsType = {
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => Promise<void> | void;
};

export type ButtonPropsType = {
    variant?:
    | "primary"
    | "primary-dark"
    | "secondary"
    | "secondary-outline"
    disabled?: boolean;
    leftIcon?: React.ReactNode | null;
    rightIcon?: React.ReactNode | null;
    label?: string;
};
// onClick?, label?, leftIcon?, rightIcon?, variant? = "primary"
// The buttons should have enumerated variants which are: primary, primary-dark, secondary, secondary-outline
export const primaryStyle: string =
    "bg-pot-yellow text-white stroke-white hover:bg-pot-grey5 active:bg-pot-grey2 border-2 border-pot-yellow hover:border-pot-grey5 ease-in-out transition";

export const primaryDarkStyle: string =
    "bg-pot-yellow text-white stroke-white border-2 border-pot-yellow hover:bg-pot-grey5 active:bg-pot-grey2 ease-in-out transition";

export const secondaryStyle: string =
    "bg-pot-grey5 text-white border-2 border-pot-grey5 stroke-white hover:bg-white hover:text-black hover:border-2 hover:stroke-black hover:border-pot-grey5 active:bg-pot-grey2  active:text-white active:stroke-white active:border-none ease-in-out transition";

export const secondaryOutlineStyle: string =
    "bg-white text-black stroke-black border-2 border-pot-grey5 hover:bg-pot-grey5 hover:text-white hover:stroke-white active:bg-pot-grey2  active:text-white active:border-none ease-in-out transition disabled:opacity-75";

export const SecondaryDisabledStyle: string =
    "bg-pot-lightgrey text-pot-grey1 stroke-pot-grey1 cursor-not-allowed disabled:hover";

export const secondaryOutlineStyleDisabled: string = "bg-pot-white text-pot-grey1 stroke-pot-grey1 border-2 border-pot-grey1 cursor-not-allowed disabled:hover"
// export const primaryOutlineDisabledStyle: string =
//     "shadow-[inset_0_0_0_1px_rgba(203,203,203,1)] text-pot-textgrey stroke-pot-textgrey cursor-not-allowed";
// export const tertiaryDisabledStyle: string =
//     "text-pot-textgrey stroke-pot-textgrey cursor-not-allowed";


const Button = ({
    variant = "primary",
    disabled = false,
    leftIcon = null,
    rightIcon = null,
    onClick = () => { },
    label = ""
}: ButtonPropsType & MustButtonPropsType) => {
    // const fullWidthStyle = fullWidth
    //     ? "w-full justify-center mx-5"
    //     : "w-fit justify-between";
    const typeStyle =
        variant === "primary"
            ? primaryStyle
            : variant === "primary-dark"
                ? primaryDarkStyle
                : variant === "secondary"
                    ? secondaryStyle
                    : variant === "secondary-outline"
                        ? secondaryOutlineStyle : ""


    const disabledStyle =
        variant === "primary" || variant === "secondary"
            ? SecondaryDisabledStyle
            : variant === "secondary-outline" || variant === "primary-dark"
                ? secondaryOutlineStyleDisabled : ""


    return (
        <>
            <button
                onClick={() => !disabled && onClick()}
                // ${disabled ? disabledStyle : typeStyle}
                className={`${typeStyle} px-3 py-2 flex gap-x-[1vw] items-center`}>
                {leftIcon}
                <p className="max-w-[40vw] truncate">{label}</p>
                {rightIcon && <div className="pl-2 flex items-center">{rightIcon}</div>}
            </button>
        </>
    );
};

export default Button;
