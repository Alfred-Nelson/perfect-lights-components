import React from 'react'
import { RightArrowIcon } from '../../assets/ArrowIcons'
import Button from '../../components/Button'


function ProductCustomize() {
    return (
        
        <div className='flex flex-col justify-center  space-y-0 items-center  bg-black text-white h-[auto] '>
            <div className="flex flex-col justify-center w-[42%] text-center py-32">
                <div className="flex flex-col justify-center items-center space-y-12">
                    <h1 className='text-center text-7xl text-[#E1E1E1] tracking-tight font-bold'>Product Customization</h1>
                    <p className='text-[#DBDBDB]'>
                        Lorem ipsum dolor sit amet consectetur. Sit ac rhoncus non at arcu consequat amet etiam. Nisl massa consequat sed mauris in venenatis.
                        Lorem ipsum dolor sit amet consectetur. Sit ac rhoncus non at arcu
                    </p>
                </div>

                <div className="flex justify-center space-x-5 mt-8">
                    <Button
                        variant="primary"
                        label="Shop our products"
                        rightIcon={<RightArrowIcon />} />
                </div>
            </div>



            <div className='w-full flex flex-col justify-start items-start space-y-32 px-32  text-left py-8'>
                <div className='w-[38%]'>
                    <h2 className='text-[33px] font-bold mb-5' >Step 1:Choose a variant</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Viverra semper pharetra rhoncus vitae hendrerit vitae. Enim id rhoncus interdum quam ac integer id. Tempor curabitur platea viverra turpis. Lacus ultrices
                    </p>
                </div>
                <div className='w-[38%]'>
                    <h2 className='text-[33px] font-bold  mb-5'>Step 2:Choose a variant</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Viverra semper pharetra rhoncus vitae hendrerit vitae. Enim id rhoncus interdum quam ac integer id. Tempor curabitur platea viverra turpis. Lacus ultrices
                    </p>
                </div>
                <div className='w-[38%]'>
                    <h2 className='text-[33px] font-bold  mb-5'>Step 3:Choose a variant</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Viverra semper pharetra rhoncus vitae hendrerit vitae. Enim id rhoncus interdum quam ac integer id. Tempor curabitur platea viverra turpis. Lacus ultrices
                    </p>
                </div>
                <div className='w-[38%]'>
                    <h2 className='text-[33px] font-bold  mb-5'>Step 4: Choose a variant</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Viverra semper pharetra rhoncus vitae hendrerit vitae. Enim id rhoncus interdum quam ac integer id. Tempor curabitur platea viverra turpis. Lacus ultrices
                    </p>
                </div>


            </div>


        </div>
    )
}

export default ProductCustomize