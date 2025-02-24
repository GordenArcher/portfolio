import { Link } from "react-router-dom"
import HeroImage from '../assets/images/hero.svg'

const Intro = () => {
  return (
    <div id="home" className="w-full h-full relative">
      <div className="md:!pt-15 flex flex-col md:flex-row gap-2">
        <div className="w-full h-full relative flex flex-col gap-[30px] ">
            <div className="w-full h-full relative">
                <h2 className="text-4xl md:text-7xl text-slate-700 !font-extrabold">Crafting Seamless Digital Experiences</h2>
            </div>

            <div className="w-full text-xl text-slate-400 !font-extralight">
                <p>Designing, building, and deploying dynamic web applications that solve real-world problems with clean code and innovative solutions.</p>
            </div>

            <div className="relative">
                <div className="w-full h-full relative flex flex-col gap-10 md:flex-row">
                    <div className="w-full h-full">
                        <Link>
                            <button className="w-full h-[55px] text-xl !font-bold text-slate-100 bg-slate-700 border-0 cursor-pointer transition-all duration-500 ease hover:-translate-y-2 hover:text-slate-700 hover:bg-transparent hover:border-1 rounded-4xl">View My work</button>
                        </Link>
                    </div>

                    <div className="w-full h-full">
                        <Link>
                            <button className="w-full h-[55px] text-xl !font-bold bg-transparent border-1 text-slate-700 cursor-pointer transition-all duration-500 ease hover:-translate-y-2 hover:bg-slate-700 hover:text-white rounded-4xl">
                                <p className="w-full h-full flex items-center justify-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={'20'}><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                                    <span>Contact Me</span>
                                </p>
                            </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex flex-col justify-between gap-5 md:gap-10 md:flex-row md:items-center">
                <div className="relative">
                    <div className="h-full w-full items-center flex flex-col gap-2">
                        <div className="!font-extrabold text-[#b05cff] text-xl md:text-2xl">2+</div>
                        <div className="!font-bold text-slate-700">Years Experience</div>
                    </div>
                </div>
                <div className="relative">
                    <div className="h-full flex items-center flex-col gap-2">
                        <div className="!font-extrabold text-[#b05cff] text-xl md:text-2xl">7</div>
                        <div className="!font-bold text-slate-700">Projects Completed</div>
                    </div>
                </div>
                <div className="relative">
                    <div className="h-full flex items-center flex-col gap-2">
                        <div className="!font-extrabold text-[#b05cff] text-xl md:text-2xl">10</div>
                        <div className="!font-bold text-slate-700">Happy Clients</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full h-full">
            <div className="!p-20">
                <img className="w-full h-full" src={HeroImage} alt="hero image" role="image" aria-description="home page image as dev" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
