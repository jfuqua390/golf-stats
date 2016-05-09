import Ember from 'ember';

export default Ember.Controller.extend({
  editProfile(user, temp) {
    user.setProperties(temp);
    user.save().then(() => {
      this.transitionToRoute('home');
    });
  },
});
