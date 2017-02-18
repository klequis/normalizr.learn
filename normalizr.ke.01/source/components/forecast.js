import { normalize, schema } from 'normalizr';
const myData = {
  days: [
    {"dt":1487430000,"main":{"temp":44.85,"temp_min":44.85,"temp_max":45.12,"pressure":992.07,"sea_level":1012.5,"grnd_level":992.07,"humidity":99,"temp_kf":-0.16},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":20},"wind":{"speed":2.73,"deg":189.001},"rain":{"3h":0.045},"sys":{"pod":"d"},"dt_txt":"2017-02-18 15:00:00"},
    {"dt":1487440800,"main":{"temp":53.78,"temp_min":53.78,"temp_max":53.99,"pressure":994.28,"sea_level":1014.61,"grnd_level":994.28,"humidity":100,"temp_kf":-0.12},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":32},"wind":{"speed":4.38,"deg":246.5},"rain":{"3h":0.015},"sys":{"pod":"d"},"dt_txt":"2017-02-18 18:00:00"},
    {"dt":1487451600,"main":{"temp":56.05,"temp_min":56.05,"temp_max":56.19,"pressure":994.46,"sea_level":1014.61,"grnd_level":994.46,"humidity":92,"temp_kf":-0.08},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":24},"wind":{"speed":7.74,"deg":257.505},"rain":{"3h":0.01},"sys":{"pod":"d"},"dt_txt":"2017-02-18 21:00:00"},
  ]
}

const day = new schema.Entity('days', {}, { idAttribute: 'dt' });

const mySchema = {
  days: [ day ],
};

const normalizedData = normalize(myData, mySchema);

console.log(normalizedData);
