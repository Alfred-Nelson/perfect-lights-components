import React, { useState } from 'react'
import { RightArrowIcon } from '../../assets/ArrowIcons'
import Button from '../../components/Button'
import facebook from "../../assets/svg/facebookuser.svg"
import tweeter from "../../assets/svg/twitteruser.svg"
import Ellipse1 from "../../assets/Ellipse1.png"
import Ellipse2 from "../../assets/Ellipse2.png"
import caretLeftArrow from "../../assets/svg/caretLeftArrow.svg";
import caretRightArrow from "../../assets/svg/caretRightArrow.svg";
import location from "../../assets/svg/location.svg";
import { motion } from "framer-motion";
import "../../style/ProfessionalUser.css"

const ProfessionalUesrData = [
  {
    imgUrl: Ellipse2,
    name: "Professional Users",
    profession: "Architect",
    companyName: "Name of the company",
    about: "Lorem ipsum dolor sit amet consectetur. Tempus aliquet volutpat eu tellus morbi sit dui. Tempus",
    location: "Ahemdabad"
  },
  {
    imgUrl: Ellipse1,
    name: "Professional Users",
    profession: "Architect",
    companyName: "Name of the company",
    about: "Lorem ipsum dolor sit amet consectetur. Tempus aliquet volutpat eu tellus morbi sit dui. Tempus",
    location: "Ahemdabad"
  },
  {
    imgUrl: Ellipse2,
    name: "Professional Users",
    profession: "Architect",
    companyName: "Name of the company",
    about: "Lorem ipsum dolor sit amet consectetur. Tempus aliquet volutpat eu tellus morbi sit dui. Tempus",
    location: "Ahemdabad"
  },
  {
    imgUrl: Ellipse1,
    name: "Professional Users",
    profession: "Architect",
    companyName: "Name of the company",
    about: "Lorem ipsum dolor sit amet consectetur. Tempus aliquet volutpat eu tellus morbi sit dui. Tempus",
    location: "Ahemdabad"
  },
  {
    imgUrl: Ellipse2,
    name: "Professional Users",
    profession: "Architect",
    companyName: "Name of the company",
    about: "Lorem ipsum dolor sit amet consectetur. Tempus aliquet volutpat eu tellus morbi sit dui. Tempus",
    location: "Ahemdabad"
  },
]

function ProfessionalUser() {
  const [slideIndex, setSlideIndex] = useState(0);


  const handlePrev = () => {
    if (slideIndex === 0) {
      return
    }
    setSlideIndex(slideIndex === 0 ? ProfessionalUesrData.length - 1 : slideIndex - 1);
  };

  const handleNext = () => {
    if (slideIndex === ProfessionalUesrData.length - 2) {
      return
    }
    setSlideIndex(slideIndex === ProfessionalUesrData.length - 1 ? 0 : slideIndex + 1);
  };

  const handleRangeChange = (e: any) => {
    setSlideIndex(parseInt(e.target.value));
  };



  return (
    <div className='flex flex-row gap-20 pl-24 py-24 bg-white text-black'>


      {/*  Ist Box */}
      <div className='flex flex-col gap-5 w-[40%] py-10 px-2 '>
        <h1 className='font-bold text-6xl'>Professional Users</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Interdum mi morbi eu laoreet. Pharetra commodo diam cursus eget eget pharetra. Faucibus a dignissim.</p>
        <div className='flex flex-col gap-5 w-60 mt-5'>
          <Button variant='primary' label='Become a professional' rightIcon={<RightArrowIcon />} />
          <Button variant='secondary-outline' label='Explore directory' rightIcon={<RightArrowIcon />} />
        </div>
      </div>


      {/* Second Box */}
      <div className='w-[56%] overflow-hidden'>

        <div className="flex gap-2">
          <div
            className="w-[86.5%] flex items-center  gap-[30px]"
          >
            {ProfessionalUesrData?.map((el, i) => {
              return (

                <motion.div key={i} className="w-full" animate={{ x: -slideIndex * 318 + "px" }}>
                  <div className=' flex flex-col gap-2 items-center text-center bg-black text-white px-2 py-10 w-72'>

                    <div className='rounded-full'>
                      <img className='rounded-full object-cover w-full h-full' src={el.imgUrl} alt={el.name} />
                    </div>

                    <h1>{el.name}</h1>

                    <div className='rounded-full bg-pot-yellow text-white  py-1.5 font-semibold px-4'>
                      {el.profession}
                    </div>

                    <div className='mt-2'>
                      <p className='font-bold'>{el.companyName}</p>
                      <p className='text-sm text-[#D4D4D4]'>{el.about}</p>
                    </div>


                    <div className='flex gap-2 items-center'>
                      <img src={location} alt={el.location} />
                      <p>{el.location}</p>
                    </div>

                    <div className='flex flex-wrap justify-center items-center gap-3'>
                      <div> <img className='' src={facebook} alt="facebook" /> </div>
                      <div> <img className='' src={tweeter} alt="tweeter" /> </div>
                    </div>
                  </div>



                </motion.div>
              );
            })}
          </div>
        </div>



        <div className="w-full flex justify-center items-center gap-6 py-5 px-7">

          <input
            type="range"
            className="professionaluser w-full"
            min="0"
            max={ProfessionalUesrData.length - 2}
            value={slideIndex}
            onChange={handleRangeChange}
          />
          <div className="flex justify-between w-28">

            <div className='flex items-center justify-center w-[40px] h-[40px] border-2 border-pot-yellow rounded-full cursor-pointer' onClick={handlePrev} ><img src={caretLeftArrow} alt="caretLeftArrow" className='pr-1' /></div>
            <div className='flex items-center justify-center w-[40px] h-[40px] border-2 border-pot-yellow rounded-full cursor-pointer' onClick={handleNext}><img src={caretRightArrow} alt="caretRightArrow" className='pl-1' /></div>
          </div>
        </div>


      </div>



    </div>
  )
}

export default ProfessionalUser