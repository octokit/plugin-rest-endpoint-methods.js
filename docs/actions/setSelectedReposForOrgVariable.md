---
name: Set selected repositories for an organization variable
example: octokit.rest.actions.setSelectedReposForOrgVariable({ org, name, selected_repository_ids })
route: PUT /orgs/{org}/actions/variables/{name}/repositories
scope: actions
type: API method
---

# Set selected repositories for an organization variable

Replaces all repositories for an organization variable that is available to selected repositories. Organization variables that are available to selected repositories have their `visibility` field set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.

```js
octokit.rest.actions.setSelectedReposForOrgVariable({
  org,
  name,
  selected_repository_ids,
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
<tr><td>selected_repository_ids</td><td>yes</td><td>

The IDs of the repositories that can access the organization variable.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/variables#set-selected-repositories-for-an-organization-variable).
