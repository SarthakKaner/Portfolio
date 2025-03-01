import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div name="contact" className="w-full min-h-screen bg-primary text-textPrimary py-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <p className="text-secondary inline font-bold text-xl border-b-4 border-secondary">
            Contact
          </p>
          <h2 className="text-4xl font-bold mt-4">Get In Touch</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-6">Let's Connect & Create</h3>
            <p className="text-textSecondary mb-8">
            I'm always excited to explore new projects, exchange ideas, and collaborate on meaningful work. Whether you have a creative vision, a challenging problem, or an exciting opportunity, let's bring it to life together. Feel free to reach out through the form or connect with me on social media—I'd love to hear from you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center mr-4 text-secondary">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-textSecondary">sarthakkaner7777@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center mr-4 text-secondary">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-textSecondary">Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/sarthak-kaner/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://x.com/SarthakKaner" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href="https://github.com/SarthakKaner" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <form 
              action="https://formsubmit.co/e47f00e69e41c888193e6eb3de4aa7d4" 
              method="POST"
              className="space-y-6"
            >
              {/* Anti-spam honeypot field */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              
              {/* Disable captcha */}
              <input type="hidden" name="_captcha" value="false" />

        <input type="hidden" name="_next" value={window.location.origin + "/message-confirmation"} />

              {/* Email subject */}
              <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />

              <div>
                <label htmlFor="name" className="block text-textPrimary mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg contact-input"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-textPrimary mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg contact-input"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-textPrimary mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-3 rounded-lg contact-input"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-secondary text-primary px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact