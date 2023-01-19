---
name: List codespaces for a user in organization
example: octokit.rest.codespaces.getCodespacesForUserInOrg({ org, username })
route: GET /orgs/{org}/members/{username}/codespaces
scope: codespaces
type: API method
---

# List codespaces for a user in organization

Lists the codespaces that a member of an organization has for repositories in that organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

```js
octokit.rest.codespaces.getCodespacesForUserInOrg({
  org,
  username,
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
    <tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
<tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/codespaces#get-codespaces-for-user-in-org).
