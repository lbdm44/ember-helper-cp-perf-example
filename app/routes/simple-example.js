import Ember from 'ember';

export default Ember.Route.extend({
  cards: Ember.inject.service(),

  model() {
    return this.get('cards').getCards();
  },
});
