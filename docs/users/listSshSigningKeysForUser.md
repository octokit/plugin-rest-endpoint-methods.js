---
name: List SSH signing keys for a user
example: octokit.rest.users.listSshSigningKeysForUser({ username })
route: GET /users/{username}/ssh_signing_keys
scope: users
type: API method
---

# List SSH signing keys for a user

Lists the SSH signing keys for a user. This operation is accessible by anyone.

```js
octokit.rest.users.listSshSigningKeysForUser({
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
    <tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/ssh-signing-keys#list-ssh-signing-keys-for-a-user).
