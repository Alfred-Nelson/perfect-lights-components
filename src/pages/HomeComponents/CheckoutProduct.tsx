import React from 'react'
import { motion } from 'framer-motion'
import { RightArrowIcon } from '../../assets/ArrowIcons'
import image53 from "../../assets/image53.png"
import image54 from "../../assets/image54.png"
import image55 from "../../assets/image55.png"
import image57 from "../../assets/image57.png"
import rightarrow from "../../assets/svg/rightArrow.svg"
import Button from '../../components/Button'
import "../../style/Checkout.css"
function CheckoutProduct() {

    // const variants = {
    //     hidden: {
    //         opacity: 0,
    //         y: 50
    //     },
    //     visible: {
    //         opacity: 1,
    //         y: 0,
    //         transition: {
    //             duration: 0.5,
    //             ease: 'easeInOut'
    //         }
    //     }
    // }



    const imageAnimate = {
        offscreen: {
            y: -100,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            rotate: [0, 10, 0],
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0
            }
        }
    }
    const textAnimate = {
        offscreen: {
            y:100,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1
            }
        }
    }






    return (

        <div>

            <motion.div className='flex justify-between relative bg-white' initial={"offscreen"} whileInView={"onscreen"} viewport={{ once: false, amount: 1 }} transition={{ staggerChild: 0.54 }}>
                <motion.div
                    // variants={imageAnimate}
                    className='flex justify-start items-start w-full'  >
                    <img className='w-1/2 z-10' src={image53} alt="" />
                </motion.div>
                <motion.div
                    // variants={imageAnimate} 
                    className='flex justify-end w-full'>
                    <img className='w-3/5 h-2/4 z-10' src={image54} alt="" />
                </motion.div>


                <motion.div className='curve1'></motion.div>
                <motion.div className='curve2'></motion.div>
                <motion.div
                    // variants={imageAnimate} 
                    className='curve3'></motion.div>




                <div className='flex flex-col items-center absolute z-10 top-1/2 left-[30%] w-2/5 text-center text-black'>
                    <motion.h1 variants={textAnimate} className='text-[50px] font-bold '>Our team is the best in the business</motion.h1>
                    <Button label="Check out the products" variant='primary' rightIcon={<RightArrowIcon />} />
                </div>
            </motion.div>




            <motion.div
                className='grid grid-cols-1  md:grid-cols-2   gap-6  py-24 px-24  bg-white '

            >
                <motion.div
                    className='w-full h-auto relative'
                    initial={{ x: -80, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 1 } }} viewport={{ once: false, amount: 0.5 }}
                >
                    <div className='w-full h-full  '>
                        <img className='w-full h-full object-fit' src={image55} alt="" />
                    </div>
                    <div className='w-full flex justify-between items-center bg-black bg-opacity-30 text-white absolute bottom-0 p-3'  >
                        <p className='font-bold text-3xl'>Golden lights</p>
                        <motion.div className='cursor-pointer' whileHover={{ scale: 1.50 }}><img src={rightarrow} alt="rightarrow" /></motion.div>
                    </div>
                </motion.div>

                <motion.div
                    className='w-full h-auto relative'
                    initial={{ x: 80, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 1 } }} viewport={{ once: false, amount: 0.5 }}
                >
                    <div className='w-full h-full  '>
                        <img className='w-full h-full object-fit' src={image57} alt="" />
                    </div>
                    <div className='w-full flex justify-between items-center bg-black bg-opacity-30 text-white absolute bottom-0 p-3'  >
                        <p className='font-bold text-3xl'>Golden lights</p>
                        <motion.div className='cursor-pointer' whileHover={{ scale: 1.50 }}><img src={rightarrow} alt="rightarrow" /></motion.div>
                    </div>
                </motion.div>

                <motion.div
                    className='w-full h-auto relative'
                    initial={{ x: -80, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 1 } }} viewport={{ once: false, amount: 0.5 }}
                >
                    <div className='w-full h-full  '>
                        <img className='w-full h-full object-fit' src={image55} alt="" />
                    </div>
                    <div className='w-full flex justify-between items-center bg-black bg-opacity-30 text-white absolute bottom-0 p-3'  >
                        <p className='font-bold text-3xl'>Golden lights</p>
                        <motion.div className='cursor-pointer' whileHover={{ scale: 1.50 }}><img src={rightarrow} alt="rightarrow" /></motion.div>
                    </div>
                </motion.div>
                <motion.div
                    className='w-full h-auto relative'
                    initial={{ x: 80, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 1 } }} viewport={{ once: false, amount: 0.5 }}
                >
                    <div className='w-full h-full  '>
                        <img className='w-full h-full object-fit' src={image57} alt="" />
                    </div>
                    <div className='w-full flex justify-between items-center bg-black bg-opacity-30 text-white absolute bottom-0 p-3'  >
                        <p className='font-bold text-3xl'>Golden lights</p>
                        <motion.div className='cursor-pointer' whileHover={{ scale: 1.50 }}><img src={rightarrow} alt="rightarrow" /></motion.div>
                    </div>
                </motion.div>
            </motion.div>


        </div>
    )
}

export default CheckoutProduct








