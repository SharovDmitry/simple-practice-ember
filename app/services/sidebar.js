export default Ember.Service.extend({
  selected_service: null,

  init() {
    this._super(...arguments);
  },

  select(service) {
    this.set('selected_service', service);
  }
});
