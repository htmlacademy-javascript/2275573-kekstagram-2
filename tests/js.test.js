import {describe, it, expect} from 'vitest';
import { createPosts, POST_COUNT, COMMENTS_COUNT, LIKES_COUNT, DESCRIPTION} from '../js/main.js';

describe('createPosts', () => {
  it('should create an array with POST_COUNT posts', () => {
    const posts = createPosts();

    expect(posts).toHaveLength(POST_COUNT);
  });

  it('each post should have correct structure', () => {
    const posts = createPosts();
    const post = posts[0];

    expect(post).toHaveProperty('id');
    expect(post).toHaveProperty('url');
    expect(post).toHaveProperty('likes');
    expect(post).toHaveProperty('description');
    expect(post).toHaveProperty('comments');

    expect(typeof post.id).toBe('number');
    expect(typeof post.url).toBe('string');
    expect(typeof post.likes).toBe('number');
    expect(typeof post.description).toBe('string');
    expect(Array.isArray(post.comments)).toBe(true);
  });

  it('comments should be an array with length in COMMENTS_COUNT range', () => {
    const posts = createPosts();

    posts.forEach((post) => {
      expect(Array.isArray(post.comments)).toBe(true);
      expect(post.comments.length).toBeGreaterThanOrEqual(COMMENTS_COUNT.min);
      expect(post.comments.length).toBeLessThanOrEqual(COMMENTS_COUNT.max);
    });
  });

  it('each comment should have correct properties', () => {
    const posts = createPosts();

    posts.forEach((post) => {
      post.comments.forEach((comment) => {
        expect(comment).toHaveProperty('id');
        expect(comment).toHaveProperty('avatar');
        expect(comment).toHaveProperty('message');
        expect(comment).toHaveProperty('name');

        expect(typeof comment.id).toBe('number');
        expect(typeof comment.avatar).toBe('string');
        expect(typeof comment.message).toBe('string');
        expect(typeof comment.name).toBe('string');

        // Check avatar filename pattern
        expect(comment.avatar).toMatch(/img\/avatar-\d\.svg/);
      });
    });
  });
});

it('each post should have likes within LIKES_COUNT range and a description', () => {
  const posts = createPosts();

  posts.forEach((post) => {
    expect(post.likes).toBeGreaterThanOrEqual(LIKES_COUNT.min);
    expect(post.likes).toBeLessThanOrEqual(LIKES_COUNT.max);
    expect(typeof post.description).toBe('string');
    expect(DESCRIPTION).toContain(post.description);
  });
});
