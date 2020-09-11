const users = [
  {
    id: "1",
    name: "Morol",
    email: "morol@gmail.com",
    age: 24
  },
  {
    id: "2",
    name: "Jinnatul",
    email: "jinnatul@gmail.com",
    age: 23
  },
  {
    id: "3",
    name: "Arif",
    email: "arif@gmail.com",
    age: 22
  }
];

const posts = [
  {
    id: "101",
    title: "First Post",
    body: "Good job guys!!!",
    published: true,
    author: "1"
  },
  {
    id: "102",
    title: "Second Post",
    body: "Good job guys 2!!!",
    published: false,
    author: "2"
  },
  {
    id: "103",
    title: "Third Post",
    body: "Good job guys 3!!!",
    published: true,
    author: "1"
  }
];

const comments = [
  {
    id: "1",
    "text": "comment 1",
    author: "1",
    post: "101"
  },
  {
    id: "2",
    "text": "comment 2",
    author: "2",
    post: "102"
  },
  {
    id: "3",
    "text": "comment 3",
    author: "3",
    post: "103"
  },
  {
    id: "4",
    "text": "comment 4",
    author: "1",
    post: "101"
  }
];

const db = {
  users,
  posts,
  comments
};

export default db;