import React, { useEffect, useState } from 'react'

const useMouseLocation = (isOverEndRegion= false) => {
    const [mouseLocation, setMouseLocation] = useState<number>(0)

    const handleMouseMove = (e: MouseEvent) => {
        setMouseLocation(e.clientX as number)
    }

    const checkIfAtLastPart = (val: number) => {
        const totalWidth = window.innerWidth;
        const widthDiff = totalWidth - val
        const widthDiffPercent = ((widthDiff/totalWidth) * 100)

        return(widthDiffPercent <= 22)
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove)
        return(() => window.removeEventListener("mousemove", handleMouseMove))
    }, [])

  return (isOverEndRegion ? checkIfAtLastPart(mouseLocation) : ((mouseLocation/ window.innerWidth) * 100) )
}

export default useMouseLocation