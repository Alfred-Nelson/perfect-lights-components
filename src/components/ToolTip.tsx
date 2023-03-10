import React from 'react'

type ToolTipType = {
    message: string;
}

const ToolTip = ({ message }
    : ToolTipType
) => {
    return (
        <div
            className="absolute top-3 right-0 flex flex-wrap justify-center items-center gap-x-2 bg-[#F4F2EE] z-[10] px-2 py-3 border rounded-md w-fit whitespace-nowrap">
            <h1>{message}</h1>
        </div>
    )
}

export default ToolTip