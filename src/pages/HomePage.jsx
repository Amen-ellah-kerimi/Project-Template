import React from 'react';
import { MainLayout } from '../components/layout';
import { Button, Card } from '../components/shared';

/**
 * Home Page Component
 * 
 * Main landing page demonstrating the use of layout and shared components
 * Shows how pages should be structured in the Clean Architecture approach
 */
const HomePage = () => {
  const features = [
    {
      title: 'Clean Architecture',
      description: 'Organized folder structure that scales from small to large applications.',
      icon: '🏗️',
    },
    {
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development.',
      icon: '🎨',
    },
    {
      title: 'Reusable Components',
      description: 'Pre-built components that maintain consistency across your app.',
      icon: '🧩',
    },
    {
      title: 'TypeScript Ready',
      description: 'Easy to convert to TypeScript for better type safety.',
      icon: '📝',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              React Clean Architecture Template
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              A scalable, maintainable React project template following Clean Architecture principles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose This Template?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with modern best practices and designed to grow with your project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              This template provides everything you need to build scalable React applications
              with clean, maintainable code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Download Template
              </Button>
              <Button variant="ghost" size="lg">
                View on GitHub
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
