### Update User

```js
* Query

mutation {
  updateUser(id: "1", data: {
    name: "Md. Morol",
    email: "morolswediu@gmail.com"
  }) {
    id
    name
    email
  }
}


* Response

{
  "data": {
    "updateUser": {
      "id": "1",
      "name": "Md. Morol",
      "email": "morolswediu@gmail.com"
    }
  }
}
```

### Update Post

```js
* Query

mutation {
  updatePost(id: "101", data: {title: "Nice GraphQl"}) {
    id
    title
    body
  }
}


* Response

{
  "data": {
    "updatePost": {
      "id": "101",
      "title": "Nice GraphQl",
      "body": "Good job guys!!!"
    }
  }
}
```

### Update Comment

```js
* Query

mutation {
  updateComment(id: "1", data: { text: "Wow joss API" }) {
    id
    text
  }
}


* Response

{
  "data": {
    "updateComment": {
      "id": "1",
      "text": "Wow joss API"
    }
  }
}
```