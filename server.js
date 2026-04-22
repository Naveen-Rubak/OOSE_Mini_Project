const express = require('express');
const app = express();

app.use(express.json());

let posts = [];

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.post('/posts', (req, res) => {
  posts.push(req.body);
  res.send("Post added");
});

app.put('/posts/:id', (req, res) => {
  posts[req.params.id] = req.body;
  res.send("Post updated");
});

app.delete('/posts/:id', (req, res) => {
  posts.splice(req.params.id, 1);
  res.send("Post deleted");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});