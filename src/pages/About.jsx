import Dev from '../assets/images/dev.jpeg'

export const About = () => {


  return (
    <div className='space-x-3.5'>
        <div className='relative'>
            <span className='text-4xl'>💬</span>
            <h1 className='text-base md:text-xl lg:text-4xl bg-clip-text bg-gradient-to-r from-primary to-secondary !font-black text-gray-200'>About Me</h1>

            <div className='!mt-2'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-10 !my-10'>
                    <div className='opacity: 1; transform: translateY(0px) rotate(3deg) translateZ(0px);'>
                        <img className='rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200' src={Dev} alt="dev" />
                    </div>

                    <div className='opacity: 1; transform: translateY(0px) rotate(3deg) translateZ(0px);'>
                        <img className='rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200' src={Dev} alt="dev" />
                    </div>

                    <div className='opacity: 1; transform: translateY(0px) rotate(3deg) translateZ(0px);'>
                        <img className='rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200' src={Dev} alt="dev" />
                    </div>

                    <div className='opacity: 1; transform: translateY(0px) rotate(3deg) translateZ(0px);'>
                        <img className='rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200' src={Dev} alt="dev" />
                    </div>
                </div>
            </div>

            <div className='max-w-4xl !mt-2'>
                <p className='text-sm lg:text-base font-normal text-secondary !mt-4 text-gray-200'>
                    Hello! I&apos;m Gorden, a dedicated and curious IT student at Pentecost University with a strong passion for technology and innovation. From a young age, I&apos;ve been fascinated by how systems work, which led me to dive deep into software development. I enjoy problem-solving, learning new technologies, and building tools that make life easier and more efficient for others. Whether it&apos;s designing a user-friendly interface or engineering robust backend systems, I find purpose in creating solutions that have real impact.
                </p>
                <p className='text-sm lg:text-base font-normal text-secondary !mt-4 text-gray-200'>
                    My technical skillset spans both frontend and backend development. I work primarily with Django, React, PostgreSQL, and Firebase, and I&apos;ve also explored GraphQL, Docker, and microservices architecture. I&apos;m currently sharpening my skills in backend development, system design, and data structures & algorithms to become a more well-rounded engineer. Beyond coding, I enjoy exploring tech trends, learning about the development of programming languages, and understanding how real-world systems are built and maintained.
                </p>
                <p className='text-sm lg:text-base font-normal text-secondary !mt-4 text-gray-200'>
                    One of my most exciting projects is an AI-powered academic ecosystem platform, designed to help students with tools like note summarization, quiz generation, research support, and social academic interaction. I&apos;ve also built a professional shipping tracking UI similar to FedEx, and I&apos;ve worked on various full-stack applications that integrate modern web technologies. My internship at Ghana Rubber Estate Limited gave me real-world exposure to networking and IT infrastructure, further deepening my technical understanding.
                </p>
                <p className='text-sm lg:text-base font-normal text-secondary !mt-4 text-gray-200'>
                    I&apos;m working towards becoming a Google-level software engineer, combining strong technical skills with creative thinking. My vision is to build scalable platforms that solve real problems, especially in education and productivity. In the long term, I aim to contribute to open-source projects, mentor upcoming developers, and possibly lead my own startup. I believe that with consistent learning, collaboration, and persistence, I can make a significant impact in the tech world.
                </p>
                <p className='text-sm lg:text-base font-normal text-secondary !mt-4 text-gray-200'>
                    Thank you for being here, and I can&apos;t wait to embark on this adventure with you.
                </p>
            </div>
        </div>
    </div>
  )
}
