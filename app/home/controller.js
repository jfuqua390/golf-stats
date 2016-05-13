import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  handicap: Ember.inject.service(`handicap`),


  editBio(user, temp) {
    user.setProperties(temp);

    user.save();
  },

  search(term) {
    console.log(term)
    const users = this.store.findAll(`golfer`).then((x) => {
      x.forEach((user) => {
        console.log(user);
      });
    });
  },
});
