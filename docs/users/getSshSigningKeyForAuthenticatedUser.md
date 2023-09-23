---
name: Get an SSH signing key for the authenticated user
example: octokit.rest.users.getSshSigningKeyForAuthenticatedUser({ ssh_signing_key_id })
route: GET /user/ssh_signing_keys/{ssh_signing_key_id}
scope: users
type: API method
---

# Get an SSH signing key for the authenticated user

Gets extended details for an SSH signing key. You must authenticate with Basic Authentication, or you must authenticate with OAuth with at least `read:ssh_signing_key` scope. For more information, see "[Understanding scopes for OAuth apps](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)."

```js
octokit.rest.users.getSshSigningKeyForAuthenticatedUser({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/ssh-signing-keys#get-an-ssh-signing-key-for-the-authenticated-user).
