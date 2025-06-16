import { motion } from "framer-motion";
import PropTypes from "prop-types";

const creativeVariant = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
      damping: 14,
    },
  }),
};

export default function AnimatedTextBlock({ paragraphs = [] }) {
  return (
    <div className="space-y-5 max-w-xl">
      {paragraphs.map((text, i) => (
        <motion.p
          key={i}
          className="text-sm lg:text-base font-normal text-secondary"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={creativeVariant}
          custom={i}
        >
          {text}
        </motion.p>
      ))}
    </div>
  );
}

AnimatedTextBlock.propTypes = {
    paragraphs: PropTypes.array.isRequired
}