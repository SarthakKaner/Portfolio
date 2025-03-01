import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import books from '../assets/books.jpg'
import AQG from '../assets/AQG.jpg'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Book Store",
      description: "Developed a MERN stack online store with Firebase for user login, JWT-based user authorization, and a secure admin panel for managing operations.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Firebase", "JWT"],
      image: books,
      github: "https://github.com/SarthakKaner",
    },
    {
      id: 2,
      title: "Chef AI",
      description: "A smart recipe recommendation system that suggests personalized recipes based on available ingredients.",
      technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "Express"],
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      github: "https://github.com/SarthakKaner/recipeApp",
      live: "",
    },
    {
      id: 3,
      title: "Automated Question Generation",
      description: "Developed an automated question generation system using Python and advanced Natural Language Processing techniques",
      technologies: ["Python", "NLP", "BERT", "Machine Learning", "NER"],
      image: AQG,
      github: "https://github.com/SarthakKaner",
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "A data visualization platform that analyzes social media trends and provides insights through interactive charts and graphs.",
      technologies: ["React", "Node.js", "Express", "Social Media APIs"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      github: "https://github.com/SarthakKaner",
    },
  ]

  return (
    <div name="projects" className="w-full min-h-screen bg-primary text-textPrimary py-12 sm:py-16 md:py-20">
      <div className="max-w-screen-lg px-4 sm:px-6 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pb-6 sm:pb-8"
        >
          <p className="text-secondary inline font-bold text-lg sm:text-xl border-b-4 border-secondary">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 sm:mt-4">Some of my recent work</h2>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map(({ id, title, description, technologies, image, github, live }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              viewport={{ once: true }}
              className="card rounded-lg shadow-lg overflow-hidden project-card bg-[#0a192f] hover:shadow-xl transition-all duration-300 border border-gray-800"
            >
              <div className="relative">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-40 sm:h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-2">{title}</h3>
                <p className="text-textSecondary text-sm sm:text-base mb-3 sm:mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {technologies.map((tech, index) => (
                    tech && (
                      <span
                        key={index}
                        className="px-2 py-1 bg-tertiary text-secondary text-xs sm:text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    )
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-textPrimary hover:text-secondary transition-colors duration-300 text-sm sm:text-base"
                  >
                    <FaGithub className="mr-1 sm:mr-2" /> Code
                  </a>
                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-textPrimary hover:text-secondary transition-colors duration-300 text-sm sm:text-base"
                    >
                      <FaExternalLinkAlt className="mr-1 sm:mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects