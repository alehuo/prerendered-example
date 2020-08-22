import express from 'express';
import React from 'react';
import { PrerenderedExpess } from 'prerendered';
import { fetchPosts, fetchUser } from './api';
import { Client } from '../Client/Client';

const app = express();

const prr = PrerenderedExpess();
app.use(prr.middleware({
  nonce: false,
}));

app.get('/*', prr.render({
  posts: fetchPosts(),
  user: fetchUser(),
})((data) => <Client posts={data.posts} user={data.user} />));

app.listen(3000, () => console.log('Listening'));
