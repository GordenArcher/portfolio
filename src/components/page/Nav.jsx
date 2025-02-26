import { Link } from "react-router-dom"
import HamburgerToggle from "../Hamburger"
import SocialLinks from "../SocialLinks"
import { useCallback, useEffect, useState } from "react"

const Nav = () => {
    
    const [showSide, setShowSide] = useState(false)

    const openSide = useCallback(() => {
        setShowSide((prevState) => !prevState);
    }, []);

    useEffect(() => {
        const removeClick = () => {
            setShowSide((prevState) => !prevState)
        }

        document.addEventListener("click", removeClick)

        return () => {
            document.removeEventListener("click", removeClick)
        } 
    }, [setShowSide])

  return (
    <div className="w-full h-[120px]">
        <nav className="w-full h-full m-1  md:!p-[30px] flex justify-center items-center">
            <div className="w-full h-full relative flex  items-center justify-between gap-1">
                <div className="text-xl !p-[10px] text-gray-800" data-aos="fade-right">
                    <span className="text-2xl">
                        <Link className="flex items-center gap-2 text-lg font-extrabold text-gray-900 dark:text-white transition-all duration-300 hover:scale-105 hover:text-blue-600" to="/">
                            <span className="!font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                                GORDEN
                            </span>
                            <i className="bi bi-laptop text-xl text-gray-700 dark:text-gray-300"></i>
                        </Link>
                    </span>
                </div>

                <div className={`fixed transition-all duration-300 ${showSide ? 'translate-x-0' : '-translate-x-100'} md:translate-0 !p-10 md:!p-[0] z-10 w-[60%] bg-slate-300 md:bg-transparent h-screen md:w-min md:h-0 left-0 top-0 md:relative`}> 
                    <ul className="w-full flex gap-15 md:gap-5 md:flex-row flex-col md:items-center" role="naviagation">
                        <li className="" onClick={() => document.getElementById("/").scrollIntoView({ behavior: "smooth" })}>
                            <Link className="!font-bold text-[#b05cff] !p-2 rounded transition-all hover:text-slate-500 hover:bg-slate-100 " to={"/"} >Home</Link>
                        </li>

                        <li className="" onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>
                            <Link className="!font-bold text-[#b05cff] !p-2 rounded transition-all hover:text-slate-500 hover:bg-slate-100 " to={"/#about"} >About</Link>
                        </li>

                        <li className="" onClick={() => document.getElementById("resume").scrollIntoView({ behavior: "smooth" })}>
                            <Link className="!font-bold text-[#b05cff] !p-2 rounded transition-all hover:text-slate-500 hover:bg-slate-100 " to={"/#resume"} >Resume</Link>
                        </li>

                        <li className="" onClick={() => document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" })}>
                            <Link className="!font-bold text-[#b05cff] !p-2 rounded transition-all hover:text-slate-500 hover:bg-slate-100 " to={"/#portfolio"} >Portfolio</Link>
                        </li>

                        <li className="" onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}>
                            <Link className="!font-bold text-[#b05cff] !p-2 rounded transition-all hover:text-slate-500 hover:bg-slate-100 "  to={"/#services"} >Services</Link>
                        </li>

                        <li className="">
                            <Link className="!font-bold text-[#b05cff] !p-2 rounded transition-all hover:text-slate-500 hover:bg-slate-100 " to={"/contact"} >Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="relative !p-[20px] hidden md:block" data-aos="fade-left">
                    <SocialLinks />
                </div>

                <div className="relative !p-[20px] md:hidden" data-aos="fade-left">
                    <HamburgerToggle  openSide={openSide} />
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav
