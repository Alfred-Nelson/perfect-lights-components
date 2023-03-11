import React, { useState } from "react";
import InfoIcon from "../assets/InfoIcon";
import ToolTip from "./ToolTip";

// image src: string, name: string, trinname: string, product specification: [{}] , price: number tooltip-text: string

type VerticalCardPropsType = {
  imageUrl: string;
  name?: string;
  degree?: string;
  price?: number;
  message?: string | null | undefined;
}

export const primaryVerticalCardStyle: string = "text-black font-normal border-2 border-[#F4F2EE] hover:boder-2 hover:border-[#D4A15E] hover:border-opacity-50 focus:outline-none focus:bg-white focus:border-pot-yellow active:border-pot-yellow active:border-2"


const VerticalCard = ({
  imageUrl = "",
  name = "",
  price,
  degree = "",
  message = null,
}: VerticalCardPropsType) => {

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

      <div className={`w-[98px] flex flex-col  justify-center items-center space-y-3 py-3 text-center  ${primaryVerticalCardStyle}`}>

        <div className="flex justify-center  w-[69px] h-[53px]">
          <img className="w-full h-full object-cover " src={imageUrl} alt={name} />
        </div>

        { name && <div className="w-full flex flex-row items-center justify-center gap-2 text-center border-t-2 border-[#F4F2EE] mt-2">
          <p className=" font-semibold text-[12px] mt-2 ">{name}</p>
          {
            message &&
            <div className="relative mt-2">
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
        </div>}
        {price &&
          <div className="w-full border-t-2 border-[#F4F2EE]">
            <p className="py-2 font-semibold text-[12px] leading-3">Price: Rs {price}</p>
          </div>
        }
        {degree && <div  className="w-full flex flex-row items-center justify-center text-center border-t-2 border-[#F4F2EE]"> <p className="w-full mt-2 font-semibold text-[12px] font-Gilroy">{degree}</p> </div>}
      </div>
    </>
  );
};

export default VerticalCard;
