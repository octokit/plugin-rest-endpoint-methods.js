---
name: Delete an organization variable
example: octokit.rest.actions.deleteOrgVariable({ org, name })
route: DELETE /orgs/{org}/actions/variables/{name}
scope: actions
type: API method
---

# Delete an organization variable

Deletes an organization variable using the variable name.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.
GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.

```js
octokit.rest.actions.deleteOrgVariable({
  org,
  name,
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>name</td><td>yes</td><td>

The name of the variable.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/variables#delete-an-organization-variable).
