import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Home</h1>
    <p>Hello there!</p>
    <Link to="/about/">Learn about &rarr;</Link>
  </Layout>
);
