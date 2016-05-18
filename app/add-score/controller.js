import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  handicap: Ember.inject.service(),
  scoreValidation: {
  'errorMessage': 'Numbers only',
    'isError': (inputValue) => {
      var scorePattern = /^[0-9]{2,4}$/;
      return !scorePattern.test(inputValue);
    }
  },


  addScore(attrs) {
    const holes = [
      { holescore: attrs.score1, holenumber: 1 },
      { holescore: attrs.score2, holenumber: 2 },
      { holescore: attrs.score3, holenumber: 3 },
      { holescore: attrs.score4, holenumber: 4 },
      { holescore: attrs.score5, holenumber: 5 },
      { holescore: attrs.score6, holenumber: 6 },
      { holescore: attrs.score7, holenumber: 7 },
      { holescore: attrs.score8, holenumber: 8 },
      { holescore: attrs.score9, holenumber: 9 },
      { holescore: attrs.score10, holenumber: 10 },
      { holescore: attrs.score11, holenumber: 11 },
      { holescore: attrs.score12, holenumber: 12 },
      { holescore: attrs.score13, holenumber: 13 },
      { holescore: attrs.score14, holenumber: 14 },
      { holescore: attrs.score15, holenumber: 15 },
      { holescore: attrs.score16, holenumber: 16 },
      { holescore: attrs.score17, holenumber: 17 },
      { holescore: attrs.score18, holenumber: 18 },
    ];
    const course = this.get('course');

    const score = this.store.createRecord('score', {
      holes: holes,
      totalPutts: attrs.numputts,
      gir: attrs.gir,
      fairwaysHit: attrs.fairwayshit,
      course: course,
    });
    score.save().then(() => {
      this.setHandicap();
    }).then(() => {
      this.transitionToRoute(`home`);
      window.alert(`Score Saved!`);
    });
  },

  courseSelected(selection) {
    Ember.set(this, `course`, selection);
  },

  setHandicap() {
    const scores = this.get(`model.scores`);

    const handicap = Math.round(this.get(`handicap`).calcHandicap(scores, scores.content.length));
    const userhandicap = this.get(`model.golfer`);
    userhandicap.set(`handicap`, handicap);
    userhandicap.save();
  },
});
