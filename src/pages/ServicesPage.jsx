import React, { useState } from 'react';
import { MainLayout } from '../components/layout';
import { Button, Card } from '../components/shared';

/**
 * Services Page Component
 * 
 * Showcases different service offerings with pricing and features
 * Demonstrates complex page layouts and interactive components
 */
const ServicesPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const services = [
    {
      icon: '🚀',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['React/Vue/Angular', 'Node.js Backend', 'Database Design', 'API Development'],
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Deployment'],
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      features: ['AWS/Azure/GCP', 'DevOps Setup', 'CI/CD Pipelines', 'Monitoring & Analytics'],
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance user experience.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      icon: '🔧',
      title: 'Consulting',
      description: 'Technical consulting and architecture guidance for your projects.',
      features: ['Code Review', 'Architecture Planning', 'Performance Optimization', 'Team Training'],
    },
    {
      icon: '🛡️',
      title: 'Security Audit',
      description: 'Comprehensive security assessment and vulnerability testing.',
      features: ['Security Testing', 'Code Analysis', 'Compliance Check', 'Security Training'],
    },
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$999',
      period: 'per project',
      description: 'Perfect for small projects and startups',
      features: [
        'Basic web application',
        'Responsive design',
        'Basic SEO optimization',
        '30 days support',
        'Source code included',
      ],
      popular: false,
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$2,999',
      period: 'per project',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced web application',
        'Custom UI/UX design',
        'Database integration',
        'API development',
        'Advanced SEO',
        '90 days support',
        'Performance optimization',
        'Security implementation',
      ],
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large-scale applications',
      features: [
        'Complex web applications',
        'Microservices architecture',
        'Cloud deployment',
        'DevOps setup',
        'Load balancing',
        '1 year support',
        'Team training',
        'Ongoing maintenance',
      ],
      popular: false,
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your requirements and define project scope.',
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Create detailed project timeline and technical specifications.',
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your solution using agile development methodology.',
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Comprehensive testing to ensure quality and performance.',
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Launch your application with proper monitoring setup.',
    },
    {
      step: '06',
      title: 'Support',
      description: 'Ongoing maintenance and support for your application.',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
            Comprehensive development solutions to bring your ideas to life
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to deployment, we provide end-to-end development services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your project needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative text-center ${
                  plan.popular
                    ? 'border-primary-500 border-2 shadow-lg scale-105'
                    : 'hover:shadow-lg'
                } transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary-600">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.id === 'enterprise' ? 'Contact Us' : 'Get Started'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 ml-16">
                  {step.description}
                </p>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-8 h-0.5 bg-primary-200 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your requirements and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Get Free Quote
              </Button>
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicesPage;
