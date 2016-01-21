import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addNew: function () {
      var uj = this.store.createRecord('ingredient', {
        name: this.newName,
        amount: this.newAmount,
      });
      
      var _this = this;
      uj.save().then(function () {
        _this.model.get('ingredients').pushObject(uj);
        _this.model.save();
        _this.transitionTo('listingredient');
      }).catch(function () {});
    },
    
  

  }
});