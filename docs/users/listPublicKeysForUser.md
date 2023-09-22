---
name: List public keys for a user
example: octokit.rest.users.listPublicKeysForUser({ username })
route: GET /users/{username}/keys
scope: users
type: API method
---

# List public keys for a user

Lists the _verified_ public SSH keys for a user. This is accessible by anyone.

```js
octokit.rest.users.listPublicKeysForUser({
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

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/keys#list-public-keys-for-a-user).
