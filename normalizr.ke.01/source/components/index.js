import { normalize, schema, Array } from 'normalizr';
import * as ku from '../utils/ke-utils.js';


const data = [
  {
    "dt":1487430000,
    "main":{"temp":44.85, "temp_min":44.85},
    "weather":[{"id":500, "main":"Rain"}],
    "clouds":{"all":20},
    "dt_txt":"2017-02-18 15:00:00"
  },

  {
    "dt":1487440800,
    "main":{"temp":44.85, "temp_min":44.85,},
    "weather":[{"id":500, "main":"Rain",}],
    "clouds":{"all":20},
    "dt_txt":"2017-02-18 18:00:00"
  },

  {
    "dt":1487451600,
    "main":{"temp":44.85, "temp_min":44.85,},
    "weather":[{"id":500, "main":"Rain",}],
    "clouds":{"all":20},
    "dt_txt":"2017-02-18 21:00:00"
  },
];

ku.log('days', data);

/* Example
const userSchema = new schema.Entity('users');
const userListSchema = new schema.Array(userSchema);
const normalizedData = normalize(data, userListSchema);
*/

const daySchema = new schema.Entity('days', {}, { idAttribute: 'dt' });
const dayListSchema = new schema.Array(daySchema);
const nd = normalize(data, dayListSchema);

console.log(nd);

// ku.log('days', nd.entities.days[0], 'red');


/* works?
const day = new schema.Entity('days', {}, { idAttribute: 'dt' });

const mySchema = {
  days: [ day ],
};

const nd = normalize(myData, Array(mySchema));

console.log(nd);

ku.log('days', nd.entities.days[0], 'red');
*/
