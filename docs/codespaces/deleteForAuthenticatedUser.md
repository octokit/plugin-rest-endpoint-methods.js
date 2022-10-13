---
name: Delete a codespace for the authenticated user
example: octokit.rest.codespaces.deleteForAuthenticatedUser({ codespace_name })
route: DELETE /user/codespaces/{codespace_name}
scope: codespaces
type: API method
---

# Delete a codespace for the authenticated user

Deletes a user's codespace.

You must authenticate using an access token with the `codespace` scope to use this endpoint.

GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.

```js
octokit.rest.codespaces.deleteForAuthenticatedUser({
  codespace_name,
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
    <tr><td>codespace_name</td><td>yes</td><td>

The name of the codespace.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/codespaces#delete-a-codespace-for-the-authenticated-user).
