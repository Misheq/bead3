import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addNew: function () {
      var uj = this.store.createRecord('recipe', {
        name: this.newName,
        time: this.newTime,
        difficulty: this.newDifficulty
      });
      var _this = this;
      uj.save().then(function () {
        _this.transitionTo('listrecipe');
      });
    },
  }
});