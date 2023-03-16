import React from 'react'
import { RightArrowIcon } from '../../assets/ArrowIcons'
import image53 from "../../assets/image53.png"
import image54 from "../../assets/image54.png"
import image55 from "../../assets/image55.png"
import image57 from "../../assets/image57.png"
import rightarrow from "../../assets/svg/rightArrow.svg"
import Button from '../../components/Button'
function CheckoutProduct() {
    return (

        <div>

            <div className='flex justify-between  relative bg-white '>

                <div className='flex justify-start items-start w-full '><img className='w-1/2 ' src={image53} alt="" /></div>


                <div className='flex justify-end w-full'><img className='w-3/5 h-2/4' src={image54} alt="" /></div>

                {/* <div className='absolute w-[200px] h-[500px] bg-slate-500 right-[40px] top-0 '>

            </div> */}


                <div className='flex flex-col items-center absolute z-10 top-1/2 left-[30%] w-2/5 text-center text-black'>
                    <h1 className='text-[50px] font-bold '>Our team is the best in the business</h1>
                    <Button label="Check out the products" variant='primary' rightIcon={<RightArrowIcon />} />
                </div>
            </div>


            <div className='grid grid-cols-2 gap-6  py-24 px-24  bg-white '>
                <div className='w-full h-auto relative'>
                    <div className='w-full h-full '>
                        <img className='w-full h-full object-fit' src={image55} alt="" />
                    </div>
                    <div className='w-full flex justify-between items-center bg-black bg-opacity-30 text-white absolute bottom-0 p-3'>
                        <p className='font-bold text-3xl'>Golden lights</p>
                        <img src={rightarrow} alt="rightarrow" />
                    </div>
                </div>

                <div className='w-full h-auto relative'>
                    <div className='w-full h-full  '>
                        <img className='w-full h-full object-fit' src={image57} alt="" />
                    </div>
                    <div className='w-full flex justify-between items-center bg-black bg-opacity-30 text-white absolute bottom-0 p-3'>
                        <p className='font-bold text-3xl'>Golden lights</p>
                        <img src={rightarrow} alt="rightarrow" />
                    </div>
                </div>

                <div className='w-full h-auto  relative'>
                    <div className='w-full h-full '>
                        <img className='w-full h-full object-fit' src={image57} alt="" />
                    </div>
                    <div className='w-full flex justify-between items-center bg-black bg-opacity-30 text-white absolute bottom-0 p-3'>
                        <p className='font-bold text-3xl'>Golden lights</p>
                        <img src={rightarrow} alt="rightarrow" />
                    </div>
                </div>

                <div className='w-full h-auto  relative'>
                    <div className='w-full h-full '>
                        <img className='w-full h-full object-fit' src={image55} alt="" />
                    </div>
                    <div className='w-full flex justify-between items-center bg-black bg-opacity-30 text-white absolute bottom-0 p-3'>
                        <p className='font-bold text-3xl'>Golden lights</p>
                        <img src={rightarrow} alt="rightarrow" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CheckoutProduct