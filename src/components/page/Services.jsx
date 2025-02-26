import ServImage from '../../assets/images/se.svg'

const Services = () => {
  return (
    <div className="w-full h-full relative">
        <div className="w-full h-fit !p-4 flex flex-col gap-4">
            <div className="w-full flex flex-col items-center gap-1">
                <header className="w-full flex flex-col gap-2 items-center" data-aos="fade-left">
                    <h1 className="text-3xl md:text-5xl text-[#b05cff] !font-extrabold">Services</h1>

                    <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" width={'300'} className="text-[#b05cff84]">
                        <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
                    </svg>
                </header>

                <div className="relative !mt-4" data-aos="fade-up">
                    <span className="!font-bold">A detailed described of what i develope</span>
                </div>

            </div>
            <div className="max-sm:!m-2 !m-10 relative" data-aos="fade-up">
                <div className="max-sm:flex grid grid-cols-[50%_50%] max-sm:justify-between gap-1 max-sm:flex-col">
                    <div className="w-full !p-2 relative">
                        <div className="flex flex-col gap-4">
                            <h2 className="!font-bold max-sm:text-lg text-3xl text-[#b05cff]" data-aos="fade-up">
                                WHAT I CAN OFFER YOU AS A DEVELOPER, INNOVATOR, AND PROBLEM-SOLVER IN THE TECH WORLD
                            </h2>
                            <p className="text-slate-700" data-aos="fade-up">
                                I can offer you a variety of software solutions, whether it&apos;s web applications, mobile applications, 
                                backend services, or custom tools tailored to your needs. My goal is to deliver high-quality, scalable, 
                                and efficient software that enhances your business or personal projects.
                            </p>
                        </div>
                    </div>

                    <div className="w-full !p-2 relative !mb-10">
                        <div className="relative" data-aos="fade-up">
                            <img src={ServImage} alt="service" />
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default Services