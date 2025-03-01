import { motion } from 'framer-motion'
import profileImg from '../assets/esya.jpg'

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-primary text-textPrimary py-12 sm:py-16 md:py-20">
      <div className="max-w-screen-lg px-4 sm:px-6 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="pb-6 sm:pb-8"
        >
          <p className="text-secondary inline font-bold text-lg sm:text-xl border-b-4 border-secondary">
            About Me
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full md:w-2/5 flex justify-center"
          >
            <div className="relative w-60 h-auto sm:w-72 md:w-full max-w-xs rounded-lg overflow-hidden border-2 border-secondary shadow-xl">
              <img 
                src={profileImg} 
                alt="Profile" 
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              {/* Add subtle glow effect */}
              <div className="absolute inset-0 shadow-inner pointer-events-none border border-white/10"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full md:w-3/5"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-textPrimary text-center md:text-left">
              Who I Am
            </h2>
            <p className="text-textSecondary text-base sm:text-lg mb-3 sm:mb-4">
              I'm a software engineer who loves solving problems—whether it's fixing a stubborn bug, optimizing a system, or figuring out why my code worked yesterday but not today. With a strong foundation in web development and backend systems, I've built everything from small apps to complex projects, always striving to make things cleaner, faster, and more efficient.
            </p>
            <p className="text-textSecondary text-base sm:text-lg">
              My journey started during my undergrad when I realized I enjoy breaking down complex problems and turning ideas into working solutions. Since then, I've worked on various projects, picked up React along the way, and kept sharpening my backend skills. When I'm not coding, I'm either writing, watching shows, or overanalyzing random things in life—because, let's be honest, debugging isn't just for code.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About