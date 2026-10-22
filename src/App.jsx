import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Homelab from "./pages/Homelab";
import { useDarkMode } from './hooks/useDarkMode';
import { useScrollToHash } from './hooks/useScrollToHash';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

const AppRoutes = () => {
  useScrollToHash();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/homelab" element={<Homelab />} />
    </Routes>
  );
};

const App = () => {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg text-text-main transition-colors duration-300">
        <Navbar isDark={isDark} toggleDark={() => setIsDark(prev => !prev)} />
        <AppRoutes />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
    </BrowserRouter>
  );
};

export default App;
