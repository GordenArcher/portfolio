import DownloadResume from "../components/DownloadResume"

const Resume = () => {
    return (
        <div className="space-x-1.5">
            <div className="relative !mb-7">
                <div className="flex items-center justify-between gap-2">
                    <span className='text-4xl'>💼</span>
                    <DownloadResume />
                </div>
                <h1 className='text-base md:text-xl lg:text-4xl bg-clip-text bg-gradient-to-r from-primary to-secondary !font-black text-gray-200'>Work History</h1>
                <p className="text-sm lg:text-base !font-normal text-secondary !mb-10 max-w-xl text-gray-200">
                    I&apos;m a full-stack developer that loves <span className="bg-black !px-1 !py-0.5">building products</span>  and web apps that can impact millions of lives
                </p>
            </div>

            <div className="flex md:flex-row flex-col space-y-10 md:space-y-0 space-x-10 !my-20 relative">
                <div className="relative">
                    <p className="text-sm lg:text-base !font-normal text-secondary w-40 text-gray-200">2019 - 2020</p>
                </div>

                <div className="text-gray-200 flex flex-col gap-2">
                    <h5 className="!font-semibold bg-clip-text bg-gradient-to-r from-primary to-secondary text-lg md:text-lg lg:text-lg text-emerald-500">Ghana Rubber Estate Limited (GREL) — IT Intern</h5>
                    <p className="text-secondary text-base md:text-base lg:text-base !font-semibold">Takoradi, Ghana</p>
                    <p className="!font-normal text-secondary text-sm md:text-sm lg:text-sm mb-4">As an IT Intern at GREL, I gained hands-on experience in networking, system maintenance, and IT support, contributing to the efficiency and reliability of the company’s digital infrastructure.</p>

                    <div className="flex space-x-1 items-center !my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-4 mt-1 text-neutral-300"><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" fill="currentColor" strokeWidth="0"></path></svg>
                        <p className="!font-normal text-secondary text-sm md:text-sm lg:text-sm">Assisted in network setup and troubleshooting, ensuring seamless connectivity across departments.</p>
                    </div>

                    <div className="flex space-x-1 items-center !my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-4 mt-1 text-neutral-300"><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" fill="currentColor" strokeWidth="0"></path></svg>
                        <p className="!font-normal text-secondary text-sm md:text-sm lg:text-sm">Supported the installation and configuration of hardware and software for end users.</p>
                    </div>

                    <div className="flex space-x-1 items-center !my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-4 mt-1 text-neutral-300"><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" fill="currentColor" strokeWidth="0"></path></svg>
                        <p className="!font-normal text-secondary text-sm md:text-sm lg:text-sm">Helped maintain network security protocols and monitored system health under supervision.</p>
                    </div>

                    <div className="flex space-x-1 items-center !my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-4 mt-1 text-neutral-300"><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" fill="currentColor" strokeWidth="0"></path></svg>
                        <p className="!font-normal text-secondary text-sm md:text-sm lg:text-sm">Provided technical support to staff, resolving hardware and software issues to minimize downtime.</p>
                    </div>

                    <div className="flex space-x-1 items-center !my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-4 mt-1 text-neutral-300"><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" fill="currentColor" strokeWidth="0"></path></svg>
                        <p className="!font-normal text-secondary text-sm md:text-sm lg:text-sm">Gained exposure to IT operations in a corporate environment, building a foundation in IT practices.</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Resume


