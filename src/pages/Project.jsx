import ProjectContainer from "../components/ProjectContainer"


const Project = () => {
  return (
    <div className="space-x-1.5">
        <div className="relative !mb-7">
            <span className='text-4xl'>⚡</span>
            <h1 className='text-base md:text-xl lg:text-4xl bg-clip-text bg-gradient-to-r from-primary to-secondary !font-black text-gray-200'>What I&apos;ve been working on</h1>
        </div>

        <ProjectContainer />
    </div>
  )
}

export default Project