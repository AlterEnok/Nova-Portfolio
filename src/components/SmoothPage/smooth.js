// src/components/AnimatedPage/AnimatedPage.jsx
import { motion } from 'framer-motion';

const animation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

const AnimatedPage = ({ children }) => {
    return (
        <motion.div
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;
