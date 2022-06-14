---
name: Get a GPG key for the authenticated user
example: octokit.rest.users.getGpgKeyForAuthenticated({ gpg_key_id })
route: GET /user/gpg_keys/{gpg_key_id}
scope: users
type: API method
---

# Get a GPG key for the authenticated user

**Deprecated:** This method has been renamed to users.getGpgKeyForAuthenticatedUser

View extended details for a single GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/users#get-a-gpg-key-for-the-authenticated-user).
