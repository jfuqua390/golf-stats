import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  holes: attr(),
  name: attr(),
  teecolor: attr(),
  rating: attr(),
  slope: attr(),
  geolocation: attr(),
  address: attr(),

  scores: hasMany(`score`),
});
