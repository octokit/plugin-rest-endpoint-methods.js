---
name: Get details about a codespace export
example: octokit.rest.codespaces.getExportDetailsForAuthenticatedUser({ codespace_name, export_id })
route: GET /user/codespaces/{codespace_name}/exports/{export_id}
scope: codespaces
type: API method
---

# Get details about a codespace export

Gets information about an export of a codespace.

OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.

```js
octokit.rest.codespaces.getExportDetailsForAuthenticatedUser({
  codespace_name,
  export_id,
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
<tr><td>export_id</td><td>yes</td><td>

The ID of the export operation, or `latest`. Currently only `latest` is currently supported.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/codespaces/codespaces#get-details-about-a-codespace-export).
