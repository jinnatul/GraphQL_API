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
            "title": "First Post"
          },
          {
            "id": "103",
            "title": "Third Post"
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
            "title": "Second Post"
          }
        ]
      },
      {
        "id": "3",
        "name": "Arif",
        "email": "arif@gmail.com",
        "age": 22,
        "posts": []
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
    publish
    author {
      id
      name
      posts {
        id
        title
      }
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
        "publish": true,
        "author": {
          "id": "1",
          "name": "Morol",
          "posts": [
            {
              "id": "101",
              "title": "First Post"
            },
            {
              "id": "103",
              "title": "Third Post"
            }
          ]
        }
      },
      {
        "id": "102",
        "title": "Second Post",
        "body": "Good job guys 2!!!",
        "publish": false,
        "author": {
          "id": "2",
          "name": "Jinnatul",
          "posts": [
            {
              "id": "102",
              "title": "Second Post"
            }
          ]
        }
      },
      {
        "id": "103",
        "title": "Third Post",
        "body": "Good job guys 3!!!",
        "publish": true,
        "author": {
          "id": "1",
          "name": "Morol",
          "posts": [
            {
              "id": "101",
              "title": "First Post"
            },
            {
              "id": "103",
              "title": "Third Post"
            }
          ]
        }
      }
    ]
  }
}
```