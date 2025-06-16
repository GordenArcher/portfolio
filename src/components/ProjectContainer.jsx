import { Projects } from "../constants/DevDetails";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 14,
    },
  },
};

const ProjectContainer = () => {
  return (
    <motion.div
      className="relative !mt-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
        <div className="flex flex-col gap-3.5">
            {Projects.map((project) => (
            <motion.div
                key={project.id}
                className="grow relative"
                variants={itemVariants} 
                >
                    <div className="flex max-md:flex-col max-md:items-start gap-4 md:gap-6 items-center rounded !p-3 hover:bg-gray-950 cursor-pointer">
                        <div className="relative !mr-2">
                            <img
                            loading="lazy"
                            width={200}
                            height={300}
                            className="rounded bg-gray-700 !p-2 max-md:w-full"
                            src={project.project_preview}
                            alt="thumbnail"
                            />
                        </div>

                        <div className="flex flex-col gap-1 justify-between">
                            <div className="relative !mb-4">
                                <h3 className="text-white !font-extrabold">{project.name}</h3>
                                <span className="text-sm text-white">{project.details}</span>
                            </div>

                            <div className="!mt-1 flex items-center gap-1">
                                {project.stack.map((stk) => (
                                    <div key={stk} className="!p-0.5 bg-slate-700 rounded-[2px]" >
                                        <span className="text-gray-400 text-sm">{stk}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </motion.div>
  );
};

export default ProjectContainer;
