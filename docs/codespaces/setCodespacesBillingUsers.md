---
name: Add users to Codespaces billing for an organization
example: octokit.rest.codespaces.setCodespacesBillingUsers({ org, selected_usernames })
route: POST /orgs/{org}/codespaces/billing/selected_users
scope: codespaces
type: API method
---

# Add users to Codespaces billing for an organization

Codespaces for the specified users will be billed to the organization.
To use this endpoint, the billing settings for the organization must be set to `selected_members`. For information on how to change this setting please see [these docs].(https://docs.github.com/rest/codespaces/organizations#manage-access-control-for-organization-codespaces) You must authenticate using an access token with the `admin:org` scope to use this endpoint.

```js
octokit.rest.codespaces.setCodespacesBillingUsers({
  org,
  selected_usernames,
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
<tr><td>selected_usernames</td><td>yes</td><td>

The usernames of the organization members whose codespaces be billed to the organization.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/codespaces#set-codespaces-billing-users).
