---
name: Get a codespace for the authenticated user
example: octokit.rest.codespaces.getForAuthenticatedUser({ codespace_name })
route: GET /user/codespaces/{codespace_name}
scope: codespaces
type: API method
---

# Get a codespace for the authenticated user

Gets information about a user's codespace.

OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.

```js
octokit.rest.codespaces.getForAuthenticatedUser({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/codespaces/codespaces#get-a-codespace-for-the-authenticated-user).
