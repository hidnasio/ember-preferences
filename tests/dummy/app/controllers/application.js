import Ember from 'ember';
import preference from 'ember-preferences/computed';

export default Ember.Controller.extend({
  title: preference('title', { defaultValue: 'Hello World!' }),

  actions: {
    updateTitle() {
      this.set('title', 'Hey Hey! Bye bye');
    }
  }
});
