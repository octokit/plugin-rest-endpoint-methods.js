---
name: List GPG keys for a user
example: octokit.rest.users.listGpgKeysForUser({ username })
route: GET /users/{username}/gpg_keys
scope: users
type: API method
---

# List GPG keys for a user

Lists the GPG keys for a user. This information is accessible by anyone.

```js
octokit.rest.users.listGpgKeysForUser({
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

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/users#list-gpg-keys-for-a-user).
