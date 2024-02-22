---
name: Delete an SSH signing key for the authenticated user
example: octokit.rest.users.deleteSshSigningKeyForAuthenticatedUser({ ssh_signing_key_id })
route: DELETE /user/ssh_signing_keys/{ssh_signing_key_id}
scope: users
type: API method
---

# Delete an SSH signing key for the authenticated user

Deletes an SSH signing key from the authenticated user's GitHub account.

OAuth app tokens and personal access tokens (classic) need the `admin:ssh_signing_key` scope to use this endpoint.

```js
octokit.rest.users.deleteSshSigningKeyForAuthenticatedUser({
  ssh_signing_key_id,
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
    <tr><td>ssh_signing_key_id</td><td>yes</td><td>

The unique identifier of the SSH signing key.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/ssh-signing-keys#delete-an-ssh-signing-key-for-the-authenticated-user).
