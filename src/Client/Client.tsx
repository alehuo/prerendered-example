import { useSSR } from '@prerendered/client';
import React from 'react';
import { User, Post } from '../Shared/api';

export const Client: React.FC = () => {
  const { user, posts } = useSSR<{
    posts: Post[];
    user: User;
  }>();
  return (
    <div>
      <h1>
        Welcome,
        {user.name}
      </h1>
      <h2>Posts</h2>
      <p>
        <ul>
          {posts && posts.map((post) => <li key={post.id}>{post.title}</li>)}
        </ul>
      </p>
    </div>
  );
};
