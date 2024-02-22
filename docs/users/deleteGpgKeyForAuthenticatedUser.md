---
name: Delete a GPG key for the authenticated user
example: octokit.rest.users.deleteGpgKeyForAuthenticatedUser({ gpg_key_id })
route: DELETE /user/gpg_keys/{gpg_key_id}
scope: users
type: API method
---

# Delete a GPG key for the authenticated user

Removes a GPG key from the authenticated user's GitHub account.

OAuth app tokens and personal access tokens (classic) need the `admin:gpg_key` scope to use this endpoint.

```js
octokit.rest.users.deleteGpgKeyForAuthenticatedUser({
  gpg_key_id,
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
    <tr><td>gpg_key_id</td><td>yes</td><td>

The unique identifier of the GPG key.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/gpg-keys#delete-a-gpg-key-for-the-authenticated-user).
