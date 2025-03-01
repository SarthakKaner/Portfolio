import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const mainLinks = [
    { id: 1, link: 'skills', text: 'Skills' },
    { id: 2, link: 'education', text: 'Education' },
    { id: 3, link: 'experience', text: 'Experience' },
    { id: 4, link: 'projects', text: 'Projects' },
    { id: 5, link: 'clubs-committees', text: 'Clubs' },
    { id: 6, link: 'coding-profiles', text: 'Coding Profiles' },
    { id: 7, link: 'contact', text: 'Contact' },
  ]

  const mobileLinks = [{ id: 0, link: 'about', text: 'About' }, ...mainLinks]

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflowX = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      document.documentElement.style.overflowX = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'unset'
      document.documentElement.style.overflowX = 'hidden'
    }
  }, [nav])

  const handleClick = () => setNav(!nav)

  return (
    <>


      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-screen max-w-full h-16 sm:h-18 md:h-20 z-50 flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 bg-primary bg-opacity-90 backdrop-blur-md shadow-lg transition-all duration-300"
      >
        <div>
          <Link to="home" smooth duration={500}>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-2xl sm:text-2xl md:text-3xl font-bold text-secondary cursor-pointer hover:text-secondary/80 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hidden xs:inline">Sarthak Kaner</span>
              <span className="xs:hidden">SK</span>
            </motion.h1>
          </Link>
        </div>

        <div className="hidden md:block">
          <nav>
            <ul className="flex items-center gap-x-2 lg:gap-x-3">
              {mainLinks.map(({ id, link, text }) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: id * 0.05 }}
                >
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    offset={-60}
                    className="nav-link text-sm lg:text-base font-medium text-textPrimary hover:text-secondary transition-colors duration-300 cursor-pointer"
                    activeClass="active-link"
                    spy={true}
                    onSetActive={() => setActiveSection(link)}
                  >
                    {text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>

        <motion.div
          onClick={handleClick}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer z-20 text-textPrimary hover:text-secondary md:hidden"
        >
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </motion.div>

        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
              onClick={handleClick}
            >
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 left-0 right-0 w-screen h-screen bg-primary shadow-xl z-20 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col h-full pt-20 pb-6 px-6">
                  <ul className="flex-1 flex flex-col space-y-2">
                    {mobileLinks.map(({ id, link, text }) => (
                      <motion.li
                        key={id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: id * 0.05 }}
                      >
                        <Link
                          onClick={handleClick}
                          to={link}
                          smooth
                          duration={500}
                          offset={-100}
                          className="block py-3 text-base text-textPrimary hover:text-secondary transition-colors duration-300 cursor-pointer"
                        >
                          {text}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="pt-6">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      className="text-sm text-textSecondary text-center"
                    >
                      © 2025 Sarthak Kaner
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default Navbar