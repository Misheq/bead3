import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hallgato-form-2', 'Integration | Component | hallgato form 2', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hallgato-form-2}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hallgato-form-2}}
      template block text
    {{/hallgato-form-2}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
