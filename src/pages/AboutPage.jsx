import React from 'react';
import { MainLayout } from '../components/layout';
import { Card } from '../components/shared';

/**
 * About Page Component
 * 
 * Demonstrates content-heavy page structure and component composition
 * Shows how to organize information in a clean, readable format
 */
const AboutPage = () => {
  const architecturePrinciples = [
    {
      title: 'Separation of Concerns',
      description: 'Each component, hook, and service has a single, well-defined responsibility.',
    },
    {
      title: 'Dependency Inversion',
      description: 'High-level modules don\'t depend on low-level modules. Both depend on abstractions.',
    },
    {
      title: 'Single Responsibility',
      description: 'Every class, function, and module should have one reason to change.',
    },
    {
      title: 'Open/Closed Principle',
      description: 'Software entities should be open for extension but closed for modification.',
    },
  ];

  const folderStructure = [
    {
      folder: 'components/shared',
      description: 'Reusable UI components used across the entire application',
      examples: 'Button, Card, Input, Modal',
    },
    {
      folder: 'components/layout',
      description: 'Layout components that provide page structure',
      examples: 'Header, Footer, MainLayout, Sidebar',
    },
    {
      folder: 'pages',
      description: 'Top-level page components representing different routes',
      examples: 'HomePage, LoginPage, AboutPage',
    },
    {
      folder: 'features',
      description: 'Feature-specific modules with their own components and logic',
      examples: 'comments/, user-profile/, shopping-cart/',
    },
    {
      folder: 'hooks',
      description: 'Custom React hooks for shared logic and state management',
      examples: 'useApi, useLocalStorage, useAuth',
    },
    {
      folder: 'services',
      description: 'External service integrations and API communication',
      examples: 'api/, auth/, storage/',
    },
    {
      folder: 'utils',
      description: 'Pure utility functions and helper methods',
      examples: 'formatters, validators, constants',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary-50 to-secondary-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About This Template
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about the Clean Architecture principles and folder structure 
              that make this React template scalable and maintainable.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Principles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Clean Architecture Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This template follows proven architectural patterns that promote 
              code quality, testability, and long-term maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {architecturePrinciples.map((principle, index) => (
              <Card key={index} className="h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600">
                  {principle.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Folder Structure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Folder Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each folder has a specific purpose and follows naming conventions 
              that make the codebase intuitive to navigate.
            </p>
          </div>

          <div className="space-y-6">
            {folderStructure.map((item, index) => (
              <Card key={index} className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <code className="text-primary-600 font-mono text-lg font-semibold">
                    src/{item.folder}/
                  </code>
                </div>
                <div className="md:w-1/2 mb-4 md:mb-0 md:px-6">
                  <p className="text-gray-700">
                    {item.description}
                  </p>
                </div>
                <div className="md:w-1/4">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Examples:</span> {item.examples}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scaling Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Scaling Your Application
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This template is designed to grow with your project, from small prototypes 
              to large enterprise applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Small Projects (1-3 developers)
              </h3>
              <p className="text-gray-600">
                Use the basic structure with shared components and simple page organization. 
                Perfect for MVPs and small applications.
              </p>
            </Card>

            <Card className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Mid-size Projects (8-10 developers)
              </h3>
              <p className="text-gray-600">
                Introduce feature modules and more sophisticated state management. 
                Ideal for growing teams and complex features.
              </p>
            </Card>

            <Card className="text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Large Projects (50+ developers)
              </h3>
              <p className="text-gray-600">
                Adopt module-based architecture with independent teams working 
                on separate modules. Enterprise-ready scalability.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
