import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';
import useComments from './hooks/useComments';

const Comments = ({ postId, currentUserId = 'current-user' }) => {
  const {
    comments,
    loading,
    error,
    addComment,
    addReply,
    likeComment,
    deleteComment,
    refetch,
  } = useComments(postId);

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-600 mb-4">
          <svg className="mx-auto h-12 w-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-lg font-medium">Error loading comments</p>
          <p className="text-sm text-gray-600 mt-1">{error}</p>
        </div>
        <button
          onClick={refetch}
          className="text-primary-600 hover:text-primary-700 font-medium"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Leave a Comment
        </h2>
        <CommentForm
          onSubmit={addComment}
          placeholder="Share your thoughts..."
        />
      </div>

      <CommentList
        comments={comments}
        onLike={likeComment}
        onReply={addReply}
        onDelete={deleteComment}
        currentUserId={currentUserId}
      />
    </div>
  );
};

Comments.propTypes = {
  postId: PropTypes.string.isRequired,
  currentUserId: PropTypes.string,
};

export default Comments;
