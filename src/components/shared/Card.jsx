import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable Card component for content containers
 * Provides consistent styling and optional header/footer sections
 */
const Card = ({
  children,
  title,
  subtitle,
  footer,
  padding = 'default',
  shadow = 'default',
  className = '',
  ...props
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
  };
  
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    default: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };
  
  const baseClasses = 'bg-white rounded-lg border border-gray-200';
  const classes = `${baseClasses} ${shadowClasses[shadow]} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {(title || subtitle) && (
        <div className={`border-b border-gray-200 ${paddingClasses[padding]} pb-4 mb-4`}>
          {title && (
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          )}
          {subtitle && (
            <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
          )}
        </div>
      )}
      
      <div className={paddingClasses[padding]}>
        {children}
      </div>
      
      {footer && (
        <div className={`border-t border-gray-200 ${paddingClasses[padding]} pt-4 mt-4`}>
          {footer}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  footer: PropTypes.node,
  padding: PropTypes.oneOf(['none', 'sm', 'default', 'lg']),
  shadow: PropTypes.oneOf(['none', 'sm', 'default', 'md', 'lg']),
  className: PropTypes.string,
};

export default Card;
