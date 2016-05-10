import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';
import config from 'golf-stats/config/environment';
import sumProperty from 'golf-stats/helpers/sum-property';

export default Ember.Controller.extend({
  differential: [],
  numRounds: undefined,

  //Calculates individual score differentials
  calcHandicapDifferential(arr, key, rating, slope) {
    const totalscore = this.sumScores(arr, key);

    return (totalscore - rating) * (113 / slope);
  },

  //Gives me an array of all individual differentials
  makeArrayOfDifferentials(model) {
    model.map((score) => {
      const rating = score.get(`course.rating`);
      const slope = score.get(`course.slope`);

      return this.calcHandicapDifferential(score.get(`holes`), `holescore`, rating, slope);
    });
  },

  //adds up all hole scores
  sumScores(arr, key) {
    return arr.mapBy(key).reduce((carry, curr) => carry + parseInt(curr), 0);
  },

  calcHandicap(model, numRounds) {
    console.log(model);
    let diffarr = this.makeArrayOfDifferentials(model);
    console.log(diffarr);
    if(numRounds < 5) {
      return "Not enuf rounds";
    } else if (numRounds <= 10) {
      window.alert(`yaya handicap times 1`)
    } else if (numRounds < 20) {
      window.alert(`yayaya handicap avg lowest 3-5 differentials`)
    } else {
      window.alert(`yayayaya handicap avg lowest 10 differentials`);
    }
  }
});
