import Ember from 'ember';

export default Ember.Service.extend({
  differential: [],
  numRounds: undefined,
  handicap: undefined,

  //adds up all hole scores
  sumScores(arr, key) {
    return arr.mapBy(key).reduce((carry, curr) => carry + parseInt(curr), 0);
  },

  //Calculates individual score differentials
  calcHandicapDifferential(arr, key, rating, slope) {
    const totalscore = this.sumScores(arr, key);

    return (totalscore - rating) * (113 / slope);
  },

  //Gives me an array of all individual differentials
  makeArrayOfDifferentials(model) {
    return model.map((score) => {
      const rating = parseInt(score.get(`course.rating`));
      const slope = parseInt(score.get(`course.slope`));

      return this.calcHandicapDifferential(score.get(`holes`), `holescore`, rating, slope);
    });
  },

  //Get lowest differential
  getLowest(arr) {
    return arr.reduce((a, b) => {
      if (a < b) {
        return a;
      } else {
        return b;
      }
    });
  },

  //sort array so can get lowest numbers
  compareNumbers(a, b) {
    return a - b;
  },

  //get lowest x numbers of array
  getLowestNumbers(arr, count) {
    const tmparr = [];
    arr.sort(this.compareNumbers);
    for (var i = 0; i < count; i++){
      tmparr.push(arr[i]);
    }
    return tmparr;
  },

  //get average of lowest of x amount of numbers
  avgLowest(arr, count) {
    const lownums = this.getLowestNumbers(arr, count);
    const sum = lownums.reduce((a,b) => {
      return a+b;
    }, 0);
    return sum / count;
  },

  calcHandicap(model, numRounds) {
    const diffarr = this.makeArrayOfDifferentials(model);
    if(numRounds < 5) {
      return "Not enuf rounds";
    } else if (numRounds <= 10) {
      return 100 * (0.96 * this.getLowest(diffarr));
    } else if (numRounds < 20) {
      return 100 * (0.96 * this.avgLowest(diffarr, 5));
    } else {
      return 100 * (0.96 * this.avgLowest(diffarr, 10));
    }
  },
});
