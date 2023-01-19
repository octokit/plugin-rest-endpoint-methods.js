---
name: Export a codespace for the authenticated user
example: octokit.rest.codespaces.exportForAuthenticatedUser({ codespace_name })
route: POST /user/codespaces/{codespace_name}/exports
scope: codespaces
type: API method
---

# Export a codespace for the authenticated user

Triggers an export of the specified codespace and returns a URL and ID where the status of the export can be monitored.

If changes cannot be pushed to the codespace's repository, they will be pushed to a new or previously-existing fork instead.

You must authenticate using a personal access token with the `codespace` scope to use this endpoint.

GitHub Apps must have write access to the `codespaces_lifecycle_admin` repository permission to use this endpoint.

```js
octokit.rest.codespaces.exportForAuthenticatedUser({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/codespaces/codespaces#export-a-codespace-for-the-authenticated-user).
