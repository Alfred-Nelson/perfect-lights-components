import { useState } from 'react'
import logo from "../../assets/logo1.png"
import CartIcon from "../../assets/CartIcon";
import SearchIcon from '../../assets/SearchIcon';
import UserIcon from '../../assets/UserIcon';
import { navItems } from '../../utils/navitems';
import SearchModal from '../../pages/HomeComponents/SearchModal';

function TopNavbar() {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleOpen = () => {
        setOpenModal(true);
    }
    return (
        <header className='sticky top-0 bg-black z-50'>
            <nav className='flex flex-row justify-between bg-black text-white h-[50px] '>
                <div className="flex items-center ml-4 ">
                    <img className='object-cover w-[40px] h-[40px]' src={logo} alt="logo" />
                </div>
                <div className="flex items-center max-w-screen-xl ml-48">
                    <ul className="flex flex-row  space-x-8 text-sm">

                        {
                            navItems?.map((item, i) => {
                                return (
                                    <li key={i}>
                                        <a href={item.to} className={` ${item.title === "Perfect Lights" ? `font-bold text-white` : `text-white`} `}>{item.title}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className='flex flex-row space-x-4 items-center mr-9'>
                    <div className="cursor-pointer"><CartIcon /></div>
                    <div onClick={handleOpen} className="cursor-pointer"><SearchIcon /></div>
                    <div className="cursor-pointer"><UserIcon /></div>
                </div>

                {
                    openModal && <SearchModal
                        handleClose={() => setOpenModal(false)}
                    />
                }

            </nav>
        </header>
    )
}

export default TopNavbar