import DS from 'ember-data';

var Recipe = DS.Model.extend({
  name: DS.attr('string'),
  time: DS.attr('string'),
  difficulty: DS.attr('string'),
  ingredients: DS.hasMany('ingredient', {async: true}),
});

export default Recipe;
