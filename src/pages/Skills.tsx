
import { motion } from 'framer-motion';
import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = {
    languages: {
      title: 'Programming Languages',
      color: 'from-teal-400 to-teal-600',
      skills: [
        { name: 'JavaScript', level: 90, description: 'ES6+, DOM manipulation, async programming' },
        { name: 'Java', level: 85, description: 'OOP, Spring Boot, enterprise applications' },
        { name: 'SQL', level: 80, description: 'Complex queries, database optimization' },
        { name: 'HTML', level: 95, description: 'Semantic markup, accessibility standards' },
        { name: 'CSS', level: 90, description: 'Flexbox, Grid, animations, responsive design' },
        { name: 'Python', level: 75, description: 'Data analysis, automation, AI/ML basics' }
      ]
    },
    frameworks: {
      title: 'Frameworks & Libraries',
      color: 'from-purple-400 to-purple-600',
      skills: [
        { name: 'React.js', level: 90, description: 'Hooks, Context API, component architecture' },
        { name: 'Node.js', level: 85, description: 'Express.js, API development, middleware' },
        { name: 'Express.js', level: 80, description: 'RESTful APIs, routing, authentication' },
        { name: 'Bootstrap', level: 85, description: 'Responsive grids, component library' },
        { name: 'Tailwind CSS', level: 90, description: 'Utility-first, custom design systems' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      color: 'from-cyan-400 to-cyan-600',
      skills: [
        { name: 'GitHub', level: 90, description: 'Version control, collaboration, CI/CD' },
        { name: 'Docker', level: 75, description: 'Containerization, deployment automation' },
        { name: 'Postman', level: 85, description: 'API testing, documentation, automation' },
        { name: 'VS Code', level: 95, description: 'Extensions, debugging, productivity tools' },
        { name: 'Git', level: 85, description: 'Branching, merging, conflict resolution' }
      ]
    },
    databases: {
      title: 'Databases',
      color: 'from-green-400 to-green-600',
      skills: [
        { name: 'MongoDB', level: 85, description: 'NoSQL, aggregation pipelines, indexing' },
        { name: 'PostgreSQL', level: 80, description: 'Advanced SQL, performance tuning' },
        { name: 'MySQL', level: 85, description: 'Relational design, stored procedures' },
        { name: 'Firebase', level: 75, description: 'Real-time database, authentication' }
      ]
    }
  };

  const getGradientClass = (color: string) => {
    return `bg-gradient-to-r ${color}`;
  };

  return (
    <div className="min-h-screen pt-20 px-6" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-orbitron">
            <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent opacity-90">
              Skills & Expertise
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto rounded opacity-80"></div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 font-inter ${
                activeCategory === key
                  ? `${getGradientClass(category.color)} text-black shadow-lg`
                  : 'glass-effect text-white hover:text-teal-400 border border-gray-600'
              }`}
              style={{
                boxShadow: activeCategory === key ? '0 0 20px rgba(0, 206, 209, 0.4)' : 'none'
              }}
            >
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-effect p-8 rounded-2xl backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(15, 15, 15, 0.8)' }}
        >
          <h2 className={`text-3xl font-bold mb-8 text-center font-orbitron bg-gradient-to-r ${skillCategories[activeCategory].color} bg-clip-text text-transparent`}>
            {skillCategories[activeCategory].title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div 
                  className={`p-6 rounded-xl transition-all duration-300 border-2 ${
                    hoveredSkill === skill.name 
                      ? 'border-teal-400 shadow-lg' 
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                  style={{
                    backgroundColor: 'rgba(15, 15, 15, 0.9)',
                    boxShadow: hoveredSkill === skill.name 
                      ? '0 0 30px rgba(0, 206, 209, 0.3)' 
                      : '0 4px 6px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white font-semibold text-lg font-inter">{skill.name}</span>
                    <span className={`text-lg font-bold bg-gradient-to-r ${skillCategories[activeCategory].color} bg-clip-text text-transparent`}>
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Skill Bar */}
                  <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                      className={`h-full ${getGradientClass(skillCategories[activeCategory].color)} rounded-full relative`}
                      style={{
                        boxShadow: `0 0 15px rgba(0, 206, 209, 0.4)`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </motion.div>
                  </div>

                  {/* Description - Always visible, enhanced on hover */}
                  <motion.p
                    className={`text-sm transition-all duration-300 font-inter ${
                      hoveredSkill === skill.name 
                        ? 'text-gray-200 opacity-100' 
                        : 'text-gray-400 opacity-80'
                    }`}
                  >
                    {skill.description}
                  </motion.p>

                  {/* Hover Glow Effect */}
                  {hoveredSkill === skill.name && (
                    <div 
                      className="absolute inset-0 rounded-xl pointer-events-none opacity-20"
                      style={{
                        background: `linear-gradient(135deg, rgba(0, 206, 209, 0.1), rgba(138, 43, 226, 0.1))`
                      }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="glass-effect p-6 rounded-2xl text-center border border-gray-700 hover:border-teal-400 transition-all duration-300">
            <h3 className="text-xl font-bold text-teal-400 mb-4 font-orbitron">Problem Solving</h3>
            <p className="text-gray-300 font-inter">
              Strong analytical thinking and debugging skills with experience in algorithmic challenges
            </p>
          </div>
          <div className="glass-effect p-6 rounded-2xl text-center border border-gray-700 hover:border-purple-400 transition-all duration-300">
            <h3 className="text-xl font-bold text-purple-400 mb-4 font-orbitron">Team Collaboration</h3>
            <p className="text-gray-300 font-inter">
              Excellent communication skills and experience working in agile development environments
            </p>
          </div>
          <div className="glass-effect p-6 rounded-2xl text-center border border-gray-700 hover:border-cyan-400 transition-all duration-300">
            <h3 className="text-xl font-bold text-cyan-400 mb-4 font-orbitron">Continuous Learning</h3>
            <p className="text-gray-300 font-inter">
              Passionate about staying updated with latest technologies and best practices
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
