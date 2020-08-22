import React from 'react';
import {
  User, Post,
} from '../Server/api';

interface ClientProps {
    posts: Post[]
    user: User
}

export const Client: React.FC<ClientProps> = ({ user, posts }) => (
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
