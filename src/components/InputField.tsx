
// props: label, value?, onChange?, inputType?, leftIcon?, rightIcon?, hint?, error?,
// disabled, hover, active, and focus states.
import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
} from "react";
import { debounce } from "lodash";


type InputFieldType = {
    label?: string;
    value?: string;
    hint?: string | string[];
    error?: string;
    inputType?: string;
    onChange: (text: string) => void;
    rightIcon?: React.ReactNode | null;
    leftIcon?: React.ReactNode | null;
    className?: string;
    placeholder?: string;
    variant?: "primary",
    disabled?: boolean;
    withDebounce?: boolean;
    doNotChangeInput?: boolean;
    validate?: (value: string) => string;
};

export const primaryInputStyle: string = "text-black font-normal border-2 border-[#DEDEDE] hover:boder-2 hover:border-[#D4A15E] hover:border-opacity-50 focus:outline-none focus:bg-white focus:border-pot-yellow placeholder-shown:text-pot-grey2 active:border-pot-yellow active:border-2"


export const InputDisabledStyle: string = "text-[#4F4F4F] disabled:appearance-none focus:outline-none disabled:opacity-100 cursor-not-allowed"

// " text-[#4F4F4F]  disabled:appearance-none peer text-pot-grey1 stroke-pot-grey2 border-2 border-pot-grey1 disabled:opacity-50 cursor-not-allowed "

const InputField = ({
    variant = "primary",
    label = "",
    value = "",
    onChange,
    inputType = "text",
    hint = [],
    leftIcon = null,
    rightIcon = null,
    className = "",
    placeholder = "",
    disabled = false,
    withDebounce = false,
    doNotChangeInput = false,
    validate = (val) => val,
}: InputFieldType) => {
    const [inputVal, setInputVal] = useState<string>("");
    const [focusInput, setFocusInput] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
  
    useEffect(() => {
      // if(!withDebounce) return
      if (inputVal !== value) {
        setInputVal(value);
      }
    }, [value]);
  
    const optimisedCall = useCallback(
      debounce((inputVal) => onChange(inputVal), 1000),
      []
    );
  
    
  
    useEffect(() => {
      if (withDebounce) {
        optimisedCall(inputVal);
      }
    }, [inputVal]);
  
    // useEffect(() => {
    //   if (focusInput) {
    //     setOnBlur(false);
    //   }
    // }, [focusInput]);

    const typeStyle =
        variant === "primary"
            ? primaryInputStyle
            : ""

    const disabledStyle = InputDisabledStyle


    return (
        <div className={`w-full  ${className}`}>
            {label && (
                <p className="font-medium text-[15px] pb-2 px-1">{label}</p>
            )}
            <div
                className={`relative w-full flex justify-between items-center border stroke-black ease-in-out transition`}
            >
                {leftIcon && (
                    <div className={`absolute inset-y-0 left-0 flex items-center pl-2 ml-2 pointer-events-none`}>{leftIcon}</div>
                )}
                <input
                    ref={inputRef}
                    value={inputVal}
                    type={inputType}
                    placeholder={placeholder}
                    onFocus={() => setFocusInput(true)}
                    onBlur={() => setFocusInput(false)}
                    onKeyDown={(e) =>
                        focusInput && e.key === "Enter" && inputRef.current?.blur()
                    }
                    // onBlur={() => {
                    //     if (value) {
                    //         setOnBlur(true);
                    //     }
                    //     setFocusInput(false);
                    // }}
                    onChange={(e) => {
                        // setInputVal(e.target.value);
                        if (!withDebounce) {
                            if (doNotChangeInput) return;
                            if (inputRef.current) {
                                inputRef.current.value = validate(e.target.value);
                            }
                            setInputVal(validate(e.target.value));
                            onChange(validate(e.target.value));
                            // console.log("runing without debounccall");
                        } else {
                            setInputVal(validate(e.target.value));
                            // console.log("runing with debounccall");
                        }
                    }}
                    className={`${typeStyle} text-[13px] w-full ${leftIcon ? "pl-10" : "pr-10"}  p-2 ${disabled ? disabledStyle : typeStyle}`
                    }
                />
                {rightIcon && (
                    <div className={`absolute right-0 flex items-center mr-5 place-content-around`}>{rightIcon}</div>
                )}
            </div>

            {hint &&
                (typeof hint === "string" ? (
                    <p className="px-1 pt-1 font-light text-xs text-black">
                        {hint}
                    </p>
                ) : hint.length ? (hint.length === 1 ? (
                    <p className="px-1 pt-1 font-light text-xs text-pot-maroon">
                        {hint[0]}
                    </p>
                ) : (
                    <ul className="list-disc px-4">
                        {hint.map((each) => (
                            <li className="pt-1 font-light text-xs text-pot-maroon">
                                {each}
                            </li>
                        ))}
                    </ul>
                )) : "")}
        </div>
    );
};

export default InputField;
