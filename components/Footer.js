import React from "react";
import styles from "../styles/Component.module.css";
import { motion } from "framer-motion";

const growVar = {
  initial: {
    scale: "0",
  },
  animate: {
    scale: 1,
    transformOrigin: "bottom",
    transition: {
      duration: 1.25,
      ease: "easeIn",
    },
  },
};

const Footer = () => {
  return (
    <div className={styles.footer}>
      <motion.h3 variants={growVar} initial="initial" animate="animate">
        Footer&copy;
      </motion.h3>
    </div>
  );
};

export default Footer;
