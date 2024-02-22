---
name: Update a repository variable
example: octokit.rest.actions.updateRepoVariable({ owner, repo })
route: PATCH /repos/{owner}/{repo}/actions/variables/{name}
scope: actions
type: API method
---

# Update a repository variable

Updates a repository variable that you can reference in a GitHub Actions workflow.

Authenticated users must have collaborator access to a repository to create, update, or read variables.

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```js
octokit.rest.actions.updateRepoVariable({
  owner,
  repo,
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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>name</td><td>no</td><td>

The name of the variable.

</td></tr>
<tr><td>value</td><td>no</td><td>

The value of the variable.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/variables#update-a-repository-variable).
