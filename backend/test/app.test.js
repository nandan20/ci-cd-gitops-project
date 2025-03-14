const request = require('supertest');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Backend is running!'));

test('GET /', async () => {
  await request(app)
    .get('/')
    .expect(200)
    .expect('Backend is running!');
});
