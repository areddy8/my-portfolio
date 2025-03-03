import React from "react";
import { motion } from "framer-motion";

// Skills data with proficiency levels
const skills = [
  { name: "Data Science", level: 90, color: "bg-blue-500" },
  { name: "Machine Learning", level: 85, color: "bg-purple-600" },
  { name: "React", level: 80, color: "bg-cyan-500" },
  { name: "Python", level: 95, color: "bg-yellow-500" },
  { name: "Data Visualization", level: 88, color: "bg-green-500" },
  { name: "UI/UX Design", level: 75, color: "bg-pink-500" },
];

// Timeline data
const timeline = [
  {
    year: "2023",
    title: "Senior Data Scientist",
    company: "Tech Innovations Inc.",
    description: "Leading AI initiatives and developing predictive models for business intelligence."
  },
  {
    year: "2021",
    title: "Data Scientist",
    company: "DataDriven Solutions",
    description: "Implemented machine learning algorithms to optimize customer segmentation and product recommendations."
  },
  {
    year: "2019",
    title: "Data Analyst",
    company: "Analytics Pro",
    description: "Analyzed large datasets to extract actionable insights for strategic decision-making."
  },
  {
    year: "2018",
    title: "MSc in Data Science",
    company: "University of Technology",
    description: "Graduated with honors, specializing in machine learning and statistical analysis."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Animated Particles Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 40 + 10}px`,
                height: `${Math.random() * 40 + 10}px`,
                backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Header Section */}
        <motion.div 
          className="text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 inline-block mb-4">
            About Me
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about transforming data into meaningful insights and creating impactful solutions
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Bio and Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative mb-8 group">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <img 
                src="/images/cool.png" 
                alt="Profile" 
                className="relative w-64 h-64 object-cover rounded-3xl border-2 border-white/20"
              />
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50 w-full">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </span>
                Who I Am
              </h2>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                A <span className="text-blue-400 font-semibold">data scientist</span> and <span className="text-purple-400 font-semibold">machine learning engineer</span> with a passion for solving complex problems through data-driven approaches.
              </p>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                I specialize in developing <span className="text-green-400 font-semibold">AI-powered solutions</span> that transform raw data into actionable insights, helping businesses make informed decisions.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding or analyzing data, you'll find me <span className="text-yellow-400 font-semibold">biohacking</span>, exploring the latest tech trends, or playing with my energetic husky.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-4 w-full mt-6">
              <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700/50 flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Email</div>
                  <div className="text-sm">akhil@example.com</div>
                </div>
              </div>
              <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700/50 flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Location</div>
                  <div className="text-sm">San Francisco, CA</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills and Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Skills Section */}
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </span>
                Skills & Expertise
              </h2>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    transition={{ duration: 1, delay: 0.6 + (index * 0.1) }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.8 + (index * 0.1) }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Timeline Section */}
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </span>
                Experience Timeline
              </h2>
              
              <div className="relative pl-8 border-l-2 border-gray-700 space-y-8">
                {timeline.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 + (index * 0.2) }}
                  >
                    <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-2 border-gray-700 bg-gray-900"></div>
                    <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transform scale-[0.2] animate-ping"></div>
                    <time className="text-xs tracking-wide uppercase text-gray-400">{item.year}</time>
                    <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                    <h4 className="text-sm text-purple-400 mb-2">{item.company}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Quote Section */}
        <motion.div 
          className="mt-16 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="text-5xl text-gray-700 mb-4">"</div>
          <p className="text-xl md:text-2xl text-gray-300 italic max-w-3xl mx-auto">
            The goal is to turn data into information, and information into insight.
          </p>
          <p className="mt-4 text-gray-400">— Carly Fiorina</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
