### Comments Subscription

```js
* Query

subscription {
  comment(postId: "101") {
    id
    text
    author {
      name
      email
    }
  }
}


* Response

{
  "data": {
    "comment": {
      "id": "3c03a7a2-0b9e-4b5c-9d27-50a661083deb",
      "text": "wow nice GraphQL",
      "author": {
        "name": "Morol",
        "email": "morol@gmail.com"
      }
    }
  }
}
```

### 

```js
* Query
* Response
```

### 

```js
* Query
* Response
```