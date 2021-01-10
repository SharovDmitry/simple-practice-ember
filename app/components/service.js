import Component from '@ember/component';
import { action } from '@ember/object';

export default Component.extend({
  tagName: '',
  sidebar: Ember.inject.service('sidebar'),

  @action
  select(service) {
    this.get('sidebar').select(service);
  }
});
