import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | anchorize', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test("it anchorizes two-part names", async function(assert) {
    this.set("speaker", "Yehuda Katz");

    await render(hbs`{{anchorize speaker}}`);

    assert.equal(this.element.textContent, "yehuda-katz");
  });

  test("three-part names", async function(assert) {
    this.set("speaker", "Samanta de Barros");

    await render(hbs`{{anchorize speaker}}`);

    assert.equal(this.element.textContent, "samanta-de-barros");
  });

  test("names with periods", async function(assert) {
    this.set("speaker", "James C. Davis");

    await render(hbs`{{anchorize speaker}}`);

    assert.equal(this.element.textContent, "james-c-davis");
  });

  test("names with hyphens", async function(assert) {
    this.set("speaker", "Anne-Greeth van Herwijnen");

    await render(hbs`{{anchorize speaker}}`);

    assert.equal(this.element.textContent, "annegreeth-van-herwijnen");
  });
});
