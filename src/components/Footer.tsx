import React from 'react'
import Button from './Button'
import InputField from './InputField'
import logo from "../assets/svg/logo.svg"
import facebook from "../assets/svg/facebook.svg"
import tweeter from "../assets/svg/tweeter.svg"
import instagram from "../assets/svg/instagram.svg"
import linkedIn from "../assets/svg/linkedIn.svg"
import copyrightsign from "../assets/svg/copyrightsign.svg"
function Footer() {
    return (
        <footer className='flex flex-col gap-y-20 mt-10 pt-32 pb-10 bg-black text-white'>



            <div className='flex flex-col items-center gap-10 border-b-2 border-b-[#1D1D1D] pb-20'>
                <div className='flex flex-col justify-center items-center w-1/2   border-b-teal-400 text-center'>
                    <p className='text-4xl tracking-0 font-bold'>Subscribe to our newsletter</p>
                    <p className='px-44 mt-10'>Lorem ipsum dolor sit amet consectetur. Purus mauris varius ut risus proin ut</p>
                </div>

                <div className='flex flex-row items-center justify-cente'>
                    <div className='flex items-center w-96'>
                        <InputField
                            placeholder="Enter email address"
                            onChange={(text) => console.log(text)}
                        />
                    </div>
                    <div className='flex items-center text-sm font-2xl h-[40px]'>
                        <Button
                            variant="primary-dark"
                            label="Subscribe"
                        />
                    </div>
                </div>
            </div>




            <div className='flex justify-between gap-10 border-b-2 border-b-[#1D1D1D] px-20 py-6 pb-20'>


                <div className='flex flex-col gap-5'>
                    <div>
                        <img className='w-[80px]' src={logo} alt="" />
                        <p className='font-bold text-2xl'> 
                            Perfect Light
                        </p>
                    </div>


                    <div className='w-[240px]'>
                        <p>
                        Lorem ipsum dolor sit amet consectetur. Lorem facilisi eget nascetur enim massa amet. Arcu ullamcorper aenean in a facilisi mattis aliquam neque vitae.
                        </p>
                    </div>

                    <div className='flex gap-5'> 
                        <div> <img src={facebook} alt="facebook" /> </div>
                        <div> <img src={instagram} alt="instgram" /> </div>
                        <div> <img src={tweeter} alt="tweeter" /> </div>
                        <div> <img src={linkedIn} alt="linkedin" /> </div>

                    </div>
                </div>


                <div className='grid grid-cols-2 gap-10 '>

           
                        <div>
                            <h3 className='font-bold text-xl mb-4'>Lorem ipsum dolor</h3>
                            <ul>
                                <li>Shop</li>
                                <li>Hire a Design Consultant</li>
                                <li>Professional Users</li>
                                <li>My Account</li>
                                <li>Blog</li>
                                <li>Shipping Policy</li>
                            </ul>
                        </div>

                        
                        <div>
                            <h3 className='font-bold text-xl mb-4'>Help</h3>
                            <ul>
                                <li>About us</li>
                                <li>FAQs</li>
                                <li>Contact Us</li>
                                <li>Returns & Cancellations</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Track Orders</li>
                                <li>Terms of Use</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='font-bold text-xl mb-4'>Lorem ipsum dolor</h3>
                            <ul>
                                <li>Installation</li>
                                <li>Product care</li>
                                <li>Warranty</li>
                            </ul>
                        </div>


                        <div>
                            <h3 className='font-bold text-xl mb-4'>Lorem ipsum dolor</h3>
                            <ul>
                                <li>Site Map (?)</li>
                            </ul>
                        </div>
                    </div>


            </div>



            <div className='flex justify-center items-center text-center gap-2'>
                <img className='mt-1' src={copyrightsign} alt="copyrightsign"  /> <p>copyright text lorem ipsum</p>
            </div>



        </footer>
    )
}

export default Footer

