import Ember from 'ember';

export default Ember.Controller.extend({
  sumScore: 0,

  sumScores(holes) {
    const sumHoles =
    parseInt(holes[0].hole1, 10) +
    parseInt(holes[1].hole2, 10) +
    parseInt(holes[2].hole3, 10) +
    parseInt(holes[3].hole4, 10) +
    parseInt(holes[4].hole5, 10) +
    parseInt(holes[5].hole6, 10) +
    parseInt(holes[6].hole7, 10) +
    parseInt(holes[7].hole8, 10) +
    parseInt(holes[8].hole9, 10) +
    parseInt(holes[9].hole10, 10) +
    parseInt(holes[10].hole11, 10) +
    parseInt(holes[11].hole12, 10) +
    parseInt(holes[12].hole13, 10) +
    parseInt(holes[13].hole14, 10) +
    parseInt(holes[14].hole15, 10) +
    parseInt(holes[15].hole16, 10) +
    parseInt(holes[16].hole17, 10) +
    parseInt(holes[17].hole18, 10)
    ;
    Ember.set(this, `sumScore`, sumHoles);

    // this.set(`sumScore`, sumHoles);
  },

  deleteScore(score) {
    score.destroyRecord();
  },
});
