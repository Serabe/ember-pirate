import Ember from 'ember';

export function arr(params=[]) {
  let result = Ember.A([]);
  result.pushObjects(params);
  return result;
}

export default Ember.Helper.helper(arr);
