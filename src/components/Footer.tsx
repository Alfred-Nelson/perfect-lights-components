import React from 'react'
import Button from './Button'
import InputField from './InputField'
import logo from "../assets/svg/logo.svg"
import facebook from "../assets/svg/facebook.svg"
import twitter from "../assets/svg/twitter.svg"
import instagram from "../assets/svg/instagram.svg"
import linkedIn from "../assets/svg/linkedIn.svg"
import copyrightsign from "../assets/svg/copyrightsign.svg"
function Footer() {
    return (
        <footer className='flex flex-col gap-y-2 mt-10 pt-20 pb-10 bg-black text-white'>
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
                        <div> <img src={twitter} alt="twitter" /> </div>
                        <div> <img src={linkedIn} alt="linkedin" /> </div>

                    </div>
                </div>


                <div className='grid grid-cols-2 gap-20 '>


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

            <div className='flex justify-center items-center text-center gap-2 mt-6'>
                <img className='mt-1' src={copyrightsign} alt="copyrightsign" /> <p>copyright text lorem ipsum</p>
            </div>
            
        </footer>
    )
}

export default Footer
