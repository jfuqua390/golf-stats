import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  login(formValues) {
    this.get(`session`).authenticate(`authenticator:application`, formValues.email, formValues.password).then(() => {

      this.transitionToRoute(`home`);
    });
  },
});
