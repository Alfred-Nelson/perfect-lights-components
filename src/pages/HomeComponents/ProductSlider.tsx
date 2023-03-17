import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../../components/ProductCard";
import image43 from "../../assets/image43.png";
import image65 from "../../assets/image65.png";
import image66 from "../../assets/image66.png";
import caretLeftArrow from "../../assets/svg/caretLeftArrow.svg";
import caretRightArrow from "../../assets/svg/caretRightArrow.svg";
import "../../style/ProductSlider.css"

const ProductData = [{ brand: "Tommy Geoco’s", imgUrl: image43, category: "ECO", name: "LED Cob Spot Light Hybec | PRO-45", price: 4000, }, { brand: "Tommy Geoco’s", imgUrl: image65, category: "ELITE", name: "LED Cob Spot Light Hybec | PRO-45", price: 4000, }, { brand: "Tommy Geoco’s", imgUrl: image66, category: "ELITE", name: "LED Cob Spot Light Hybec | PRO-45", price: 4000, }, { brand: "Tommy Geoco’s", imgUrl: image66, category: "PROFESSIONAL", name: "LED Cob Spot Light Hybec | PRO-45", price: 4000, }, { brand: "Tommy Geoco’s", imgUrl: image66, category: "PROFESSIONAL", name: "LED Cob Spot Light Hybec | PRO-45", price: 4000, }, { brand: "Tommy Geoco’s", imgUrl: image66, category: "PROFESSIONAL", name: "LED Cob Spot Light Hybec | PRO-45", price: 4000, }, { brand: "Tommy Geoco’s", imgUrl: image66, category: "PROFESSIONAL", name: "LED Cob Spot Light Hybec | PRO-45", price: 4000, }, { brand: "Tommy Geoco’s", imgUrl: image66, category: "PROFESSIONAL", name: "LED Cob Spot Light Hybec | PRO-45", price: 4000, }, { brand: "Tommy Geoco’s", imgUrl: image43, category: "ECO", name: "LED Cob Spot Light Hybec | PRO-45", price: 4000, }, { brand: "Tommy Geoco’s", imgUrl: image65, category: "ELITE", name: "LED Cob Spot Light Hybec | PRO-45", price: 4000, }, { brand: "Tommy Geoco’s", imgUrl: image66, category: "ELITE", name: "LED Cob Spot Light Hybec | PRO-45", price: 4000, }, { brand: "Tommy Geoco’s", imgUrl: image66, category: "PROFESSIONAL", name: "LED Cob Spot Light Hybec | PRO-45", price: 4000, }, { brand: "Tommy Geoco’s", imgUrl: image66, category: "PROFESSIONAL", name: "LED Cob Spot Light Hybec | PRO-45", price: 4000, }, { brand: "Tommy Geoco’s", imgUrl: image43, category: "ECO", name: "LED Cob Spot Light Hybec | PRO-45", price: 4000, }, { brand: "Tommy Geoco’s", imgUrl: image65, category: "ELITE", name: "LED Cob Spot Light Hybec | PRO-45", price: 4000, }, { brand: "Tommy Geoco’s", imgUrl: image66, category: "ELITE", name: "LED Cob Spot Light Hybec | PRO-45", price: 4000, }];

function ProductSlider() {
    const [slideIndex, setSlideIndex] = useState(0);


    const handlePrev = () => {
        if (slideIndex === 0) {
            return
        }
        setSlideIndex(slideIndex === 0 ? ProductData.length - 1 : slideIndex - 1);
    };

    const handleNext = () => {
        if (slideIndex === ProductData.length - 4) {
            return
        }
        setSlideIndex(slideIndex === ProductData.length - 1 ? 0 : slideIndex + 1);
    };

    const handleRangeChange = (e: any) => {
        setSlideIndex(parseInt(e.target.value));
    };

    return (

        <div className="appearance-none bg-white text-black">
            <div className="m-auto w-[700px] text-center ">
                <h1 className="text-[50px] font-bold">Professionally</h1>
                <h1 className="text-[50px] font-bold"> Recommended Products</h1>
            </div>
            <div className="w-[100%] flex  justify-center items-center gap-5 py-8 mt-10">
                <div
                    className="w-[86.5%] flex items-center overflow-hidden gap-[32px] "
                >
                    {ProductData?.map((el, i) => {
                        return (
                            <motion.div key={i} className="w-full" animate={{ x: -slideIndex * 294 + "px" }}>
                                <ProductCard
                                    imageUrl={el.imgUrl}
                                    price={el.price}
                                    name={el.name}
                                    category={el.category}
                                    brand={el.brand}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-center items-center gap-6 px-28 py-5">

                <input
                    type="range"
                    className="productslider w-2/4"
                    min="0"
                    max={ProductData.length - 4}
                    value={slideIndex}
                    onChange={handleRangeChange}
                />
                <div className="flex justify-between w-28">

                    <div className='flex items-center justify-center w-[40px] h-[40px] border-2 border-pot-yellow rounded-full cursor-pointer' onClick={handlePrev} ><img src={caretLeftArrow} alt="caretLeftArrow" className='pr-1' /></div>
                    <div className='flex items-center justify-center w-[40px] h-[40px] border-2 border-pot-yellow rounded-full cursor-pointer' onClick={handleNext}><img src={caretRightArrow} alt="caretRightArrow" className='pl-1' /></div>
                </div>
            </div>
        </div>
    )
}
export default ProductSlider