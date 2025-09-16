---
name: Create a public SSH key for the authenticated user
example: octokit.rest.users.createPublicSshKeyForAuthenticated({ key })
route: POST /user/keys
scope: users
type: API method
---

# Create a public SSH key for the authenticated user

**Deprecated:** This method has been renamed to users.createPublicSshKeyForAuthenticatedUser

Adds a public SSH key to the authenticated user's GitHub account.

OAuth app tokens and personal access tokens (classic) need the `write:public_key` scope to use this endpoint.

```js
octokit.rest.users.createPublicSshKeyForAuthenticated({
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

The public SSH key to add to your GitHub account.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/keys#create-a-public-ssh-key-for-the-authenticated-user).
