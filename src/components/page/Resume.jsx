import styled from 'styled-components';
import DownloadResume from '../DownloadResume';

const Resume = () => {
  return (
    <StyledWrapper>
        <div className="w-full h-full !mt-8 relative">
            <div className="w-full relative flex flex-col gap-5">
                <div className="w-full flex flex-col gap-3.5">
                    <div className="w-full h-full flex flex-col items-center">
                        <header className="text-center" data-aos="fade-up">
                            <h1 className="text-3xl md:text-5xl text-[#b05cff] !font-extrabold">Resume</h1>

                            <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" width={'300'} className="text-[#b05cff84]">
                                <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
                            </svg>
                        </header>

                        <div className="relative !mt-4" data-aos="fade-up">
                            <span className="!font-bold">A little history about me</span>
                        </div>
                    </div>

                    <div className="w-full h-full !mt-6 flex flex-col gap-10">
                        <section className="relative" data-aos="fade-up">
                            <div className="w-full h-full">
                                <div className="w-full h-full flex flex-col gap-6 items-start">
                                    <div className="flex flex-col gap-1.5" data-aos="fade-up">
                                        <h1 className="text-3xl text-[#b05cff] !font-extrabold">Work Experience 💪🏽</h1>
                                        <p className="relative block">I&apos;m a passionate and dedicated Full-Stack Developer. I bring a strong blend of frontend and backend skills to the table. I strive to deliver high-quality work.</p>
                                    </div>

                                    <div className="w-full h-full relative !mt-6">
                                        <div className="w-full h-full grid_it">
                                            <div className="w-full h-full flex flex-col gap-1" data-aos="fade-up">
                                                <div className='relative w-full h-full'>
                                                    <span className='text-2xl !font-normal max-sm:text-lg text-slate-700'>Ghana Rubber Estate Limited - GREL</span>
                                                    <p className='text-[#b05cff]'>March 2023 - May 2023</p>
                                                </div>
                                            </div>

                                            <div className='w-full h-full relative' data-aos="fade-up">
                                                <div className='w-full h-full flex gap-4'>
                                                    <div className='relative flex flex-col items-center gap-0.1'>
                                                        <div className='w-[20px] h-[20px] block rounded-4xl bg-[#b05cff]'></div>
                                                        <div className='w-[2px] h-full bg-[#b05cff]'></div>
                                                    </div>

                                                    <div className='flex w-full h-auto flex-col gap-3'>
                                                        <div className='text-xl text-slate-700 !font-bold'>Network Engineer</div>
                                                        <div className='relative !mb-5 !p-1'>
                                                            <p>This intern made me learn more about how networks operate andhow it works, I was assisted by one of the good network engineers who taught me alot of things like how to connect connect networks between multiple computers and more</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="relative" data-aos="fade-up">
                            <div className="w-full h-full">
                                <div className="w-full h-full flex flex-col gap-6 items-start">
                                    <div className="flex flex-col gap-1.5">
                                        <h1 className="text-3xl text-[#b05cff] !font-extrabold">My Education 📚</h1>
                                        <p className="relative block">I&apos;m a passionate and dedicated Full-Stack Developer. I bring a strong blend of frontend and backend skills to the table. I strive to deliver high-quality work.</p>
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className="w-full h-full relative !mt-6">
                                            <div className="w-full h-full grid_it">
                                                <div className="w-full h-full flex flex-col gap-1" data-aos="fade-up">
                                                    <div className='relative w-full h-full'>
                                                        <span className='text-2xl !font-normal max-sm:text-lg text-slate-700'>Pentecost University College - Accra</span>
                                                        <p className='text-[#b05cff]'>2023, January - Current</p>
                                                    </div>
                                                </div>

                                                <div className='w-full h-full relative' data-aos="fade-up">
                                                    <div className='w-full h-full flex gap-4'>
                                                        <div className='relative flex flex-col items-center gap-0.1'>
                                                            <div className='w-[20px] h-[20px] block rounded-4xl bg-[#b05cff]'></div>
                                                            <div className='w-[2px] h-full bg-[#b05cff]'></div>
                                                        </div>

                                                        <div className='flex w-full h-auto flex-col gap-3'>
                                                            <div className='text-xl text-slate-700 !font-bold'>Bachelor in Information Technology</div>
                                                            <div className='relative !mb-15 !p-1'>
                                                                <p>I&apos;m a level 300 student at Pentecost University with a passion for coding and creating innovative solutions. I enjoy developing applications and continuously seek to improve my skills in full-stack development, working with both frontend and backend technologies. My goal is to build efficient, user-friendly digital solutions that make a positive impact.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full h-full relative !mt-6">
                                            <div className="w-full h-full grid_it">
                                                <div className="w-full h-full flex flex-col gap-1" data-aos="fade-up">
                                                    <div className='relative w-full h-full'>
                                                        <span className='text-2xl !font-normal max-sm:text-lg text-slate-700'>Openlabs Ghana - Accra</span>
                                                        <p className='text-[#b05cff]'>2024, January - 2024, November</p>
                                                    </div>
                                                </div>

                                                <div className='w-full h-full relative' data-aos="fade-up">
                                                    <div className='w-full h-full flex gap-4'>
                                                        <div className='relative flex flex-col items-center gap-0.1'>
                                                            <div className='w-[20px] h-[20px] block rounded-4xl bg-[#b05cff]'></div>
                                                            <div className='w-[2px] h-full bg-[#b05cff]'></div>
                                                        </div>

                                                        <div className='flex w-full h-auto flex-col gap-3'>
                                                            <div className='text-xl text-slate-700 !font-bold'>Fullstack web development</div>
                                                            <div className='relative !mb-15 !p-1'>
                                                                <p>It was an intensive course that I took at Openlabs Ghana, It was practical based and I learnt alot to improve my skills</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div className='w-full flex !p-15 justify-center items-center' data-aos="fade-up">
                <DownloadResume />
            </div>

        </div>
    </StyledWrapper>

  )
}

const StyledWrapper = styled.div`
    .grid_it{
        display: grid;
        grid-template-columns: 30% 70%;
    }

    @media screen and (max-width:640px) {
        .grid_it{
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
      }



`

export default Resume