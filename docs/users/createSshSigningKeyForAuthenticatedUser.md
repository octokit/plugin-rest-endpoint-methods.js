---
name: Create a SSH signing key for the authenticated user
example: octokit.rest.users.createSshSigningKeyForAuthenticatedUser({ key })
route: POST /user/ssh_signing_keys
scope: users
type: API method
---

# Create a SSH signing key for the authenticated user

Creates an SSH signing key for the authenticated user's GitHub account. You must authenticate with Basic Authentication, or you must authenticate with OAuth with at least `write:ssh_signing_key` scope. For more information, see "[Understanding scopes for OAuth apps](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)."

```js
octokit.rest.users.createSshSigningKeyForAuthenticatedUser({
  key,
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
    <tr><td>title</td><td>no</td><td>

A descriptive name for the new key.

</td></tr>
<tr><td>key</td><td>yes</td><td>

The public SSH key to add to your GitHub account. For more information, see "[Checking for existing SSH keys](https://docs.github.com/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/ssh-signing-keys#create-a-ssh-signing-key-for-the-authenticated-user).
