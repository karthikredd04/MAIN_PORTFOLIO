import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ExternalLink, Github, Eye, Filter, 
  Brain, Code2, Cpu, ArrowUpRight,
  Users, GraduationCap, Heart, 
  Palette, Sparkles, Target, Zap,
  CheckCircle, Clock, MapPin, Smartphone
} from 'lucide-react'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: "Grain Palette Detection System",
      subtitle: "MobileNetV4 Object Detection",
      description: "Real-time AI-powered object detection system for identifying grain palettes using MobileNetV4 architecture. Optimized for mobile deployment with high accuracy and low latency.",
      category: "ai-ml",
      tags: ["Computer Vision", "MobileNetV4", "TensorFlow", "OpenCV", "Python"],
      image: "/grain.jpg", // Your grain detection image
      images: ["/grain.jpg"], // Multiple images if available
      icon: <Palette className="w-6 h-6" />,
      liveLink: "#",
      githubLink: "#",
      status: "completed",
      technologies: ["TensorFlow 2.x", "MobileNetV4", "OpenCV", "Python", "Numpy", "Flask"],
      features: [
        "Real-time grain detection with 95% accuracy",
        "Mobile-optimized lightweight model",
        "Low latency processing (<100ms)",
        "Cross-platform compatibility"
      ],
      challenges: [
        "Optimizing for mobile device constraints",
        "Handling varying lighting conditions",
        "Real-time processing requirements"
      ],
      metrics: {
        accuracy: "95%",
        speed: "100ms",
        efficiency: "90%",
        deployment: "Mobile"
      },
      animationType: "grain"
    },
    {
      id: 2,
      title: "Student Mental Health Monitor",
      subtitle: "Depression Detection using ML",
      description: "Machine learning system for early detection of depression symptoms in students using behavioral analysis and sentiment processing. Focused on privacy and ethical AI practices.",
      category: "ai-ml",
      tags: ["Machine Learning", "NLP", "Healthcare", "Privacy", "Python"],
      image: "/student.jpg", // Your student depression detection image
      images: ["/student.jpg"],
      icon: <Heart className="w-6 h-6" />,
      liveLink: "#",
      githubLink: "#",
      status: "completed",
      technologies: ["Scikit-learn", "NLTK", "Pandas", "Flask", "Python", "Jupyter"],
      features: [
        "Behavioral pattern analysis",
        "Sentiment analysis integration",
        "Early warning system",
        "Privacy-preserving design"
      ],
      challenges: [
        "Ensuring data privacy and ethics",
        "Handling sensitive information",
        "Achieving high accuracy with limited data"
      ],
      metrics: {
        accuracy: "85%",
        speed: "Real-time",
        efficiency: "88%",
        impact: "High"
      },
      animationType: "heartbeat"
    },
    {
      id: 3,
      title: "Community Fridge Network",
      subtitle: "Food Sharing Platform",
      description: "Full-stack web application connecting communities to reduce food waste. Features real-time inventory tracking, geolocation services, and smart donor-receiver matching.",
      category: "web",
      tags: ["React", "Node.js", "MongoDB", "Google Maps", "Full-stack"],
      image: "/fridge.jpg", // Your community fridge image
      images: ["/fridge.jpg"],
      icon: <Users className="w-6 h-6" />,
      liveLink: "#",
      githubLink: "#",
      status: "completed",
      technologies: ["React.js", "Node.js", "MongoDB", "Google Maps API", "Firebase", "Tailwind"],
      features: [
        "Real-time inventory management",
        "Location-based matching system",
        "Volunteer coordination dashboard",
        "Donation analytics"
      ],
      challenges: [
        "Real-time data synchronization",
        "Scalability for large user base",
        "Geolocation accuracy optimization"
      ],
      metrics: {
        users: "1000+",
        impact: "30% waste reduction",
        coverage: "City-wide",
        uptime: "99.9%"
      },
      animationType: "community"
    },
    {
      id: 4,
      title: "Assessment Agent",
      subtitle: "AI-Powered Evaluation Platform",
      description: "Interactive assessment platform with AI-generated questions and real-time evaluation. Currently developing frontend with advanced UI/UX and interactive features.",
      category: "web",
      tags: ["Next.js", "TypeScript", "AI Integration", "Real-time", "Frontend"],
      image: "/evaluate.jpg", // Your assessment agent image
      images: ["/evaluate.jpg"],
      icon: <GraduationCap className="w-6 h-6" />,
      liveLink: "#",
      githubLink: "#",
      status: "current",
      technologies: ["Next.js 14", "TypeScript", "AI APIs", "WebSockets", "Prisma", "Tailwind"],
      features: [
        "AI-generated adaptive assessments",
        "Real-time evaluation and feedback",
        "Interactive question types",
        "Progress analytics dashboard"
      ],
      challenges: [
        "Real-time WebSocket implementation",
        "AI response optimization",
        "Scalable question generation"
      ],
      metrics: {
        performance: "Optimizing",
        scalability: "High",
        accuracy: "In Progress",
        innovation: "Cutting-edge"
      },
      animationType: "assessment"
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects', icon: <Sparkles className="w-4 h-4" />, count: 4 },
    { id: 'ai-ml', label: 'AI/ML', icon: <Brain className="w-4 h-4" />, count: 2 },
    { id: 'web', label: 'Web Dev', icon: <Code2 className="w-4 h-4" />, count: 2 },
    { id: 'current', label: 'Active', icon: <Zap className="w-4 h-4" />, count: 1 }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        filter === 'current' ? project.status === 'current' : project.category === filter
      )

  // Enhanced Animation Components
  const GrainAnimation = ({ projectId }) => (
    <motion.div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Moving grain particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-amber-400/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            scale: [0.5, 1, 0.5],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </motion.div>
  )

  const HeartbeatAnimation = ({ projectId }) => (
    <motion.div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      {/* Pulsing circles */}
      <motion.div
        className="absolute w-32 h-32 rounded-full border-2 border-blue-400/30"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute w-24 h-24 rounded-full border-2 border-blue-400/40"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.4, 0, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.5,
        }}
      />
      {/* Heartbeat line */}
      <svg className="absolute w-48 h-24" viewBox="0 0 100 50">
        <motion.path
          d="M0,25 Q20,10 40,25 T80,25 Q100,40 100,25"
          fill="none"
          stroke="rgba(59, 130, 246, 0.3)"
          strokeWidth="2"
          animate={{
            pathLength: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </svg>
    </motion.div>
  )

  const CommunityAnimation = ({ projectId }) => (
    <motion.div className="absolute inset-0 pointer-events-none">
      {/* Connecting nodes animation */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full bg-green-400/20"
          style={{
            left: `${20 + (i % 4) * 20}%`,
            top: `${20 + Math.floor(i / 4) * 20}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.line
          x1="20%" y1="20%" x2="40%" y2="20%"
          stroke="rgba(34, 197, 94, 0.2)"
          strokeWidth="1"
          animate={{
            strokeDasharray: ["0, 100", "100, 0", "0, 100"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      </svg>
    </motion.div>
  )

  const AssessmentAnimation = ({ projectId }) => (
    <motion.div className="absolute inset-0 pointer-events-none">
      {/* Floating cards */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-10 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20"
          style={{
            left: `${10 + (i * 15)}%`,
            top: `${30 + Math.sin(i) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
      {/* Pulsing checkmarks */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <CheckCircle className="w-12 h-12 text-purple-400/30" />
      </motion.div>
    </motion.div>
  )

  const renderAnimation = (type, projectId) => {
    switch(type) {
      case 'grain': return <GrainAnimation projectId={projectId} />
      case 'heartbeat': return <HeartbeatAnimation projectId={projectId} />
      case 'community': return <CommunityAnimation projectId={projectId} />
      case 'assessment': return <AssessmentAnimation projectId={projectId} />
      default: return null
    }
  }

  const ProjectDetailModal = ({ project, onClose }) => (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ 
              type: "spring", 
              damping: 25,
              stiffness: 200 
            }}
            className="glass-effect rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header with Project Image */}
            <div className="relative h-80 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent" />
              
              {/* Project Icon Animation */}
              <motion.div
                className="absolute top-8 left-8 p-4 rounded-2xl glass-effect backdrop-blur-lg"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {project.icon}
              </motion.div>
              
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-6 right-6 p-3 rounded-full glass-effect hover:bg-white/20 backdrop-blur-lg"
              >
                <ArrowUpRight className="w-6 h-6 rotate-45" />
              </motion.button>
              
              {/* Title and Status */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between">
                  <div>
                    <h2 className="text-4xl font-bold mb-2">{project.title}</h2>
                    <p className="text-xl text-gray-300">{project.subtitle}</p>
                  </div>
                  <div className="flex items-center space-x-3 mt-4 md:mt-0">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      project.status === 'current' 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                        : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                    }`}>
                      {project.status === 'current' ? '🚀 Active Development' : '✅ Completed'}
                    </span>
                    <span className="px-4 py-2 rounded-full glass-effect text-sm">
                      {project.category === 'ai-ml' ? '🤖 AI/ML Project' : '🌐 Web Development'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-full glass-effect border border-white/10 text-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Target className="w-6 h-6 mr-2 text-primary-400" />
                      Project Overview
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Sparkles className="w-6 h-6 mr-2 text-primary-400" />
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <motion.li 
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-3 p-3 rounded-lg glass-effect hover:bg-white/5 transition-all"
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Performance Metrics */}
                  <div className="glass-effect rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                      <Zap className="w-6 h-6 mr-2 text-primary-400" />
                      Performance Metrics
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(project.metrics).map(([key, value], idx) => (
                        <motion.div
                          key={key}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="text-center p-4 rounded-xl bg-white/5"
                        >
                          <div className="text-2xl font-bold gradient-text mb-1">{value}</div>
                          <div className="text-gray-400 text-sm capitalize">{key.replace('_', ' ')}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Code2 className="w-6 h-6 mr-2 text-primary-400" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.1, y: -3 }}
                          className="px-4 py-2 rounded-lg glass-effect border border-white/10 text-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <motion.a
                      href={project.githubLink}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl glass-effect hover:bg-white/10 border border-white/10"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Source Code</span>
                    </motion.a>
                    <motion.a
                      href={project.liveLink}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">My Projects</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative solutions that blend cutting-edge technology with real-world impact
          </p>
        </motion.div>

        {/* Interactive Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((filterItem) => {
            const count = filterItem.count;
            const isActive = filter === filterItem.id;
            
            return (
              <motion.button
                key={filterItem.id}
                onClick={() => setFilter(filterItem.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-xl'
                    : 'glass-effect text-gray-400 hover:bg-white/10'
                }`}
              >
                {/* Background Animation */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-500/20"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%']
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "linear"
                    }}
                  />
                )}
                
                <div className="relative z-10 flex items-center space-x-2">
                  {filterItem.icon}
                  <span className="font-medium">{filterItem.label}</span>
                  <motion.span 
                    className={`px-2 py-1 text-xs rounded-full ${
                      isActive 
                        ? 'bg-white/20' 
                        : 'bg-white/10'
                    }`}
                    animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {count}
                  </motion.span>
                </div>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100 
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="glass-effect rounded-3xl overflow-hidden h-full border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-2xl">
                {/* Project Image Container */}
                <div className="relative h-64 overflow-hidden">
                  {/* Background Image */}
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={hoveredProject === project.id ? { scale: 1.05 } : { scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-transparent" />
                  
                  {/* Animated Project Icon */}
                  <motion.div
                    className={`absolute top-6 left-6 p-3 rounded-2xl ${
                      project.category === 'ai-ml' 
                        ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20' 
                        : 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20'
                    } backdrop-blur-lg`}
                    animate={hoveredProject === project.id ? { 
                      rotate: 360,
                      scale: 1.2
                    } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    {project.icon}
                  </motion.div>
                  
                  {/* Status Badge */}
                  <motion.div
                    className="absolute top-6 right-6"
                    animate={hoveredProject === project.id ? { y: -5 } : {}}
                  >
                    <span className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg ${
                      project.status === 'current' 
                        ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-400/30' 
                        : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-400/30'
                    }`}>
                      {project.status === 'current' ? '🚀 Active' : '✅ Completed'}
                    </span>
                  </motion.div>
                  
                  {/* Category Animation */}
                  {renderAnimation(project.animationType, project.id)}
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-1"
                      animate={hoveredProject === project.id ? { x: 5 } : {}}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-gray-300 text-sm">{project.subtitle}</p>
                  </div>
                  
                  {/* View Details Indicator */}
                  <motion.div
                    className="absolute bottom-6 right-6"
                    animate={hoveredProject === project.id ? { 
                      scale: 1.2,
                      rotate: 45 
                    } : {}}
                  >
                    <ArrowUpRight className="w-6 h-6 text-white/60" />
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Description */}
                  <p className="text-gray-400 mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <motion.span
                        key={tag}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1.5 text-xs rounded-full glass-effect border border-white/10"
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1.5 text-xs rounded-full glass-effect">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Bottom Section */}
                  <div className="flex items-center justify-between">
                    {/* Quick Info */}
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Code2 className="w-4 h-4" />
                        <span>{project.technologies.length} tech</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Sparkles className="w-4 h-4" />
                        <span>{project.features.length} features</span>
                      </span>
                    </div>

                    {/* View Button */}
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg glass-effect hover:bg-white/10 text-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      <Eye className="w-4 h-4" />
                      <span>Explore Project</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  )
}

export default Projects