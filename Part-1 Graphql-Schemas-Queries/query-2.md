### User

```js
* Query

query {
  users {
    id
    name
    email
    age
    posts {
      id
      title
      body
      publish
    }
    comments {
      id
      text
    }
  }
}


* Response

{
  "data": {
    "users": [
      {
        "id": "1",
        "name": "Morol",
        "email": "morol@gmail.com",
        "age": 24,
        "posts": [
          {
            "id": "101",
            "title": "First Post",
            "body": "Good job guys!!!",
            "publish": true
          },
          {
            "id": "103",
            "title": "Third Post",
            "body": "Good job guys 3!!!",
            "publish": true
          }
        ],
        "comments": [
          {
            "id": "1",
            "text": "comment 1"
          },
          {
            "id": "4",
            "text": "comment 4"
          }
        ]
      },
      {
        "id": "2",
        "name": "Jinnatul",
        "email": "jinnatul@gmail.com",
        "age": 23,
        "posts": [
          {
            "id": "102",
            "title": "Second Post",
            "body": "Good job guys 2!!!",
            "publish": false
          }
        ],
        "comments": [
          {
            "id": "2",
            "text": "comment 2"
          }
        ]
      },
      {
        "id": "3",
        "name": "Arif",
        "email": "arif@gmail.com",
        "age": 22,
        "posts": [],
        "comments": [
          {
            "id": "3",
            "text": "comment 3"
          }
        ]
      }
    ]
  }
}
```

### Comments

```js
* Query

query {
  comments {
    id
    text
    author {
      name
      email
    }
    post {
      id
      title
      body
    }
  }
}

* Response

{
  "data": {
    "comments": [
      {
        "id": "1",
        "text": "comment 1",
        "author": {
          "name": "Morol",
          "email": "morol@gmail.com"
        },
        "post": {
          "id": "101",
          "title": "First Post",
          "body": "Good job guys!!!"
        }
      },
      {
        "id": "2",
        "text": "comment 2",
        "author": {
          "name": "Jinnatul",
          "email": "jinnatul@gmail.com"
        },
        "post": {
          "id": "102",
          "title": "Second Post",
          "body": "Good job guys 2!!!"
        }
      },
      {
        "id": "3",
        "text": "comment 3",
        "author": {
          "name": "Arif",
          "email": "arif@gmail.com"
        },
        "post": {
          "id": "103",
          "title": "Third Post",
          "body": "Good job guys 3!!!"
        }
      },
      {
        "id": "4",
        "text": "comment 4",
        "author": {
          "name": "Morol",
          "email": "morol@gmail.com"
        },
        "post": {
          "id": "101",
          "title": "First Post",
          "body": "Good job guys!!!"
        }
      }
    ]
  }
}
```

### Posts

```js
* Query

query {
  posts {
    id
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
    "posts": [
      {
        "id": "101",
        "title": "First Post",
        "body": "Good job guys!!!",
        "author": {
          "name": "Morol",
          "email": "morol@gmail.com"
        },
        "comments": [
          {
            "text": "comment 1"
          },
          {
            "text": "comment 4"
          }
        ]
      },
      {
        "id": "102",
        "title": "Second Post",
        "body": "Good job guys 2!!!",
        "author": {
          "name": "Jinnatul",
          "email": "jinnatul@gmail.com"
        },
        "comments": [
          {
            "text": "comment 2"
          }
        ]
      },
      {
        "id": "103",
        "title": "Third Post",
        "body": "Good job guys 3!!!",
        "author": {
          "name": "Morol",
          "email": "morol@gmail.com"
        },
        "comments": [
          {
            "text": "comment 3"
          }
        ]
      }
    ]
  }
}
```