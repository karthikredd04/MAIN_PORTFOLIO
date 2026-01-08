import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Brain,
  Code2,
  Database,
  Cpu,
  Sparkles,
  Zap,
  ChevronRight,
  CheckCircle,
  Layers,
  Server
} from 'lucide-react'

const TechStack = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null)

  const techSkills = [
    {
      category: 'AI & Machine Learning',
      icon: <Brain className="w-10 h-10" />,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-red-500/20 to-pink-500/20',
      skills: [
        'Deep Learning',
        'Computer Vision',
        'Natural Language Processing',
        'Reinforcement Learning',
        'Neural Networks',
        'TensorFlow/PyTorch'
      ]
    },
    {
      category: 'Frontend Development',
      icon: <Code2 className="w-10 h-10" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
      skills: [
        'React.js',
        'JavaScript/TypeScript',
        'Tailwind CSS',
        'Responsive Design',
        'Next.js',
        'Interactive Dsesign'
      ]
    },
    {
      category: 'Backend & Database',
      icon: <Database className="w-10 h-10" />,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20',
      skills: [
        'Node.js',
        'Python',
        'MySQL/MongoDB',
        'REST APIs',
        'Express.js',
      ]
    },
    {
      category: 'Core Computer Science',
      icon: <Cpu className="w-10 h-10" />,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-gradient-to-br from-purple-500/20 to-violet-500/20',
      skills: [
        'Data Structures',
        'Algorithms',
        'System Design',
        'Operating Systems',
        'Computer Networks',
        'Software Engineering'
      ]
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">Technical Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Tech Stack & Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Core technologies and skills that drive my development process
          </p>
        </motion.div>

        {/* Skills Grid - 4 columns for medium+ screens, 2 for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {techSkills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group relative"
            >
              {/* Main Card */}
              <div className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary-400 transition-colors duration-300">
                      {category.category}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-gray-400">Active Skills</span>
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 group/item"
                    >
                      <div className={`p-1 rounded-full ${category.bgColor} group-hover/item:scale-125 transition-transform duration-300`}>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm group-hover/item:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Indicator */}
                {hoveredCategory === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute top-4 right-4"
                  >
                    <ChevronRight className="w-5 h-5 text-primary-400 animate-pulse" />
                  </motion.div>
                )}

                {/* Hover Background Effect */}
                <div className={`absolute inset-0 ${category.bgColor} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            {
              title: 'AI-First Approach',
              description: 'Integrating intelligence into every layer of application',
              icon: <Brain className="w-6 h-6" />,
              color: 'text-red-400'
            },
            {
              title: 'Clean Code',
              description: 'Maintainable, scalable, and well-documented solutions',
              icon: <Code2 className="w-6 h-6" />,
              color: 'text-blue-400'
            },
            {
              title: 'Performance Focused',
              description: 'Optimized solutions for speed and efficiency',
              icon: <Zap className="w-6 h-6" />,
              color: 'text-yellow-400'
            }
          ].map((item, index) => (
            <div
              key={item.title}
              className="glass-effect rounded-xl p-5 text-center hover:bg-white/5 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-lg bg-dark-800 mb-4 ${item.color}`}>
                {item.icon}
              </div>
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Tech Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Layers className="w-6 h-6 text-primary-400" />
            <span className="text-lg font-semibold text-gray-300">Development Philosophy</span>
            <Layers className="w-6 h-6 text-primary-400" />
          </div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            I combine <span className="text-primary-400 font-semibold">AI/ML expertise</span> with{' '}
            <span className="text-accent-400 font-semibold">modern web development</span> to create intelligent 
            applications. My focus is on building solutions that are not just functional, but{' '}
            <span className="text-secondary-400 font-semibold">intelligent, scalable, and user-friendly</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack