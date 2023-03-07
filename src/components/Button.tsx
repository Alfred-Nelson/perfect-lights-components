import React from "react";
// import { urls } from "../utils/urls";
// import LinkDiv from "./LinkDiv";

type MustButtonPropsType = {
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => Promise<void> | void;
};

export type ButtonPropsType = {
    variant?:
    | "primary"
    | "primary-dark"
    | "secondary"
    | "secondary-outline"
    // disabled?: boolean;
    leftIcon?: React.ReactNode | null;
    rightIcon?: React.ReactNode | null;
    hint?: string;
    error?: string;
    label?: string;
};
// onClick?, label?, placeholder, hint?, error?, leftIcon?, rightIcon?, variant? = "primary"
// The buttons should have enumerated variants which are: primary, primary-dark, secondary, secondary-outline
export const primaryStyle: string =
    "bg-pot-yellow text-white stroke-white hover:bg-pot-grey5 active:bg-pot-grey2 border-2 border-pot-yellow hover:border-pot-grey5 ease-in-out transition";

export const primaryDarkStyle: string =
    "bg-pot-yellow text-white stroke-white border-2 border-pot-yellow hover:bg-pot-grey5 active:bg-pot-grey2 ease-in-out transition";

export const secondaryStyle: string =
    "bg-pot-grey5 text-white border-2 border-pot-grey5 stroke-white hover:bg-white hover:text-black hover:border-2 hover:stroke-black hover:border-pot-grey5 active:bg-pot-grey2  active:text-white active:border-none ease-in-out transition";

export const secondaryOutlineStyle: string =
    "bg-white text-black stroke-black border-2 border-pot-grey5 hover:bg-pot-grey5 hover:text-white hover:stroke-white active:bg-pot-grey2  active:text-white active:border-none ease-in-out transition disabled:opacity-75";

// export const tertiaryStyle: string =
//     "text-pot-darkblue stroke-pot-darkblue hover:bg-pot-lightblue2 hover:text-pot-blue2 hover:stroke-pot-blue2 active:bg-pot-lightblue active:text-pot-blue active:stroke-pot-blue";
// const blueStyle: string = "bg-pot-blue text-white stroke-white";
// const blankStyle: string = "bg-transparent text-black stroke-black";

// export const primaryDisabledStyle: string =
//     "bg-pot-grey text-pot-textgrey stroke-pot-textgrey cursor-not-allowed";
// export const primaryOutlineDisabledStyle: string =
//     "shadow-[inset_0_0_0_1px_rgba(203,203,203,1)] text-pot-textgrey stroke-pot-textgrey cursor-not-allowed";
// export const tertiaryDisabledStyle: string =
//     "text-pot-textgrey stroke-pot-textgrey cursor-not-allowed";


const Button = ({
    variant = "primary",
    // disabled = false,
    leftIcon = null,
    rightIcon = null,
    onClick = () => { },
    hint = "",
    error = "",
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
    // : variant === "blue"
    //     ? blueStyle
    //     : variant === "blank" && blankStyle;
    // const disabledStyle =
    // variant === "primary" || variant === "secondary"
    //     ? primaryDisabledStyle
    //     : variant === "primary_outline"
    //         ? primaryOutlineDisabledStyle
    //         : variant === "tertiary" && tertiaryDisabledStyle;

    console.log(typeStyle)
    return (
        <>
            {/* <LinkDiv to={to} className="w-fit"> */}
            <button
                // onClick={() => !disabled && onClick()}
                // ${disabled ? disabledStyle : typeStyle}
                className={`${typeStyle} px-3 py-1.5 flex gap-x-[1vw] items-center`}>
                {leftIcon}
                <p className="max-w-[40vw] truncate">{label}</p>
                {rightIcon && <div className="pl-2 flex items-center">{rightIcon}</div>}
            </button>
            {/* </LinkDiv> */}
        </>
    );
};

export default Button;
