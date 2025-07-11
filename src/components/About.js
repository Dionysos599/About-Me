import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import aboutData from '../data/aboutMe.json';

const About = () => {
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
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutData.bio}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutData.interests}
              </p>
            </div>

            <div className="space-y-6">
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  What I Do
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Develop interactive experiences using Unity and Unreal Engine
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Create AI-driven applications and computer graphics projects
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Build scalable web applications with modern technologies
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Design game mechanics and user experiences
                    </p>
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

export default About; 