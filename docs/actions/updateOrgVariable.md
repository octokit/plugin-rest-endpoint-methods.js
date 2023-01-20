---
name: Update an organization variable
example: octokit.rest.actions.updateOrgVariable({ org })
route: PATCH /orgs/{org}/actions/variables/{name}
scope: actions
type: API method
---

# Update an organization variable

Updates an organization variable that you can reference in a GitHub Actions workflow.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.
GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.

```js
octokit.rest.actions.updateOrgVariable({
  org,
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
<tr><td>name</td><td>no</td><td>

The name of the variable.

</td></tr>
<tr><td>value</td><td>no</td><td>

The value of the variable.

</td></tr>
<tr><td>visibility</td><td>no</td><td>

The type of repositories in the organization that can access the variable. `selected` means only the repositories specified by `selected_repository_ids` can access the variable.

</td></tr>
<tr><td>selected_repository_ids</td><td>no</td><td>

An array of repository ids that can access the organization variable. You can only provide a list of repository ids when the `visibility` is set to `selected`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/variables#update-an-organization-variable).
