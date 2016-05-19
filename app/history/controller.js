import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';
import config from 'golf-stats/config/environment';
import sumProperty from 'golf-stats/helpers/sum-property';

export default Ember.Controller.extend({
  differential: [],
  numRounds: undefined,
  handicap: undefined,

  deleteScore(score) {
    if (window.confirm(`Are you sure you want to delete this score?`)) {
      score.destroyRecord();
    }
  }
});
