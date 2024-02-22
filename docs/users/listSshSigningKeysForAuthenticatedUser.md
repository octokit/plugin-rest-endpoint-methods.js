---
name: List SSH signing keys for the authenticated user
example: octokit.rest.users.listSshSigningKeysForAuthenticatedUser()
route: GET /user/ssh_signing_keys
scope: users
type: API method
---

# List SSH signing keys for the authenticated user

Lists the SSH signing keys for the authenticated user's GitHub account.

OAuth app tokens and personal access tokens (classic) need the `read:ssh_signing_key` scope to use this endpoint.

```js
octokit.rest.users.listSshSigningKeysForAuthenticatedUser();
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/ssh-signing-keys#list-ssh-signing-keys-for-the-authenticated-user).
