import React from "react";
import Navbar from "../components/navbar/Navbar";
import CaseStudieInfo from "../components/case/CaseStudieInfo";
import { motion, AnimatePresence } from "framer-motion";

const CaseStudyPage = ({ slug }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <CaseStudieInfo slug={slug} />
      </motion.div>
    </AnimatePresence>
  );
};

export default CaseStudyPage;
