import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from '../../../components/shared';
import CommentForm from './CommentForm';

/**
 * CommentItem Component
 * 
 * Individual comment display with actions (like, reply, delete)
 * Shows how to handle user interactions within feature components
 */
const CommentItem = ({ comment, onLike, onReply, onDelete, currentUserId }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike(comment.id);
  };

  const handleReply = (replyContent) => {
    onReply(comment.id, replyContent);
    setShowReplyForm(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      onDelete(comment.id);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const canDelete = currentUserId === comment.author.id;

  return (
    <Card className="space-y-4">
      {/* Comment Header */}
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          {comment.author.avatar ? (
            <img
              className="h-10 w-10 rounded-full"
              src={comment.author.avatar}
              alt={comment.author.name}
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
              <span className="text-primary-600 font-medium text-sm">
                {comment.author.name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">
                {comment.author.name}
              </p>
              <p className="text-xs text-gray-500">
                {formatDate(comment.createdAt)}
              </p>
            </div>
            
            {canDelete && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDelete}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                Delete
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Comment Content */}
      <div className="ml-13">
        <p className="text-gray-700 whitespace-pre-wrap">
          {comment.content}
        </p>
      </div>

      {/* Comment Actions */}
      <div className="ml-13 flex items-center space-x-4">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-1 text-sm transition-colors ${
            isLiked
              ? 'text-primary-600 hover:text-primary-700'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <svg
            className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span>{comment.likes + (isLiked ? 1 : 0)}</span>
        </button>

        <button
          onClick={() => setShowReplyForm(!showReplyForm)}
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          Reply
        </button>
      </div>

      {/* Reply Form */}
      {showReplyForm && (
        <div className="ml-13 mt-4">
          <CommentForm
            onSubmit={handleReply}
            onCancel={() => setShowReplyForm(false)}
            placeholder="Write a reply..."
            submitText="Reply"
            showCancel
          />
        </div>
      )}

      {/* Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-13 space-y-3 border-l-2 border-gray-100 pl-4">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              onLike={onLike}
              onReply={onReply}
              onDelete={onDelete}
              currentUserId={currentUserId}
            />
          ))}
        </div>
      )}
    </Card>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    }).isRequired,
    createdAt: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    replies: PropTypes.array,
  }).isRequired,
  onLike: PropTypes.func.isRequired,
  onReply: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  currentUserId: PropTypes.string,
};

export default CommentItem;
