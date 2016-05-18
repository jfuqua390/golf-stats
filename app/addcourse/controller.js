import Ember from 'ember';

export default Ember.Controller.extend({
  scoreValidation: {
  'errorMessage': 'Numbers only',
    'isError': (inputValue) => {
      var scorePattern = /^[0-9]{0,3}$/;
      return !scorePattern.test(inputValue);
    }
  },

  ratingValidation: {
  'errorMessage': 'Please input rating using proper format (e.g. 74.2)',
    'isError': (inputValue) => {
      var scorePattern = /^\d{1,2}(\.\d)?$/;
      return !scorePattern.test(inputValue);
    }
  },

  slopeValidation: {
  'errorMessage': 'Please use proper format for slope (e.g. 120, 127)',
    'isError': (inputValue) => {
      var scorePattern = /^[0-9]{0,3}$/;
      return !scorePattern.test(inputValue);
    }
  },

  addCourse(attrs) {
    const holes = [
      { par: attrs.score1, holenumber: 1 },
      { par: attrs.score2, holenumber: 2 },
      { par: attrs.score3, holenumber: 3 },
      { par: attrs.score4, holenumber: 4 },
      { par: attrs.score5, holenumber: 5 },
      { par: attrs.score6, holenumber: 6 },
      { par: attrs.score7, holenumber: 7 },
      { par: attrs.score8, holenumber: 8 },
      { par: attrs.score9, holenumber: 9 },
      { par: attrs.score10, holenumber: 10 },
      { par: attrs.score11, holenumber: 11 },
      { par: attrs.score12, holenumber: 12 },
      { par: attrs.score13, holenumber: 13 },
      { par: attrs.score14, holenumber: 14 },
      { par: attrs.score15, holenumber: 15 },
      { par: attrs.score16, holenumber: 16 },
      { par: attrs.score17, holenumber: 17 },
      { par: attrs.score18, holenumber: 18 },
    ];
    const course = this.store.createRecord('course', {
      holes: holes,
      name: attrs.name,
      teecolor: attrs.teecolor,
      rating: attrs.rating,
      slope: attrs.slope,
      address: attrs.address,
    });
    course.save().then(() => {
      this.transitionToRoute('home');
      window.alert(`Course Saved!`);
    });
  },
});
