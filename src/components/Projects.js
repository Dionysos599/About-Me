import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import projectsData from '../data/projects.json';

const projectImages = [
  '/images/Nimbus.png',
  '/images/Lantern.PNG',
  '/images/MusicBox.png',
  '/images/FoodExpress.png',
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of my work spanning game development, computer graphics, and web applications
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-shrink-0 w-80"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="card p-6 w-full h-80 flex flex-col"
                >
                  <div className="h-full flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-1 line-clamp-4">
                      {project.description}
                    </p>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.link && (
                      <div className="mt-auto">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                        >
                          {project.link.includes('github.com') ? (
                            <>
                              <Github size={16} />
                              View on GitHub
                            </>
                          ) : (
                            <>
                              <ExternalLink size={16} />
                              View Project
                            </>
                          )}
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
                {/* Hover image below card */}
                <motion.div
                  initial={{ height: 0, opacity: 0, y: -20 }}
                  animate={hoveredIndex === index ? { height: 180, opacity: 1, y: 0 } : { height: 0, opacity: 0, y: -20 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="overflow-hidden w-full flex items-center justify-center bg-white rounded-b-xl shadow-md"
                  style={{ minHeight: 0 }}
                >
                  {hoveredIndex === index && (
                    <img
                      src={projectImages[index]}
                      alt={project.name + ' preview'}
                      className="object-contain max-h-44 w-auto transition-all duration-300"
                    />
                  )}
                </motion.div>
              </div>
            ))}

            {/* View More Button */}
            <motion.div
              variants={itemVariants}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <motion.a
                href="https://github.com/Dionysos599"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Github size={20} />
                View More in GitHub
                <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Projects; 