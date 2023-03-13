import React from 'react'
// import logo from "../../assets/svg/logo.svg"
// import logo from "../../assets/svg/Minus.svg"
// import { ReactComponent as Logo } from "../../assets/svg/Minus.svg";

import CartIcon from "../../assets/CartIcon";
import SearchIcon from '../../assets/SearchIcon';
import UserIcon from '../../assets/UserIcon';
import { navItems } from '../../utils/navitems';
function TopNavbar() {
    return (
        <header>
            <nav className='flex flex-row justify-between bg-black text-white h-[50px]'>
                <div className="flex items-center ml-4">
                    {/* <img src={logo} alt="logo"  /> */}
                    {/* <Logo /> */}
                    <p>Logo</p>
                </div>

                <div className="flex items-center max-w-screen-xl ml-48">
                    <ul className="flex flex-row  space-x-8 text-sm">

                        {
                            navItems?.map((item, i) => {
                                return (
                                    <li key={i}>
                                        <a href={item.to} className={` ${item.title==="Perfect Lights" ? `font-bold text-white` : `text-white`} `}>{item.title }</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className='flex flex-row space-x-4 items-center mr-9'>
                    <div><CartIcon /></div>
                    <div><SearchIcon /></div>
                    <div><UserIcon /></div>
                </div>
            </nav>
        </header>
    )
}

export default TopNavbar