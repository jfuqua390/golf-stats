import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';
import config from 'golf-stats/config/environment';

export default Ember.Controller.extend({

  deleteScore(score) {
    score.destroyRecord();
  },
});
