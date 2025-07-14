import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../../../components/shared';
import CommentItem from './CommentItem';

/**
 * CommentList Component
 * 
 * Feature-specific component that displays a list of comments
 * Demonstrates how components within features should be organized
 */
const CommentList = ({ comments, onLike, onReply, onDelete, currentUserId }) => {
  if (!comments || comments.length === 0) {
    return (
      <Card className="text-center py-8">
        <div className="text-gray-500">
          <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.524A11.956 11.956 0 010 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
          </svg>
          <p className="text-lg font-medium text-gray-900 mb-2">No comments yet</p>
          <p className="text-gray-500">Be the first to share your thoughts!</p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Comments ({comments.length})
      </h3>
      
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onLike={onLike}
          onReply={onReply}
          onDelete={onDelete}
          currentUserId={currentUserId}
        />
      ))}
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    }).isRequired,
    createdAt: PropTypes.string.isRequired,
    likes: PropTypes.number,
    replies: PropTypes.array,
  })),
  onLike: PropTypes.func.isRequired,
  onReply: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  currentUserId: PropTypes.string,
};

CommentList.defaultProps = {
  comments: [],
};

export default CommentList;
