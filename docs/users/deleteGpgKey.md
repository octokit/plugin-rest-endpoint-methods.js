---
name: Delete a GPG key for the authenticated user
example: octokit.users.deleteGpgKey({ gpg_key_id })
route: DELETE /user/gpg_keys/{gpg_key_id}
scope: users
type: API method
---

# Delete a GPG key for the authenticated user

**Deprecated:** This method has been renamed to users.deleteGpgKeyForAuthenticated

Removes a GPG key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:gpg_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

```js
octokit.users.deleteGpgKey({
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

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/users/gpg_keys/#delete-a-gpg-key-for-the-authenticated-user).
