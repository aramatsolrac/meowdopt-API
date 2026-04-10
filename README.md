# <p  align="center" style="font-size: 28px ;"> <img align="center" src="https://cdn-icons-png.flaticon.com/512/1864/1864514.png" style="height: 40px; with: 30px">meowdopt API </p>

- It is a cat API seeded with a list of cats and shelters from Alberta, Canada.

## Table of contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Routes](#routes)
- [Installing](#installing)
- [Author](#author)

## Overview

- The url for the API is `https://meowdopt-api.herokuapp.com/`
  - _Note: If it does not open at the first try, give it a minute because free heroku dyno could be sleeping._  

### Technologies

<p>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/>  <img src="https://static-00.iconduck.com/assets.00/knex-icon-512x512-vg01e8qb.png" alt="knex" width="30" height="30"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </p>

### Routes

<details>
<summary>Shelters</summary>

### GET `/shelters`

- Returns an array of shelters objects

#### Example response body

```json
[
  {
    "id": "1",
    "name": "Pawsitive Foundation",
    "address": "503 Broadway",
    "city": "Calgary",
    "email": "contact@pawsitive.com"
  },
  {
    "id": "2",
    "name": "Meow Shelter",
    "address": "33 Pearl Street SW",
    "city": "Calgary",
    "email": "contact@meowshelter.com"
  }
]
```

### GET `/shelters/:id`

- Returns a detailed object of a single shelter

#### Example response body

```json
[
  {
    "id": "1",
    "name": "Pawsitive Foundation",
    "address": "503 Broadway",
    "city": "Calgary",
    "email": "contact@pawsitive.com"
  }
]
```

### GET `/shelters/:id/cats`

- Returns a list of cats of a specific shelter

#### Example response body

```json
[
  {
    "id": 11,
    "name": "Robson",
    "gender": "Male",
    "age": "Senior",
    "description": "This wise, loving senior gentleman was rescued in a small town just outside Calgary and his owners were not able to be located. So he is starting over. After a full health check, a bit of a shave to remove some matts, he is healthy and would like to meet his match as soon as possible. He is not a fan of other cats and would prefer to be the only King in your life.",
    "image": "/images/cat0.jpeg",
    "shelter_id": 1
  },
  {
    "id": 1717,
    "name": "Edu",
    "gender": "Male",
    "age": "Adult",
    "description": "I love to play, and my favorite game is chasing balls. I'm affectionate and I don't like being hugged, but if I have a lap available, I take the opportunity to take a nap and cuddle.",
    "image": "/images/cat16.jpeg",
    "shelter_id": 1
  }
]
```

</details>

<details>
<summary>Cats</summary>

### GET `/cats`

- Returns an array of cat objects

#### Example response body

```json
[
  {
    "id": "11",
    "shelter_id": "1",
    "name": "Robson",
    "image": "/images/cat0.jpeg",
    "gender": "Male",
    "description": "This wise, loving senior gentleman was rescued in a small town just outside Calgary and his owners were not able to be located. So he is starting over. After a full health check, a bit of a shave to remove some matts, he is healthy and would like to meet his match as soon as possible. He is not a fan of other cats and would prefer to be the only King in your life.",
    "age": "Senior"
  },
  {
    "id": "22",
    "shelter_id": "2",
    "name": "Pedro",
    "image": "/images/cat1.jpeg",
    "gender": "Male",
    "description": "I am a big and sometimes sassy guy. I prefer a quieter place of residence without other pets or kids. I have a weird love/hate relationship with bags. When you handle one it startles me but I like to try to climb inside of them. Despite being kind of picky and oddly not a big fan of Temptations treats, I have a healthy appetite. I do play with toys with you and alone but not for long. Once I settle in with you I will try to take your spot on the couch or at worst lean on you while sitting next to you.",
    "age": "Adult"
  }
]
```

### GET `/cats/:id`

- Returns a detailed object of a single cats

#### Example response body

```json
{
  "id": "44",
  "shelter_id": "4",
  "name": "Lucas",
  "image": "/images/cat3.jpeg",
  "gender": "Male",
  "description": "This sweet but shy boy was brought in from a rural property. He acts a little unsure when he first meets someone, but once he realizes you want to love him he is soon pushing into your hand for attention. He is good with other cats but does not have dog experience. This attractive tuxedo with a black smooch beside his nose needs a forever human.",
  "age": "Kitty"
}
```

### POST `/cats/:id/like`

- Add one like for a specific cat

#### Example response body

```json
{
  "isLiked": true,
  "user_id": "1",
  "cat_id": "22"
}
```

### DELETE `/cats/:id/remove-like`

- Deletes the given like;

#### Example response body

```json
{
  "user_id": "1",
  "cat_id": "22"
}
```

</details>

<details>
<summary>Requests</summary>

### GET `/requests`

- Returns an array of requests objects

#### Example response body

```json
[
  {
    "id": 1,
    "name": "Lucas",
    "email": "lucas@gmail.com",
    "status": "Received",
    "cat_id": 22,
    "user_id": 1
  },
  {
    "id": 2,
    "name": "Lucas",
    "email": "lucas@gmail.com",
    "status": "Received",
    "cat_id": 1010,
    "user_id": 1
  }
]
```

### POST `/requests/:id/form`

- Post a new cat request

#### Example parameters

```json
{
  "user_id": 1,
  "cat_id": 1010,
  "name": "Lucas",
  "email": "lucas@gmail.com"
}
```

### DELETE `/requests/:id/delete`

- Delete a sent request by a user

#### Example parameters

```json
{
  "id": 1
}
```

</details>

<details>
<summary>Users</summary>

### GET `/users`

- Returns an array of users objects

#### Example response body

```json
[
  {
    "id": 13,
    "name": "Olivia",
    "username": "olivia",
    "email": "olivia@gmail.com",
    "password": "$2b$10$ATmle6b.W3MCz7/qcnO/7.iFj02SkPxLPKqPo9dhswPMdi09F8DYO"
  },
  {
    "id": 14,
    "name": "Maria",
    "username": "maria",
    "email": "maria@gmail.com",
    "password": "$2b$10$YZNtJS7NQCC9Ru8zh8FW3eKI9.cFLCdCNxgXcbtX6DhzRo0fVezVe"
  }
]
```

### GET `/users/:id`

- Returns an object of a single user

#### Example response body

```json
{
  "id": 13,
  "name": "Olivia",
  "username": "olivia",
  "email": "olivia@gmail.com",
  "password": "$2b$10$ATmle6b.W3MCz7/qcnO/7.iFj02SkPxLPKqPo9dhswPMdi09F8DYO"
}
```

### GET `/users/:id/favorites`

- Returns a list of cats liked by a specific user

#### Example response body

```json
[
  {
    "cat_name": "Robson",
    "image": "/images/cat0.jpeg",
    "user_name": "Olivia",
    "id": 57,
    "isLiked": 1,
    "cat_id": 11,
    "user_id": 13
  }
]
```

### GET `/users/:id/requests`

- Return a list of requests sent by a specific user

#### Example response body

```json
[
  {
    "cat_name": "Robson",
    "image": "/images/cat0.jpeg",
    "id": 6,
    "name": "Olivia",
    "email": "olivia@gmail.com",
    "status": "Received",
    "cat_id": 11,
    "user_id": 13
  }
]
```

### POST `/users/signup`

- Create a new login

#### Example parameters

```json
{
  "name": "Test",
  "username": "test",
  "email": "test@gmail.com",
  "password": "test"
}
```

</details>

<details>
<summary>Login</summary>

### POST `/login`

- Verify if the user login exist and sign in

#### Example parameters

```json
{
  "message": "Success"
}
```

</details>


### Installing

- Download this Repository or clone it: `git clone git@github.com:aramatsolrac/meowdopt-API.git`
- `cd` into the new folder and type `npm install`
- To run the project type: `npm start`

### Author
- Linkedin - [Tamara Carlos](https://www.linkedin.com/in/tamaracarlos/)
- Twitter - [@aramatsolrac](https://twitter.com/aramatsolrac)
