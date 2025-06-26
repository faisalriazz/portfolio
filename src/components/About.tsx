import React, { useEffect, useState } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Heart, 
  Target, 
  Award,
  Code2,
  Brain,
  Cloud,
  Users
} from 'lucide-react';

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const timeline = [
    {
      year: '2024',
      title: 'AI Research & Development',
      description: 'Focused on advanced machine learning applications in healthcare and medical imaging',
      icon: Brain,
      type: 'current'
    },
    {
      year: '2023',
      title: 'DevOps & Cloud Specialist',
      description: 'Implementing infrastructure automation and monitoring solutions using Azure and modern DevOps practices',
      icon: Cloud,
      type: 'work'
    },
    {
      year: '2022',
      title: 'Data Science Projects',
      description: 'Developed multiple machine learning models for medical diagnosis and financial forecasting',
      icon: Code2,
      type: 'project'
    },
    {
      year: '2020',
      title: 'Electrical Engineering Degree',
      description: 'Graduated with expertise in electrical systems, laying the foundation for technology integration',
      icon: GraduationCap,
      type: 'education'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Constantly exploring cutting-edge technologies to solve complex problems',
      icon: Target
    },
    {
      title: 'Quality',
      description: 'Committed to delivering high-quality, well-tested, and maintainable solutions',
      icon: Award
    },
    {
      title: 'Collaboration',
      description: 'Believe in the power of teamwork and knowledge sharing for better outcomes',
      icon: Users
    },
    {
      title: 'Impact',
      description: 'Focused on creating solutions that make a real difference in healthcare and society',
      icon: Heart
    }
  ];

  const achievements = [
    {
      number: '10.9K+',
      label: 'GitHub Forks',
      description: 'Community engagement on knowledge sharing projects'
    },
    {
      number: '6+',
      label: 'Major Projects',
      description: 'Machine learning and DevOps implementations'
    },
    {
      number: '3',
      label: 'Specializations',
      description: 'ML/AI, DevOps, and Data Science expertise'
    },
    {
      number: '5+',
      label: 'Years Experience',
      description: 'In software development and engineering'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Learn more about my background, journey, and passion for bridging engineering 
            with cutting-edge technology to create meaningful solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story & Values */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            {/* Personal Story */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  As an Electrical Engineer with a passion for technology, I've dedicated my career 
                  to bridging the gap between traditional engineering principles and modern 
                  technological innovations. My journey began with electrical systems but quickly 
                  evolved into the fascinating world of artificial intelligence and automation.
                </p>
                <p>
                  My expertise spans across Machine Learning, DevOps, and Data Science, with a 
                  special focus on applying AI solutions to real-world problems. I'm particularly 
                  passionate about healthcare applications, where technology can directly impact 
                  and improve human lives.
                </p>
                <p>
                  Through my work on medical imaging classification, infrastructure monitoring, 
                  and data analysis projects, I strive to create solutions that are not only 
                  technically sound but also practically valuable and ethically responsible.
                </p>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <p className="text-blue-700 dark:text-blue-300 font-medium italic">
                  "Engineering the future through intelligent automation and data-driven insights"
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Core Values
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={value.title} className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3">
                        <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {value.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Timeline & Achievements */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            {/* Professional Timeline */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Professional Timeline
              </h3>
              <div className="space-y-6">
                {timeline.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          item.type === 'current' 
                            ? 'bg-green-100 dark:bg-green-900/30' 
                            : 'bg-blue-100 dark:bg-blue-900/30'
                        }`}>
                          <IconComponent className={`h-6 w-6 ${
                            item.type === 'current'
                              ? 'text-green-600 dark:text-green-400'
                              : 'text-blue-600 dark:text-blue-400'
                          }`} />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {item.year}
                          </span>
                          {item.type === 'current' && (
                            <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Key Achievements
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {achievement.number}
                    </div>
                    <div className="font-medium text-gray-900 dark:text-white mb-1">
                      {achievement.label}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Areas of Interest */}
        <div className={`mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Areas of Interest & Expertise</h3>
              <p className="text-blue-100 max-w-3xl mx-auto">
                Constantly exploring and contributing to these cutting-edge technological domains
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <Brain className="h-8 w-8" />
                </div>
                <h4 className="font-semibold mb-2">Healthcare AI</h4>
                <p className="text-blue-100 text-sm">
                  Medical imaging analysis, disease detection, and diagnostic automation
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <Cloud className="h-8 w-8" />
                </div>
                <h4 className="font-semibold mb-2">Infrastructure Automation</h4>
                <p className="text-blue-100 text-sm">
                  DevOps practices, monitoring systems, and cloud-native solutions
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <Code2 className="h-8 w-8" />
                </div>
                <h4 className="font-semibold mb-2">Data Science</h4>
                <p className="text-blue-100 text-sm">
                  Predictive modeling, time series analysis, and business intelligence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
