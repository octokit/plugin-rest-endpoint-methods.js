---
name: List requests to access organization resources with fine-grained personal access tokens
example: octokit.rest.orgs.listPatGrantRequests({ org })
route: GET /organizations/{org}/personal-access-token-requests
scope: orgs
type: API method
---

# List requests to access organization resources with fine-grained personal access tokens

Lists requests from organization members to access organization resources with a fine-grained personal access token. Only GitHub Apps can call this API,
using the `organization_personal_access_token_requests: read` permission.

**Note**: Fine-grained PATs are in public beta. Related APIs, events, and functionality are subject to change.

```js
octokit.rest.orgs.listPatGrantRequests({
  org,
});
```

## Parameters

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>required</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
<tr><td>sort</td><td>no</td><td>

The property by which to sort the results.

</td></tr>
<tr><td>direction</td><td>no</td><td>

The direction to sort the results by.

</td></tr>
<tr><td>owner</td><td>no</td><td>

A list of owner usernames to use to filter the results.

</td></tr>
<tr><td>repository</td><td>no</td><td>

The name of the repository to use to filter the results.

</td></tr>
<tr><td>permission</td><td>no</td><td>

The permission to use to filter the results.

</td></tr>
<tr><td>last_used_before</td><td>no</td><td>

Only show fine-grained personal access tokens used before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>last_used_after</td><td>no</td><td>

Only show fine-grained personal access tokens used after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/orgs#list-requests-to-access-organization-resources-with-fine-grained-personal-access-tokens).
