---
name: Get a public SSH key for the authenticated user
example: octokit.users.getPublicSshKeyForAuthenticated({ key_id })
route: GET /user/keys/{key_id}
scope: users
type: API method
---

# Get a public SSH key for the authenticated user

View extended details for a single public SSH key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

```js
octokit.users.getPublicSshKeyForAuthenticated({
  key_id,
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
    <tr><td>key_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/users/keys/#get-a-public-ssh-key-for-the-authenticated-user).
