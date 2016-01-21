import DS from 'ember-data';

var Ingredient = DS.Model.extend({
  name: DS.attr('string'),
  amount: DS.attr('string'),
});

export default Ingredient;
