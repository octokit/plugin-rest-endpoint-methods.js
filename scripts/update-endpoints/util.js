module.exports = {
  isDeprecated
};

/**
 * we ignore all legacy endpoints except the ones that were recently added
 * @param { Endpoint } endpoint
 */
function isDeprecated(endpoint) {
  const deprecated = endpoint.isLegacy || endpoint.isDeprecated;

  if (!deprecated) {
    return false;
  }

  // if (endpoint.isLegacy && /^\/teams\/\{team_id\}/.test(endpoint.url)) {
  //   return false;
  // }

  if (
    endpoint.method === "DELETE" &&
    endpoint.url === "/reactions/{reaction_id}"
  ) {
    return false;
  }

  return true;
}
