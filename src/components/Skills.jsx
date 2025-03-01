import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaDocker, FaJava } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiExpress, SiTailwindcss, SiSpring, SiMysql, SiCplusplus, SiC, SiLinux, SiHibernate } from 'react-icons/si'



const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { id: 1, name: 'Java', icon: <FaJava size={50} />, color: 'text-red-500' },
        { id: 2, name: 'Python', icon: <FaPython size={50} />, color: 'text-blue-500' },
        { id: 3, name: 'JavaScript', icon: <FaJs size={50} />, color: 'text-yellow-400' },
        { id: 4, name: 'TypeScript', icon: <SiTypescript size={50} />, color: 'text-blue-600' },
        { id: 5, name: 'C++', icon: <SiCplusplus size={50} />, color: 'text-blue-800' },
        { id: 6, name: 'C', icon: <SiC size={50} />, color: 'text-blue-600' },
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        { id: 7, name: 'React', icon: <FaReact size={50} />, color: 'text-blue-400' },
        { id: 8, name: 'HTML', icon: <FaHtml5 size={50} />, color: 'text-orange-500' },
        { id: 9, name: 'CSS', icon: <FaCss3Alt size={50} />, color: 'text-blue-500' },
        { id: 10, name: 'Tailwind CSS', icon: <SiTailwindcss size={50} />, color: 'text-cyan-400' },
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { id: 11, name: 'Spring Boot', icon: <SiSpring size={50} />, color: 'text-green-600' },
        { id: 12, name: 'Node.js', icon: <FaNodeJs size={50} />, color: 'text-green-500' },
        { id: 13, name: 'Express', icon: <SiExpress size={50} />, color: 'text-gray-400' },
      ]
    },
    {
      category: "Databases",
      skills: [
        { id: 15, name: 'MySQL', icon: <SiMysql size={50} />, color: 'text-blue-700' },
        { id: 16, name: 'MongoDB', icon: <SiMongodb size={50} />, color: 'text-green-600' },
      ]
    },
    {
      category: "DevOps & Tools",
      skills: [
        { id: 17, name: 'Git', icon: <FaGitAlt size={50} />, color: 'text-orange-600' },
        { id: 18, name: 'Docker', icon: <FaDocker size={50} />, color: 'text-blue-500' },
        { id: 19, name: 'Linux', icon: <SiLinux size={50} />, color: 'text-yellow-500' },
      ]
    },
 
  ]

  return (
    <div name="skills" className="w-full min-h-screen bg-primary text-textPrimary py-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <p className="text-secondary inline font-bold text-xl border-b-4 border-secondary">
            Skills
          </p>
          <h2 className="text-4xl font-bold mt-4">Technologies I've worked with</h2>
        </motion.div>

        {skillCategories.map((category, categoryIndex) => (
          <motion.div 
            key={category.category}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold mb-4 text-secondary">{category.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.skills.map(({ id, name, icon, color }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: id * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="card shadow-md rounded-lg px-3 py-4"
                >
                  <div className={`flex justify-center ${color} skill-icon`}>
                    {icon}
                  </div>
                  <p className="mt-2 font-medium text-sm">{name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills