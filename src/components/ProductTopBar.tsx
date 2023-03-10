import React from 'react'

type ProductTopBartType = {
    message: string;
}

const ProductTopBar = ({ message }
    : ProductTopBartType
) => {
    return (
        <div className="w-full flex flex-row items-center text-center justify-start space-x-3 p-1 border-2 border-black bg-black text-white absolute top-0">
            <p className='text-[14px] font-semibold ml-2'>{message} </p>
            <p className="text-xs text-pot-yellow font-semibold">CHOICE</p>
        </div>
    )
}

export default ProductTopBar