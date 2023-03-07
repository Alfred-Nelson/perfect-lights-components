import React from "react";
import { primaryDarkStyle, primaryStyle, secondaryOutlineStyle, secondaryStyle } from "./Button";

type IconButtonPropsType = {
    element?: React.ReactNode | null;
    children: React.ReactNode;
    variant?: "primary" | "primary-dark" | "secondary" | "secondary-outline";
    disabled?: boolean;
    onClick?: () => void;
};
// The component should have the following props: children, variant? = "primary", onClick?
// The variants should be enumerated as strings of the following: primary, and secondary.

const IconButton = ({ children, variant = "primary", onClick = () => { } }: IconButtonPropsType) => {
    const typeStyle =
        variant === "primary"
            ? primaryStyle
            : variant === "primary-dark"
                ? primaryDarkStyle
                : variant === "secondary"
                    ? secondaryStyle
                    : variant === "secondary-outline"
                        ? secondaryOutlineStyle : ""
    // const disabledStyle =
    //     variant === "primary" || variant === "secondary"
    //         ? primaryDisabledStyle
    //         : variant === "primary_outline"
    //             ? primaryOutlineDisabledStyle
    //             : variant === "tertiary" && tertiaryDisabledStyle;
    return (
        <button
            onClick={onClick}
            className={`flex px-2 py-2 justify-center items-center ${typeStyle}`}
        >
            {children}
        </button>
    );
};

export default IconButton;
