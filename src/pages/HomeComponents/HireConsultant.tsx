import React from 'react'
import { RightArrowIcon } from '../../assets/ArrowIcons'
import TickMark from '../../assets/TickMark'
import Button from '../../components/Button'
import man1 from "../../assets/man1.png"
import { motion } from "framer-motion"
import { delay } from 'lodash'
function HireConsultant() {
    const textAnimate = {
        offscreen: {
            x: -100,
            opacity: 0,
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 2
            }
        }
    }

    // const container = {
    //     hidden: {
    //         opacity: 1,
    //     },
    //     vissible: (i = 1) => ({
    //         opacity: 1,
    //         transition: {
    //             staggerChildren: 0.12,
    //             delayChildren: 0.4 * i
    //         }
    //     })
    // }

    // const child = {
    //     visible: {
    //         opacity: 1, y: 0,
    //         trabsition: {
    //             type: "string",
    //             damping: 12,
    //             stiffness: 100,
    //         }
    //     },
    //     hidden: {
    //         opacity: 0, y: 20,
    //         trabsition: {
    //             type: "string",
    //             damping: 12,
    //             stiffness: 100,
    //         }
    //     }
    // }






    const content = [
        { id: 1, heading: "Vision and Brief", description: "The beginning of an exciting journey! Give yourself time, let yourself dream." },
        { id: 2, heading: "Concept Design", description: "When we collaboratively come up with conceptual lighting ideas." },
        { id: 3, heading: "Developed Design", description: "When we start to expand the ideas into a buildable design, and test the budget and brief." },
        { id: 4, heading: "Technical Design", description: "Completing the drawn design work and with the design team." },
        { id: 5, heading: "Vision and Brief", description: "Helping with project management, procurement, and overseeing the contactor" },
        { id: 6, heading: "Construction and Procurement", description: "This is key to delivering the lighting design vision and control methodology." }
    ]
    return (
        <div className='w-full h-auto'>


            <motion.div initial={"offscreen"} whileInView={"onscreen"} viewport={{ once: false, amount: 0.5 }} transition={{ staggerChild: 1 }} className='flex justify-end items-center py-0 px-32 pr-5 relative mt-32'>

                <div className='flex flex-col  justify-start gap-y-6 w-full  h-[500px] absolute z-10 top-[19%] left-0 px-32' >

                    <motion.div variants={textAnimate} className='w-[450px]'>
                        <h1 className='text-[4rem] font-[roboto] font-bold tracking-tight'>Hire a design consultant</h1>
                        <p className='text-md mt-2 '>Lorem ipsum dolor sit amet consectetur. Sit ac rhoncus non at arcu consequat amet etiam. Nisl massa consequat sed</p>
                    </motion.div>


                    <div className='flex flex-col items-start space-y-6 mt-10'>
                        <motion.div variants={textAnimate} >
                            <motion.div variants={textAnimate} className='flex flex-row items-center space-x-2'>
                                <div className='flex items-center justify-center w-4 h-4 rounded-full bg-pot-yellow '>
                                    <TickMark color='white' />
                                </div>
                                <p>Mauris pellentesque congue libero nec</p>
                            </motion.div>

                            <div className='flex flex-row items-center space-x-2'>
                                <div className='flex items-center justify-center w-4 h-4 rounded-full bg-pot-yellow '>
                                    <TickMark color='white' />
                                </div>
                                <p>Suspendisse mollis tincidunt</p>
                            </div>
                            <motion.div variants={textAnimate} className='flex flex-row items-center space-x-2'>
                                <div className='flex items-center justify-center w-4 h-4 rounded-full bg-pot-yellow '>
                                    <TickMark color='white' />
                                </div>
                                <p>Praesent varius justo vel justo pulvinar </p>
                            </motion.div>
                        </motion.div>
                        <Button variant='primary' label='Hire a consultant' rightIcon={<RightArrowIcon />} />
                    </div>

                </div>

                <div className='w-[600px] h-[600px] bg-[#EFEFEF] bg-opacity-10 rounded-full -ml-7  mr-10 relative -overflow-y-hidden' >
                    <img className='absolute -top-14 right-6 w-[85%] h-[650px] rounded-bl-[200px]  rounded-br-[250px]' src={man1} alt="man-consult" />
                </div>

            </motion.div>










            <motion.div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-12  py-32 px-32'>


                {content.map((el, i) => {
                    return (
                        <motion.div className='flex flex-col gap-y-2 ' initial={{ opacity: 0, translateY: -50 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.10 }}
                        >
                            <div className='flex items-center justify-center w-[40px] h-[40px] bg-pot-yellow rounded-full'>
                                <p>{el.id}</p>
                            </div>
                            <p className='font-bold'>{el.heading}</p>
                            <p>{el.description}</p>
                        </motion.div>
                    )
                })}


                {/* <motion.div className='flex flex-col gap-y-2 '>
                    <div className='flex items-center justify-center w-[40px] h-[40px] bg-pot-yellow rounded-full'>
                        <p>2</p>
                    </div>
                    <p className='font-bold'>Concept Design</p>
                    <p>When we collaboratively come up with conceptual lighting ideas.</p>
                </motion.div>


                <motion.div className='flex flex-col gap-y-2 '>
                    <div className='flex items-center justify-center w-[40px] h-[40px] bg-pot-yellow rounded-full'>
                        <p>3</p>
                    </div>
                    <p className='font-bold'>Developed Design</p>
                    <p>When we start to expand the ideas into a buildable design, and test the budget and brief.</p>
                </motion.div>


                <motion.div className='flex flex-col gap-y-2 '>
                    <div className='flex items-center justify-center w-[40px] h-[40px] bg-pot-yellow rounded-full'>
                        <p>4</p>
                    </div>
                    <p className='font-bold'>Technical Design</p>
                    <p>Completing the drawn design work and with the design team.</p>
                </motion.div>


                <motion.div className='flex flex-col gap-y-2 '>
                    <div className='flex items-center justify-center w-[40px] h-[40px] bg-pot-yellow rounded-full'>
                        <p>5</p>
                    </div>
                    <p className='font-bold'>Vision and Brief</p>
                    <p>Helping with project management, procurement, and overseeing the contactor</p>
                </motion.div>


                <motion.div className='flex flex-col gap-y-2 '>
                    <div className='flex items-center justify-center w-[40px] h-[40px] bg-pot-yellow rounded-full'>
                        <p>6</p>
                    </div>
                    <p className='font-bold'>Construction and Procurement</p>
                    <p>This is key to delivering the lighting design vision and control methodology.</p>
                </motion.div> */}

            </motion.div>

        </div>

    )
}

export default HireConsultant