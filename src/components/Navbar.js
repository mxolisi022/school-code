
import { useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from 'react-scroll'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(! isMenuOpen)
    }

    const navItems = [
        {link: "overview", path: "home"},
        {link: "feature", path: "feature"},
        {link: "about", path: "about"},
        {link: "pricing", path: "pricing"},
    ]

    return(
        <>
        <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0">
            <div className="text-lg container mx-auto flex justify-between items-center font-medium">
                <div className="flex space-x-14 items-center">
                    <a href="/" className="text-2xl font-senibold flex items-center space-x-3">
                        School <span>Code</span>
                    </a>
                    <ul className="md:flex space-x-12 hidden">
                        {
                            navItems.map(({link,path}) => <Link key={link} to={path} className="block hover:text-gray-300">{link}</Link>)
                        }
                    </ul>
                </div>
                <div className="space-x-12 hidden md:flex items-center">
                    <a href="/" className="hidden lg-flex items-center hover:text-secondary"><GrLanguage 
                    className="mr-2"/> <span>Language</span></a>
                    <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded
                    hover:text-white hover:bg-indigo-600">Sign Up</button>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none
                    focus:text-gray-100">
                        {
                            isMenuOpen ? (<FaXmark className="w-6 h-6 text-primary"/>) : (<FaBars 
                                className="w-6 h-6 text-primary"/>)
                        }
                    </button>
                </div>
            </div>
        </nav>
        <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
            {
                navItems.map(({link,path}) => <Link key={link} to={path} className="block 
                hover:text-gray-300">{link}</Link>)
            }
        </div>
        </>
    );
}

export default Navbar;