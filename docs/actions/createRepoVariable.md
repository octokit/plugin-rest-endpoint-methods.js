---
name: Create a repository variable
example: octokit.rest.actions.createRepoVariable({ owner, repo, name, value })
route: POST /repos/{owner}/{repo}/actions/variables
scope: actions
type: API method
---

# Create a repository variable

Creates a repository variable that you can reference in a GitHub Actions workflow.
You must authenticate using an access token with the `repo` scope to use this endpoint.
GitHub Apps must have the `actions_variables:write` repository permission to use this endpoint.

```js
octokit.rest.actions.createRepoVariable({
  owner,
  repo,
  name,
  value,
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
    <tr><td>owner</td><td>yes</td><td>

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>name</td><td>yes</td><td>

The name of the variable.

</td></tr>
<tr><td>value</td><td>yes</td><td>

The value of the variable.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/variables#create-a-repository-variable).
