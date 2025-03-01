import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { FaArrowDown, FaExternalLinkAlt } from 'react-icons/fa'
import profile from '../assets/profile.jpg' 

const Hero = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-primary relative flex flex-col justify-center items-center overflow-x-hidden px-4 sm:px-6 py-20"
    >
      <div className="max-w-screen-lg w-full flex flex-col-reverse sm:flex-row items-center justify-between gap-6 sm:gap-8 z-10">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center w-full sm:w-3/5 items-center sm:items-start text-center sm:text-left"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg xs:text-xl sm:text-2xl font-bold text-secondary mb-1 sm:mb-2"
          >
            Hello, I'm
          </motion.h2>
          
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-textPrimary mb-2 sm:mb-4 w-full"
          >
            <span className="inline-block">Sarthak Kaner</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-xl xs:text-2xl sm:text-3xl font-bold text-textSecondary mb-3 sm:mb-5 w-full"
          >
            I'm a{" "}
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2000,
                'Web Developer',
                2000, 
                'Problem Solver',
                2000,
                'Writer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-secondary"
            />
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-textSecondary text-base sm:text-lg max-w-full sm:max-w-md mb-5 sm:mb-6 leading-relaxed mx-auto sm:mx-0"
          >
            Passionate about creating beautiful, functional, and user-friendly applications. 
            I love to solve complex problems and turn ideas into reality.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="group text-primary bg-secondary px-4 sm:px-6 py-2 sm:py-3 flex items-center rounded-md font-medium transition-all duration-300"
            >
              <a 
                href="https://docs.google.com/document/d/1FiF8xJ6vCK6Wrl4j69TvDNCgfB-0igicDgmEaIXRr98/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Resume
                <motion.span 
                  className="ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaExternalLinkAlt size={14} />
                </motion.span>
              </a>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="text-secondary border-2 border-secondary px-4 sm:px-6 py-2 sm:py-3 flex items-center rounded-md font-medium hover:bg-secondary hover:bg-opacity-10 transition-all duration-300"
            >
              <Link to="contact" smooth duration={500} className="flex items-center">
                Contact Me
                <motion.span 
                  className="ml-1 opacity-0 group-hover:opacity-100"
                  initial={{ width: 0 }}
                  whileHover={{ width: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full sm:w-2/5 flex justify-center items-center mb-6 sm:mb-0"
        >
          <motion.div 
            className="w-36 h-36 xs:w-44 xs:h-44 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="absolute inset-0 rounded-full border-4 border-secondary"
              animate={{ 
                boxShadow: ["0 0 10px rgba(129, 161, 193, 0.3)", "0 0 20px rgba(129, 161, 193, 0.5)", "0 0 10px rgba(129, 161, 193, 0.3)"] 
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <img 
              src={profile} 
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
              style={{ objectPosition: "center 20%" }}
            />
            <motion.div 
              className="absolute -inset-1 rounded-full border-2 border-secondary border-opacity-50"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Link to="about" smooth duration={500}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer text-secondary hover:text-opacity-80 transition-all duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              <FaArrowDown size={20} className="sm:text-[25px]" />
            </motion.div>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  )
}

export default Hero