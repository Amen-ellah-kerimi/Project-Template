import React, { useState } from 'react';
import { HomePage, LoginPage, AboutPage, ServicesPage, ContactPage } from './pages';
import { Comments } from './features/example-feature';
import { Button, Modal } from './components/shared';

/**
 * Main App Component
 *
 * Demonstrates the Clean Architecture template structure
 * In a real application, this would use React Router for navigation
 */
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showCommentsModal, setShowCommentsModal] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      case 'login':
        return <LoginPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Navigation for Demo */}
      <nav className="bg-white shadow-sm border-b border-gray-200 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-8">
              <button
                onClick={() => setCurrentPage('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'home'
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'about'
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                About
              </button>
              <button
                onClick={() => setCurrentPage('services')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'services'
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'contact'
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                Contact
              </button>
              <button
                onClick={() => setCurrentPage('login')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'login'
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                Login
              </button>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowCommentsModal(true)}
            >
              View Comments Demo
            </Button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {renderPage()}

      {/* Comments Feature Modal */}
      <Modal
        isOpen={showCommentsModal}
        onClose={() => setShowCommentsModal(false)}
        title="Comments Feature Demo"
        size="lg"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            This demonstrates the comments feature module with its own components,
            hooks, and services. This is an example of feature-based organization
            in the Clean Architecture approach.
          </p>
          <Comments postId="demo-post" />
        </div>
      </Modal>
    </div>
  );
}

export default App;
