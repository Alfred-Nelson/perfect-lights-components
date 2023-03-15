import React from 'react'
import { RightArrowIcon } from '../../assets/ArrowIcons'
import TickMark from '../../assets/TickMark'
import Button from '../../components/Button'
import man1 from "../../assets/man1.png"

function HireConsultant() {
    return (
        <div className='w-full h-full'>


            <div className='flex justify-end items-center py-32 px-32 pr-5 relative'>

                <div className='flex flex-col  justify-start gap-y-6 w-full  h-[500px] absolute z-10 top-[19%] left-0 px-32' >

                    <div className='w-[450px]'>
                        <h1 className='text-[4rem] font-[roboto] font-bold tracking-tight'>Hire a design consultant</h1>
                        <p className='text-md mt-2 '>Lorem ipsum dolor sit amet consectetur. Sit ac rhoncus non at arcu consequat amet etiam. Nisl massa consequat sed</p>
                    </div>

                   
                    <div className='flex flex-col items-start space-y-6 mt-10'>
                        <div>
                            <div className='flex flex-row items-center space-x-2'>
                                <div className='flex items-center justify-center w-4 h-4 rounded-full bg-pot-yellow '>
                                    <TickMark color='white' />
                                </div>
                                <p>Mauris pellentesque congue libero nec</p>
                            </div>

                            <div className='flex flex-row items-center space-x-2'>
                                <div className='flex items-center justify-center w-4 h-4 rounded-full bg-pot-yellow '>
                                    <TickMark color='white' />
                                </div>
                                <p>Suspendisse mollis tincidunt</p>
                            </div>
                            <div className='flex flex-row items-center space-x-2'>
                                <div className='flex items-center justify-center w-4 h-4 rounded-full bg-pot-yellow '>
                                    <TickMark color='white' />
                                </div>
                                <p>Praesent varius justo vel justo pulvinar </p>
                            </div>
                        </div>
                        <Button variant='primary' label='Hire a consultant' rightIcon={<RightArrowIcon />} />
                    </div>

                </div>

                <div className='w-[600px] h-[600px] bg-[#EFEFEF] bg-opacity-10 rounded-full -ml-7  mr-10 relative -overflow-y-hidden' >
                    <img className='absolute -top-14 right-6 w-[85%] h-[650px] rounded-bl-[200px]  rounded-br-[250px]' src={man1} alt="man-consult" />
                </div>

            </div>










            <div className='grid grid-cols-3 gap-12  py-32 px-32'>


                <div className='flex flex-col gap-y-2 '>
                    <div className='flex items-center justify-center w-[40px] h-[40px] bg-pot-yellow rounded-full'>
                        <p>1</p>
                    </div>
                    <p className='font-bold'>Vision and Brief</p>
                    <p>The beginning of an exciting journey! Give yourself time, let yourself dream.</p>
                </div>


                <div className='flex flex-col gap-y-2 '>
                    <div className='flex items-center justify-center w-[40px] h-[40px] bg-pot-yellow rounded-full'>
                        <p>2</p>
                    </div>
                    <p className='font-bold'>Concept Design</p>
                    <p>When we collaboratively come up with conceptual lighting ideas.</p>
                </div>


                <div className='flex flex-col gap-y-2 '>
                    <div className='flex items-center justify-center w-[40px] h-[40px] bg-pot-yellow rounded-full'>
                        <p>3</p>
                    </div>
                    <p className='font-bold'>Developed Design</p>
                    <p>When we start to expand the ideas into a buildable design, and test the budget and brief.</p>
                </div>


                <div className='flex flex-col gap-y-2 '>
                    <div className='flex items-center justify-center w-[40px] h-[40px] bg-pot-yellow rounded-full'>
                        <p>4</p>
                    </div>
                    <p className='font-bold'>Technical Design</p>
                    <p>Completing the drawn design work and with the design team.</p>
                </div>


                <div className='flex flex-col gap-y-2 '>
                    <div className='flex items-center justify-center w-[40px] h-[40px] bg-pot-yellow rounded-full'>
                        <p>5</p>
                    </div>
                    <p className='font-bold'>Vision and Brief</p>
                    <p>Helping with project management, procurement, and overseeing the contactor</p>
                </div>


                <div className='flex flex-col gap-y-2 '>
                    <div className='flex items-center justify-center w-[40px] h-[40px] bg-pot-yellow rounded-full'>
                        <p>6</p>
                    </div>
                    <p className='font-bold'>Construction and Procurement</p>
                    <p>This is key to delivering the lighting design vision and control methodology.</p>
                </div>

            </div>

        </div>

    )
}

export default HireConsultant