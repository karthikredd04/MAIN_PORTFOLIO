import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ThreeDScene from '../components/ThreeDScene'
import TechStack from '../components/TechStack'
import { ArrowDown, Brain, Code2, Sparkles, Zap, Target, Cpu, Layout, Palette, Smartphone } from 'lucide-react'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="overflow-hidden">
      {/* Hero Section with 3D */}
      <section className="relative h-screen overflow-hidden">
        <ThreeDScene />
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium">AI & Front-End Specialist</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-8xl font-bold mb-6"
              >
                <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  Yaramala Karthik Reddy  
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-2xl md:text-4xl font-semibold mb-6 text-gray-300"
              >
                <span className="inline-flex items-center gap-2">
                  <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
                  AI/ML Engineer & Front-End Developer
                  <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                Building intelligent interfaces where <span className="text-primary-400 font-semibold">Artificial Intelligence</span> 
                meets <span className="text-accent-400 font-semibold">Modern Web Development</span> to create exceptional user experiences.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  onClick={() => navigate('/projects')}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-full bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 hover:from-primary-700 hover:via-accent-600 hover:to-secondary-600 transition-all duration-300 font-bold text-lg group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Target className="w-5 h-5" />
                    View Projects
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-700 via-accent-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
                
                <motion.button
                  onClick={() => navigate('/contact')}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-full glass-effect hover:bg-white/10 border border-white/20 hover:border-white/30 transition-all duration-300 font-bold text-lg group"
                >
                  <span className="flex items-center gap-3">
                    <Code2 className="w-5 h-5" />
                    Contact Me
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-500">Scroll</span>
            <ArrowDown className="w-6 h-6 text-gray-400 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Expertise Highlights - UPDATED */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30">
                <span className="text-primary-400 font-semibold">Core Expertise</span>
              </div>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Specialized Focus
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Deep expertise in AI/ML and modern front-end development
            </p>
          </motion.div>

          {/* UPDATED: Only 2 expertise areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Brain className="w-20 h-20" />,
                title: 'AI/ML Engineering',
                description: 'Developing intelligent systems with deep learning, computer vision, and predictive analytics. Specialized in creating AI models that solve real-world problems.',
                color: 'from-red-500 to-pink-500',
                glow: 'shadow-lg shadow-red-500/20',
                delay: 0,
                skills: ['Deep Learning', 'Computer Vision', 'NLP', 'Predictive Models']
              },
              {
                icon: <Code2 className="w-20 h-20" />,
                title: 'Front-End Development',
                description: 'Building responsive, interactive web applications with modern frameworks. Creating seamless user experiences with clean code and best practices.',
                color: 'from-blue-500 to-cyan-500',
                glow: 'shadow-lg shadow-blue-500/20',
                delay: 0.1,
                skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design']
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: item.delay }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}
                className={`group relative p-8 rounded-3xl glass-effect border border-white/10 hover:border-white/20 transition-all duration-300 ${item.glow}`}
              >
                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>
                
                <div className={`relative inline-flex p-6 rounded-2xl bg-gradient-to-br ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed mb-6">
                  {item.description}
                </p>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.skills.map((skill, idx) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 text-sm rounded-full bg-dark-800/50 text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Learn More Link */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-primary-400 font-medium flex items-center gap-2">
                    Explore {item.title.split(' ')[0]} Projects
                    <ArrowDown className="w-4 h-4 rotate-90" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Expertise Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-3xl glass-effect max-w-4xl mx-auto"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Hybrid Expertise</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I bridge the gap between <span className="text-primary-400 font-semibold">AI/ML engineering</span> and{' '}
                <span className="text-accent-400 font-semibold">front-end development</span>. By combining intelligent algorithms 
                with intuitive interfaces, I create solutions that are both powerful and user-friendly.
              </p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <p className="text-gray-400 text-lg mb-8">
              Ready to build something intelligent and beautiful?
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="px-12 py-4 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 transition-all duration-300 font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/30"
            >
              Let's Collaborate
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home