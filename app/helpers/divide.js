import Ember from 'ember';

export function divide(num/*, hash*/) {
  return num / 100;
}

export default Ember.Helper.helper(divide);
