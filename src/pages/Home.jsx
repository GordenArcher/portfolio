import { useState, useEffect } from 'react';
import ProjectContainer from '../components/ProjectContainer';
import StackImage1 from '../assets/images/figma.webp'
import StackImage2 from '../assets/images/tailwind.webp'
import StackImage3 from '../assets/images/vercel.webp'


const Home = () => {

    const text = "Hello there! I'm Gorden,";
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed] = useState(150);

    useEffect(() => {
        let timeout;

        if (!isDeleting && displayedText.length < text.length) {
        timeout = setTimeout(() => {
            setDisplayedText(text.slice(0, displayedText.length + 1));
        }, speed);
        } else if (isDeleting && displayedText.length > 0) {
        timeout = setTimeout(() => {
            setDisplayedText(text.slice(0, displayedText.length - 1));
        }, speed / 2);
        } else if (displayedText.length === text.length) {
        timeout = setTimeout(() => setIsDeleting(true), 1000);
        } else if (displayedText.length === 0 && isDeleting) {
        timeout = setTimeout(() => setIsDeleting(false), 500);
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, speed, text]);

  return (
    <div className="space-x-1">
        <div className="relative mt-2">
            <section className="space-x-2">
                <div className="!p-1 text-white">
                    <span className="text-4xl">👋</span>
                        <h1 className='max-md:text-lg text-4xl' style={{fontWeight: 'bold', color: '#eee', fontFamily: "'Courier New', Courier, monospace" }}>
                            {displayedText}
                            <span style={{ borderRight: '2px solid #fff', marginLeft: '2px', animation: 'blink 0.7s infinite' }}></span>
                            <style>
                                {`
                                @keyframes blink {
                                    0%, 50% { opacity: 1; }
                                    51%, 100% { opacity: 0; }
                                }
                                `}
                            </style>
                        </h1>
                    {/* <h1 className="!text-3xl md:text-xl lg:text-4xl bg-clip-text bg-gradient-to-r from-primary to-secondary !font-extrabold text-gray-200">Hello there! I&apos;m Gorden, </h1> */}
                    <p className="text-sm lg:text-base !font-normal text-secondary max-w-xl !mt-4">
                        A full-stack developer and IT student at Pentecost University.
                        I&apos;m passionate about building innovative products and web applications that can positively impact millions of lives.
                    </p>
                    <p className="text-sm lg:text-base !font-normal text-secondary max-w-xl !mt-4">
                        With a growing experience in software development, I focus on creating scalable, performance-optimized, and user-friendly solutions.
                        I&apos;m driven by curiosity and always eager to learn new technologies and improve my craft.
                    </p>
                </div>

                <div className='!mt-20 relative'>
                    <div className='space-x-1.5'>
                        <h3 className='text-white leading-1.5 !font-black'>What I&apos;ve been working on</h3>
                    </div>

                    <div className='!mt-6'>
                        <ProjectContainer />
                    </div>
                </div>

                <div className='!mt-20 relative'>
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
                </div>
            </section>
        </div>
    </div>
  )
}

export default Home