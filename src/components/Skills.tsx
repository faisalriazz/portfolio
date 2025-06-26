import React, { useEffect, useState } from 'react';
import { 
  Brain, 
  Database, 
  Cloud, 
  Activity, 
  BarChart3, 
  Code, 
  Cpu,
  GitBranch,
  Monitor,
  Zap,
  Settings,
  Eye
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  category: 'Programming' | 'Machine Learning' | 'DevOps' | 'Data Science' | 'Tools';
  description: string;
}

export const Skills: React.FC = () => {
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

    const element = document.querySelector('#skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skills: Skill[] = [
    {
      name: 'Python',
      level: 95,
      icon: Code,
      category: 'Programming',
      description: 'Advanced proficiency in Python for ML, data science, and automation'
    },
    {
      name: 'Machine Learning',
      level: 90,
      icon: Brain,
      category: 'Machine Learning',
      description: 'Deep expertise in ML algorithms, model training, and optimization'
    },
    {
      name: 'Deep Learning',
      level: 88,
      icon: Cpu,
      category: 'Machine Learning',
      description: 'Neural networks, CNN, RNN, LSTM, and transfer learning'
    },
    {
      name: 'TensorFlow/Keras',
      level: 85,
      icon: Zap,
      category: 'Machine Learning',
      description: 'Building and deploying deep learning models'
    },
    {
      name: 'Data Visualization',
      level: 92,
      icon: BarChart3,
      category: 'Data Science',
      description: 'Matplotlib, Plotly, Power BI, and Looker Studio'
    },
    {
      name: 'Pandas',
      level: 90,
      icon: Database,
      category: 'Data Science',
      description: 'Data manipulation, analysis, and preprocessing'
    },
    {
      name: 'Azure Cloud',
      level: 80,
      icon: Cloud,
      category: 'DevOps',
      description: 'Cloud infrastructure, deployment, and services'
    },
    {
      name: 'DevOps',
      level: 85,
      icon: Settings,
      category: 'DevOps',
      description: 'CI/CD, automation, and infrastructure management'
    },
    {
      name: 'Prometheus',
      level: 82,
      icon: Activity,
      category: 'DevOps',
      description: 'System monitoring and metrics collection'
    },
    {
      name: 'Grafana',
      level: 80,
      icon: Monitor,
      category: 'DevOps',
      description: 'Dashboard creation and data visualization'
    },
    {
      name: 'Git/GitHub',
      level: 88,
      icon: GitBranch,
      category: 'Tools',
      description: 'Version control and collaborative development'
    },
    {
      name: 'Computer Vision',
      level: 83,
      icon: Eye,
      category: 'Machine Learning',
      description: 'Image processing, OCT analysis, and medical imaging'
    }
  ];

  const categories = ['Programming', 'Machine Learning', 'DevOps', 'Data Science', 'Tools'];

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Programming':
        return 'from-blue-500 to-blue-600';
      case 'Machine Learning':
        return 'from-purple-500 to-purple-600';
      case 'DevOps':
        return 'from-green-500 to-green-600';
      case 'Data Science':
        return 'from-orange-500 to-orange-600';
      case 'Tools':
        return 'from-gray-500 to-gray-600';
      default:
        return 'from-blue-500 to-blue-600';
    }
  };

  const getCategoryDescription = (category: string) => {
    switch (category) {
      case 'Programming':
        return 'Core programming languages and development skills';
      case 'Machine Learning':
        return 'AI/ML frameworks and deep learning expertise';
      case 'DevOps':
        return 'Infrastructure automation and monitoring tools';
      case 'Data Science':
        return 'Data analysis, visualization, and processing';
      case 'Tools':
        return 'Development tools and version control systems';
      default:
        return '';
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across machine learning, 
            data science, DevOps, and software development domains.
          </p>
        </div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = getSkillsByCategory(category);
            if (categorySkills.length === 0) return null;

            return (
              <div
                key={category}
                className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                {/* Category Header */}
                <div className="mb-8">
                  <div className={`inline-block bg-gradient-to-r ${getCategoryColor(category)} text-white px-6 py-2 rounded-full font-semibold text-lg mb-2`}>
                    {category}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {getCategoryDescription(category)}
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className={`skill-card bg-gray-50 dark:bg-gray-800 rounded-xl p-6 ${
                          isVisible ? 'animate-fade-in-up' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                      >
                        {/* Skill Header */}
                        <div className="flex items-center space-x-4 mb-4">
                          <div className={`p-3 bg-gradient-to-r ${getCategoryColor(category)} rounded-lg`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {skill.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {skill.level}% proficiency
                            </p>
                          </div>
                        </div>

                        {/* Skill Description */}
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          {skill.description}
                        </p>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-700 dark:text-gray-300">Proficiency</span>
                            <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className={`bg-gradient-to-r ${getCategoryColor(category)} h-2 rounded-full transition-all duration-1000 ease-out`}
                              style={{ 
                                width: isVisible ? `${skill.level}%` : '0%',
                                transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100) + 500}ms`
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Overall Stats */}
        <div className={`mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Technical Expertise Overview</h3>
              <p className="text-blue-100">
                Years of experience and continuous learning in cutting-edge technologies
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-blue-100">Years of Python</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-100">ML Models Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-blue-100">Technologies Mastered</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">3</div>
                <div className="text-blue-100">Core Specializations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Learning */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Continuous Learning
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Committed to staying current with the latest technologies and best practices 
            in machine learning, DevOps, and data science through ongoing education and hands-on projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              Google Scholar Publications
            </span>
            <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
              Azure Certified
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
              ML Research
            </span>
            <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
              Open Source Contributor
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
