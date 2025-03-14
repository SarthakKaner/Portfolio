import { motion } from 'framer-motion'
import { FaCode, FaHackerrank, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiLeetcode, SiCodeforces, SiCodechef, SiGeeksforgeeks } from 'react-icons/si'

const CodingProfiles = () => {
  const profiles = [
    {
      id: 1,
      platform: "LeetCode",
      username: "sarthakkaner7777",
      stats: {
        maxRating: "1830",
        problemsSolved: "600+",
        globalRank: "Top 7%",
      },
      link: "https://leetcode.com/u/sarthakkaner7777/",
      icon: <SiLeetcode size={50} />,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500",
    },
    {
      id: 2,
      platform: "CodeChef",
      username: "sarthak7777",
      stats: {
        maxRating: "1535",
        contests: "10+",
        rank: "2-star coder",
      },
      link: "https://www.codechef.com/users/sarthak7777",
      icon: <SiCodechef size={50} />,
      color: "text-white-700",
      bgColor: "bg-white/10",
      borderColor: "border-white",
    },
    {
      id: 3,
      platform: "Codeforces",
      username: "sarthak_7777",
      stats: {
        maxRating: "1130",
        contests: "10+",
        rank: "Newbie",
      },
      link: "https://codeforces.com/profile/sarthak_7777",
      icon: <SiCodeforces size={50} />,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500",
    },
    {
      id: 4,
      platform: "GeeksforGeeks",
      username: "sarthakkaner7777",
      stats: {
        maxRating: "1780",
        problemsSolved: "200+",
        rank: "Top 10%",
      },
      link: "https://www.geeksforgeeks.org/user/sarthakkaner7777/",
      icon: <SiGeeksforgeeks size={50} />,
      color: "text-green-600",
      bgColor: "bg-green-600/10",
      borderColor: "border-green-600",
    },
    {
      id: 5,
      platform: "HackerRank",
      username: "sarthakkaner7777",
      stats: {
        problemSolving: "5-star",
        certification: "Java",
        problemsSolved: "100+",
      },
      link: "https://www.hackerrank.com/profile/sarthakkaner7777",
      icon: <FaHackerrank size={50} />,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500",
    },
  ]

  const statIcons = {
    maxRating: "🏆",
    problemsSolved: "⚡",
    globalRank: "🌎",
    contests: "🏁",
    rank: "⭐",
    certification: "🏅",
    contributions: "🤝",
    problemSolving: "💡",

    algorithms: "🧠",
  }

  return (
    <div name="coding-profiles" className="w-full min-h-screen bg-primary text-textPrimary py-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <p className="text-secondary inline font-bold text-xl border-b-4 border-secondary">
            Coding Profiles
          </p>
          <h2 className="text-4xl font-bold mt-4">My Competitive Programming Journey</h2>
          <p className="text-textSecondary mt-3">Showcasing my problem-solving skills across various coding platforms</p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {profiles.map(({ id, platform, username, stats, link, icon, color, bgColor, borderColor }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              viewport={{ once: true }}
              className={`card rounded-xl p-6 shadow-xl ${bgColor} border-2 ${borderColor} hover:shadow-2xl transition-all duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full ${bgColor} ${color} mr-4`}>
                  {icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-textPrimary">{platform}</h3>
                  <p className="text-textSecondary">@{username}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-2 my-4">
                {Object.entries(stats).map(([key, value]) => (
                  <div key={key} className="flex items-center">
                    <span className="mr-2 text-lg">{statIcons[key] || "📊"}</span>
                    <span className="capitalize font-medium">{key.replace(/([A-Z])/g, ' $1')}: </span>
                    <span className="ml-1 font-bold text-secondary">{value}</span>
                  </div>
                ))}
              </div>
              
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className={`mt-4 flex items-center justify-center w-full p-2 rounded-lg ${color} bg-opacity-20 hover:bg-opacity-30 transition-all duration-300`}
              >
                <FaExternalLinkAlt className="mr-2" />
                Visit Profile
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center justify-center p-4 bg-tertiary rounded-full text-secondary mb-6">
            <FaCode size={30} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Problem Solving Approach</h3>
          <p className="text-textSecondary max-w-2xl mx-auto">
            I believe in a systematic approach to problem-solving, breaking down complex problems into manageable components. 
            My competitive programming experience has honed my ability to write efficient, optimized code under time constraints. 
            This translates directly to my professional work, where I can quickly identify and implement optimal solutions.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default CodingProfiles