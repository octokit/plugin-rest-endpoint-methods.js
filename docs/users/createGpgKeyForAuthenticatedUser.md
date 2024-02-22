---
name: Create a GPG key for the authenticated user
example: octokit.rest.users.createGpgKeyForAuthenticatedUser({ armored_public_key })
route: POST /user/gpg_keys
scope: users
type: API method
---

# Create a GPG key for the authenticated user

Adds a GPG key to the authenticated user's GitHub account.

OAuth app tokens and personal access tokens (classic) need the `write:gpg_key` scope to use this endpoint.

```js
octokit.rest.users.createGpgKeyForAuthenticatedUser({
  armored_public_key,
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
    <tr><td>name</td><td>no</td><td>

A descriptive name for the new key.

</td></tr>
<tr><td>armored_public_key</td><td>yes</td><td>

A GPG key in ASCII-armored format.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/gpg-keys#create-a-gpg-key-for-the-authenticated-user).
