import { motion } from 'framer-motion'
import { FaBriefcase, FaChalkboardTeacher, FaExternalLinkAlt, FaCertificate } from 'react-icons/fa'

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      title: "Java Full Stack Intern",
      company: "Wipro Limited",
      location: "Remote",
      duration: "2023",
      description: [
        "Developed a secure e-commerce application using Angular and Spring Boot",
        "Enhanced user authentication and authorization features",
        "Adhered to CRUD principles ensuring secure access to application resources"
      ],
      certificateLink: "https://drive.google.com/file/d/1b-O_cLTct56aQJpqDbCsI0GulX8qPwrj/view?usp=sharing",
      type: "work",
    },
    {
      id: 2,
      title: "Web Development Intern",
      company: "Cloud Counselage, Pvt Ltd",
      location: "Remote",
      duration: "2022",
      description: [
        "Built a real-time help and support chat-app using Socket.io for responsive communication",
        "Utilized Node.js for its non-blocking, event-driven architecture",
        "Efficiently handled multiple simultaneous user interactions"
      ],
      certificateLink: "https://drive.google.com/file/d/1E66GDSYgE4iDeMQ4Fwc8wSDyUY3gRSaj/view?usp=sharing",
      type: "work",
    },
    {
      id: 3,
      title: "Teaching Assistant - Advanced Programming",
      company: "IIIT Delhi",
      location: "Delhi",
      duration: "Jun 2024 - Dec 2024",
      description: [
        "Conducted tutorials and assisted students with Java concepts",
        "Evaluated assignments and projects for coding accuracy and efficiency",
      ],
      type: "teaching",
    },
    {
      id: 4,
      title: "Teaching Assistant - Database Management System",
      company: "IIIT Delhi",
      location: "Delhi",
      duration: "Jan 2024 - May 2024",
      description: [
        "Led tutorials helping students understand SQL, normalization, and database design",
        "Assisted with labs focusing on Transaction and concurrency control",
      ],
      type: "teaching",
    },
    {
      id: 5,
      title: "Teaching Assistant - Computer Architecture",
      company: "IIIT Delhi",
      location: "Delhi",
      duration: "Jul 2023 - Dec 2023",
      description: [
        "Helped students grasp key concepts like CPU design and instruction sets",
        "Held review sessions before exams to clarify complex architecture concepts"
      ],
      type: "teaching",
    },
  ]

  return (
    <div name="experience" className="w-full min-h-screen bg-primary text-textPrimary py-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <p className="text-secondary inline font-bold text-xl border-b-4 border-secondary">
            Experience
          </p>
          <h2 className="text-4xl font-bold mt-4">My Professional Journey</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Work Experience Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold flex items-center text-textPrimary mb-6">
              <FaBriefcase className="mr-3 text-secondary" /> Internship Experience
            </h3>

            <div className="space-y-6">
              {workExperience
                .filter(exp => exp.type === "work")
                .map(({ id, title, company, location, duration, description, certificateLink }) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: id * 0.1 }}
                    viewport={{ once: true }}
                    className="card rounded-lg p-6 shadow-lg h-full"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="text-xl font-bold text-secondary">{title}</h4>
                      {certificateLink && (
                        <a 
                          href={certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary flex items-center hover:text-opacity-75 transition-all duration-300 text-sm bg-opacity-20 bg-secondary px-2 py-1 rounded"
                        >
                          <FaCertificate className="mr-1" /> Certificate <FaExternalLinkAlt className="ml-1 text-xs" />
                        </a>
                      )}
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center text-textSecondary mt-1">
                      <p className="font-medium">{company}</p>
                      <span className="hidden md:block mx-2">•</span>
                      <p>{location}</p>
                    </div>
                    <p className="text-textSecondary italic mt-1">{duration}</p>
                    <ul className="mt-4 space-y-2">
                      {description.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-secondary mr-2">▹</span>
                          <span className="text-textSecondary">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Teaching Assistantship Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2 mt-8 md:mt-0"
          >
            <h3 className="text-2xl font-bold flex items-center text-textPrimary mb-6">
              <FaChalkboardTeacher className="mr-3 text-secondary" /> Teaching Assistantship
            </h3>

            <div className="space-y-6">
              {workExperience
                .filter(exp => exp.type === "teaching")
                .map(({ id, title, company, location, duration, description }) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: id * 0.1 }}
                    viewport={{ once: true }}
                    className="card rounded-lg p-6 shadow-lg h-full"
                  >
                    <h4 className="text-xl font-bold text-secondary">{title}</h4>
                    <div className="flex flex-col md:flex-row md:items-center text-textSecondary mt-1">
                      <p className="font-medium">{company}</p>
                      <span className="hidden md:block mx-2">•</span>
                      <p>{location}</p>
                    </div>
                    <p className="text-textSecondary italic mt-1">{duration}</p>
                    <ul className="mt-4 space-y-2">
                      {description.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-secondary mr-2">▹</span>
                          <span className="text-textSecondary">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Experience