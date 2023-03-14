import React from 'react'
import image41 from "../../assets/image41.png"
function ExclusiveDeal() {
    return (
        <div className='flex flex-col space-y-0 bg-pot-grey1 px-0 py-12 '>
            <div className='h-auto flex justify-center space-x-12 items-center w-full   text-xl text-[#4E4E4E]'>
                <div className='flex justify-center  w-[20%] -mt-28 text-left h-auto '>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Massa est ultricies lacinia nibh felis dictum lacus. Felis
                    </p>
                </div>
                <div className='flex justify-center items-center w-[400px] h-[410px]'>
                    <img className="  w-[full] h-[full] object-cover " src={image41} alt="Theatre Lights Prolights Eclipsehdtubk - Etc Source 4 Png@seekpng.com"></img>
                </div>
                <div className='w-[20%] mt-40  text-right'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Massa est ultricies lacinia nibh felis
                    </p>
                </div>
            </div>


            <div>
                <p className='text-center text-[55px] tracking-tight font-bold leading-12 text-black'>Exclusive Deals of Lights Collection</p>
            </div>
        </div>
    )
}

export default ExclusiveDeal