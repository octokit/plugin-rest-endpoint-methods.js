---
name: List codespaces for the authenticated user
example: octokit.rest.codespaces.listForAuthenticatedUser()
route: GET /user/codespaces
scope: codespaces
type: API method
---

# List codespaces for the authenticated user

Lists the authenticated user's codespaces.

You must authenticate using an access token with the `codespace` scope to use this endpoint.

GitHub Apps must have read access to the `codespaces` repository permission to use this endpoint.

```js
octokit.rest.codespaces.listForAuthenticatedUser();
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
<tr><td>repository_id</td><td>no</td><td>

ID of the Repository to filter on

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#list-codespaces-for-the-authenticated-user).
