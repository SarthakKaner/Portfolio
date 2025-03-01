import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheck, FaArrowLeft } from 'react-icons/fa';

const MessageConfirmation = () => {
  return (
    <div className="w-full min-h-screen bg-primary text-textPrimary flex items-center justify-center">
      <div className="max-w-lg p-8 mx-auto bg-tertiary rounded-lg shadow-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mx-auto w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6">
            <FaCheck size={40} className="text-primary" />
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Message Received!</h1>
          <p className="text-textSecondary mb-8">
            Thank you for reaching out. Sarthak has received your message and will get back to you soon.
          </p>
          
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-primary px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center mx-auto"
            >
              <FaArrowLeft className="mr-2" /> Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default MessageConfirmation;