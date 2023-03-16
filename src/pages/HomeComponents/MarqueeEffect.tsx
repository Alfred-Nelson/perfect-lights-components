import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import starflower from "../../assets/starflower.png"


function MarqueeEffect() {


    return (

        <div className=" bg-black w-full mt-2">
            <motion.div
                animate={{
                    x: "-100vw",
                    transition: {
                        repeat: Infinity,
                        duration: 10,
                        ease: "linear",
                    },
                }}
                className='flex gap-5 justify-center items-center font-bold text-[38px] bg-black text-white py-3'>

                <div className="flex items-center gap-2"><p>Exclusive Deals</p><img className="w-[20px] mt-2" src={starflower} alt="starflower" /></div>
                <div className="flex items-center gap-2"><p>Exclusive Deals</p><img className="w-[20px] mt-2" src={starflower} alt="starflower" /></div>
                <div className="flex items-center gap-2"><p>Exclusive Deals</p><img className="w-[20px] mt-2" src={starflower} alt="starflower" /></div>
                <div className="flex items-center gap-2"><p>Exclusive Deals</p><img className="w-[20px] mt-2" src={starflower} alt="starflower" /></div>


            </motion.div>
        </div>

    )
}


export default MarqueeEffect