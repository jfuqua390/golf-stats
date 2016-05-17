import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  firstName: attr(),
  lastName: attr(),
  email: attr(),
  username: attr(),
  password: attr(),
  bio: attr(),
  avatar: attr(),
  handicap: attr(),

  scores: hasMany(`score`),
  comments: hasMany(`comments`),
});
