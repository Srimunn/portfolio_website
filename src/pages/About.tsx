
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Award, Code, Users } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "K.S.Rangasamy College of Technology, Namakkal",
      duration: "Expected June 2026",
      description: "CGPA: 8.9 / 10.0 [Till 3rd Sem] - Focused on information technology principles, software development, and computer science fundamentals."
    },
    {
      degree: "M.A.M Hi Tech Matric Hr Sec School, Mettur",
      institution: "12th Grade",
      duration: "2020-2022",
      description: "Grade: 83% - Completed higher secondary education with focus on science and mathematics."
    },
    {
      degree: "Malco Vidyalaya Matric Hr Sec School, Mettur",
      institution: "10th Grade", 
      duration: "2019-2020",
      description: "Grade: 87% - Completed secondary education with strong academic performance."
    }
  ];

  const achievements = [
    {
      title: "Web Developer Intern",
      organization: "Earthy Origins Company",
      duration: "Jun 2023 – July 2023",
      description: "Technical Proficiency: HTML5, CSS3, JavaScript, Bootstrap. Improved and deployed responsive web pages, improving mobile-friendliness by 35%. Enhanced website loading speed through image optimization, reducing load time by 25%."
    },
    {
      title: "SDE Intern",
      organization: "Indira Gandhi Centre for Atomic Research (IGCAR)",
      duration: "Mar 2025 – May 2025",
      description: "Technical Proficiency: Python, FASTAPI, React, Node.js, PostgreSQL. Developed an offline AI-powered assistant that provides instant responses, enhancing knowledge retrieval efficiency by 40%."
    },
    {
      title: "Research and Development Intern",
      organization: "Zemyst Pvt Limited",
      duration: "3-month project",
      description: "Led a three-month research and development project focused on exploring emerging technologies and innovative solutions. Conducted extensive research, analyzed industry trends, contributing to the creation of new products and improvements in existing processes and developed prototypes to address key challenges."
    }
  ];

  const stats = [
    { icon: Code, label: "Projects Completed", value: "10" },
    { icon: Users, label: "Team Collaborations", value: "5+" },
    { icon: Award, label: "Certifications", value: "12+" },
    { icon: GraduationCap, label: "Coding", value: "100+" }
  ];

  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="heading-primary mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer and Information Technology student with a love for creating 
            innovative digital solutions. My journey in technology spans web development, artificial intelligence, 
            and software engineering with experience in both frontend and backend development.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="card-primary text-center"
            >
              <div className="p-4 rounded-full bg-blue-500/10 text-blue-400 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <stat.icon size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="text-blue-400 mr-3" size={28} />
              <h2 className="heading-secondary text-blue-400">Education</h2>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className="card-primary"
                >
                  <div className="timeline-item">
                    <div className="timeline-date">
                      <Calendar className="mr-2" size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="timeline-content">
                      <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                      <div className="flex items-center text-teal-400 mb-3">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm">{edu.institution}</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <Award className="text-teal-400 mr-3" size={28} />
              <h2 className="heading-secondary text-teal-400">Experience</h2>
            </div>
            
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="card-primary"
                >
                  <div className="timeline-item">
                    <div className="timeline-date">
                      <Calendar className="mr-2" size={16} />
                      <span>{achievement.duration}</span>
                    </div>
                    <div className="timeline-content">
                      <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                      <div className="flex items-center text-teal-400 mb-3">
                        <Award size={16} className="mr-2" />
                        <span className="text-sm">{achievement.organization}</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Personal Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 card-primary text-center"
        >
          <h2 className="heading-secondary text-gray-200 mb-6">My Journey</h2>
          <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Technology has been my passion since I first wrote "Hello, World!" in Python. 
            What started as curiosity has evolved into a deep commitment to creating meaningful 
            digital experiences. I believe in the power of clean code, user-centered design, 
            and continuous learning. Every project is an opportunity to solve real problems 
            and make a positive impact.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="btn-primary mt-8"
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
