import { DevDetails, DevLanguages } from "../../constants/DevDetails"
import Dev from '../../assets/images/dev.jpeg'

export const About = () => {


  return (
    <>
    <div className="w-full h-full relative">
        <div className="w-full h-full flex flex-col gap-20">
            <div className="w-full flex items-center justify-center flex-col gap-2">
                <header className="w-full flex flex-col gap-2 items-center" data-aos="fade-left">
                    <h1 className="text-3xl md:text-5xl text-[#b05cff] !font-extrabold">About</h1>

                    <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" width={'300'} className="text-[#b05cff84]">
                        <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
                    </svg>
                </header>

                <div className="relative !mt-4" data-aos="fade-up">
                    <span className="!font-bold">A description about me you know</span>
                </div>
            </div>

            <div className="w-full h-full relative">
                <div className="w-full h-full !p-4 md:!p-6 flex flex-col gap-7 md:flex-row"> 
                    <div className="w-full h-full relative" data-aos="fade-right">
                        <img className="w-full h-[80%] md:h-[800px] md:hover:-rotate-4 transition-all duration-500 object-cover rounded-2xl" src={Dev} alt="dev image" />
                    </div>

                    <div className="w-full h-full relative">
                        <div className="w-full h-full flex flex-col gap-10">
                            <div className="text-[#b05cff] break-all !font-bold" data-aos="fade-up">About Me</div>
                            <div className="relative" data-aos="fade-up">
                                <span className="text-3xl md:text-5xl break-all !font-extrabold text-slate-700">A Full-Stack <br /> Web developer 👨🏽‍💻</span>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <div className="relative" data-aos="fade-up">
                                    <h5 className="text-xl md:text-3xl !font-extralight text-slate-700">Gorden Archer here, I am an Accra-based fullstack engineer with a focus on web development, software engineering, and user interface design. My expertise spans a diverse range  of technologies, and I&apos;ve worked across various industries to deliver both frontend and backend solutions.</h5>
                                </div>

                                <div className="relative !mt-1" data-aos="fade-up">
                                    <p className="text-1xl md:text-lg break-all !font-extrabold text-slate-700">Building with Django, React, JavaScript, Postgres, MongoDB...</p>
                                </div>
                            </div>

                            <div className="w-full h-full !mt-4 relative" data-aos="fade-up">
                                <div className="w-full h-full md:shadow-2xl md:!p-5 !p-2 rounded-lg md:border-1 border-slate-100">
                                    <div className="w-full h-full flex flex-col">
                                        {DevDetails.map((del) => {
                                            return <div key={del.davName} className="w-full h-full flex flex-col gap-2">                                             
                                                <div className="relative !mt-2 grid grid-cols-2 gap-2">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="!font-extralight text-[#b05cff]">Name</div>
                                                        <div>
                                                            <h3 className="!font-extrabold text-slate-700 text-sm md:text-lg">{del.davName}</h3>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col gap-1">
                                                        <div className="!font-extralight text-[#b05cff]">Phone</div>
                                                        <div>
                                                            <h3 className="!font-extrabold text-slate-700 text-sm md:text-lg">{del.devPhone}</h3>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col gap-1">
                                                        <div className="!font-extralight text-[#b05cff]">Age</div>
                                                        <div>
                                                            <h3 className="!font-extrabold text-slate-700 text-sm md:text-lg">{del.devAge}</h3>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col gap-1">
                                                        <div className="!font-extralight text-[#b05cff]">Email</div>
                                                        <div>
                                                            <h3 className="!font-extrabold text-slate-700 text-sm md:text-lg">{del.devEmail}</h3>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col gap-1">
                                                        <div className="!font-extralight text-[#b05cff]">Occupation</div>
                                                        <div>
                                                            <h3 className="!font-extrabold text-slate-700 text-sm md:text-lg">{del.devOccupation}</h3>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col gap-1">
                                                        <div className="!font-extralight text-[#b05cff]">Nationality</div>
                                                        <div>
                                                            <h3 className="!font-extrabold text-slate-700 text-sm md:text-lg">{del.devNationality}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-full !mt-5 relative">
                <div className="!p-5 relative flex flex-col gap-3.5">
                    <div className="w-full h-full md:grid md:grid-cols-4 gap-3 flex flex-col">
                        {DevLanguages.map((lan) => {
                            return <section key={lan.lang} data-aos="fade-up" className="w-full !p-2 bg-slate-700 transition-all duration-100 ease-in rounded-lg">
                                <div className="w-full h-full flex flex-col gap-5 !p-2">
                                    <div className="w-full !font-extrabold text-[#fff]">{lan.lang}</div>
                                    <div className="w-full h-full relative">
                                        <span className="text-slate-300">{lan.desc}</span>
                                    </div>
                                    <div className="w-full flex flex-col gap-2">
                                        <div className="w-full flex justify-end text-[#fff]">{lan.prof}</div>
                                        <div className="w-full relative h-[5px] bg-white rounded-2xl">
                                            <span className={`absolute left-0 right-0 w-[${lan.prof}] h-full block bg-[#b05cff] rounded`}></span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        })}
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}
