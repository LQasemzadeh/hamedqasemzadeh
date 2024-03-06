import React, { useState } from 'react';
import { FaBars, FaTimes } from  "react-icons/fa";
import Logo from  "../../assets/images/H.png";


const navigation = [
    { name: 'Home', href: '#', current: false },
    { name: 'About', href: '#', current: false },
    { name: 'Work', href: '#', current: false },
    { name: 'Skills', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
]



const NavbarComponent = () => {
    const  [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className="fixed w-full h-[80px] flex  items-center px-16 bg-gradient-to-b from-orange-500">
            <div>
                <img src={ Logo } alt="logo" style={{ width: "80px" }}/>
            </div>

            <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                {navigation.map((item) => (
                    <a key={item.name} href={item.href} className={classNames(
                        item.current ? 'text-blue-800' : 'text-blue-800 hover:hover:bg-blue-900/50 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                    >
                        {item.name}
                    </a>
                ))}
            </div>

            {/* Humberger Menu Buttom */}
            <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Start Humberger Menu */}




        </div>
    );
};

export default NavbarComponent;