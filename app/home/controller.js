import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),


  editBio(user, temp) {
    user.setProperties(temp);

    user.save();
  },
});
