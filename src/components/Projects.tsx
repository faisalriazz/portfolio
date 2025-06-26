import React, { useEffect, useState } from 'react';
import { Github, ExternalLink, Star, GitFork, Brain, Activity, Database, BarChart3, Shield, Monitor } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  stars: number;
  forks: number;
  icon: React.ElementType;
  category: 'Machine Learning' | 'DevOps' | 'Data Science' | 'Knowledge Base';
  features: string[];
}

export const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      id: 'breast-cancer',
      title: 'Breast Cancer Metastasis Classification',
      description: 'Multi-stage classification to predict secondary tumor locations using gene expression data.',
      longDescription: 'Advanced machine learning project for predicting breast cancer metastasis locations (brain, bone, liver, lung) using Gene Expression Omnibus (GEO) datasets. Implements multi-stage classification with feature selection.',
      technologies: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Gene Expression Analysis'],
      githubUrl: 'https://github.com/faisalriazz/Breast-Cancer-Metastasis',
      stars: 5,
      forks: 0,
      icon: Brain,
      category: 'Machine Learning',
      features: ['Multi-stage Classification', 'Feature Selection', 'Medical Data Analysis', 'Predictive Modeling']
    },
    {
      id: 'retinal-oct',
      title: 'Retinal OCT Image Classification',
      description: 'CNN-based classification of OCT scans for AMD and DME detection using deep learning.',
      longDescription: 'Deep learning solution for medical imaging that classifies Retinal Optical Coherence Tomography images to detect Age-Related Macular Degeneration and Diabetic Macular Edema.',
      technologies: ['Python', 'TensorFlow', 'CNN', 'Transfer Learning', 'Medical Imaging'],
      githubUrl: 'https://github.com/faisalriazz/Classification-of-Retinal-Optical-Coherence-OCT-',
      stars: 1,
      forks: 0,
      icon: Activity,
      category: 'Machine Learning',
      features: ['Medical Imaging', 'CNN Architecture', 'Transfer Learning', 'Healthcare AI']
    },
    {
      id: 'covid-ct',
      title: 'COVID-19 CT Scan Classification',
      description: 'Binary classification of lung CT scans for COVID-19 detection using transfer learning.',
      longDescription: 'AI-powered medical diagnostic tool for COVID-19 detection from lung CT scans. Uses transfer learning techniques for accurate binary classification with public health impact.',
      technologies: ['Python', 'Deep Learning', 'Transfer Learning', 'Medical Imaging', 'PyTorch'],
      githubUrl: 'https://github.com/faisalriazz/Lungs-CT-based-Classification-for-COVID19-vs-Non',
      stars: 1,
      forks: 0,
      icon: Shield,
      category: 'Machine Learning',
      features: ['Medical Diagnosis', 'Binary Classification', 'Public Health', 'CT Scan Analysis']
    },
    {
      id: 'time-series',
      title: 'Time Series Forecasting with Deep Learning',
      description: 'Stock market prediction using multiple deep learning models and 7-year tech stock dataset.',
      longDescription: 'Comprehensive time series analysis project comparing various deep learning architectures (RNN, LSTM, GRU, CNN) for stock market prediction using major tech companies data.',
      technologies: ['Python', 'RNN', 'LSTM', 'GRU', 'CNN', 'Time Series Analysis'],
      githubUrl: 'https://github.com/faisalriazz/Timeseries-Forecasting-with-Deep-Learning',
      stars: 1,
      forks: 0,
      icon: BarChart3,
      category: 'Data Science',
      features: ['Financial Analysis', 'Multiple ML Models', 'Performance Comparison', 'RMSE & MAPE Evaluation']
    },
    {
      id: 'prometheus-grafana',
      title: 'Prometheus-Grafana Monitoring',
      description: 'Infrastructure monitoring setup for servers and websites with comprehensive dashboards.',
      longDescription: 'Complete DevOps monitoring solution demonstrating expertise in infrastructure automation, server monitoring, and data visualization using industry-standard tools.',
      technologies: ['Prometheus', 'Grafana', 'Node Exporter', 'Blackbox Exporter', 'MSSQL Exporter'],
      githubUrl: 'https://github.com/faisalriazz/Prometheus-Grafana',
      stars: 0,
      forks: 1,
      icon: Monitor,
      category: 'DevOps',
      features: ['Server Monitoring', 'Website Monitoring', 'Custom Dashboards', 'Alert Management']
    },
    {
      id: 'secret-knowledge',
      title: 'The Book of Secret Knowledge',
      description: 'Curated knowledge base for IT professionals covering system administration to cybersecurity.',
      longDescription: 'Comprehensive collection of resources, tools, and knowledge for system administrators, DevOps engineers, penetration testers, and security researchers. A go-to reference for IT professionals.',
      technologies: ['Documentation', 'CLI Tools', 'Security', 'Networking', 'System Administration'],
      githubUrl: 'https://github.com/faisalriazz/the-book-of-secret-knowledge',
      stars: 1,
      forks: 10900,
      icon: Database,
      category: 'Knowledge Base',
      features: ['Comprehensive Resources', 'Regular Updates', 'Community Driven', 'Professional Reference']
    }
  ];

  const categories = ['All', 'Machine Learning', 'DevOps', 'Data Science', 'Knowledge Base'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Machine Learning':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'DevOps':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Data Science':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Knowledge Base':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my portfolio of machine learning, data science, and DevOps projects that demonstrate 
            expertise in solving real-world problems with innovative technical solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className={`project-card bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.longDescription}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 2).map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats and Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="h-4 w-4" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interested in collaborating or want to see more of my work?
          </p>
          <a
            href="https://github.com/faisalriazz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
