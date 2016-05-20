import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  handicap: Ember.inject.service(`handicap`),

  idInt(score) {
    return -parseInt(score.id, 10);
  },

  editBio(user, temp) {
    user.setProperties(temp);

    user.save();
  },

  addComment(score, comment) {
    const x = this.store.createRecord('comment', {
      description: comment.description,
      score: score,
    });
    x.save();
  },
});
