---
name: Set status check contexts
example: octokit.repos.setStatusCheckContexts({ owner, repo, branch, contexts })
route: PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts
scope: repos
type: API method
---

# Set status check contexts

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

```js
octokit.repos.setStatusCheckContexts({
  owner,
  repo,
  branch,
  contexts,
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>branch</td><td>yes</td><td>

The name of the branch.

</td></tr>
<tr><td>contexts</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#set-status-check-contexts).
