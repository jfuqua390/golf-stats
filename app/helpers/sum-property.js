import Ember from 'ember';

export function sumProperty([arr, key]/*, hash*/) {
  return arr.mapBy(key).reduce((carry, curr) => carry + parseInt(curr), 0);
}

export default Ember.Helper.helper(sumProperty);
