import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from '../../../components/shared';

const CommentForm = ({
  onSubmit,
  onCancel,
  placeholder = 'Write a comment...',
  submitText = 'Post Comment',
  showCancel = false,
  initialValue = '',
}) => {
  const [content, setContent] = useState(initialValue);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!content.trim()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await onSubmit(content.trim());
      setContent('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setContent('');
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={placeholder}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            disabled={isSubmitting}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            {content.length}/500 characters
          </div>
          
          <div className="flex items-center space-x-2">
            {showCancel && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleCancel}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            )}
            
            <Button
              type="submit"
              variant="primary"
              size="sm"
              loading={isSubmitting}
              disabled={!content.trim() || content.length > 500}
            >
              {submitText}
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

CommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  placeholder: PropTypes.string,
  submitText: PropTypes.string,
  showCancel: PropTypes.bool,
  initialValue: PropTypes.string,
};

export default CommentForm;
