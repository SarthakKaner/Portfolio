import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Experience from './components/Experience'
import ClubsCommittees from './components/ClubsCommittees'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MessageConfirmation from './components/MessageConfirmation'

// Main content component
const MainContent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const location = useLocation();
  
  // Skip loading for message confirmation page
  const isMessageConfirmation = location.pathname === '/message-confirmation';
  
  // Define messages for different loading stages
  const getLoadingMessage = (progress) => {
    if (progress < 25) return 'Building the front-end...'
    if (progress < 50) return 'Compiling components...'
    if (progress < 75) return 'Optimizing performance...'
    if (progress < 95) return 'Launching your experience...'
    return 'Ready!'
  }

  useEffect(() => {
    // Skip loading for message confirmation page
    if (isMessageConfirmation) {
      setIsLoading(false);
      return;
    }
    
    // Simulate gradual loading progress with variable speed
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        // Slower at beginning, faster in middle, slower at end
        const speed = prev < 30 ? 3 : prev > 80 ? 2 : 7;
        const newProgress = prev + (Math.random() * speed);
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 150);

    // Complete loading after a realistic time
    setTimeout(() => {
      clearInterval(interval);
      setLoadingProgress(100);
      setTimeout(() => {
        // Smoother transition to main content
        setIsLoading(false);
      }, 800);
    }, 4500);

    return () => clearInterval(interval);
  }, [isMessageConfirmation])

  // Loading screen
  if (isLoading && !isMessageConfirmation) {
    return (
      <div className="h-screen w-screen overflow-hidden relative bg-gradient-to-br from-black via-primary to-black flex flex-col items-center justify-center">
        {/* Background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute rounded-full bg-secondary/10"
              style={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
        
        {/* Animated bracket design */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-[25rem] font-mono text-secondary"
            animate={{ 
              rotateZ: [0, 3, 0, -3, 0],
              scale: [1, 1.02, 1, 0.98, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          >
            {"{ }"}
          </motion.div>
        </motion.div>

        {/* Central content */}
        <motion.div 
          className="z-10 max-w-lg w-4/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo/Brand */}
          <motion.div
            className="flex items-center justify-center mb-8"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-18 h-18 relative">
              {/* Outer rings */}
              <motion.div 
                className="absolute -inset-4 rounded-full border border-secondary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute -inset-2 rounded-full border border-secondary/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Main circle */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary to-purple-500 opacity-75"
                animate={{ 
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(101, 229, 109, 0.7)",
                    "0 0 10px 4px rgba(101, 229, 109, 0.3)",
                    "0 0 0 0 rgba(101, 229, 109, 0.7)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">SK</span>
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-500 text-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sarthak Kaner
          </motion.h1>
          
          {/* Minimal Progress Bar */}
          <motion.div 
            className="h-1.5 bg-gray-800 rounded-full overflow-hidden mb-3 relative"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${loadingProgress}%` }}
              className="h-full bg-gradient-to-r from-secondary via-green-400 to-purple-500 relative"
            >
              {/* Animated gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: [-100, 300] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatType: "loop",
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          </motion.div>

          {/* Loading Message - Changes based on progress */}
          <motion.div
            className="h-6 flex justify-center text-center text-sm sm:text-base text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.span 
                key={getLoadingMessage(loadingProgress)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="font-mono"
              >
                {getLoadingMessage(loadingProgress)}
              </motion.span>
            </AnimatePresence>
          </motion.div>
          
          {/* Progress Percentage */}
          <motion.div 
            className="flex justify-between items-center text-xs text-gray-400 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.span 
              animate={{ color: loadingProgress === 100 ? "#65E56D" : "#9CA3AF" }}
              transition={{ duration: 0.3 }}
            >
              &lt;loading&gt;
            </motion.span>
            <motion.span
              animate={{ 
                scale: loadingProgress === 100 ? [1, 1.2, 1] : 1,
                color: loadingProgress === 100 ? "#65E56D" : "#9CA3AF"
              }}
              transition={{ duration: 0.3 }}
            >
              {Math.round(loadingProgress)}%
            </motion.span>
            <motion.span
              animate={{ color: loadingProgress === 100 ? "#65E56D" : "#9CA3AF" }}
              transition={{ duration: 0.3 }}
            >
              &lt;/loading&gt;
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  // Render appropriate content based on route
  return (
    <motion.div 
      className="bg-primary min-h-screen"
     
    >
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <ClubsCommittees />
            <CodingProfiles />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/message-confirmation" element={<MessageConfirmation />} />
      </Routes>
    </motion.div>
  )
}

// Main App component
function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  )
}

export default App