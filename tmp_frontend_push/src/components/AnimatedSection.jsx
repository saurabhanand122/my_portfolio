import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, memo } from 'react';

const AnimatedSection = memo(({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.section>
  );
});

export default AnimatedSection;