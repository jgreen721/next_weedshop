import React from "react";
import styles from "../styles/Component.module.css";
import { motion } from "framer-motion";

const growVar = {
  initial: {
    fontSize: "0px",
  },
  animate: {
    fontSize: "65px",
    transition: {
      duration: 2,
      ease: "easeIn",
    },
    borderBottom: "10px solid black",
  },
};

const fallVar = {
  initial: {
    translateY: "-200px",
  },
  animate: {
    translateY: "0px",
    transition: {
      duration: 2,
      ease: "easeIn",
      type: "spring",
      mass: 2,
      damping: 9,
    },
  },
};

const Header = () => {
  return (
    <div className={styles.header}>
      <motion.h1
        className={styles.header_h1}
        variants={growVar}
        initial="initial"
        animate="animate"
      >
        BRATS
      </motion.h1>
      <motion.h3 variants={fallVar} initial="initial" animate="animate">
        🔥 - HOUSE OF WEED - 🔥
      </motion.h3>
    </div>
  );
};

export default Header;
