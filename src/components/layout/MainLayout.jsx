import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

/**
 * Main Layout Component
 * 
 * Provides the overall page structure with header, main content, and footer
 * Used as a wrapper for most pages in the application
 */
const MainLayout = ({ children, className = '' }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className={`flex-1 ${className}`}>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default MainLayout;
