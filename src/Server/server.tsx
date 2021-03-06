import express from 'express';
import React from 'react';
import { SSRContext } from '@prerendered/client';
import { PrerenderedExpress } from '@prerendered/server';
import { fetchPosts, fetchUser } from '../Shared/api';
import { Client } from '../Client/Client';

const app = express();

const prr = PrerenderedExpress(app);
app.use(
  prr.middleware({
    nonce: false,
  }),
);

app.get(
  '/*',
  prr.render({
    posts: fetchPosts(),
    user: fetchUser(),
  })((data) => (
    <SSRContext value={{ posts: data.posts, user: data.user }}>
      <Client />
    </SSRContext>
  )),
);

app.listen(3000, () => console.log('Listening'));
