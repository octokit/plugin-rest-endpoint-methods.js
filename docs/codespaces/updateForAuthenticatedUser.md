---
name: Update a codespace for the authenticated user
example: octokit.rest.codespaces.updateForAuthenticatedUser({ codespace_name })
route: PATCH /user/codespaces/{codespace_name}
scope: codespaces
type: API method
---

# Update a codespace for the authenticated user

Updates a codespace owned by the authenticated user. Currently only the codespace's machine type and recent folders can be modified using this endpoint.

If you specify a new machine type it will be applied the next time your codespace is started.

You must authenticate using an access token with the `codespace` scope to use this endpoint.

GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.

```js
octokit.rest.codespaces.updateForAuthenticatedUser({
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
<tr><td>machine</td><td>no</td><td>

A valid machine to transition this codespace to.

</td></tr>
<tr><td>display_name</td><td>no</td><td>

Display name for this codespace

</td></tr>
<tr><td>recent_folders</td><td>no</td><td>

Recently opened folders inside the codespace. It is currently used by the clients to determine the folder path to load the codespace in.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/codespaces/codespaces#update-a-codespace-for-the-authenticated-user).
