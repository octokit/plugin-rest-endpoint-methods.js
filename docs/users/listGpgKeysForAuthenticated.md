---
name: List GPG keys for the authenticated user
example: octokit.rest.users.listGpgKeysForAuthenticated()
route: GET /user/gpg_keys
scope: users
type: API method
---

# List GPG keys for the authenticated user

**Deprecated:** This method has been renamed to users.listGpgKeysForAuthenticatedUser

Lists the current user's GPG keys.

OAuth app tokens and personal access tokens (classic) need the `read:gpg_key` scope to use this endpoint.

```js
octokit.rest.users.listGpgKeysForAuthenticated();
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

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/gpg-keys#list-gpg-keys-for-the-authenticated-user).
