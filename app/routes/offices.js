import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class OfficesRoute extends Route {
  @service store;

  async model(params) {
    return this.store.query('office', { serviceId: params.service_id });
  }
}
