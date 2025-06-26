import React, { useEffect, useState } from 'react';
import { 
  Mail, 
  Github, 
  Twitter, 
  ExternalLink, 
  MessageCircle, 
  Send,
  MapPin,
  Clock,
  Coffee
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:faisal@example.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/faisalriazz',
      icon: Github,
      description: 'Check out my repositories and open source contributions',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=XwweIK4AAAAJ&hl=en',
      icon: ExternalLink,
      description: 'View my research publications and academic work',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/faysalriazz',
      icon: Twitter,
      description: 'Follow me for tech insights and industry updates',
      color: 'hover:text-blue-500 dark:hover:text-blue-400'
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Remote / Flexible',
      description: 'Available for remote opportunities worldwide'
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: '24-48 hours',
      description: 'Typically respond within 1-2 business days'
    },
    {
      icon: Coffee,
      label: 'Best Time',
      value: 'Anytime',
      description: 'Flexible schedule for international collaboration'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and challenging projects. 
            Whether you have a question, a project idea, or just want to connect, I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            {/* Contact Details */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {info.label}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                          {info.value}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Direct Email */}
              <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center space-x-3 mb-3">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Direct Email
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  For immediate communication and detailed project discussions
                </p>
                <a
                  href="mailto:faisal@example.com"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  faisal@example.com
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Connect on Social Media
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 group ${link.color}`}
                    >
                      <div className="flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-current transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-current transition-colors">
                          {link.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {link.description}
                        </p>
                      </div>
                      <div className="flex-grow"></div>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-current transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Send a Message
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Project Collaboration Opportunity"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                    placeholder="Hi Faisal, I'd like to discuss a potential collaboration..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <strong>Note:</strong> This form will open your default email client. 
                  Alternatively, you can reach out directly via any of the social media links above.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Whether it's a machine learning project, DevOps automation, or data science solution, 
              I'm excited to collaborate and bring innovative ideas to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/faisalriazz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                <Github className="mr-2 h-5 w-5" />
                View My Work
              </a>
              <a
                href="mailto:faisal@example.com"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
