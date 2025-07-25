import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
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

  const [showCommentsModal, setShowCommentsModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-8">
              <Link to="/home">
                <button className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-primary-600 hover:bg-gray-50">
                  Home
                </button>
              </Link>
              <Link to="/about">
                <button className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-primary-600 hover:bg-gray-50">
                  About
                </button>
              </Link>
              <Link to="/services">
                <button className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-primary-600 hover:bg-gray-50">
                  Services
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-primary-600 hover:bg-gray-50">
                  Contact
                </button>
              </Link>
              <Link to="/login">
                <button className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-primary-600 hover:bg-gray-50">
                  Login
                </button>
              </Link>
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

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

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
