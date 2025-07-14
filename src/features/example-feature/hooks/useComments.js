import { useState, useEffect, useCallback } from 'react';

/**
 * useComments Hook
 * 
 * Feature-specific hook for managing comment state and operations
 * Demonstrates how to encapsulate feature logic in custom hooks
 */
const useComments = (postId) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mockComments = [
    {
      id: '1',
      content: 'This is a great example of clean architecture! The separation of concerns is really well done.',
      author: {
        id: 'user1',
        name: 'Alice Johnson',
        avatar: null,
      },
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      likes: 5,
      replies: [
        {
          id: '1-1',
          content: 'I agree! The folder structure makes it so easy to find what you\'re looking for.',
          author: {
            id: 'user2',
            name: 'Bob Smith',
            avatar: null,
          },
          createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
          likes: 2,
          replies: [],
        },
      ],
    },
    {
      id: '2',
      content: 'The Tailwind CSS integration is seamless. Love how the components are styled!',
      author: {
        id: 'user3',
        name: 'Carol Davis',
        avatar: null,
      },
      createdAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
      likes: 3,
      replies: [],
    },
  ];

  const fetchComments = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setComments(mockComments);
    } catch (err) {
      setError('Failed to load comments');
    } finally {
      setLoading(false);
    }
  }, [postId]);

  const addComment = useCallback(async (content) => {
    const newComment = {
      id: Date.now().toString(),
      content,
      author: {
        id: 'current-user',
        name: 'Current User',
        avatar: null,
      },
      createdAt: new Date().toISOString(),
      likes: 0,
      replies: [],
    };

    await new Promise(resolve => setTimeout(resolve, 500));
    
    setComments(prev => [newComment, ...prev]);
  }, []);

  const addReply = useCallback(async (commentId, content) => {
    const newReply = {
      id: `${commentId}-${Date.now()}`,
      content,
      author: {
        id: 'current-user',
        name: 'Current User',
        avatar: null,
      },
      createdAt: new Date().toISOString(),
      likes: 0,
      replies: [],
    };

    await new Promise(resolve => setTimeout(resolve, 500));

    setComments(prev => prev.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...(comment.replies || []), newReply],
        };
      }
      return comment;
    }));
  }, []);

  const likeComment = useCallback(async (commentId) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    setComments(prev => prev.map(comment => {
      if (comment.id === commentId) {
        return { ...comment, likes: comment.likes + 1 };
      }
      if (comment.replies) {
        return {
          ...comment,
          replies: comment.replies.map(reply =>
            reply.id === commentId
              ? { ...reply, likes: reply.likes + 1 }
              : reply
          ),
        };
      }
      return comment;
    }));
  }, []);

  const deleteComment = useCallback(async (commentId) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    setComments(prev => prev.filter(comment => {
      if (comment.id === commentId) {
        return false;
      }
      if (comment.replies) {
        comment.replies = comment.replies.filter(reply => reply.id !== commentId);
      }
      return true;
    }));
  }, []);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return {
    comments,
    loading,
    error,
    addComment,
    addReply,
    likeComment,
    deleteComment,
    refetch: fetchComments,
  };
};

export default useComments;
