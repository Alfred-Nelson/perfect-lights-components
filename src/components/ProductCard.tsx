import React, { useState } from "react";
import InfoIcon from "../assets/InfoIcon";
import ProductTopBar from "./ProductTopBar";
import ToolTip from "./ToolTip";

// image src: string, name: string, trinname: string, product specification: [{}] , price: number tooltip-text: string

type ProductCardPropsType = {
    brand?: string;
    imageUrl?: string;
    name?: string;
    price?: number;
    category?: string;
}

export const primaryProductCardStyle: string = "cursor-pointer text-pot-yellow font-semibold  border-2 border-[#F4F2EE] hover:text-[#9B9B9B] focus:outline-none  active:text-[#434343] "


const ProductCard = ({
    brand = "",
    imageUrl = "",
    name = "",
    price,
    category = "",
}: ProductCardPropsType) => {

    const [text, setText] = useState<string>(brand)
    // const fullWidthStyle = fullWidth
    //     ? "w-full justify-center mx-5"
    //     : "w-fit justify-between";
    return (
        <>
            <div className={`relative w-[262px] flex flex-col  justify-center items-center space-y-0  text-center`}>
                {
                    brand && <ProductTopBar message={text} />
                }
                <div className={`flex flex-col w-full text-start ${primaryProductCardStyle} `}>
                    <div className="w-full flex justify-center items-center  bg-[#F7F7F7] py-14">
                        <img className="  w-[118px] h-[132px] object-cover " src={imageUrl} alt={name} />
                    </div>
                    <div className="mt-2">
                        <p className="ml-2">{category}</p>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-between space-x-3 ">
                    <div className=" flex items-center  text-xs w-[50%] text-start">
                        <p className="leading-2">{name}</p>
                    </div>
                    <div className=" w-[50%] text-right">
                        <label className=" text-xs text-black-500">Staring from</label>
                        <p>₹ <span className="font-semibold">{price}</span> </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;

