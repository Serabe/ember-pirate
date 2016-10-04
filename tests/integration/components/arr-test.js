import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('helper:arr', 'Integration | Component | arr', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{#with (arr "one" "two") as |a|}}{{a.firstObject}} {{a.lastObject}} {{/with}}`);

  assert.equal(this.$().text().trim(), 'one two');
});

test('it renders when no arguments are passed', function(assert) {
  this.render(hbs`{{#with (hash array=(arr)) as |a|}}{{a.array.length}}{{/with}}`);

  assert.equal(this.$().text().trim(), '0');
});
