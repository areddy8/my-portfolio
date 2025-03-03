import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area
} from "recharts";

// Project data with additional metrics for visualizations
const projects = [
  {
    id: 1,
    title: "NBA Stats Dashboard",
    description: "A dynamic dashboard displaying real-time NBA player stats with interactive filtering and comparison tools.",
    technologies: ["React", "D3.js", "NBA API", "TailwindCSS"],
    category: "Data Visualization",
    completionPercentage: 95,
    timeline: [
      { month: "Jan", hours: 20 },
      { month: "Feb", hours: 45 },
      { month: "Mar", hours: 30 },
      { month: "Apr", hours: 15 },
    ],
    impact: { users: 1200, stars: 45, forks: 12 },
    link: "#",
    image: "https://images.unsplash.com/photo-1518407613690-d9fc990e795f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  },
  {
    id: 2,
    title: "Crypto Price Tracker",
    description: "Track real-time cryptocurrency prices with historical data analysis and predictive modeling.",
    technologies: ["React", "Chart.js", "Crypto API", "Firebase"],
    category: "Finance",
    completionPercentage: 80,
    timeline: [
      { month: "Feb", hours: 15 },
      { month: "Mar", hours: 35 },
      { month: "Apr", hours: 40 },
      { month: "May", hours: 25 },
    ],
    impact: { users: 850, stars: 32, forks: 8 },
    link: "#",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my projects, skills, and professional journey with interactive elements.",
    technologies: ["React", "Framer Motion", "TailwindCSS", "Vite"],
    category: "Web Development",
    completionPercentage: 100,
    timeline: [
      { month: "Mar", hours: 10 },
      { month: "Apr", hours: 25 },
      { month: "May", hours: 20 },
    ],
    impact: { users: 500, stars: 18, forks: 5 },
    link: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"
  },
  {
    id: 4,
    title: "AI Image Generator",
    description: "A web application that uses machine learning to generate unique images based on text prompts.",
    technologies: ["Python", "TensorFlow", "React", "Flask"],
    category: "AI/ML",
    completionPercentage: 75,
    timeline: [
      { month: "Jan", hours: 5 },
      { month: "Feb", hours: 30 },
      { month: "Mar", hours: 40 },
      { month: "Apr", hours: 35 },
      { month: "May", hours: 20 },
    ],
    impact: { users: 320, stars: 28, forks: 7 },
    link: "#",
    image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80"
  }
];

// Data for technology distribution chart
const techData = [
  { name: "React", value: 4 },
  { name: "TailwindCSS", value: 2 },
  { name: "Python", value: 1 },
  { name: "D3.js", value: 1 },
  { name: "Firebase", value: 1 },
  { name: "TensorFlow", value: 1 },
];

// Colors for pie chart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  // Filter projects by category
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-10 px-4 md:px-10">
          <motion.div
        initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-center mb-2">My Projects</h1>
        <p className="text-xl text-gray-400 text-center mb-10">Explore my work and the impact it's made</p>
        
        {/* Project Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button 
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full transition-all ${activeTab === "all" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setActiveTab("data visualization")}
            className={`px-4 py-2 rounded-full transition-all ${activeTab === "data visualization" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
          >
            Data Visualization
          </button>
          <button 
            onClick={() => setActiveTab("web development")}
            className={`px-4 py-2 rounded-full transition-all ${activeTab === "web development" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
          >
            Web Development
          </button>
          <button 
            onClick={() => setActiveTab("finance")}
            className={`px-4 py-2 rounded-full transition-all ${activeTab === "finance" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
          >
            Finance
          </button>
          <button 
            onClick={() => setActiveTab("ai/ml")}
            className={`px-4 py-2 rounded-full transition-all ${activeTab === "ai/ml" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
          >
            AI/ML
          </button>
        </div>
        
        {/* Data Visualization Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 bg-gray-800/50 p-6 rounded-xl">
          <div>
            <h2 className="text-2xl font-bold mb-4">Technology Distribution</h2>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={techData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {techData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Project Completion Status</h2>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={projects}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="title" tick={{ fill: '#ddd' }} />
                  <YAxis tick={{ fill: '#ddd' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#333', border: 'none' }}
                    formatter={(value) => [`${value}%`, 'Completion']}
                  />
                  <Bar dataKey="completionPercentage" name="Completion %" fill="#00C49F" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-800/70 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-900/30 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-600/30 text-blue-300 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                {/* Progress bar */}
                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${project.completionPercentage}%` }}
                  ></div>
                </div>
                
                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
            <a
              href={project.link}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Selected Project Details */}
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Development Timeline</h3>
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={selectedProject.timeline}
                          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                          <XAxis dataKey="month" tick={{ fill: '#ddd' }} />
                          <YAxis tick={{ fill: '#ddd' }} />
                          <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
                          <Area type="monotone" dataKey="hours" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Project Impact</h3>
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={[
                            { name: 'Users', value: selectedProject.impact.users },
                            { name: 'Stars', value: selectedProject.impact.stars },
                            { name: 'Forks', value: selectedProject.impact.forks }
                          ]}
                          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                          <XAxis dataKey="name" tick={{ fill: '#ddd' }} />
                          <YAxis tick={{ fill: '#ddd' }} />
                          <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
                          <Bar dataKey="value" fill="#00C49F" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-sm px-3 py-1 bg-gray-700 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={selectedProject.link}
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Projects;
