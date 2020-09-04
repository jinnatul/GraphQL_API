### Delete User

```js
* Query

mutation {
  deleteUser(id: 1) {
    id
    name
    email
    posts {
      title
      body
    }
    comments {
      text
    }
	}
}


* Response

{
  "data": {
    "deleteUser": {
      "id": "1",
      "name": "Morol",
      "email": "morol@gmail.com",
      "posts": [],
      "comments": []
    }
  }
}
```

### Delete Post

```js
* Query

mutation {
  deletePost(id: 101) {
    title
    body
    author {
      name
      email
    }
    comments {
      text
    }
  }
}


* Response

{
  "data": {
    "deletePost": {
      "title": "First Post",
      "body": "Good job guys!!!",
      "author": {
        "name": "Morol",
        "email": "morol@gmail.com"
      },
      "comments": []
    }
  }
}
```

### Delete Comment

```js
* Query

mutation {
  deleteComment(id: 4) {
    text
    author {
      name
      email
    }
    post {
      title
      body
    }
  }
}


* Response

{
  "data": {
    "deleteComment": {
      "text": "comment 4",
      "author": {
        "name": "Morol",
        "email": "morol@gmail.com"
      },
      "post": {
        "title": "First Post",
        "body": "Good job guys!!!"
      }
    }
  }
}
```
