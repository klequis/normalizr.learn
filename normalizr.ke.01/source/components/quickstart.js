import { normalize, schema } from 'normalizr';

// Quick Start
const qsData = {
  // properties are: id, author, title, comments
  "id": "123",
  "author": {
    "id": "1",
    "name": "Paul",
  },
  "title": "My awesome blog post",
  "comments": [
    {
      "id": "324",
      "commenter": {
        "id": "2",
        "name": "Nicole",
      },
    },
  ],
};

// Define a users schema
const user = new schema.Entity('users');

// Define your comments schema
// Maybe this says, "the id in commenter 'is a' user"
const comment = new schema.Entity('comments', {
  commenter: user,
});

// Define your article
const article = new schema.Entity('articles', {
  author: user, // the id in 'author' is a 'user'
  comments: [ comment ], // the id in comments is a 'comment'
});

const normalizedData = normalize(qsData, article);

console.log(normalizedData);
