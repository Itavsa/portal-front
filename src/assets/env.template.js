(function(window) {
  window["env"] = window["env"] || {};
  window["env"]["apiUrl"] = "${API_URL}";
  window["env"]["keycloakRealm"] = '${KEYCLOAK_REALM}';
  window["env"]["keycloakUrl"] = '${KEYCLOAK_URL}';
  window["env"]["keycloakClientId"] = '${KEYCLOAK_CLIENT_ID}';
  window["env"]["defaultProductsPageSize"] = number("${DEFAULT_PRODUCTS_PAGE_SIZE}");
})(this);