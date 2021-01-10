import ApplicationAdapter from './application';
import UrlTemplates from "ember-data-url-templates";

export default ApplicationAdapter.extend(UrlTemplates, {
  queryUrlTemplate: '{+host}/{+namespace}/cpt-codes/{serviceId}/offices'
});
