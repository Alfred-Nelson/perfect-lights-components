import React, { useState } from "react";
import InfoIcon from "../assets/InfoIcon";
import ToolTip from "./ToolTip";

// image src: string, name: string, trinname: string, product specification: [{}] , price: number tooltip-text: string

type HorizontalCardPropsType = {
    imageUrl: string;
    name: string;
    specification?: { heading?: string, description?: string }[] | null | undefined;
    price: number;
    message?: string | null;
}

export const primaryHorizontalCardStyle: string = "text-black font-normal border-2 border-[#F4F2EE] hover:boder-2 hover:border-[#D4A15E] hover:border-opacity-50 focus:outline-none focus:bg-white focus:border-pot-yellow active:border-pot-yellow active:border-2"


const HorizontalCard = ({
    imageUrl = "",
    name = "",
    specification = null,
    price = 0,
    message = null,
}: HorizontalCardPropsType) => {

    const [isHover, setIsHover] = useState(false)
    const [showSpecificInfo, setShowSpecificInfo] = useState<string>("");
    const handleMouseOver = (): void => {
        setIsHover(true)
    }

    // const fullWidthStyle = fullWidth
    //     ? "w-full justify-center mx-5"
    //     : "w-fit justify-between";
    return (
        <>
            <div className={`w-full flex items-center text-sm justify-arround gap-3 ${primaryHorizontalCardStyle}`}>
                <div className=" flex items-center w-[69px] h-[53px] m-auto ml-2 ">
                    <img className="w-full object-cover " src={imageUrl} alt={name} />
                </div>
                <div className="w-full flex flex-col border-[1px] border-[#F4F2EE]">
                    <div className="flex items-center">
                        <p className="p-2 font-semibold text-[12px]">{name}</p>
                        {
                            message &&
                            <div className="relative z-[10] ">
                                <div
                                    className="cursor-pointer"
                                    onMouseEnter={(): void => {
                                        handleMouseOver();
                                        setShowSpecificInfo(message)
                                    }}
                                    onMouseLeave={(): void => setIsHover(false)}>
                                    <InfoIcon />
                                </div>
                                {isHover ? (<ToolTip message={showSpecificInfo} />) : null}
                            </div>
                        }
                    </div>

                    <hr className="border-[1px] border-[#F4F2EE] leading-3"></hr>
                    {
                        specification && <div>
                            {specification?.map((el, i) => {
                                return (
                                    <p key={i} className="px-2 text-[12px] leading-[26px]">{el.heading}: {el.description}</p>
                                )
                            })}
                            <hr className="border-[1px] border-[#F4F2EE]"></hr>
                        </div>
                    }
                    <p className="p-2 font-semibold text-[12px] leading-3">Price: Rs {price}</p>
                </div>
            </div>
        </>
    );
};

export default HorizontalCard;
