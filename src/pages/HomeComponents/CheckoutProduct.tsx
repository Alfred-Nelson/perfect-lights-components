import React from 'react'
import { RightArrowIcon } from '../../assets/ArrowIcons'
import image53 from "../../assets/image53.png"
import image54 from "../../assets/image54.png"
import Button from '../../components/Button'
function CheckoutProduct() {
    return (
        <div className='flex justify-between border-2 border-red-600 relative'>

            <div className='flex justify-start items-start border-4 border-red-600 w-full '><img className='w-1/2 ' src={image53} alt="" /></div>


            <div className='flex justify-end border-4 border-red-600 w-full'><img className='w-3/5 h-2/4' src={image54} alt="" /></div>

            {/* <div className='absolute w-[200px] h-[500px] bg-slate-500 right-[40px] top-0 '>

            </div> */}


            <div className='flex flex-col items-center absolute z-10 top-1/2 left-[30%] w-2/5 text-center'>
                <h1 className='text-[50px] font-bold'>Our team is the best in the business</h1>
                <Button label="Check out the products" variant='primary' rightIcon={<RightArrowIcon />} />
            </div>
        </div>
    )
}

export default CheckoutProduct