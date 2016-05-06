import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  addScore(attrs) {
    const holes = [
      { hole1: attrs.score1 },
      { hole2: attrs.score2 },
      { hole3: attrs.score3 },
      { hole4: attrs.score4 },
      { hole5: attrs.score5 },
      { hole6: attrs.score6 },
      { hole7: attrs.score7 },
      { hole8: attrs.score8 },
      { hole9: attrs.score9 },
      { hole10: attrs.score10 },
      { hole11: attrs.score11 },
      { hole12: attrs.score12 },
      { hole13: attrs.score13 },
      { hole14: attrs.score14 },
      { hole15: attrs.score15 },
      { hole16: attrs.score16 },
      { hole17: attrs.score17 },
      { hole18: attrs.score18 },
    ];
    const score = this.store.createRecord('score', {
      holes: holes,
      totalPutts: attrs.numputts,
      gir: attrs.gir,
      fairwaysHit: attrs.fairwayshit,
    });
    score.save();
  },
});
