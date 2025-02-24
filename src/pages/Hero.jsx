import Intro from "../components/Intro"
import Nav from "../components/Nav"

const Hero = () => {
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full">
        <div className="relative w-full h-full">
          <div className="relative w-full h-full flex flex-col gap-2">
            <div className="w-full">
              <Nav />
            </div>
            
            <div className="h-[500px] !p-[20px] md:!p-[30px]">
              <Intro />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
