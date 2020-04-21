import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/posts-preview';

export default () => {
  const posts = usePosts();

  return (
    <Layout>
      <h1>Home</h1>
      <p>Hello there!</p>
      <Link to='/about/'>Learn about &rarr;</Link>

      <h2>Read my blog</h2>
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};
