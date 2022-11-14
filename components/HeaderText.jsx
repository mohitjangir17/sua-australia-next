import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
export default function HeaderText() {
  return (
    <motion.div
      className={styles.Herotext}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <p className={styles.textSpan}>Welcome to Swipeup Assignments!</p>
      <h1 className={styles.heroHeading}>
        The Platform Where You get Premium Assignment Writing Help by Experts
      </h1>
      <p>
        Don’t Want To Lose The Grades. Get Assignment Help By Experts And Secure
        Top Grades In All Your Assignments In a Few Steps.
      </p>
      {/* <button>Hire Now</button> */}
    </motion.div>
  );
}
