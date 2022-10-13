---
name: Delete a public SSH key for the authenticated user
example: octokit.rest.users.deletePublicSshKeyForAuthenticatedUser({ key_id })
route: DELETE /user/keys/{key_id}
scope: users
type: API method
---

# Delete a public SSH key for the authenticated user

Removes a public SSH key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

```js
octokit.rest.users.deletePublicSshKeyForAuthenticatedUser({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user).
