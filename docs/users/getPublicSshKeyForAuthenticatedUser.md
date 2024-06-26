---
name: Get a public SSH key for the authenticated user
example: octokit.rest.users.getPublicSshKeyForAuthenticatedUser({ key_id })
route: GET /user/keys/{key_id}
scope: users
type: API method
---

# Get a public SSH key for the authenticated user

View extended details for a single public SSH key.

OAuth app tokens and personal access tokens (classic) need the `read:public_key` scope to use this endpoint.

```js
octokit.rest.users.getPublicSshKeyForAuthenticatedUser({
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
