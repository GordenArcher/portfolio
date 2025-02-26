import { useEffect, useState } from "react"
import { About } from "../components/page/About"
import Intro from "../components/page/Intro"
import Portfolio from "../components/page/Portfolio"
import Resume from "../components/page/Resume"
import Services from "../components/page/Services"
import ToTop from "../components/ToTop"

const Hero = () => {

  const [showToTop, setShowToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
        setShowToTop(window.scrollY > 500);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
        document.removeEventListener("scroll", handleScroll);
    };
}, []);

  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full">
        <div className="relative w-full h-full">
          <div className="relative w-full h-full flex flex-col gap-2">
            
            <div className="w-full h-full !p-[20px] md:!p-[30px]">
              <Intro />
            </div>

            <div id="about" className="w-full h-full !p-[20px] md:!p-[30px]">
              <About />
            </div>

            <div id="resume" className="w-full h-full !p-[20px] md:!p-[30px]">
              <Resume />
            </div>

            <div id="portfolio" className="w-full h-full !p-[20px] md:!p-[30px]">
              <Portfolio />
            </div>

            <div id="services" className="w-full h-full !p-[20px] md:!p-[30px]">
              <Services />
            </div>
          </div>
        </div>
      </div>

      {showToTop && <div className="w-full">
        <ToTop />
      </div>}
      
    </div>
  )
}

export default Hero
