import { motion } from "framer-motion";

export default function FadeInWhenVisible({ children }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
                duration: 1,
                delay: 0.3,
                // ease: [0, 0.5, 0.7, 1.01],
            }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
            }}
        >
            {children}
        </motion.div>
    );
}