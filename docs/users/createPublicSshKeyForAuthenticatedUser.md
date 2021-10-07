---
name: Create a public SSH key for the authenticated user
example: octokit.rest.users.createPublicSshKeyForAuthenticatedUser({ key })
route: POST /user/keys
scope: users
type: API method
---

# Create a public SSH key for the authenticated user

Adds a public SSH key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

```js
octokit.rest.users.createPublicSshKeyForAuthenticatedUser({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user).
