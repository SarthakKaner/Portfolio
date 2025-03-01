import { motion } from 'framer-motion'
import { FaHeart, FaReact } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-tertiary py-8 text-textPrimary">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-secondary">Sarthak Kaner</h2>
            <p className="text-textSecondary mt-2">Taking small steps towards big dreams</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <p className="text-textSecondary flex items-center">
              Made with <FaHeart className="mx-1 text-red-500" /> 
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-700 text-center text-textSecondary"
        >
          <p>© Sarthak Kaner. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer