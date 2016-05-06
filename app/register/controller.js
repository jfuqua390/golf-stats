import Ember from 'ember';

export default Ember.Controller.extend({
  createUser(formValues) {
    const user = this.store.createRecord(`golfer`, formValues);
    user.save();
  },
});
