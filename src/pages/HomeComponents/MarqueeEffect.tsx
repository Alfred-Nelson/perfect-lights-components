import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import starflower from "../../assets/starflower.png"

function MarqueeEffect() {

    const marqueeVariants = {
        animate: {
            x: [0, -1035],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 5,
                    ease: "linear",
                },
            },
        },
    };


    return (


        <div>
            <div className="marquee relative w-[100vw] max-w-[100%] h-[60px] overflow-x-hidden">
                <motion.div
                    className="track absolute whitespace-nowrap will-change-transform flex justify-between items-center gap-10 text-center font-bold text-[40px]"
                    variants={marqueeVariants}
                    animate="animate"
                >
                    <div className="flex items-center gap-2"><p>Exclusive Deals</p><img className="w-[20px] mt-2" src={starflower} alt="starflower" /></div>
                    <div className="flex items-center gap-2"><p>Exclusive Deals</p><img className="w-[20px] mt-2" src={starflower} alt="starflower" /></div>
                    <div className="flex items-center gap-2"><p>Exclusive Deals</p><img className="w-[20px] mt-2" src={starflower} alt="starflower" /></div>
                    <div className="flex items-center gap-2"><p>Exclusive Deals</p><img className="w-[20px] mt-2" src={starflower} alt="starflower" /></div>
                    <div className="flex items-center gap-2"><p>Exclusive Deals</p><img className="w-[20px] mt-2" src={starflower} alt="starflower" /></div>
                    <div className="flex items-center gap-2"><p>Exclusive Deals</p><img className="w-[20px] mt-2" src={starflower} alt="starflower" /></div>
                    <div className="flex items-center gap-2"><p>Exclusive Deals</p><img className="w-[20px] mt-2" src={starflower} alt="starflower" /></div>
                </motion.div>
            </div>
        </div>


        // <div className=" bg-black w-full overflow-x-hidden">
        //     <motion.div
        //         animate={{
        //             x: "100vw",
        //             transition: {
        //                 repeat: Infinity,
        //                 repeatType:"loop",
        //                 duration: 10,
        //                 ease: "linear",
        //             },
        //         }}
        //         className='flex gap-5 justify-center items-center font-bold text-[38px] bg-black text-white py-3'>

        //         <div className="flex items-center gap-2"><p>Exclusive Deals</p><img className="w-[20px] mt-2" src={starflower} alt="starflower" /></div>
        //         <div className="flex items-center gap-2"><p>Exclusive Deals</p><img className="w-[20px] mt-2" src={starflower} alt="starflower" /></div>
        //         <div className="flex items-center gap-2"><p>Exclusive Deals</p><img className="w-[20px] mt-2" src={starflower} alt="starflower" /></div>
        //         <div className="flex items-center gap-2"><p>Exclusive Deals</p><img className="w-[20px] mt-2" src={starflower} alt="starflower" /></div>
        //     </motion.div>
        // </div>

    )
}


export default MarqueeEffect