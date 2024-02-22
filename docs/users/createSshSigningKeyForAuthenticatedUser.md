---
name: Create a SSH signing key for the authenticated user
example: octokit.rest.users.createSshSigningKeyForAuthenticatedUser({ key })
route: POST /user/ssh_signing_keys
scope: users
type: API method
---

# Create a SSH signing key for the authenticated user

Creates an SSH signing key for the authenticated user's GitHub account.

OAuth app tokens and personal access tokens (classic) need the `write:ssh_signing_key` scope to use this endpoint.

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
