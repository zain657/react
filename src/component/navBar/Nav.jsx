// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';

// export default function Nav() {
//     return (
//         <>
//             <nav className='fixed top-0 left-0 right-0'>
//                 <div className="container mx-auto py-7 px-20">
//                     <div className="flex  justify-between">
//                         <div className="f">
//                             <h1 className='text-4xl font-extrabold text-white'><Link to=''>Start Framework</Link></h1>
//                         </div>
//                         <div className="s flex items-center">
//                             <ul className="navbar-nav  mb-lg-0 hidden lg:block">
//                                 <li className="nav-item me-3 ">
//                                     <NavLink 
//                                         to="/about" 
//                                         className="nav-link ss p-2 px-4 rounded-xl text-white text-uppercase fw-bold mt-3 mt-md-0  font-semibold text-lg"
//                                     >
//                                         About
//                                     </NavLink>

//                                     <NavLink 
//                                         to="/portfolio" 
//                                         className="nav-link ss p-2 px-4 rounded-xl text-white text-uppercase fw-bold mx-4 mt-2 mt-md-0  font-semibold text-lg"
//                                     >
//                                         portfolio
//                                     </NavLink>

//                                     <NavLink 
//                                         to="/contact" 
//                                         className="nav-link ss p-2 px-4 rounded-xl text-white text-uppercase fw-bold mt-3 mt-md-0  font-semibold text-lg"
//                                     >
//                                         contact
//                                     </NavLink>
//                                 </li>
//                             </ul>
//                             <div className="bar lg:hidden">
//                                 <i class="fa-solid fa-bars text-2xl p-1 px-3 border-black border-2 rounded-lg"></i>
//                                 <ul className="navbar-nav  mb-lg-0 w-screen">
//                                 <li className="nav-item me-3 flex flex-col items-center justify-center bg-black">
//                                     <NavLink 
//                                         to="/about" 
//                                         className="nav-link ss p-2 px-4 rounded-xl text-white text-uppercase fw-bold mt-3 mt-md-0  font-semibold text-lg"
//                                     >
//                                         About
//                                     </NavLink>

//                                     <NavLink 
//                                         to="/portfolio" 
//                                         className="nav-link ss p-2 px-4 rounded-xl text-white text-uppercase fw-bold mx-4 mt-2 mt-md-0  font-semibold text-lg"
//                                     >
//                                         portfolio
//                                     </NavLink>

//                                     <NavLink 
//                                         to="/contact" 
//                                         className="nav-link ss p-2 px-4 rounded-xl text-white text-uppercase fw-bold mt-3 mt-md-0  font-semibold text-lg"
//                                     >
//                                         contact
//                                     </NavLink>
//                                 </li>
//                             </ul>
//                                 </div>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }




// Nav.jsx

import React, { useEffect, useState } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

function NavList() {
    return (
        <ul className="my-2 flex nav-item flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to="/about" className="flex items-center  px-4 py-2 rounded-xl">
                    About
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to="/portfolio" className="flex items-center  px-4 py-2 rounded-xl">
                    Portfolio
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to="/contact" className="flex items-center px-4 py-2 rounded-xl">
                    Contact
                </NavLink>
            </Typography>
        </ul>
    );
}

export default function NavbarSimple() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);


    const [paddingRemoved, setPaddingRemoved] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 80) {
            setPaddingRemoved(true);
        } else {
            setPaddingRemoved(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <Navbar className={`${paddingRemoved ?'py-2' : 'py-6'} transition-all duration-500 ease-in-out Navbar fixed top-0 left-0 right-0 rounded-none border-none pe-10 px-3 sm:px-28 `} >
            <div className="flex items-center justify-between text-blue-gray-900">
                <Link className="text-4xl font-bold" to=''>Start Framework</Link>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6  text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-10 w-10 mt-[-20px] border rounded-lg" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}
