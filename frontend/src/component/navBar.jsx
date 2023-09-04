import { useState } from "react";
import { sunking, close, menu2 } from "../asset";
import { navLink } from "../constants";
import { Link } from "react-router-dom";

const NavBar = () => {

    const [toggle, setToggle] = useState(false);
    // const [active, setActive] = useState(false)

    return (
        <nav className="flex justify-between items-center py-3 px-3 w-full">
            <Link to='/'><img className="w-[124px] h-[32px]" src={sunking} alt="sun king" /></Link>

            <ul className="hidden sm:flex justify-end items-center list-none">
                {navLink.map((nav, index) => {
                    return (
                        <li key={nav.id} className={`font-poppins font-normal ${index === navLink.length - 1 ? 'mr-0' : 'mr-10'}`}><a href={`#${nav.id}`}>{nav.title}</a></li>
                    )
                })}
                <Link to='/login' className="flex items-center font-poppins font-normal px-8">Log in</Link>
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img className="w-[40px] h-[40px] object-contain" src={toggle ? close : menu2} alt="hamburger-menu" onClick={() => setToggle((prev) => !prev)} />

                <div className={`${toggle ? 'block' : 'hidden'} 
                p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-xl sidebar`}>
                    <ul className="flex list-none flex-col justify-end items-center">
                        {navLink.map((nav, index) => {
                            return (
                                <li onClick={() => { setToggle(!toggle); }} key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLink.length - 1 ? 'mr-0' : 'mb-4'} text-white `}><a href={`#${nav.id}`}>{nav.title}</a></li>
                            )
                        })}
                        <Link to='/login' className="flex items-center font-poppins font-normal py-4 text-white">Log in</Link>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;                                
