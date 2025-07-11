import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import resumeData from '../data/resume.json';

const Education = () => {
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
    <section id="education" className="section-padding bg-gray-50">
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
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="card p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <GraduationCap size={32} className="text-primary-600" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {resumeData.education.school}
                  </h3>
                  <p className="text-lg text-primary-600 font-medium mb-4">
                    {resumeData.education.degree}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={16} />
                      <span>{resumeData.education.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Award size={16} />
                      <span>GPA: {resumeData.education.gpa}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Skills & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 