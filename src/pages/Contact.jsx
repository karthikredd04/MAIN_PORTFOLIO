import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, Phone, MapPin, Send, CheckCircle, 
  Github, Linkedin, Twitter, Globe, FileText,
  Calendar, MessageSquare
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', formData)
    setStatus({ type: 'success', message: 'Message sent successfully!' })
    setFormData({ name: '', email: '', subject: '', message: '' })
    setLoading(false)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      info: 'yaramalakarthikreddy000@gmail.com',
      link: 'mailto:yaramalakarthikreddy000@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      info: '+91 81797 14149',
      link: 'tel:+918179714149'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      info: 'Vijayawada, India',
      link: '#'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Availability',
      info: 'Mon - Sat, 10 AM - 7 PM IST',
      link: '#'
    }
  ]

  const socialLinks = [
    { icon: <Github />, label: 'GitHub', href: '#', color: 'hover:bg-gray-800' },
    { icon: <Linkedin />, label: 'LinkedIn', href: '#', color: 'hover:bg-blue-800' },
    { icon: <Twitter />, label: 'Twitter', href: '#', color: 'hover:bg-sky-800' },
    { icon: <Globe />, label: 'Portfolio', href: '#', color: 'hover:bg-green-800' }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information Cards */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold gradient-text mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-effect rounded-2xl p-5 md:p-6 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 shrink-0 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-base md:text-lg mb-1 truncate">
                          {item.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-400 break-words">
                          {item.info}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold gradient-text mb-4">Connect Online</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`aspect-square rounded-xl glass-effect ${social.color} transition-all duration-300 flex flex-col items-center justify-center space-y-2 p-4`}
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      {social.icon}
                    </div>
                    <span className="text-xs md:text-sm text-center">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Resume Download - UPDATED */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-2">
                <FileText className="w-6 h-6 text-primary-400" />
                <h3 className="text-2xl font-bold gradient-text">My Resume</h3>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-400 text-sm md:text-base">
                  Download my latest resume to learn more about my experience, skills, and qualifications.
                </p>
                
                {/* Updated Resume Download Button */}
                <motion.a
                  href="/resume.pdf"  // Direct path to public folder
                  download="Yaramala_Karthik_Reddy_Resume.pdf"  // Custom download name
                  target="_blank"  // Opens in new tab
                  rel="noopener noreferrer"  // Security best practice
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-5 md:p-6 rounded-2xl bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 transition-all duration-300 flex items-center justify-center space-x-3 font-bold text-sm md:text-base group"
                >
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 md:w-6 md:h-6" />
                    <span>Download Resume (PDF)</span>
                  </div>
                  <svg 
                    className="w-4 h-4 ml-2 group-hover:animate-bounce" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 15v-6m0 0l-3 3m3-3l3 3M3 12a9 9 0 1018 0 9 9 0 00-18 0z" 
                    />
                  </svg>
                </motion.a>

                {/* Resume Info Card */}
                <div className="mt-3 p-4 rounded-xl glass-effect border border-white/10">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="space-y-1">
                      <span className="text-gray-400">Format:</span>
                      <div className="font-medium flex items-center">
                        <FileText className="w-4 h-4 mr-2 text-primary-400" />
                        PDF Document
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-gray-400">Size:</span>
                      <div className="font-medium">~1.5 MB</div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-gray-400">Pages:</span>
                      <div className="font-medium">1 Page</div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-gray-400">Updated:</span>
                      <div className="font-medium">Dec 2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full flex items-stretch"
          >
            <div className="glass-effect rounded-3xl p-6 md:p-8 w-full flex flex-col">
              <div className="flex items-center space-x-3 mb-6 md:mb-8">
                <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-primary-400" />
                <h2 className="text-xl md:text-2xl font-bold">Send a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6 flex-1 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm md:text-base mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-xl glass-effect border border-white/10 focus:border-primary-500 focus:outline-none transition-all duration-300 text-sm md:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm md:text-base mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-xl glass-effect border border-white/10 focus:border-primary-500 focus:outline-none transition-all duration-300 text-sm md:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm md:text-base mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-xl glass-effect border border-white/10 focus:border-primary-500 focus:outline-none transition-all duration-300 text-sm md:text-base"
                    placeholder="Project inquiry"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <label className="block text-gray-400 text-sm md:text-base mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 rounded-xl glass-effect border border-white/10 focus:border-primary-500 focus:outline-none transition-all duration-300 resize-none text-sm md:text-base flex-1"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <div className="mt-auto">
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 md:py-4 rounded-xl bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-3 font-bold text-sm md:text-base"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 md:w-5 md:h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-4 p-3 md:p-4 rounded-xl flex items-center space-x-3 ${
                        status.type === 'success'
                          ? 'bg-green-900/30 text-green-400 border border-green-800'
                          : 'bg-red-900/30 text-red-400 border border-red-800'
                      }`}
                    >
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="text-sm md:text-base">{status.message}</span>
                    </motion.div>
                  )}
                </div>
              </form>

              {/* Response Time */}
              <div className="mt-6 md:mt-8 p-3 md:p-4 rounded-xl bg-dark-800/50 border border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-sm md:text-base text-gray-400">
                    <span className="text-white font-medium">Typical response time:</span> Within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact