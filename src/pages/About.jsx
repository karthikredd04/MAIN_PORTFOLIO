import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  User, GraduationCap, Briefcase, Award, 
  MapPin, Calendar, Download, Mail, Phone, 
  Globe, Github, Linkedin, Twitter, Sparkles, 
  Cloud, Code, ChevronRight, ExternalLink, CheckCircle,
  Brain, Cpu, Zap, ChevronDown, Target
} from 'lucide-react'

const About = () => {
  const [expandedCert, setExpandedCert] = useState(null)
  const [hoveredExp, setHoveredExp] = useState(null)

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Seshadri Rao Gudlavalleru Engineering College",
      university: "Jawaharlal Nehru Technological University, Kakinada",
      period: "2022 - 2026",
      gpa: "8.91/10",
      description: "Specialized in Artificial Intelligence and Machine Learning"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Chaitanya Junior College",
      university: "Board of Intermediate Education, Andhra Pradesh",
      period: "2020 - 2022",
      gpa: "97.1%",
      description: "Mathematics, Physics, and Chemistry (MPC) Stream"
    },
    {
      degree: "Secondary School (10th)",
      institution: "Narayana E-Techno School",
      university: "Board of Secondary Education, Andhra Pradesh",
      period: "2019 - 2020",
      gpa: "100%",
      description: "Perfect Score - School Topper"
    }
  ]

  const experience = [
    {
      id: 1,
      role: "Front End Developer Intern",
      company: "Coastal Seven Technologies Pvt Ltd",
      period: "Dec 2025 - Present",
      duration: "Currently Working",
      description: "Developing responsive web applications using React.js, Next.js, and modern frontend technologies. Contributing to UI/UX design implementation and performance optimization.",
      icon: <Code className="w-5 h-5" />,
      tech: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
      status: "current",
      highlightColor: "from-blue-500 to-cyan-400",
      achievements: [
        "Building responsive user interfaces with React components",
        "Implementing animations using Framer Motion",
        "Optimizing website performance and SEO"
      ],
      side: "right"
    },
    {
      id: 2,
      role: "AI/ML Intern",
      company: "SmartBridge Educational Services Pvt. Ltd.",
      period: "15th May 2025 - 15th July 2025",
      duration: "2 Months",
      description: "Worked on AI/ML projects including predictive modeling, natural language processing, and computer vision. Developed and deployed machine learning models for educational applications.",
      icon: <Brain className="w-5 h-5" />,
      tech: ["Python", "TensorFlow", "scikit-learn", "OpenCV", "NLP"],
      status: "completed",
      highlightColor: "from-purple-500 to-pink-400",
      achievements: [
        "Developed predictive models with 95% accuracy",
        "Implemented NLP solutions for text classification",
        "Created computer vision applications using OpenCV"
      ],
      side: "left"
    },
    {
      id: 3,
      role: "AI Azure Intern",
      company: "Edunet Foundation in collaboration with AICTE",
      period: "13th May 2025 - 13th June 2025",
      duration: "1 Month",
      description: "Implemented Azure AI services and cloud solutions. Gained hands-on experience with Microsoft Azure AI tools and machine learning services under industry experts.",
      icon: <Cloud className="w-5 h-5" />,
      tech: ["Azure ML", "Cognitive Services", "Azure Bot", "Python"],
      status: "completed",
      highlightColor: "from-blue-600 to-blue-400",
      achievements: [
        "Deployed ML models on Azure Machine Learning",
        "Integrated Cognitive Services for AI capabilities",
        "Built chatbot solutions using Azure Bot Service"
      ],
      side: "right"
    }
  ]

  const certifications = [
    {
      id: 1,
      name: "AI/ML Certification",
      issuer: "SmartBridge Educational Services",
      date: "July 2025",
      skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
      verification: "Verification ID: SBS-AIML-2025-789",
      description: "Comprehensive certification covering advanced machine learning concepts and practical implementations.",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      name: "AI Certification",
      issuer: "SmartBridge Educational Services",
      date: "June 2025",
      skills: ["Artificial Intelligence", "Neural Networks", "Reinforcement Learning"],
      verification: "Verification ID: SBS-AI-2025-456",
      description: "Fundamental to advanced AI concepts with hands-on project experience.",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Azure AI Engineer",
      issuer: "Edunet Foundation & AICTE",
      date: "June 2025",
      skills: ["Azure ML", "Cognitive Services", "AI Solutions", "Cloud AI"],
      verification: "Verification ID: EDUNET-AZAI-2025-123",
      description: "Microsoft Azure AI services implementation and deployment certification.",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-blue-600 to-blue-500"
    },
    {
      id: 4,
      name: "Infosys Springboard 6.0",
      issuer: "Infosys Limited",
      date: "April 2025",
      skills: ["AI Fundamentals", "Industry Projects", "Professional Skills"],
      verification: "Verification ID: INFY-SB-2025-012",
      description: "Industry-relevant AI training with real-world project experience.",
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    }
  ]

  const handleDownloadResume = () => {
    const resumeUrl = '/resume.pdf'
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Karthik_Reddy_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    const downloadToast = document.createElement('div')
    downloadToast.className = 'fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-bounce'
    downloadToast.textContent = 'Resume downloaded successfully!'
    document.body.appendChild(downloadToast)
    
    setTimeout(() => {
      document.body.removeChild(downloadToast)
    }, 3000)
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">About Me</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate AI/ML Engineer and Full Stack Developer with expertise in creating 
            intelligent systems and modern web applications.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="glass-effect rounded-3xl p-8 text-center sticky top-8">
              {/* Profile Photo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 p-1"
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-dark-950">
                  <img 
                    src="/image.jpg" 
                    alt="Karthik Reddy" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop"
                    }}
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-2">Karthik Reddy</h2>
                <p className="text-gray-400 mb-6">AI/ML Engineer & Front-End Developer</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary-400" />
                    <span className="text-gray-300">Vijayawada, India</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-400" />
                    <span className="text-gray-300">yaramalakarthikreddy000@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-400" />
                    <span className="text-gray-300">+91 81797 14149</span>
                  </div>
                </div>

                <div className="flex justify-center space-x-4 mb-8">
                  {[
                    { icon: <Github />, href: "#", label: "GitHub" },
                    { icon: <Linkedin />, href: "#", label: "LinkedIn" },
                    { icon: <Twitter />, href: "#", label: "Twitter" },
                    { icon: <Globe />, href: "#", label: "Portfolio" }
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-xl glass-effect hover:bg-white/10 transition-all duration-300"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>

                <motion.button
                  onClick={handleDownloadResume}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 transition-all duration-300 flex items-center justify-center space-x-2 font-bold cursor-pointer group"
                >
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <Download className="w-5 h-5" />
                  </motion.div>
                  <span>Download Resume</span>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </motion.button>
                
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block mt-4 text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm group"
                >
                  <span className="flex items-center justify-center space-x-1">
                    <span>View Resume in New Tab</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Education & Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-3xl p-8 mb-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap className="w-8 h-8 text-primary-400" />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-xl bg-dark-800/50 border border-white/5 hover:border-white/10 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <div className="flex items-center space-x-4 text-gray-400">
                        <span className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </span>
                        <motion.span 
                          className={`px-3 py-1 rounded-full ${edu.gpa === "100%" || edu.gpa === "97.1%" ? 'bg-green-900/30 text-green-400' : 'bg-primary-900/30 text-primary-400'}`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {edu.gpa.includes('%') ? 'Score: ' : 'CGPA: '}{edu.gpa}
                        </motion.span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-1">{edu.institution}</p>
                    {edu.university && (
                      <p className="text-gray-400 text-sm mb-2">{edu.university}</p>
                    )}
                    <p className="text-gray-400">{edu.description}</p>
                    {edu.gpa === "100%" && (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className="mt-2 inline-block px-3 py-1 rounded-full bg-yellow-900/30 text-yellow-400 text-sm"
                      >
                        🏆 School Topper
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience Timeline Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-effect rounded-3xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Briefcase className="w-8 h-8 text-primary-400" />
                <h2 className="text-2xl font-bold">Experience Timeline</h2>
              </div>

              {/* Timeline Container */}
              <div className="relative">
                {/* Central Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 hidden lg:block"></div>
                
                {/* Experience Items */}
                <div className="space-y-12">
                  {experience.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className={`relative flex flex-col lg:flex-row items-center ${
                        exp.side === 'left' ? 'lg:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Timeline Node */}
                      <motion.div
                        whileHover={{ scale: 1.3 }}
                        className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 flex items-center justify-center mb-4 lg:mb-0"
                      >
                        <Target className="w-4 h-4 text-white" />
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-600 to-accent-500"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0, 0.5]
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            delay: index * 0.3
                          }}
                        />
                      </motion.div>

                      {/* Experience Card */}
                      <div className={`lg:w-5/12 ${exp.side === 'left' ? 'lg:pr-8' : 'lg:pl-8'}`}>
                        <motion.div
                          onHoverStart={() => setHoveredExp(exp.id)}
                          onHoverEnd={() => setHoveredExp(null)}
                          whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                          className={`p-6 rounded-xl bg-dark-800/50 border border-white/5 hover:border-white/10 transition-all duration-300 ${
                            exp.status === 'current' ? 'ring-2 ring-blue-500/30' : ''
                          }`}
                        >
                          {/* Card Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 rounded-lg ${exp.status === 'current' ? 'bg-blue-900/30 text-blue-400' : 'bg-primary-900/30 text-primary-400'}`}>
                                {exp.icon}
                              </div>
                              <div>
                                <h3 className="text-xl font-bold">{exp.role}</h3>
                                <p className="text-gray-300">{exp.company}</p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="text-gray-400 text-sm flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{exp.period}</span>
                              </span>
                              {exp.status === "current" && (
                                <motion.span 
                                  className="mt-1 px-2 py-1 text-xs rounded-full bg-green-900/30 text-green-400"
                                  animate={{ 
                                    scale: [1, 1.1, 1],
                                    boxShadow: ['0 0 0 rgba(34, 197, 94, 0)', '0 0 10px rgba(34, 197, 94, 0.5)', '0 0 0 rgba(34, 197, 94, 0)']
                                  }}
                                  transition={{ repeat: Infinity, duration: 2 }}
                                >
                                  Current
                                </motion.span>
                              )}
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-400 mb-4">{exp.description}</p>

                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {exp.tech.map((tech, idx) => (
                              <motion.span
                                key={tech}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-sm border border-white/10"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>

                          {/* Hover Details */}
                          <AnimatePresence>
                            {hoveredExp === exp.id && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="pt-4 border-t border-white/10">
                                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Achievements:</h4>
                                  <ul className="space-y-1">
                                    {exp.achievements.map((achievement, idx) => (
                                      <motion.li 
                                        key={idx}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start space-x-2 text-gray-400 text-sm"
                                      >
                                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                        <span>{achievement}</span>
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Hover Indicator */}
                          <motion.div 
                            className="flex justify-center mt-3"
                            animate={{ 
                              y: hoveredExp === exp.id ? 0 : 5,
                              opacity: hoveredExp === exp.id ? 0 : 0.5
                            }}
                          >
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Empty Space for Alternating Layout */}
                      <div className="lg:w-5/12 hidden lg:block"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Award className="w-8 h-8 text-primary-400" />
            <h2 className="text-2xl font-bold">Certifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence>
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  onClick={() => setExpandedCert(expandedCert === cert.id ? null : cert.id)}
                  className="cursor-pointer"
                >
                  <div className={`p-6 rounded-xl bg-gradient-to-br ${cert.color} border border-white/10 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}>
                    {/* Animated Background Effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{
                        x: ['-100%', '200%']
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear",
                        delay: index * 0.2
                      }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-white/20">
                            {cert.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                            <p className="text-gray-200 text-sm">{cert.issuer}</p>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedCert === cert.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-white/60" />
                        </motion.div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white/80 text-sm">Issued: {cert.date}</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-white/20 text-white">
                          Verified
                        </span>
                      </div>
                      
                      <AnimatePresence>
                        {expandedCert === cert.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-white/20">
                              <p className="text-white/90 mb-4">{cert.description}</p>
                              
                              <div className="mb-4">
                                <h4 className="text-sm font-semibold text-white mb-2">Skills Acquired:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {cert.skills.map((skill, idx) => (
                                    <motion.span
                                      key={skill}
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ delay: idx * 0.05 }}
                                      className="px-2 py-1 rounded bg-white/10 text-white text-xs"
                                    >
                                      {skill}
                                    </motion.span>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="text-xs text-white/70">
                                <p>Verification: {cert.verification}</p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center space-x-1 text-white/70 text-sm">
                          <CheckCircle className="w-4 h-4" />
                          <span>Completed</span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-1 rounded-full bg-white/20 text-white text-sm hover:bg-white/30 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation()
                            // Handle view certificate
                          }}
                        >
                          View Credential
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About