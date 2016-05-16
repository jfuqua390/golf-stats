import Ember from 'ember';
import _ from 'lodash';

export function sort([arr, cb]) {
  if (arr.toArray) {
    return _.sortBy(arr.toArray(), cb);
  }

  if (Array.isArray(arr)) {
    return _.sortBy(arr, cb);
  }
}

export default Ember.Helper.helper(sort);
