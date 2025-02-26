import { Link } from "react-router-dom"
import { Projects } from "../../constants/DevDetails"

const Portfolio = () => {
  return (
    <div className="w-full h-full relative">
        <div className="w-full flex flex-col gap-2.5">
            <div className="w-full flex items-center justify-center flex-col gap-2">
                <header className="w-full flex flex-col gap-2 items-center" data-aos="fade-up">
                    <h1 className="text-3xl md:text-5xl text-[#b05cff] !font-extrabold">Portfolio</h1>

                    <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" width={'300'} className="text-[#b05cff84]">
                        <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
                    </svg>
                </header>

                <div className="relative !mt-4" data-aos="fade-up">
                    <span className="!font-bold">As a FullStack developer, i strive to create web applications</span>
                </div>
            </div>

            <div className="w-full md:!p-10">
                <div className="relative flex flex-col gap-5.5">
                    <div className="flex items-center justify-center" data-aos="fade-up">
                        <button className="!p-3 rounded-3xl bg-[#b05cff] cursor-pointer !font-bold text-white">My work</button>
                    </div>

                    <div className="w-full h-full !mt-12">
                        <div className="relative !p-1">
                            <div className="flex flex-col gap-3.5">
                                <div className="w-full max-sm:flex max-sm:flex-col grid grid-cols-2 gap-2">
                                    {Projects.map((proj) => {
                                        return <section key={proj.id} className="w-full h-full !p-2" data-aos="fade-up">
                                            <div className="w-full relative shadow-2xl rounded-xl">
                                                <div className="flex flex-col max-sm:gap-5 gap-10 w-full h-full ">
                                                    <div className="w-full max-sm:h-[250px] h-[320px] transition-all duration-500 relative shadow overflow-hidden group">
                                                        <img className="w-full relative h-full overflow-hidden" src={proj.project_preview} alt={`${proj.name}'s preview`} />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                                                        <div className="absolute bottom-[10px] md:bottom-[-50px] left-2 flex gap-2 md:opacity-0 transition-all duration-500 md:group-hover:bottom-5 md:group-hover:opacity-100">
                                                            {proj.link ? (
                                                                <Link to={proj.link} target="_blank" rel="noopener noreferrer">
                                                                    <button className="px-4 py-2 w-[50px] h-[50px] flex items-center justify-center bg-slate-700 text-white rounded-3xl cursor-pointer">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                                                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                                                                        </svg>
                                                                    </button>
                                                                </Link>
                                                            ) : (
                                                                <button 
                                                                    className="px-4 py-2 w-[50px] h-[50px] flex items-center justify-center bg-gray-500 text-white rounded-3xl cursor-not-allowed opacity-50" disabled >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                                                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                                                                    </svg>
                                                                </button>
                                                            )}
                                                            
                                                            <Link to={proj.code} target="_blank" rel="noopener noreferrer">
                                                                <button disabled className="px-4 py-2 w-[50px] h-[50px] flex items-center justify-center bg-slate-700 text-white rounded-3xl cursor-pointer">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                                                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                                                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                                                                    </svg>
                                                                </button>
                                                            </Link>

                                                            <button disabled className="px-4 py-2 w-[50px] h-[50px] flex items-center justify-center bg-slate-700 text-white rounded-3xl cursor-pointer">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-images" viewBox="0 0 16 16">
                                                                    <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                                                                    <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z"/>
                                                                </svg>
                                                            </button>
                                                            
                                                        </div>
                                                    </div>

                                                    <div className="w-full !p-4 h-full flex flex-col gap-1.5">
                                                        <div className="relative">
                                                            <h3 className="text-[#b05cff] text-[1.4rem] !font-extrabold break-after-auto">{proj.name}</h3>
                                                        </div>

                                                        <div className="!mt-2">
                                                            <span className=" space-x-0.5">{proj.details}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    })}
                                </div>
                            </div>

                            <div className="flex items-center justify-center !mt-10" data-aos="fade-up">
                                <div className="!p-10 relative group">
                                    <Link to={"https://github.com/GordenArcher/"} target="_blank" rel="noopener noreferrer" >
                                        <button className="relative inline-block !p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                                            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 !p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                                            <span className="relative z-10 block !px-6 !py-3 rounded-xl bg-gray-950">
                                                <div className="relative z-10 flex items-center space-x-2">
                                                    <span className="transition-all duration-500 group-hover:translate-x-1">Get More</span>
                                                    <svg
                                                        className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                                                        data-slot="icon"
                                                        aria-hidden="true"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                        clipRule="evenodd"
                                                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                                        fillRule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </span>
                                        </button>
                                    </Link>                             
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio