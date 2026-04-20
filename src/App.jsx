import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useDarkMode } from './hooks/useDarkMode';
import { ThemePicker } from './components/ThemePicker';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <div className="min-h-screen bg-bg text-text-main transition-colors duration-300">
      <Navbar isDark={isDark} toggleDark={() => setIsDark(prev => !prev)} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ThemePicker />
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default App;