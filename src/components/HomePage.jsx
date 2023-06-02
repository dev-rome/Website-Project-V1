import Navbar from "../components/navbar/Navbar";
import Hero from "../components/sections/HeroSection/Hero";
import Company from "../components/sections/CompanySection/Company";
import Clients from "../components/sections/ClientSection/Clients";
import Steps from "../components/sections/StepsSection/Steps";
import About from "../components/sections/AboutSection/About";
import Contact from "../components/sections/ContactSection/Contact";
import Footer from "../components/footer/Footer";
import { motion, AnimatePresence } from "framer-motion";

const HomePage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <Hero />
        <Company />
        <Clients />
        <Steps />
        <About />
        <Contact />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default HomePage;
