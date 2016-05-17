import Ember from 'ember';

export default Ember.Component.extend({
  click(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    const id = this.get(`item.id`);
    const router = Ember.getOwner(this).lookup(`router:main`);

    router.transitionTo(`user-profile`, id);
  },
});
