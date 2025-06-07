import { Link } from "react-router-dom"
import propTypes from 'prop-types'
import dev from '../assets/images/dev1.jpeg'
import { links } from "../constants/DevDetails"
import {  Twitter, Linkedin, ArrowRightIcon, } from "lucide-react";

const Nav = ({ showNav }) => {


    // const openSide = useCallback(() => {
    //     setShowSide((prevState) => !prevState);
    // }, []);

  return (
    <div className={`w-[250px] z-90 top-0 left-0 shadow-lg transition-all transform translate-y-0 h-full ${showNav ? 'max-md:w-[70%] absolute bg-slate-950 transition-all': 'max-md:hidden'}`}>
        <nav className="w-full h-full fixed !py-5 m-auto">
            <div className="relative md:!p-5 !p-5 flex-1 overflow-auto h-full">
                <div className="flex flex-col gap-2.5 justify-between h-full">
                    <div className="mt-2 relative">
                        <div className="flex items-center gap-2.5">
                            <div className="p-1">
                                <img className="rounded-full w-12 h-12 object-cover flex-shrink-0" src={dev} alt="Gorden's image" />
                            </div>
                            <div className="relative space-x-2">
                                <div className="bt-4 relative">
                                    <h4 className="text-gray-500 text-sm !font-extrabold block">Gorden Archer</h4>
                                </div>

                                <div className="relative">
                                    <span className="text-gray-500">Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="!mt-12 space-x-1 relative">
                            <ul className="flex flex-col gap-4.5">
                                {links.map((link) => (
                                   <li key={link.id} className="!p-2 hover:bg-slate-700 rounded-lg">
                                        <Link to={link.link} className="text-gray-100">
                                            <div className="flex space-x-3 items-center gap-2">
                                                <span>
                                                    {link.icon && <link.icon size={15} />}
                                                </span>

                                                <span>{link.label}</span>
                                            </div>
                                        </Link>
                                    </li> 
                                ))}
                                
                            </ul>
                        </div>

                        <div className="!mt-12 space-x-1 relative">
                            <div className="flex flex-col gap-2.5">
                                <div className="pt-1">
                                    <span className="text-gray-500 text-sm font-medium">Socials</span>
                                </div>

                                <div className="flex flex-col space-x-2 gap-5 pt-1">
                                    <a href="https://x.com/iam_Gorden" target="_blank" className="text-gray-400 hover:text-blue-500">
                                        <div className="flex items-center gap-3">
                                            <Twitter size={15} />
                                            <span>Twitter</span>
                                        </div>
                                    </a>
                                    <a href="https://www.linkedin.com/in/gordenarcher/" target="_blank" aria-description="linkedin account" className="text-gray-400 hover:text-blue-600">
                                        <div className="flex items-center gap-3">
                                            <Linkedin size={15} />
                                            <span>Linkedin</span>
                                        </div>
                                        
                                    </a>
                                    {/* <a href="#" className="text-gray-400 hover:text-red-500">
                                        <div className="flex items-center gap-3">
                                            <span></span>
                                        </div>
                                        <Youtube size={15} />
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="!mt-1">

                            {/* <label className="relative inline-flex items-center cursor-pointer">
                                <input className="sr-only peer" type="checkbox" />
                                <div className="w-20 h-10 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 peer-checked:from-blue-400 peer-checked:to-indigo-500 transition-all duration-500 after:content-['☀️'] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-8 after:w-8 after:flex after:items-center after:justify-center after:transition-all after:duration-500 peer-checked:after:translate-x-10 peer-checked:after:content-['🌙'] after:shadow-md after:text-lg"></div>
                            </label> */}

                        <Link to={'/resume'}>
                            <button title="read resume" className="flex items-center cursor-pointer gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-500 hover:to-blue-600 text-white !px-5 !py-2 rounded-2xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
                                <span className="!font-medium">Read Resume</span>
                                <ArrowRightIcon size={16} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

Nav.propTypes = {
    showNav: propTypes.bool
}

export default Nav
