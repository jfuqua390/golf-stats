import Ember from 'ember';

export default Ember.Controller.extend({
  addComment(score, comment) {
    const x = this.store.createRecord('comment', {
      description: comment.description,
      score: score,
    });
    x.save();
  },
});
