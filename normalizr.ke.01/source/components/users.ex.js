import { normalize, schema } from 'normalizr';

// normalize(data, schema)

const myData = {
  users: [
    { id: 1, name: 'John' },
    { id: 2, name: 'James' },
  ],
};

const user = new schema.Entity('users');
const mySchema = {
  users: [ user ],
};

const normalizedData = normalize(myData, mySchema);

console.log(normalizedData);
