import { motion } from 'framer-motion'
import { FaGraduationCap, FaMedal } from 'react-icons/fa'
import { HiAcademicCap } from 'react-icons/hi'
import { IoSchool } from 'react-icons/io5'

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "M.Tech in Computer Science and Engineering",
      institution: "Indraprastha Institute of Information Technology (IIIT)",
      location: "Delhi, India",
      duration: "2023 - Present",
      score: "CGPA: 8.15",
      icon: <FaGraduationCap size={30} />,
    },
    {
      id: 2,
      degree: "B.Tech in Computer Engineering",
      institution: "Bajaj Institute of Technology, DBATU University",
      location: "Lonere, India",
      duration: "2018 - 2022",
      score: "CGPA: 9.06",
      icon: <HiAcademicCap size={30} />,
    },
    {
      id: 3,
      degree: "Higher Secondary Education (HSC)",
      institution: "New Arts, Commerce and Science College",
      location: "Maharashtra, India",
      duration: "2017 - 2018",
      score: "87.67%",
      icon: <FaMedal size={30} />,
    },
    {
      id: 4,
      degree: "Secondary School Education (SSC)",
      institution: "Agragami High School",
      location: "Maharashtra, India",
      duration: "2015 - 2016",
      score: "95.80%",
      icon: <FaMedal size={30} />,
    }
  ]

  return (
    <div name="education" className="w-full min-h-screen bg-primary text-textPrimary py-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <p className="text-secondary inline font-bold text-xl border-b-4 border-secondary bg-clip-text text-transparent bg-gradient-to-r from-secondary to-blue-500">
            Education
          </p>
          <h2 className="text-4xl font-bold mt-4">My Academic Journey</h2>
        </motion.div>

        <div className="flex flex-col space-y-10">
          {education.map(({ id, degree, institution, location, duration, score, icon }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: id % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              viewport={{ once: true }}
              className="card rounded-lg p-6 shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex items-center justify-center w-16 h-16 bg-tertiary rounded-full mb-4 md:mb-0 md:mr-6 text-secondary">
                  {icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-secondary">{degree}</h3>
                    <span className="text-lg font-semibold text-secondary bg-tertiary px-3 py-1 rounded-full">
                      {score}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center text-textSecondary mt-1">
                    <p className="font-medium text-lg">{institution}</p>
                    <span className="hidden md:block mx-2">•</span>
                    <p>{location}</p>
                  </div>
                  <p className="text-textSecondary italic mt-1">{duration}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education