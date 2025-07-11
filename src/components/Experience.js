import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import resumeData from '../data/resume.json';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="experience" className="section-padding bg-white">
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
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-8">
              {resumeData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="card p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary-600 font-medium mb-2">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm mt-2 md:mt-0">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.summary.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700">
                            {item.includes('https://') ? (
                              <>
                                {item.replace(/https?:\/\/[^\s]+/, '')}
                                <a
                                  href={item.match(/https?:\/\/[^\s]+/)?.[0]}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 ml-1"
                                >
                                  <ExternalLink size={14} />
                                </a>
                              </>
                            ) : (
                              item
                            )}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 