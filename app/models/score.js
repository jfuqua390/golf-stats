import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  holes: attr(),
  totalPutts: attr(),
  gir: attr(),
  fairwaysHit: attr(),

  golfer: belongsTo(`golfer`),
});
