---
name: Create an organization variable
example: octokit.rest.actions.createOrgVariable({ org, name, value, visibility })
route: POST /orgs/{org}/actions/variables
scope: actions
type: API method
---

# Create an organization variable

Creates an organization variable that you can reference in a GitHub Actions workflow.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.
If the repository is private, you must use an access token with the `repo` scope.
GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.
Authenticated users must have collaborator access to a repository to create, update, or read variables.

```js
octokit.rest.actions.createOrgVariable({
  org,
  name,
  value,
  visibility,
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
<tr><td>value</td><td>yes</td><td>

The value of the variable.

</td></tr>
<tr><td>visibility</td><td>yes</td><td>

The type of repositories in the organization that can access the variable. `selected` means only the repositories specified by `selected_repository_ids` can access the variable.

</td></tr>
<tr><td>selected_repository_ids</td><td>no</td><td>

An array of repository ids that can access the organization variable. You can only provide a list of repository ids when the `visibility` is set to `selected`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/variables#create-an-organization-variable).
