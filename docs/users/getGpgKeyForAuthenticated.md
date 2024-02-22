---
name: Get a GPG key for the authenticated user
example: octokit.rest.users.getGpgKeyForAuthenticated({ gpg_key_id })
route: GET /user/gpg_keys/{gpg_key_id}
scope: users
type: API method
---

# Get a GPG key for the authenticated user

**Deprecated:** This method has been renamed to users.getGpgKeyForAuthenticatedUser

View extended details for a single GPG key.

OAuth app tokens and personal access tokens (classic) need the `read:gpg_key` scope to use this endpoint.

```js
octokit.rest.users.getGpgKeyForAuthenticated({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/gpg-keys#get-a-gpg-key-for-the-authenticated-user).
