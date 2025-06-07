import { Link } from "react-router-dom"

const Footer = () => {

    const year = new Date()

    return (
        <div className="w-full h-[60px] p-10 bg-slate-700 ">
            <div className="w-full h-full flex items-center justify-center">
                <div className="text-xl text-gray-800">
                    <span className="text-2xl">
                        <Link className="text-lg flex gap-1.5 items-center font-extrabold text-gray-900 dark:text-white transition-all duration-300 hover:scale-105 hover:text-blue-600" onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>
                        <div className="flex leading-1.5 items-center gap-3">
                                <div>
                                    <span className="font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                                        GORDEN
                                    </span>
                                    <i className="bi bi-laptop text-xl text-gray-700 dark:text-gray-300"></i>
                                </div>

                                <span>
                                    -
                                </span>

                                <div className="leading-1.5 !font-bold">
                                    {year.getFullYear()} 
                                </div>
                        </div>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer