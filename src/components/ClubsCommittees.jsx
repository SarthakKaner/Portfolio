import { motion, AnimatePresence } from 'framer-motion'
import { FaUsers } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { useEffect, useRef, useState } from 'react'
import convocation from '../assets/convocation.jpg'
import induction from '../assets/induction.jpg'
import sc from '../assets/sc.jpg'
import tnp from '../assets/tnp.jpg'
import smp from '../assets/smp.jpg'

const ClubsCommittees = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const clubsData = [
    {
      id: 1,
      name: "Convocation Committee",
      role: "Convenor",
      badge: "IIIT Delhi",
      description: "Led the organization of graduation ceremonies, coordinating with faculty and administration.",
      image: convocation
    },
    {
      id: 2,
      name: "Student Council",
      role: "M.Tech Representative",
      badge: "IIIT Delhi",
      description: "Represented batch students' interests and oversaw various student clubs and activities to enhance campus life.",
      image: sc
    },
    {
      id: 3,
      name: "Induction Committee",
      role: "Core Team Member",
      badge: "IIIT Delhi",
      description: "Facilitated seamless onboarding of new students through orientation programs.",
      image: induction
    },
    {
      id: 4,
      name: "Student Mentorship Program",
      role: "Mentor",
      badge: "IIIT Delhi",
      description: "Guided junior students in academics and career development initiatives.",
      image: smp
    },
    {
      id: 5,
      name: "Training and Placement Cell", // Fixed typo in "Training"
      role: "Public Relations Head",
      badge: "BIT Wardha",
      description: "Coordinated placement activities for graduating students.", // Fixed capitalization
      image: tnp
    },
    {
      id: 6,
      name: "Annual College Magazine",
      role: "Co-editor, English Section",
      badge: "BIT Wardha",
      description: "Curated written content and managed editorial responsibilities for publication.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ]

  // Handle keyboard events for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && hoveredImage) {
        setHoveredImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Lock scroll when modal is open
    if (hoveredImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [hoveredImage]);

  // Handle swipe on mobile for image gallery
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > minSwipeDistance;
    
    if (isSwipe) {
      setHoveredImage(null);
    }
  };

  return (
    <div name="clubs-committees" className="w-full bg-primary text-textPrimary py-8 sm:py-12 md:py-16">
      <div className="max-w-screen-lg px-4 sm:px-6 mx-auto flex flex-col justify-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pb-8 sm:pb-12"
        >
          <p className="text-secondary inline font-bold text-lg sm:text-xl border-b-4 border-secondary">
            Clubs & Committees
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 sm:mt-4">Leadership Journey</h2>
          <p className="text-gray-300 mt-3 sm:mt-4 text-sm sm:text-base max-w-2xl">
            Throughout my academic career, I've actively participated in various leadership roles, 
            helping me develop strong organizational, communication, and team management skills.
          </p>
        </motion.div>

        {/* Leadership Tiles - Enhanced Visual Grid with better mobile responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-10 sm:mb-16">
          {clubsData.map(({ id, name, role, badge, description, image }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(id * 0.1, 0.5) }} // Cap delay for better mobile experience
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-primary-light rounded-lg shadow-xl overflow-hidden group border border-gray-800 flex flex-col"
            >
              {/* Card Header with Image */}
              <div 
                className="relative h-40 sm:h-48 overflow-hidden cursor-pointer"
                onClick={() => setHoveredImage({ src: image, alt: name })}
                role="button"
                aria-label={`View ${name} image`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setHoveredImage({ src: image, alt: name });
                  }
                }}
              >
                <img 
                  src={image} 
                  alt={name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Semi-transparent gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 pointer-events-none"></div>
                
                {/* Image zoom indicator on hover */}
                <div 
                  className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 
                  flex items-center justify-center transition-opacity duration-300"
                >
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
                
                {/* Badge Overlay */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                  <span className="inline-block px-2 py-1 sm:px-3 sm:py-1.5 bg-secondary text-xs font-bold rounded-full text-primary shadow-lg">
                    {badge}
                  </span>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-1.5 sm:mb-2">
                  <h3 className="text-white font-bold text-lg sm:text-xl">{name}</h3>
                  <span className="flex items-center justify-center bg-secondary/20 p-1.5 sm:p-2 rounded-full">
                    <FaUsers className="text-secondary text-sm sm:text-base" />
                  </span>
                </div>
                
                <p className="text-secondary font-medium text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
                  {role}
                </p>
                
                <div className="h-px w-full bg-gray-700 mb-2 sm:mb-3"></div>
                
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-screen image overlay with improved display and touch support */}
        <AnimatePresence>
          {hoveredImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8"
              onClick={() => setHoveredImage(null)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full max-w-5xl max-h-[85vh] flex items-center justify-center relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={hoveredImage.src} 
                  alt={hoveredImage.alt} 
                  className="max-w-full max-h-[85vh] object-contain rounded shadow-2xl"
                />
                
                {/* Close button with responsive positioning */}
                <button 
                  className="absolute -top-10 sm:-top-12 right-0 bg-white/20 hover:bg-white/30 
                  text-white p-2 sm:p-3 rounded-full transition-colors focus:outline-none focus:ring-2 
                  focus:ring-white focus:ring-opacity-50"
                  onClick={() => setHoveredImage(null)}
                  aria-label="Close image view"
                >
                  <IoClose className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </motion.div>
              
              {/* Mobile-friendly close instructions with better visibility */}
              <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 text-center bg-black/30 backdrop-blur-sm py-2 text-white/80 text-xs sm:text-sm md:hidden">
                Tap outside or swipe to close
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default ClubsCommittees