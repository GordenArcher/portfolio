import { Link } from "react-router-dom"
import SocialLinks from "../SocialLinks"

const Footer = () => {

  return (
    <div className="w-full h-[100px] !p-10 md:h-[150px] bg-slate-700 ">
        <div className="w-full h-full flex items-center relative">
            <div className="text-xl text-gray-800">
                <span className="text-2xl">
                    <Link className="text-lg flex gap-1.5 items-center font-extrabold text-gray-900 dark:text-white transition-all duration-300 hover:scale-105 hover:text-blue-600" onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>
                        <span className="!font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                            GORDEN
                        </span>
                        <i className="bi bi-laptop text-xl text-gray-700 dark:text-gray-300"></i>
                    </Link>
                </span>
            </div>

            <div className="w-full h-full flex justify-center items-center flex-col gap-1.5">
                <SocialLinks />
            </div>
        </div>
    </div>
  )
}

export default Footer