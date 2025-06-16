import AnimatedTextBlock from '../components/AnimatedTextBlock';
import ProjectContainer from '../components/ProjectContainer';
import { TypewriterEffect } from '../components/typewriter-effect';
// import StackImage1 from '../assets/images/figma.webp'
// import StackImage2 from '../assets/images/tailwind.webp'
// import StackImage3 from '../assets/images/vercel.webp'
import { motion } from "framer-motion";

const Home = () => {

    const aboutParagraphs = [
    "A full-stack developer and IT student at Pentecost University.",
    "I'm passionate about building innovative products and web applications that can positively impact millions of lives.",
    "With a growing experience in software development, I focus on creating scalable, performance-optimized, and user-friendly solutions.",
    "I'm driven by curiosity and always eager to learn new technologies and improve my craft.",
    ];
  return (
    <div className="space-x-1">
        <div className="relative mt-2">
            <section className="space-x-2">
                <div className="!p-1 text-white">
                    <span className="text-4xl">👋</span>
                        <h1 className='max-md:text-lg text-4xl'>
                            <TypewriterEffect 
                                words={[{ text: "Hello there! I'm Gorden,", className: "text-blue-500" }]} 
                            />
                        </h1>
                    {/* <h1 className="!text-3xl md:text-xl lg:text-4xl bg-clip-text bg-gradient-to-r from-primary to-secondary !font-extrabold text-gray-200">Hello there! I&apos;m Gorden, </h1> */}
                    
                    <AnimatedTextBlock paragraphs={aboutParagraphs} />
                </div>

                <div className='!mt-20 relative'>
                    <div className='space-x-1.5'>
                        <h3 className='text-white leading-1.5 !font-black'>What I&apos;ve been working on</h3>
                    </div>

                    <div className='!mt-6'>
                        <ProjectContainer />
                    </div>
                </div>

                {/* <div className='!mt-20 relative'>
                    <div className='grid grid-cols-4 gap-3'>
                        <div className='space-x-2'>
                            <img width={100} src={StackImage1} alt="stack" />
                        </div>
                        <div className='space-x-2'>
                            <img width={100} src={StackImage2} alt="stack" />
                        </div>
                        <div className='space-x-2'>
                            <img width={100} src={StackImage3} alt="stack" />
                        </div>
                        <div className='space-x-2'>
                            <img width={100} src="" alt="stack" />
                        </div>
                    </div>
                </div> */}
            </section>
        </div>
    </div>
  )
}

export default Home