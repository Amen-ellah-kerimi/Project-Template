/**
 * Comments Feature Export
 * 
 * This file exports the main Comments component and any other
 * components that might be used outside this feature module.
 * 
 * Usage:
 * import { Comments } from '@/features/comments';
 */

export { default as Comments } from './Comments';

// Export individual components if needed elsewhere
export { default as CommentList } from './components/CommentList';
export { default as CommentForm } from './components/CommentForm';

// Export hooks if they might be useful in other features
export { default as useComments } from './hooks/useComments';

// Export services for potential reuse
export * as commentService from './services/commentService';
