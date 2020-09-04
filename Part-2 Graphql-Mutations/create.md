### Create User

```js
* Query

mutation {
  createUser (
    name: "Morol", 
    email: "morolswediu@gmail.com", 
    age: 24) {
    id
    name
    email
    age
  }
}


* Response

{
  "data": {
    "createUser": {
      "id": "6edc6552-2616-44c8-874a-1cae96fd3c83",
      "name": "Morol",
      "email": "morolswediu@gmail.com",
      "age": 24
    }
  }
}
```

### Create Post

```js
* Query

mutation {
  createPost(
    title: "job", 
    body: "nice man", 
    publish: true, 
    author: "6edc6552-2616-44c8-874a-1cae96fd3c83") {
    id
    title
    body
    publish
    author {
      name
      email
    }
  }
}


* Response

{
  "data": {
    "createPost": {
      "id": "0912b213-7c92-4134-a63a-0b63b28d4a43",
      "title": "job",
      "body": "nice man",
      "publish": true,
      "author": {
        "name": "Morol",
        "email": "morolswediu@gmail.com"
      }
    }
  }
}
```

### Create Comment

```js
* Query

mutation {
  createComment (
    text: "wow nice GraphQL",
    author: "1",
    post: "101"
  ){
    id
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
    "createComment": {
      "id": "dab2bdca-9011-4610-88e6-e17353ca07dd",
      "text": "wow nice GraphQL",
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