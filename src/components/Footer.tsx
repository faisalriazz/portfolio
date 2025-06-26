import React from 'react';
import { Github, Twitter, ExternalLink, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Projects',
      links: [
        { name: 'Breast Cancer Classification', href: 'https://github.com/faisalriazz/Breast-Cancer-Metastasis' },
        { name: 'OCT Image Classification', href: 'https://github.com/faisalriazz/Classification-of-Retinal-Optical-Coherence-OCT-' },
        { name: 'COVID-19 CT Detection', href: 'https://github.com/faisalriazz/Lungs-CT-based-Classification-for-COVID19-vs-Non' },
        { name: 'Time Series Forecasting', href: 'https://github.com/faisalriazz/Timeseries-Forecasting-with-Deep-Learning' },
        { name: 'Prometheus Monitoring', href: 'https://github.com/faisalriazz/Prometheus-Grafana' }
      ]
    },
    {
      title: 'Technologies',
      links: [
        { name: 'Python & ML', href: '#skills' },
        { name: 'TensorFlow/Keras', href: '#skills' },
        { name: 'DevOps & Azure', href: '#skills' },
        { name: 'Data Science', href: '#skills' },
        { name: 'Monitoring Tools', href: '#skills' }
      ]
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/faisalriazz',
      icon: Github
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/faysalriazz',
      icon: Twitter
    },
    {
      name: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=XwweIK4AAAAJ&hl=en',
      icon: ExternalLink
    }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Faisal Riaz
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Electrical Engineer passionate about Machine Learning, DevOps, and Data Science. 
                Creating intelligent solutions for real-world problems.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter/Contact CTA */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6">
            <div className="text-center">
              <h4 className="text-xl font-bold mb-2">
                Let's Collaborate!
              </h4>
              <p className="text-blue-100 mb-4">
                Interested in working together or discussing new opportunities?
              </p>
              <a
                href="mailto:faisal@example.com"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Faisal Riaz. Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>using React & TypeScript</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 md:hidden"
        aria-label="Back to top"
      >
        <ArrowUp className="h-6 w-6 mx-auto" />
      </button>
    </footer>
  );
};
