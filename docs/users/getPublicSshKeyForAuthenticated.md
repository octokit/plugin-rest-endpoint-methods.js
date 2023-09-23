---
name: Get a public SSH key for the authenticated user
example: octokit.rest.users.getPublicSshKeyForAuthenticated({ key_id })
route: GET /user/keys/{key_id}
scope: users
type: API method
---

# Get a public SSH key for the authenticated user

**Deprecated:** This method has been renamed to users.getPublicSshKeyForAuthenticatedUser

View extended details for a single public SSH key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

```js
octokit.rest.users.getPublicSshKeyForAuthenticated({
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

The unique identifier of the key.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/keys#get-a-public-ssh-key-for-the-authenticated-user).
