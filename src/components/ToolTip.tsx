import React from 'react'

type ToolTipType = {
    message: string;
}

const ToolTip = ({ message }
    : ToolTipType
) => {
    return (
        <div
            className="absolute top-3 -right-0 flex flex-wrap justify-center items-center gap-x-2 bg-[#F4F2EE] z-[1] px-2 py-2 border rounded-md w-fit whitespace-nowrap">
            <p className='text-sm'>{message}</p>
        </div>
    )
}

export default ToolTip