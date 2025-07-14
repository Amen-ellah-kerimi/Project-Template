/**
 * Comment Service
 * 
 * Feature-specific service for handling comment-related API calls
 * Demonstrates how to organize API logic within feature modules
 */

// Mock API base URL - replace with your actual API
const API_BASE_URL = '/api/comments';

/**
 * Simulates an API call with delay and potential errors
 */
const mockApiCall = async (data, delay = 500) => {
  await new Promise(resolve => setTimeout(resolve, delay));
  
  // Simulate occasional API errors
  if (Math.random() < 0.1) {
    throw new Error('Network error occurred');
  }
  
  return data;
};

/**
 * Fetch comments for a specific post
 */
export const fetchComments = async (postId) => {
  try {
    // In a real app, this would be:
    // const response = await fetch(`${API_BASE_URL}?postId=${postId}`);
    // return await response.json();
    
    const mockComments = [
      {
        id: '1',
        postId,
        content: 'This is a great example of clean architecture!',
        author: {
          id: 'user1',
          name: 'Alice Johnson',
          avatar: null,
        },
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        likes: 5,
        replies: [],
      },
      {
        id: '2',
        postId,
        content: 'The Tailwind CSS integration is seamless.',
        author: {
          id: 'user2',
          name: 'Bob Smith',
          avatar: null,
        },
        createdAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
        likes: 3,
        replies: [],
      },
    ];
    
    return await mockApiCall(mockComments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw new Error('Failed to fetch comments');
  }
};

/**
 * Create a new comment
 */
export const createComment = async (postId, content, authorId) => {
  try {
    const newComment = {
      id: Date.now().toString(),
      postId,
      content,
      author: {
        id: authorId,
        name: 'Current User', // In real app, fetch from user service
        avatar: null,
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      likes: 0,
      replies: [],
    };
    
    // In a real app:
    // const response = await fetch(API_BASE_URL, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ postId, content, authorId }),
    // });
    // return await response.json();
    
    return await mockApiCall(newComment);
  } catch (error) {
    console.error('Error creating comment:', error);
    throw new Error('Failed to create comment');
  }
};

/**
 * Update an existing comment
 */
export const updateComment = async (commentId, content) => {
  try {
    const updatedComment = {
      id: commentId,
      content,
      updatedAt: new Date().toISOString(),
    };
    
    // In a real app:
    // const response = await fetch(`${API_BASE_URL}/${commentId}`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ content }),
    // });
    // return await response.json();
    
    return await mockApiCall(updatedComment);
  } catch (error) {
    console.error('Error updating comment:', error);
    throw new Error('Failed to update comment');
  }
};

/**
 * Delete a comment
 */
export const deleteComment = async (commentId) => {
  try {
    // In a real app:
    // const response = await fetch(`${API_BASE_URL}/${commentId}`, {
    //   method: 'DELETE',
    // });
    // return response.ok;
    
    await mockApiCall(true, 300);
    return true;
  } catch (error) {
    console.error('Error deleting comment:', error);
    throw new Error('Failed to delete comment');
  }
};

/**
 * Like or unlike a comment
 */
export const toggleCommentLike = async (commentId, isLiked) => {
  try {
    // In a real app:
    // const response = await fetch(`${API_BASE_URL}/${commentId}/like`, {
    //   method: isLiked ? 'DELETE' : 'POST',
    // });
    // return await response.json();
    
    const result = {
      commentId,
      isLiked: !isLiked,
      likesCount: isLiked ? -1 : 1, // Change in likes count
    };
    
    return await mockApiCall(result, 200);
  } catch (error) {
    console.error('Error toggling comment like:', error);
    throw new Error('Failed to update comment like');
  }
};

/**
 * Add a reply to a comment
 */
export const addCommentReply = async (parentCommentId, content, authorId) => {
  try {
    const newReply = {
      id: `${parentCommentId}-${Date.now()}`,
      parentId: parentCommentId,
      content,
      author: {
        id: authorId,
        name: 'Current User',
        avatar: null,
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      likes: 0,
    };
    
    // In a real app:
    // const response = await fetch(`${API_BASE_URL}/${parentCommentId}/replies`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ content, authorId }),
    // });
    // return await response.json();
    
    return await mockApiCall(newReply);
  } catch (error) {
    console.error('Error adding reply:', error);
    throw new Error('Failed to add reply');
  }
};
