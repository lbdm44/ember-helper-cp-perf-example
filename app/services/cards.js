import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  _cards: [],

  init() {
    this._super();
    
    const store = this.get('store');

    // Default we are creating 1000 cards for testing.
    for (let i = 0; i < 1000; i++) {
      this._cards.push(store.createRecord('card', {
        name: `This is the ${i}th card`,
        index: i,
      }));
    }
  },

  getCards() {
    return this._cards;
  },
});
