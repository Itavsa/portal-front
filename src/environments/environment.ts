// @ts-nocheck
export const environment = {
  apiUrl:  window["env"]["apiUrl"] || 'http://localhost:8080',
  keycloakRealm:  window["env"]["keycloakRealm"] || 'portal',
  keycloakUrl:  window["env"]["keycloakUrl"] || 'http://localhost:8442',
  keycloakClientId:  window["env"]["keycloakClientId"] || 'portal-frontend',
  defaultProductsPageSize: window["env"]["defaultProductsPageSize"] || 10
};