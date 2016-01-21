import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
      deleteRecipe: function(id) {
        this.store.find('recipe', id).then(function(i) {
          i.destroyRecord();
        });
      }
  }
});