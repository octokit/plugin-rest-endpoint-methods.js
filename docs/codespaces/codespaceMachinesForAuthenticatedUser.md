---
name: List machine types for a codespace
example: octokit.rest.codespaces.codespaceMachinesForAuthenticatedUser({ codespace_name })
route: GET /user/codespaces/{codespace_name}/machines
scope: codespaces
type: API method
---

# List machine types for a codespace

List the machine types a codespace can transition to use.

You must authenticate using an access token with the `codespace` scope to use this endpoint.

GitHub Apps must have read access to the `codespaces_metadata` repository permission to use this endpoint.

```js
octokit.rest.codespaces.codespaceMachinesForAuthenticatedUser({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#list-machine-types-for-a-codespace).
