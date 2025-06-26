import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Github, ExternalLink, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-background.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-5 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/90 to-purple-50/80 dark:from-gray-900/80 dark:via-gray-900/90 dark:to-gray-800/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                <MapPin className="h-4 w-4 mr-2" />
                Available for Remote Opportunities
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                Hi, I'm{' '}
                <span className="gradient-text">Faisal Riaz</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                Electrical Engineer | DevOps Specialist | ML Enthusiast
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                Passionate about bridging the gap between engineering and technology. 
                I specialize in Machine Learning, DevOps, and Data Science, with a focus on 
                applying AI solutions to real-world problems, particularly in healthcare and 
                infrastructure automation.
              </p>
              
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                <span className="italic">"Engineering the future through intelligent automation and data-driven insights"</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Work
                <ChevronDown className="ml-2 h-4 w-4" />
              </button>
              
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/faisalriazz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              
              <a
                href="https://scholar.google.com/citations?user=XwweIK4AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Google Scholar</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">6+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">10.9k+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">GitHub Forks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Specializations</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-3 animate-pulse-glow"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
                <img
                  src="images/professional-portrait.jpg"
                  alt="Faisal Riaz"
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium animate-float">
                  Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToProjects}
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};
